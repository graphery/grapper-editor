import format from './format.js';

const getContent    = (doc, code, selector) => {
  const fragment     = doc.createElement('div');
  fragment.innerHTML = code;
  const result       = fragment.querySelector(selector);
  if (result) {
    return {
      el    : result,
      code,
      outer : result.outerHTML,
      inner : result.innerHTML
    };
  }
  return {
    code
  };
};

export class EditorModel {
  #doc;
  #code         = '';
  #subscribers  = {};
  #subscriberId = 0;

  #change () {
    for (let id in this.#subscribers) {
      const content = getContent(this.#doc, this.#code, 'grapper-view');
      setTimeout(() => this.#subscribers[id](content), 1);
    }
  }

  constructor (doc = globalThis.document) {
    this.#doc = doc;
  }

  async load (code, options, keepFormat = false) {
    this.code = keepFormat ? code : await format(code, options);
  }

  set code (v) {
    if (this.#code !== v) {
      this.#code = v;
      this.#change();
    }
  }

  get code () {
    return this.#code;
  }

  subscribe (fn) {
    this.#subscriberId++;
    this.#subscribers[this.#subscriberId] = fn;
    return this.#subscriberId;
  }

  unsubscribe (id) {
    delete this.#subscribers[id];
  }


}

export default EditorModel;
