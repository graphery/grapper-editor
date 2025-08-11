export const title       = '14) edit hidden grapper-view';
export const description = `edit a hidden component`;


export default `
<g-editor href="#scafolding"></g-editor>

<div style="display: none">
  <grapper-view id="scafolding">
    <template>
      <svg viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50" fill="red"></circle>
      </svg>
    </template>
    <script type="data"></script>
    <script type="methods"></script>
  </grapper-view>
</div>

`;