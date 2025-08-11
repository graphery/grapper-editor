export const title       = '27) similar element error';
export const description = `Editor with error`;

export default `<grapper-view style="width: 100px">
  <template>
    <svg viewBox="0 0 100 100" id="svg">
      <g g-for="value of data">
        <circle
          g-if="false"
          @click="wrong()"
          r="25"
          :cx="value.cx"
          :cy="value.cy"
        ></circle>
        <circle
          @click="wrong()"
          r="25"
          :cx="value.cx"
          :cy="value.cy"
          :fill="value.color"
        ></circle>
      </g>
      <text x="50" y="12">circles</text>
    </svg>
  </template>
  <script type="data">
    [
      { cx: NaN, cy: NaN, color: "red" },
      { cx: 50, cy: 50, color: "green" },
      { cx: 75, cy: 75, color: "blue" },
    ]
  </script>
</grapper-view>
<pre id="errors"></pre>
<g-editor href="grapper-view"></g-editor>
`;