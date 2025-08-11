import * as prettier        from "../../node_modules/prettier/standalone.mjs";
import prettierPluginBabel  from "../../node_modules/prettier/plugins/babel.mjs";
import prettierPluginEstree from "../../node_modules/prettier/plugins/estree.mjs";
import prettierPluginHtml   from "../../node_modules/prettier/plugins/html.mjs";

const getAttributes = (el) => [...el.attributes].map(a => `${ a.name }="${ a.value }"`).join(' ');

const normalize = (code) => {
  const textarea     = document.createElement('textarea');
  textarea.innerHTML = code;
  return textarea.value;
}

const formatJSON = (content) => prettier.format(
  content,
  {
    parser : "json5", plugins : [prettierPluginBabel, prettierPluginEstree]
  }
).catch(err => content);

const formatJS = (content) => prettier.format(
  normalize(content),
  {
    parser : "babel", plugins : [prettierPluginBabel, prettierPluginEstree]
  }
).catch(err => content);

const formatHTML = async (content) => {
  const result = normalize(await prettier.format(
    content,
    {
      parser : "html", plugins : [prettierPluginHtml], htmlWhitespaceSensitivity : 'ignore'
    }
  ).catch(err => content));
  return result.endsWith('\n') ? result.slice(0, -1) : result;
}

const formatComposer = async (composer, options = {}) => {

  const script = options.gScript || options['g-script'] ? `g-script` : 'script';

  let result = `<grapper-view ${ getAttributes(composer) }>\n`;

  const template = composer.querySelector('template');
  if (template) {
    result += `<template ${ getAttributes(template) }>\n`;
    const svg = template.content.querySelector('svg');
    if (svg) {
      result += svg.outerHTML;
    }
    result += '</template>\n';
  } else {
    const svg = composer.querySelector('svg');
    if (svg) {
      result += `<template>\n${ svg.outerHTML }</template>\n`;
    }
  }

  const data = composer.querySelector('script[type=data],g-script[type=data]');
  if (data) {
    result += `<${ script } ${ getAttributes(data) }>\n${ await formatJSON(data.innerHTML) }\n</${ script }>`;
  }

  const methods = composer.querySelector('script[type=methods],g-script[type=methods]');
  if (methods) {
    result += `<${ script } ${ getAttributes(methods) }>\n${ await formatJS(methods.innerHTML) }\n</${ script }>\n`;
  }

  const config = composer.querySelector('script[type=config],g-script[type=config]');
  if (config) {
    result += `<${ script } ${ getAttributes(config) }>\n${ await formatJSON(config.innerHTML) }\n</${ script }>\n`;
  }

  const plugins = composer.querySelectorAll('script[type=plugin],g-script[type=plugin]');
  plugins.forEach(plugin => {
    result += `<${ script } ${ getAttributes(plugin) }></${ script }>\n`;
  });

  result += `</grapper-view>`;
  return result;
}

const format = async (code, options) => {

  const fragment     = document.createElement('div');
  fragment.innerHTML = code;

  for (let child of [...fragment.children]) {
    if (child.tagName.toLowerCase() === 'grapper-view') {
      child.outerHTML = await formatComposer(child, options);
    }
  }
  return formatHTML(fragment.innerHTML);
}

export default format;