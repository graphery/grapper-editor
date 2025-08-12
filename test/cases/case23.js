export const title       = '23) grapper-view as comment into the light DOM';
export const description = `Fill the grapper-view with the light DOM code`;

export default `<grapper-view id="container" style="width:100px"></grapper-view>
<g-editor href="#container">
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