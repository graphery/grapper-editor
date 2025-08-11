export default `
  <style>
    :host {
      display                  : block;
      width                    : 100%;
      font-size                : 13px;
      --border-radius          : var(--editor-general-border-radius, 6px);
      --fore-color             : var(--editor-fore-color, #4d4d4c);
      --background-color       : var(--editor-general-color-background, #f6f6f7);
      --background-color-hover : var(--editor-general-color-background, #ddd);
    }
    :host([theme="dark"]) {
      --fore-color             : var(--editor-general-color-background, #f8f8f2);
      --background-color       : var(--editor-fore-color, #161618);
      --background-color-hover : var(--editor-fore-color, #44475a);
    }
    #content-editor {
      border-radius    : var(--border-radius);
      background-color : var(--background-color);
      padding          : 0 4px 4px 4px;
      height           : 100%;
      box-sizing: border-box;   
   }
    .hidden {
      display : none;
    }
    .header {
      display         : flex;
      align-items     : center;
      justify-content : space-between;
      padding-top     : 4px;
      color           : var(--fore-color);
      font-family     : sans-serif;
      font-size       : 0.8em;
      z-index         : 20;
    }
    .header #text-copy{
      display       : none;
      position      : relative;
      top           : -5px;
      padding       : 2px 6px;
      border-radius : var(--border-radius);
    }
    .header button {
      cursor           : pointer;
      border           : none;
      border-radius    : var(--border-radius);
      color            : var(--fore-color);
      background-color : transparent;
      width            : 34px;
      height           : 32px;
    }
    .header button:hover:not([disabled="true"]), 
     .header button:hover:not([disabled="true"]) svg {
      background-color : var(--background-color-hover);
    }
    .header button[disabled="true"] svg{
      opacity : 0.5;
    }
    .header button svg {
      cursor : pointer;
      stroke : var(--fore-color);
    }
    .body {
      height: calc(100% - 32px);
      overflow : auto; 
    }
    .body g-editor-provider {
      display : block;
      height: 100%;
    }
    :host([mode="readonly"]) .header { 
      margin-bottom : -28px !important;
    }
  </style>
`;