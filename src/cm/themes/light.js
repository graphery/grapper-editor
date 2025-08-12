import { tags as t } from '@lezer/highlight';
import createTheme   from './createTheme.js';

const light = createTheme({
  variant  : 'light',
  settings : {
    background       : 'transparent',
    foreground       : '#4d4d4c',
    caret            : '#000000',
    selection        : '#036dd626',
    gutterBackground : 'var(--background-color, transparent)',
    gutterForeground : '#4d4d4c80',
    lineHighlight    : '#8a91991a',
  },
  styles   : [
    {
      tag   : t.comment,
      color : '#8e908c',
    },
    {
      tag   : [t.variableName, t.self, t.propertyName, t.attributeName, t.regexp],
      color : '#c82829',
    },
    {
      tag   : [t.number, t.bool, t.null],
      color : '#f5871f',
    },
    {
      tag   : [t.className, t.typeName, t.definition(t.typeName)],
      color : '#c99e00',
    },
    {
      tag   : [t.string, t.special(t.brace)],
      color : '#718c00',
    },
    {
      tag   : t.operator,
      color : '#3e999f',
    },
    {
      tag   : [t.definition(t.propertyName), t.function(t.variableName)],
      color : '#4271ae',
    },
    {
      tag   : t.keyword,
      color : '#8959a8',
    },
    {
      tag   : t.derefOperator,
      color : '#4d4d4c',
    },
  ],
});

export default light;