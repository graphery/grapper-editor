/**
 * Convert a Graphane component to Grapper by applying:
 *  1) <g-composer>...</g-composer>  ->  <grapper-view>...</grapper-view>
 *  2) Redirect "$.<ident>" or "$['ident']"/$["ident"]" to "$.grapperView.<ident>" IF not in keep-list
 *     - NEVER redirect when the prefix was "$$"
 *  2) "$$" -> "$" ONLY inside binding attributes (:attr / g-bind:attr), supporting hyphenated names and multiline values
 *
 * Notes:
 * - Keep on "$": data, svg, methods, config, polar2cartesian, degrees2radians, element
 * - Regex-based transform (not a full JS/HTML parser), conservative and order-sensitive.
 *
 * @param {string} input The Graphane component source code as a string
 * @returns {string} The transformed source code
 */
export default function convertGraphaneToGrapper (input) {
  if (typeof input !== 'string') throw new TypeError('input must be a string');

  // Members that must remain attached to "$" in Grapper
  const KEEP = new Set([
    'data',
    'svg',
    'methods',
    'config',
    'polar2cartesian',
    'degrees2radians',
    'grapperView'   // guard
  ]);

  let out = input;

  // (1) Rename <g-composer>...</g-composer> to <grapper-view>...</grapper-view>
  out = out.replace(/<\s*g-composer(\b)/gi, '<grapper-view$1');
  out = out.replace(/<\/\s*g-composer\s*>/gi, '</grapper-view>');

  // (2) Redirect "$.<ident>" or "$['ident']"/$["ident"]" to "$.grapperView.<ident>" when not in keep-list.
  //     IMPORTANT: do NOT trigger when the "$" was actually "$$" (check previous char).
  const memberRef = /\$\s*(?:\.\s*([A-Za-z_$][\w$]*)|\[\s*(['"])([A-Za-z_$][\w$]*)\2\s*\])/g;
  out = out.replace(memberRef, (match, identDot, q, identBracket, offset, whole) => {
    // If previous char is '$', the original prefix was "$$" -> skip redirection.
    if (offset > 0 && whole[offset - 1] === '$') return match;

    const key = identDot || identBracket;
    if (!key) return match;
    if (KEEP.has(key)) return match;     // keep whitelisted members on "$"
    return `$.grapperView.${key}`;       // redirect everything else
  });

  // (3) Normalize "$$" to "$" ONLY inside binding attributes (supports hyphenated names & multiline)
  //     Matches both ":attr" and "g-bind:attr", value in single or double quotes, non-greedy across lines.
  const gBindPattern = /((?:g-bind)?:[A-Za-z0-9_-]+\s*=\s*)(['"])([\s\S]*?)\2/g;
  out = out.replace(gBindPattern, (m, attrPart, quote, value) => {
    const normalized = value.replace(/\$\$/g, '$');
    return `${attrPart}${quote}${normalized}${quote}`;
  });

  return out;
}
