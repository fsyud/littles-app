import { LitElement, html, css } from "lit";
import { styles } from "./styles.ts";

export class MyElement extends LitElement {
  static styles = styles;


  render() {

    return html`
      <p>A developer</p>
      <p>
        A free soul, in this blog, will share some daily Development essay.
        reading notes, human geography
      </p>
      <p>some of my projects</p>
      <ul>
        <li>
          implement a mini
          <a href="https://github.com/ligdy7/swr-min" target="_blank">swr-min</a
          >.
        </li>
        <li>
          some of
          <a href="https://github.com/ligdy7/ho-hooks" target="_blank"
            >react hooks</a
          >.
        </li>
        <li>
          an expandable
          <a href="https://github.com/ligdy7/bookmarks-quick-search" target="_blank"
            >Chrome bookmarks Quick Search</a
          >.
        </li>
        <li>
          A cube rotation touch program
          <a href="https://github.com/ligdy7/uni-3d-translate " target="_blank"
            >uni-3d-translate
          </a>
        </li>
        <li>
          a ssr website
          <a href="https://github.com/ligdy7/qwikbg" target="_blank">qwikbg </a>
        </li>
        <li>...</li>
      </ul>
      <p>
        You can contact me via
        <a href="mailto: fsyud7@163.com">email</a>
      </p>
    `;
  }
}

customElements.define("my-element", MyElement);

declare global {
  interface HTMLElementTagNameMap {
    "my-element": MyElement;
  }
}
