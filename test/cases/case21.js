export const title       = '21) scroll';
export const description = `Large code`;

export default `
<grapper-view id="example" style="width: 500px;">
  <template>
    <svg viewBox="0 0 600 600" width="600">
      <g
        g-for="({x, y, width, height}, n) of createTreeMap(data.map(x => x.population))"
      >
        <rect
          g-bind:x="x"
          g-bind:y="y"
          g-bind:width="width"
          g-bind:height="height"
          stroke="white"
          fill="lightgreen"
        ></rect>
        <text
          fill="black"
          g-bind:x="x + 10"
          g-bind:y="y + 24"
          g-content="data[n].country"
        ></text>
        <text
          fill="black"
          g-bind:x="x + 10"
          g-bind:y="y + 48"
          g-content="Math.round(data[n].population / 1000000) + ' millions'"
        ></text>
        <g
          g-for="({x: x2, y: y2, width: width2, height: height2}, i) of createTreeMap(data[n].values.map(x => x.population), width, height, x, y)"
        >
          <rect
            g-bind:x="x2"
            g-bind:y="y2"
            g-bind:width="width2"
            g-bind:height="height2"
            stroke="white"
            fill="green"
          ></rect>
          <text
            fill="white"
            g-bind:x="x2 + 10"
            g-bind:y="y2 + 24"
            g-content="data[n].values[i].country"
          ></text>
          <text
            fill="white"
            g-bind:x="x2 + 10"
            g-bind:y="y2 + 48"
            g-content="Math.round(data[n].values[i].population / 1000000) + ' millions'"
          ></text>
        </g>
      </g>
    </svg>
  </template>
  <script type="data">
    [
      {
        country: "top 7",
        population: 4152542436,
        values: [
          { country: "India", population: 1428627663 },
          { country: "China", population: 1425671352 },
          { country: "United States", population: 339996563 },
          { country: "Indonesia", population: 277534122 },
          { country: "Pakistan", population: 240485658 },
          { country: "Nigeria", population: 223804632 },
          { country: "Brazil", population: 216422446 },
        ],
      },
      { country: "rest of the world", population: 4107326789, values: [] },
    ]
  </script>
  <script type="methods">
    function createTreeMap(data, width = 600, height = 600, x = 0, y = 0) {
      if (data.length == 0) {
        return [];
      } else if (data.length == 1) {
        return [{ x, y, width, height }];
      } else {
        let mid = Math.floor(data.length / 2);
        let total = data.reduce((a, b) => a + b, 0);
        let sum1 = data.slice(0, mid).reduce((a, b) => a + b, 0);
        let sum2 = data.slice(mid).reduce((a, b) => a + b, 0);
        let ratio = sum1 / total;
        if (width > height) {
          return [
            ...createTreeMap(data.slice(0, mid), width * ratio, height, x, y),
            ...createTreeMap(
              data.slice(mid),
              width * (1 - ratio),
              height,
              x + width * ratio,
              y,
            ),
          ];
        } else {
          return [
            ...createTreeMap(data.slice(0, mid), width, height * ratio, x, y),
            ...createTreeMap(
              data.slice(mid),
              width,
              height * (1 - ratio),
              x,
              y + height * ratio,
            ),
          ];
        }
      }
    }
  </script>
</grapper-view>
<g-editor href="grapper-view" style="height: 300px;"></g-editor>
`;