const DIAGNOSTIC = Symbol();

export default function diagnostic (el, model, callback) {
  if (!el || el[DIAGNOSTIC]) {
    return;
  }
  el[DIAGNOSTIC] = true;
  const run      = () => callback(search(model.code, el.errors));
  el.addEventListener('render', run);
  el.addEventListener('error', run);
  if (el.errors?.length > 0) {
    run();
  }
}

const escapeRegExp        = (text) => text.replace(/[-[\]{}()*+?.,\\^$|#]/g, '\\$&');
const getLineNumber       = (text, index) => text.substring(0, index).split('\n').length;


function search (code, errors) {
  errors = Object.values(errors.reduce((a, r) => {
    a[r.toString()] = r;
    return a;
  },{}));
  const result = [];
  let severity = 'error';
  for (let error of errors) {
    if (typeof error === 'string') {
      continue;
    }
    const instructions = [...code.matchAll(escapeRegExp(String(error.code))
      .replace(/\s+/g, '\\s+')
      .replace(/=/g, '\\s*=\\s*')
      .replace(/>/g, '\\s*>\\s*')
    )];
    let message = error.message;
    if (instructions.length > 1) {
      severity = 'warning';
      message += ' [Sorry, the exact error line cannot be determined, please review the warning code sections"]'
    }
    for (let instruction of (instructions.length ? instructions : [{index : 0, 0 : code}])) {
      const index  = instruction?.index || 0;
      const source = instruction[0] || code;
      if (typeof error.scope === 'string') {
        result.push({
          line    : getLineNumber(code, index),
          from    : index,
          to      : index + instructions[0][0].length,
          message,
          severity
        });
        continue;
      }
      const directive  = error.scope.directive === 'g-bind' ?
        `(g-bind)?:${ error.scope.argument }` :
        error.scope.directive === 'g-on' ? `(g-on:|@)${ error.scope.argument }` :
          error.scope.directive;
      const expression = escapeRegExp(error.scope.expression);
      const search     = new RegExp(`${directive}\\s*=\\s*["']${expression}["']`);
      const location   = source.match(search);
      if (location) {
        result.push({
          line    : getLineNumber(code, index + location.index),
          from    : index + location.index,
          to      : index + location.index + location[0].length,
          message,
          severity
        });
      }
    }
  }
  return result;
}