import * as icons     from './icons.js';

export default `
  <div id="content-editor">
    <div class="header">
      <div>
        <button id="modeEdit" title="edit mode" class="hidden">
          ${ icons.edit }
        </button>
        <button id="modeShow" title="exit and reload original code" class="hidden">
          ${ icons.exit }
        </button>
        <button id="reload" title="reload original code" class="hidden">
          ${ icons.reload }
        </button>
        <button id="rearrange" title="rearrange code" class="hidden">
          ${ icons.rearrange }
        </button> 
      </div>
      <div>
        <p id="text-copy">Copied</p>
        <button id="copy" title="copy to clipboard">
          ${ icons.clipboard }
        </button>
        <button id="save" title="save to disk">
          ${ icons.disk }
        </button>
      </div>
    </div>
    <div class="body">
      <g-editor-provider></g-editor-provider>
    </div>
  </div>
`;