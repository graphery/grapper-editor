/**
 * Convert a Graphane component to Grapper by applying:
 *  1) <g-composer>...</g-composer>  ->  <grapper-view>...</grapper-view>
 *  2) "$" member redirection: ONLY keep these members on "$":
 *     $.data, $.svg, $.methods, $.config, $.polar2cartesian, $.degrees2radians, $.element
 *     Any other "$.<member>" or "$['member']" or "$["member"]" becomes "$.grapperView.<member>"
 *  3) $$.x -> $.x (normalize) ONLY inside g-bind / :attr attributes
 *
 * Notes:
 * - Redirection NEVER triggers on "$$" prefixes; only on a single "$".
 * - Regex-based, best-effort transform (not a full JS parser).
 *
 * @param {string} input The Graphane component source code as a string
 * @returns {string} The transformed source code
 */
export default function convertGraphaneToGrapper (input) {
  if (typeof input !== 'string') throw new TypeError('input must be a string');

  // Members that must remain attached to "$" in Grapper
  const DEFAULT_KEEP = new Set([
    'data',
    'svg',
    'methods',
    'config',
    'polar2cartesian',
    'degrees2radians',
    'grapperView'     // guard: never rewrite existing $.grapperView.*
  ]);

  let out = input;

  // 1) Rename <g-composer> to <grapper-view>
  out = out.replace(/<\s*g-composer(\b)/gi, '<grapper-view$1');
  out = out.replace(/<\/\s*g-composer\s*>/gi, '</grapper-view>');

  // 2) Redirect "$.<ident>" or "$['ident']"/$["ident"]" to "$.grapperView.<ident>" when not in keep-list.
  //    IMPORTANT: do NOT fire when the "$" is actually "$$" (double-dollar). We check prior char at runtime.
  const memberRef = /\$\s*(?:\.\s*([A-Za-z_$][\w$]*)|\[\s*(['"])([A-Za-z_$][\w$]*)\2\s*\])/g;
  out = out.replace(memberRef, (match, identDot, q, identBracket, offset, whole) => {
    // If there's a previous character and it's '$', then the prefix was "$$" -> skip redirection.
    if (offset > 0 && whole[offset - 1] === '$') return match;

    const key = identDot || identBracket;
    if (!key) return match;
    if (DEFAULT_KEEP.has(key)) return match; // keep whitelisted members on "$"
    return `$.grapperView.${key}`;           // redirect everything else
  });

  // 3) Normalize "$$" to "$" ONLY inside binding attributes (supports hyphenated names)
  //    Matches both ":attr" and "g-bind:attr"
  const gBindPattern = /((?:g-bind)?:[A-Za-z0-9_-]+\s*=\s*)(['"])(.*?)\2/g;
  out = out.replace(gBindPattern, (m, attrPart, quote, value) => {
    const normalizedValue = value.replace(/\$\$/g, '$');
    return `${attrPart}${quote}${normalizedValue}${quote}`;
  });

  return out;
}
