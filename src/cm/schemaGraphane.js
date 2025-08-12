export default function graphane (schemaSVG) {
  for (let tag in schemaSVG) {
    const attrs = Object.assign({}, schemaSVG[tag].attrs || {});
    for (let attr in attrs) {
      if (attr.substring(0, 2) === 'on') {
        const event              = attr.substring(2)
        attrs[`g-on:${ event }`] = attrs[attr];
        attrs[`@${ event }`]     = attrs[attr];
      } else {
        attrs[`g-bind:${ attr }`] = attrs[attr];
        attrs[`:${ attr }`]       = attrs[attr];
      }
    }
    if (tag === 'svg') {
      attrs['g-on:init'] = '';
      attrs['@init'] = '';
    }
    if (tag === 'defs') {
      attrs['g-for'] = '';
    }
    attrs['g-if'] = '';
    schemaSVG[tag].attrs = attrs;
  }
  return schemaSVG;
}