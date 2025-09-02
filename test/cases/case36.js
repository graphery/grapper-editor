export const title       = '37) deprecated g-composer';
export const description = `displays g-composer as deprecated`;


export default `
<g-composer>
  <template>
    <svg viewBox="0 0 1000 1100" width="400">
      <defs>
        <radialGradient id="gradient" gradientUnits="userSpaceOnUse" cx="500" cy="500" r="500" fx="50%" fy="50%">
          <stop offset="30%" style="stop-color: green; stop-opacity: 1" />
          <stop offset="80%" style="stop-color: red; stop-opacity: 1" />
        </radialGradient>
      </defs>
      <g g-for="(t, n) of [0,5,10,15,20,25,30,35,40,45,50, 60, 70, 80]">
        <circle
          cx="500"
          cy="500"
          stroke="black"
          stroke-width="1"
          fill="none"
          g-bind:r="(n + 1) * 490 / 15" 
        ></circle>
      </g>
      <g g-for="m of $.config.monthAxe">
        <line
          stroke="black"
          stroke-width="1"
          x1="500"
          y1="500"
          g-bind:x2="$.polar2cartesian(500,500,460, m).x"
          g-bind:y2="$.polar2cartesian(500,500,460, m).y"
        ></line>
      </g>
      <rect x="450" y="30" width="100" height="30" fill="white"></rect>
      <text x="500" y="50" font-family="monospace" font-size="26" text-anchor="middle">67.0 dB</text>
      <g g-for="(year, n) of data">
        <path
          stroke="url(#gradient)"
          stroke-width="5" 
          fill="none"
          :d="draw($$, year)"
          :stroke-dasharray="$$.element.getTotalLength()"
          :stroke-dashoffset="show($$, n, data.length)"/>
      </g>
      <g font-family="Georgia, serif" font-style="italic">
        <text x="500" y="1020" font-size="50" text-anchor="middle">Noise has been reduced in Madrid</text>
        <text x="500" y="1080" font-size="40" text-anchor="middle">from 2011 to 2024</text>
      </g>
    </svg>
  </template> 
  <script type="config">{
    noiseAxe : [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80],
    monthAxe : [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330]
  }</script>
  <script type="methods">
    function draw(d, year) {
      for (let n = 0; n != year.length; n++) {
        const p = $.polar2cartesian(500, 500, (year[n] - 50) * 27, $.config.monthAxe[n % 12]);
        if (n === 0) {
          d.M(p.x, p.y);
        } else {
          d.L(p.x, p.y);
        }
      }
      return d;
    }
    function show($$, n, t) {
      const totalLength = $$.element.strokeDasharray();
      $$.element.animateTo([
        {strokeDashoffset: totalLength},
        {strokeDashoffset: 0}
      ], {duration: 1000, delay: n * 1000});
      $$.element.animateTo([
        {opacity: 1},
        {opacity: 0.3 + ((n + 1) / t * 0.7)}
      ], {duration: 1000, delay: (n + 1) * 500 + 2000});
      return $$.element.getTotalLength();
    }
  </script>
  <script type="data">[
    [63.8, 64.0, 63.9, 63.0, 62.7, 62.5, 62.9, 61.5, 62.5, 63.2, 63.8, 63.9, 63.9],
    [63.9, 63.1, 63.2, 63.3, 62.9, 62.4, 62.5, 60.9, 62.7, 62.7, 63.1, 63.2, 63.6],
    [63.6, 63.4, 63.6, 63.1, 62.2, 61.8, 61.5, 60.5, 61.0, 62.1, 61.7, 62.1, 62.8],
    [62.8, 62.9, 61.9, 61.7, 61.2, 60.7, 60.6, 59.2, 61.2, 62.2, 64.5, 62.7, 62.6],
    [62.6, 62.6, 62.1, 61.6, 61.1, 61.1, 60.6, 59.9, 61.2, 62.0, 61.9, 62.0, 62.5],
    [62.5, 63.0, 62.2, 63.2, 61.9, 61.0, 60.4, 59.6, 61.2, 62.1, 62.5, 63.0, 62.8],
    [62.8, 66.3, 64.1, 61.4, 61.6, 61.4, 61.0, 59.9, 61.3, 63-0, 62.1, 62.5, 63.0],
    [63.0, 62.6, 63.1, 63.5, 61.9, 61.8, 60.7, 59.6, 61.2, 61.8, 62.5, 62.2, 62.3],
    [62.3, 62.5, 61.9, 62.0, 61.3, 61.2, 60.8, 59.9, 61.5, 62.2, 62.6, 62.6, 62.4],
    [62.4, 62.4, 60.1, 57.7, 58.2, 58.7, 57.8, 57.1, 59.2, 59.5, 60.2, 59.7, 58.2],
    [58.2, 60.3, 59.9, 59.7, 59.2, 60.4, 58.5, 56.7, 59.3, 59.8, 59.6, 59.5, 59.1],
    [59.1, 59.1, 63.0, 59.9, 58.6, 58.8, 57.8, 56.5, 59.0, 59.3, 59.7, 60.5, 59.4],
    [59.4, 58.7, 59.1, 57.9, 58.4, 58.6, 57.9, 56.8, 59.2, 60.4, 59.8, 59.5, 60.5],
    [60.5, 59.7, 59.7, 59.1, 58.7, 58.7, 58.0, 57.0, 58.6, 59.8, 59.4, 59.8]
  ]</script> 
</g-composer>
<g-editor href="g-composer" title="g-composer deprecated" mode="editor"></g-editor>
`;