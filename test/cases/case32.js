export const title       = '32) error in plugin url';
export const description = `apply pretty to the data`;

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
  <script type="plugin" src="/wrong.js"></script>
</grapper-view>
<pre id="errors"></pre>
<g-editor href="grapper-view"></g-editor>
`;