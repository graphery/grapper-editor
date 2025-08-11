import {
  Base,
  FIRE_EVENT
}                 from '../core/index.js';
import { Editor } from '../cm/codemirror.js';

function debounce (fn) {
  let n = 0;
  return (...args) => {
    clearTimeout(n);
    n = setTimeout(() => {
      fn(...args);
    }, 400);
  };
}

export default class ViewEditor extends Base {

  #editor;
  #container;
  #code = '';

  constructor () {
    super();
    this.shadowRoot.innerHTML = `
      <style>
        #container {
          width:100%; 
          height: 100%;
        }
        #container .cm-editor {
          height: 100%
        }
        #container.mode-show .cm-editor .cm-gutters {
          display: none;
        } 
        #container.mode-show .cm-editor .cm-activeLine {
          background-color: transparent;
        }
      </style>
      <div id="container" ></div>
    `;

    this.#container = this.shadowRoot.querySelector('#container');

    this.#editor = Editor('', this.#container, debounce((change) => {
      this.#code = this.#editor.state.doc.toString();
      this[FIRE_EVENT]('update', {code : this.#code});
    }));

  }

  get code () {
    return this.#code;
  }

  set code (v) {
    if (this.#code !== v) {
      this.#code = v;
      this.#editor.dispatch({
        changes : {from : 0, to : this.#editor.state.doc.length, insert : this.#code}
      });
    }
  }

  set theme (newTheme) {
    this.#editor.theme = newTheme;
  }

  get theme () {
    return this.#editor.theme;
  }

  set editable (v) {
    this.#editor.editable = v;
    if (v) {
      this.#container.classList.remove('mode-show');
    } else {
      this.#container.classList.add('mode-show');
    }
  }

  get editable () {
    return this.#editor.editable;
  }

  linesHighlight(lines) {
    this.#editor.linesHighlight(lines);
  }

  diagnostic(lines) {
    this.#editor.diagnostic(lines);
  }


}
