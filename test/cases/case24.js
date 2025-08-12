export const title       = '24) g-editor with comment and not href';
export const description = `Editor with the light DOM code`;

export default `
<g-editor keep-format>
<!--
  <template>
    <svg viewBox="0 0 100 100" id="svg">
      <g g-for="value of data">
          <circle
             r="25"
             :cx="value.cx"
             :cy="value.cy"
             :fill="value.color">
          </circle>
      </g>
      <text x="50" y="12">circles</text>
    </svg>
  </template>
  <script type="data">
    [
      { cx: 25, cy: 25, color: "red" },
      { cx: 50, cy: 50, color: "green" },
      { cx: 75, cy: 75, color: "blue" },
    ]
  </script>
-->
</g-editor>
`;