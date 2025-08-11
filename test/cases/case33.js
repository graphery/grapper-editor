export const title       = '33) error in data url';
export const description = `shows errors in the editor code`;

export default `<grapper-view style="width: 100px">
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
  <script type="data" src="/wrong.js"></script>
</grapper-view>
<pre id="errors"></pre>
<g-editor href="grapper-view"></g-editor>
`;