export const title       = '05) format JSON config';
export const description = `apply pretty to the config`;


export default `<grapper-view style="width: 100px">
  <template>
    <svg viewBox="0 0 100 100" id="svg">
      <g g-for="value of data">
          <circle
             r="25"
             :cx="value.cx"
             :cy="value.cy"
             :fill="$.config.color[value.color]">
          </circle>
      </g>
      <text x="50" y="12">circles</text>
    </svg>
  </template>
  <script type="data">
    [
      { cx: 25, cy: 25, color: 0 },
      { cx: 50, cy: 50, color: 1 },
      { cx: 75, cy: 75, color: 2 },
    ]
  </script>
  <script type="config"> {
    color:
      [
          "red",
              "green",
                  "blue"
                ]} </script>
</grapper-view>
<g-editor href="grapper-view"></g-editor>
`;