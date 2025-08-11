export const title       = '20) iframe';
export const description = `edit grapper-view from iframe`;

export default `
<iframe id="demo" src="/editor/test/assets/page.html" style="height: 300px; width: 90%;"></iframe>
<g-editor href="#demo" options="g-script: true"></g-editor>
`;