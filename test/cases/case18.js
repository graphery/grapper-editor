export const title       = '18) line highlight';
export const description = `show two editors`;

export async function script () {
  const d = document.querySelector('#dark').linesHighlight;
  const l = document.querySelector('#light').linesHighlight;
  document.querySelector('#result').innerHTML = `
  <p>dark line highlight: ${d}</p>
  <p>light line highlight: ${l}</p>
  `
}

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
    <g-editor href="grapper-view" id="dark" theme="dark" lines-highlight="4;7-9;16-20"></g-editor>
  </div>
  <div style="width: 50%">
    <g-editor href="grapper-view" id="light" theme="light" lines-highlight="4;7-9;16-20"></g-editor>
  </div>
</div>
<div id="result"></div>
`;