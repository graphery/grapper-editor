export const title       = '10) editor mode="edit"';
export const description = `displays the code and the edit mode is active`;


export default `
<grapper-view>
  <svg viewBox="0 0 200 100" width="200px" height="100px">
    <g stroke-width="10" stroke-linecap="round">
      <g g-for="(record, index) of data">
        <line x1="10"
              :x2="record.value"
              :y1="index * 18 + 10"
              :y2="index * 18 + 10"
              :stroke="$.config.colors[index]"
        ></line>
      </g>
    </g>
  </svg>
  <script type="data">
  [
    {"value": 100},
    {"value": 150},
    {"value": 70},
    {"value": 50},
    {"value": 90},
  ]
  </script>
  <script type="methods">
  function data(records) {
    return records.sort((a, b) => a.value - b.value);
  }
  </script>
  <script type="config">
  {
    colors: ["#D80000", "#8D0000", "#00008D", "#008D00", "#00D800" ]
  }
  </script>
</grapper-view>
<g-editor href="grapper-view" mode="edit"></g-editor>
`;