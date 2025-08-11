import { tags as t } from '@lezer/highlight';
import createTheme   from './createTheme.js';

const dark = createTheme({
  variant  : 'dark',
  settings : {
    background       : 'transparent',
    foreground       : '#e0e0e0',
    caret            : '#ffffffa6',
    selection        : '#122bbb',
    gutterBackground : 'var(--background-color, transparent)',
    gutterForeground : '#e0e0e090',
    lineHighlight    : '#ffffff0f',
  },
  styles   : [
    {
      tag   : t.comment,
      color : '#6272a4',
    },
    {
      tag   : [t.string, t.special(t.brace)],
      color : '#f8c555',
    },
    {
      tag   : [t.number, t.self, t.bool, t.null],
      color : '#bd93f9',
    },
    {
      tag   : [t.keyword, t.operator],
      color : '#ff79c6',
    },
    {
      tag   : [t.definitionKeyword, t.typeName],
      color : '#e2777a',
    },
    {
      tag   : t.definition(t.typeName),
      color : '#f8f8f2',
    },
    {
      tag   : [
        t.className,
        t.definition(t.propertyName),
        t.function(t.variableName),
        t.attributeName,
      ],
      color : '#7ec699',
    },
  ],
});

export default dark;