export const title       = '13) show empty grapper-view';
export const description = `display an empty component without other elements`;


export default `
<div style="display: none">
  <grapper-view id="empty">
  </grapper-view>
</div>
<g-editor href="#empty"></g-editor>
`;