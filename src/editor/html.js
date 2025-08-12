import * as icons     from './icons.js';

export default `
  <div id="content-editor">
    <div class="header">
      <div id="title"></div>
      <div class="toolbar">
        <p id="text-copy">Copied</p>
        <button id="copy" title="copy to clipboard">
          ${ icons.clipboard } <span class="text big">copy</span>
        </button>
        <button id="save" title="save to disk">
          ${ icons.disk } <span class="text big">save</span>
        </button>
        <button id="modeEdit" title="edit the code" class="hidden">
          ${ icons.edit } <span class="text big">edit</span>
        </button>
        <button id="reload" title="reload the original code" class="hidden">
          ${ icons.reload } <span class="text big">reload</span>
        </button>
        <button id="rearrange" title="rearrange the code" class="hidden">
          ${ icons.rearrange } <span class="text big">rearrange</span>
        </button> 
        <button id="modeShow" title="exit and reload the original code" class="hidden">
          ${ icons.exit } <span class="text big">exit</span>
        </button>
      </div>
    </div>
    <div class="body">
      <g-editor-provider></g-editor-provider>
    </div>
  </div>
`;