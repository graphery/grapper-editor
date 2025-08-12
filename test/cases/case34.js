export const title       = '34) textarea and loop error';
export const description = `shows errors in the editor code`;

export default `  <div id="templating-example"></div>
<g-editor href="#templating-example" lines-highlight="2-15">
  <textarea>
      <grapper-view value="50">
        <svg viewBox="0 0 400 270">
          <g g-for="y of 5">
            <g g-for="x of 20">
              <path g-if="((y * 20) + x < value)"
                    g-bind:transform="$$.tran slate(x * 20, y * 55)"
                    d="M14,30L14,49L4,49L4,30C2,29,1,28,1,27L1,11C1,10,1,9,3,9L7,9L6.3,3
                     C6,-1,11,-1,11.7,3L11,9L15,9C17,8.9,17,10,17,11L17,27C17,28,16,29,14,30Z"/>
            </g>
          </g>
        </svg>
      </grapper-view>
      <p>
      <label>Change the value: 
        <input type="range" id="value" value="50" 
               oninput="document.querySelector('grapper-view').value = this.value">
      </label>
      </p>
    </textarea>
  </g-editor>
`;