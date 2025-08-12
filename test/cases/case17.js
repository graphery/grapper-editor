export const title       = '17) html entity in code';
export const description = `transform the special characters`;


export default `
<grapper-view id="data-example" style="width: 150px;">
  <template>
    <svg viewBox="0 0 30 80">
      <g g-for="(r, n) of data">
        <rect
          x="0"
          width="50"
          fill="green"
          g-bind:y="r.y"
          g-bind:height="r.height"
          g-bind:opacity="1 && r.opacity"
        ></rect>
        <text
          x="4"
          font-size="4"
          g-bind:y="r.y + (r.height / 2)"
          g-content="r.name + ' ' + r.value"
        ></text>
      </g>
    </svg>
  </template>
  <g-script type="data">
    [
      { name: "alpha", value: 10 },
      { name: "beta", value: 20 },
      { name: "gamma", value: 35 },
    ]
  </g-script>
  <g-script type="methods">
    function data(values) { const total = values.reduce((n, r) =&gt; r.value + n, 0); let y = 0; return values.map(r =&gt; { const d = { ...r, y : y, height : r.value / total * 80, opacity: r.value / total }; y = y + d.height; return d; }); }
  </g-script>
</grapper-view>
<g-editor href="grapper-view" mode="show"></g-editor>
`;