export const title       = '12) edit html and grapper-view';
export const description = `edit extra html without problems`;


export default `
<div id="to-edit">
  <grapper-view id="circle">
    <template>
      <svg viewBox="0 0 100 100" width="100">
        <circle g-bind:r="size" cx="50" cy="50" fill="red"></circle>
      </svg>
    </template>
    <script type="data">
      { size: 25 }
    </script>
  </grapper-view>
  <p>
    <label>Change the size: 
      <input type="range" max="50" value="25"
             oninput="document.querySelector('#circle').data.size = this.value">
    </label>
  </p>
</div>
<g-editor href="#to-edit"></g-editor>
`;