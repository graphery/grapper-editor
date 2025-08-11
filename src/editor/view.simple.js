import {
  Base,
  FIRE_EVENT
} from '../core/index.js';

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

  #textarea;

  constructor () {
    super();
    this.shadowRoot.innerHTML = `
        <textarea 
          id="code" 
          style="width: calc(100% - 5px); height: fit-content(100%); resize: none;" 
          autocomplete="off" 
          autocorrect="off" 
          autocapitalize="off" 
          spellcheck="false"></textarea>
    `;

    this.#textarea = this.shadowRoot.querySelector('#code');
    this.#textarea.addEventListener('input', debounce(() => {
      this.#textarea.style.height = (this.#textarea.scrollHeight) + "px";
      this[FIRE_EVENT]('update', {
        code : this.#textarea.value
      })
    }));
  }

  get code () {
    return this.#textarea.value;
  }

  set code (v) {
    this.#textarea.innerHTML = v;
    this.#textarea.style.height = (this.#textarea.scrollHeight) + "px";
  }

  set theme (newTheme) {
    this.#textarea.style.color           = newTheme === 'dark' ? '#f8f8f2' : '#4d4d4c';
    this.#textarea.style.backgroundColor = newTheme === 'dark' ? '#2d2f3f' : '#fff';
  }

  get theme () {
    return this.#textarea.style.color === '#fff' ? 'dark' : 'light';
  }

  set editable (v) {
    this.#textarea.disabled = !v;
  }

  get editable () {
    return this.#textarea.disabled;
  }

}
