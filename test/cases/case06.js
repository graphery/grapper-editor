export const title       = '06) CSV format in data';
export const description = `don't apply pretty to the data with CSV format`;


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
"cx";"cy";"color"
25;  25;0
50; 50;   1
75;  75 ;2
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