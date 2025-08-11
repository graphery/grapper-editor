export const title       = '28) equal code element error';
export const description = `editor with error`;

export default `<grapper-view style="width: 100px">
  <template>
    <svg viewBox="0 0 100 100" id="svg">
      <g g-for="value of data.one">
        <circle
          @click="wrong()"
          r="25"
          :cx="value.cx"
          :cy="value.cy"
          :fill="value.color"
        ></circle>
      </g>
      <g g-for="value of data.two">
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
  <script type="data">{
      one: [
        { cx: 10, cy: 10, color: "red" },
        { cx: 50, cy: 50, color: "green" },
        { cx: 75, cy: 75, color: "blue" },
      ],
      two: [
        { cx: NaN, cy: NaN, color: "red" },
        { cx: 50, cy: 50, color: "green" },
        { cx: 75, cy: 75, color: "blue" },
      ]
    }
  </script>
</grapper-view>
<pre id="errors"></pre>
<g-editor href="grapper-view"></g-editor>
`;