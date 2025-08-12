export const title       = '16) edit grapper-view attributes';
export const description = `update style, class or other component attribute`;


export default `
<grapper-view style="width: 50px" id="square">
  <template>
    <svg viewBox="0 0 100 100">
      <rect x="0" y="0" width="100" height="100" fill="green"/>
    </svg>
  </template>
</grapper-view>
<g-editor href="#square"></g-editor>
`;