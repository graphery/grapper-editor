import {
  Base,
  define,
  RENDER,
  CONTEXT
}                     from '../core/index.js'
import Model          from "./model.js";
import EditorProvider from './view.codemirror.js';
// import EditorProvider from './view.simple.js';
import saveFile       from "./savefile.js";
import style          from './style.js'
import html           from './html.js'
import '../helpers/dark.observer.js';
import { checkTheme } from "../helpers/dark.observer.js";
import diagnostic     from "./diagnostic.js";

const wait       = (t) => new Promise(r => setTimeout(r, t));
const THEME      = Symbol();
const MODE       = Symbol();
const HIGHLIGHT  = Symbol();
const DIAGNOSTIC = Symbol();
const READONLY   = 'readonly';
const SHOW       = 'show';
const EDIT       = 'edit';
const str2lines  = (str) => {
  if (typeof str !== 'string' || !str) {
    return [];
  }
  const lines    = [];
  const sections = str.split(';');
  for (let section of sections) {
    const parts = section.split('-');
    if (parts.length === 1) {
      lines.push(Number.parseInt(parts[0]));
    } else {
      for (let i = Number.parseInt(parts[0]); i <= Number.parseInt(parts[1]); i++) {
        lines.push(i);
      }
    }
  }
  return lines;
}

class GraphaneEditor extends Base {

  #originalCode = '';
  #model;
  #editorProvider;
  #modeEditButton;
  #modeShowButton;
  #reloadButton;
  #rearrangeButton;

  async [RENDER] () {

    await wait(100);

    let ref         = null;
    let isComposer  = false;

    // HREF
    if (this.href) {
      ref = this.getRootNode().querySelector(this.href);
      if (!ref) {
        console.error(`element ${ this.href } not found.`)
        this.shadowRoot.innerHTML = ``;
        return;
      }
      if (ref.tagName.toLowerCase() === 'iframe') {
        if (ref.contentDocument?.readyState === 'complete' &&
            ref.contentDocument.location.href !== 'about:blank') {
          ref = ref.contentDocument?.body;
        } else {
          ref = await (new Promise(resolve => {
            ref.addEventListener('load', () => {
              resolve(ref.contentDocument?.body);
            });
          }));
        }
        if (!ref) {
          console.error(`iframe ${ this.href } not accessible.`)
          this.shadowRoot.innerHTML = ``;
          return;
        }
      }
      isComposer     = ref.tagName.toLowerCase() === 'grapper-view';
    }

    // Light DOM source as comment
    const childNodes = [...this.childNodes].filter(node => node.nodeType === 8 || (
      node.nodeType === 1 && node.tagName.toLowerCase() === 'textarea'));
    if (childNodes.length && ref) {
      ref.innerHTML  = childNodes[0].textContent;
    }

    // Model
    this.#originalCode = ref ?
      (isComposer ?
        ref.outerHTML :
        ref.innerHTML) :
      (childNodes.length ?
        childNodes[0].textContent :
        '');
    this.#model        = new Model(ref?.getRootNode());
    await this.#model.load(this.#originalCode, this.options, this.keepFormat);
    this.#model.subscribe((content) => {
      if (isComposer) {
        ref.innerHTML = content.inner;
        const current = ref.getAttributeNames();
        const next    = content.el.getAttributeNames();
        current.forEach(attr => {
          if (!content.el.hasAttribute(attr)) {
            ref.removeAttribute(attr);
          }
        });
        next.forEach(attr => {
          ref.setAttribute(attr, content.el.getAttribute(attr));
        });
      } else if (ref) {
        ref.innerHTML  = content.code;
        this[DIAGNOSTIC](ref);
      }
    });

    // View
    this.shadowRoot.innerHTML = `
      ${ style }
      ${ html }
    `;

    this.shadowRoot.querySelector('#title').innerHTML = this.title || '';
    this.#editorProvider          = this.shadowRoot.querySelector('g-editor-provider');
    this.#editorProvider.code     = this.#model.code;
    this.#editorProvider.readonly = this[CONTEXT].disabled || this[CONTEXT].mode !== 'edit';
    this.#editorProvider.addEventListener('update', (evt) => {
      this.#model.code = evt.detail.code;
    });
    this.#editorProvider.theme = this[CONTEXT].theme;
    document.documentElement.addEventListener('themeChanged', (e) => {
      this.setAttribute('theme', e.detail.theme);
    });
    checkTheme();

    this.#modeEditButton  = this.shadowRoot.querySelector('#modeEdit');
    this.#modeShowButton  = this.shadowRoot.querySelector('#modeShow');
    this.#reloadButton    = this.shadowRoot.querySelector('#reload');
    this.#rearrangeButton = this.shadowRoot.querySelector('#rearrange');

    this.#modeEditButton.addEventListener('click', () => this.mode = EDIT);
    this.#modeShowButton.addEventListener('click', () => this.mode = SHOW);
    this.#reloadButton.addEventListener('click', () => this.discardChanges());
    this.#rearrangeButton.addEventListener('click', () => this.rearrange());
    this.shadowRoot.querySelector('#copy').addEventListener('click', () => this.toClipboard());
    this.shadowRoot.querySelector('#save').addEventListener('click', () => this.toDisk());

    this[MODE]();

    this[HIGHLIGHT]();

    this[DIAGNOSTIC](ref);

  }

  async toClipboard () {
    const contentEditor = this.#model.code;
    if (!contentEditor) {
      return;
    }
    try {
      await navigator.clipboard.writeText(contentEditor);
      const textCopy = this.shadowRoot.querySelector('#text-copy');
      if (textCopy) {
        textCopy.style.display = "inline"
        setTimeout(() => {
          textCopy.style.display = "none"
        }, "1500");
      }
    } catch (err) {
      console.error('Error copying to clipboard', err);
    }
  }

  async toDisk () {
    const contentEditor = this.#model.code;
    if (!contentEditor) {
      return;
    }
    return saveFile(contentEditor);
  }

  async discardChanges () {
    if (this.isChanged) {
      await this.#model.load(this.#originalCode, this.options, this.keepFormat);
      this.#editorProvider.code = this.#model.code;
    }
  }

  async rearrange () {
    await this.#model.load(this.#model.code);
    this.#editorProvider.code = this.#model.code;
  }

  [HIGHLIGHT] (lines) {

    if (this.#editorProvider.linesHighlight) {
      lines = lines || this.linesHighlight;
      this.#editorProvider.linesHighlight(lines)
    }
  }

  [THEME] () {
    if (this.#editorProvider) {
      this.#editorProvider.theme = this.theme;
    }
  }

  [MODE] () {
    if (!this.#editorProvider) {
      return;
    }
    switch (this.mode.toLowerCase()) {
      case READONLY:
        this.setAttribute('mode', READONLY);
        this.#modeEditButton.classList.add('hidden');
        this.#modeShowButton.classList.add('hidden');
        this.#reloadButton.classList.add('hidden');
        this.#rearrangeButton.classList.add('hidden');
        this.#editorProvider.editable = false;
        break;
      case SHOW:
        this.#modeEditButton.classList.remove('hidden');
        this.#modeShowButton.classList.add('hidden');
        this.#reloadButton.classList.add('hidden');
        this.#rearrangeButton.classList.add('hidden');
        this.#editorProvider.editable = false;
        break;
      case EDIT:
        this.#modeEditButton.classList.add('hidden');
        this.#modeShowButton.classList.remove('hidden');
        this.#reloadButton.classList.remove('hidden');
        this.#rearrangeButton.classList.remove('hidden');
        this.#editorProvider.editable = true;
    }
  }

  [DIAGNOSTIC] (ref) {
    const composer = ref.tagName.toLowerCase() === 'grapper-view' ? ref : ref.querySelector('grapper-view');
    if (composer) {
      diagnostic(composer, this.#model, (diagnostic) => {
        this.dispatchEvent(new CustomEvent('diagnostic', {detail : diagnostic}));
        if (this.#editorProvider.diagnostic) {
          this.#editorProvider.diagnostic(diagnostic);
        }
      });
    }
  }

  resetChange () {
    this.#originalCode = this.#model.code;
  }

  update(v) {
    this.#model.load(v, this.options, this.keepFormat).then(() => {
      this.#editorProvider.code = this.#model.code;
    });
  }

  set code (v) {
    this.#originalCode = v;
    this.update(v);
  }

  get code () {
    return this.#model.code;
  }

  get isChanged () {
    return this.#originalCode !== this.#model.code;
  }

}

define(EditorProvider)
  .tag('g-editor-provider')

define(GraphaneEditor)
  .attr({name : 'title', type : 'string', value : '', posUpdate : RENDER})
  .attr({name : 'href', type : 'string', value : '', posUpdate : RENDER})
  .attr({name : 'keep-format', type : 'boolean', value : false, posUpdate : RENDER})
  .attr({name : 'options', type : 'object', value : {}, posUpdate : RENDER})
  .attr({name : 'theme', type : 'string', value : 'light', posUpdate : THEME})
  .attr({name : 'mode', type : 'string', value : SHOW, posUpdate : MODE})
  .attr({
    name    : 'lines-highlight', get () {
      return str2lines(this[CONTEXT].linesHighlight)
    }, type : 'string', value : '', postUpdate : HIGHLIGHT
  })
  .tag('g-editor');
