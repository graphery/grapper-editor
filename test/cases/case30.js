export const title       = '30) div element error';
export const description = `editor with error`;

export default `<div id="example">
  <grapper-view style="width: 100px">
    <template>
      <svg viewBox="0 0 100 100" id="svg">
        <g g-for="value of data">
          <circle
            @click="wrong()"
            r="25"
            :cx="value.cx"
            :cy="value.cy"
            :fill="value.color"
          />
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
</div>
<pre id="errors"></pre>
<g-editor href="#example"></g-editor>
`;