export const title       = '07) dark and light mode';
export const description = `show two editors`;

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
  <script type="data">
    [
      { cx: 25, cy: 25, color: "red" },
      { cx: 50, cy: 50, color: "green" },
      { cx: 75, cy: 75, color: "blue" },
    ]
  </script>
</grapper-view>
<div style="display: flex">
  <div style="width: 50%">
    <g-editor href="grapper-view" theme="dark">
  </div>
  <div style="width: 50%">
    <g-editor href="grapper-view" theme="light">
  </div>
</div>
</g-editor>
`;