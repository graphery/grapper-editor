import { basicSetup }                         from "codemirror";
import { EditorView, Decoration, keymap }     from "@codemirror/view"
import {
  Compartment, EditorState,
  StateField, StateEffect
}                                             from '@codemirror/state';
import { indentWithTab }                      from "@codemirror/commands"
import { javascriptLanguage }                 from "@codemirror/lang-javascript";
import { html }                               from "@codemirror/lang-html";
import { setDiagnostics, linter, lintKeymap } from '@codemirror/lint';
import { syntaxTree }                         from '@codemirror/language';
import schemaSVG                              from "./schemaSVG.js";
import schemaGraphane                         from './schemaGraphane.js';
import themes                                 from "./themes";
import graphane2grapper                       from './graphane2grapper.js';

const jsonParser      = javascriptLanguage.parser.configure({top : "SingleExpression"})
const nestedLanguages = [
  {
    tag    : "script",
    attrs  : el => el.type === "methods",
    parser : javascriptLanguage.parser
  },
  {
    tag    : "g-script",
    attrs  : el => el.type === "methods",
    parser : javascriptLanguage.parser
  },
  {
    tag    : "script",
    attrs  : el => el.type === "data" || el.type === "config",
    parser : jsonParser
  },
  {
    tag    : "g-script",
    attrs  : el => el.type === "data" || el.type === "config",
    parser : jsonParser
  }
];
const extraTags       = schemaGraphane(schemaSVG);
const htmlExtension   = html({
  extraTags,
  nestedLanguages
});

const themeConfig    = new Compartment();
const editableConfig = new Compartment();

const addLineHighlight = StateEffect.define();

const deprecationLinter = linter(view => {
  const diags = [];
  const tree  = syntaxTree(view.state);

  tree.iterate({
    enter: (node) => {
      if (node.name === "TagName") {
        const name = view.state.doc.sliceString(node.from, node.to);
        if (name.toLowerCase() === "g-composer") {
          diags.push({
            from: node.from,
            to: node.to,
            severity: "warning",
            message: "g-composer is DEPRECATED.",
            actions: [
              {
                name: "Update to Grapper",
                apply(view, from, to) {
                  debugger;
                  migrateToGrapper(view, from, to);
                }
              }
            ]
          });
        }
      }
    }
  });

  return diags;
});

function migrateToGrapper(view, from, to) {
  const code = view.state.doc.toString();
  let newCode = graphane2grapper(code)
  view.dispatch({
    changes: { from: 0, to: view.state.doc.length, insert: newCode }
  });
}

function createEditorState (initialContents, myTheme, handler) {
  const extensions = [
    basicSetup,
    keymap.of([indentWithTab]),
    keymap.of(lintKeymap),
    htmlExtension,
    lineHighlightField,
    EditorView.updateListener.of(
      update => {
        if (update.docChanged && typeof handler === "function") {
          handler(update);
        }
      }
    ),
    themeConfig.of(themeByIdentifier(myTheme)),
    editableConfig.of(editable(false)),
    deprecationLinter
  ]

  return EditorState.create({
    doc : initialContents,
    extensions
  });
}

function themeByIdentifier (theme) {
  return themes[theme] || themes.light;
}

function editable (value) {
  return EditorView.editable.of(value);
}

const lineHighlightField = StateField.define({
  create () {
    return Decoration.none;
  },
  update (lines, tr) {
    lines = lines.map(tr.changes);
    for (let e of tr.effects) {
      if (e.is(addLineHighlight)) {
        lines = lines.update({add : [lineHighlightMark.range(e.value)]});
      } else {
        lines = Decoration.none;
      }
    }
    return lines;
  },
  provide : (f) => EditorView.decorations.from(f),
});

const lineHighlightMark = Decoration.line({
  attributes : {style : 'background-color: #C0C0C040'},
});


export function Editor (doc = '', parent = document.body, handler = undefined, theme = 'light') {
  const state       = createEditorState(doc, theme, handler)
  let editableValue = false;
  const myEditor    = new EditorView({state, parent, editable : false});
  parent.addEventListener('keydown', (e) => {
    if (e.key === '/') {
      e.stopPropagation();
    }
  });
  Object.defineProperties(
    myEditor,
    {
      theme          : {
        set (newTheme) {
          theme = newTheme;
          myEditor.dispatch({
            effects : themeConfig.reconfigure(themeByIdentifier(newTheme))
          });
        },
        get () {
          return theme;
        }
      },
      editable       : {
        set (v) {
          editableValue = v;
          myEditor.dispatch({
            effects : editableConfig.reconfigure(editable(editableValue))
          });
        },
        get () {
          return editableValue;
        }
      },
      linesHighlight : {
        get () {
          return (lines) => {
            lines.forEach(line => {
              myEditor.dispatch({
                effects : addLineHighlight.of(myEditor.state.doc.line(line).from)
              });
            });
          };
        }
      },
      diagnostic     : {
        get () {
          return (newDiagnostics) => {
            myEditor.dispatch(setDiagnostics(myEditor.state, newDiagnostics))
          }
        }
      }
    }
  );
  return myEditor;
}

export default {Editor};