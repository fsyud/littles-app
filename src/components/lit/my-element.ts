import { LitElement, html, css } from "lit";

export class MyElement extends LitElement {
  static styles = css`
    h1 {
      font-size: 3.052em;
    }
    p {
      margin-bottom: 1em;
    }
    a {
      color: var(--accent);
    }
    a:hover {
      color: var(--accent);
    }
  `;

  render() {
    return html`
      <h1>🧑‍🚀 fsyud</h1>
      <p>
        A free soul, in this blog, will share some daily Development essay.
        reading notes, human geography
      </p>
      <p>some of my projects</p>
      <ul>
        <li>
          implement a mini
          <a href="https://github.com/ligdy7/swr-min">swr-min</a>.
        </li>
        <li>
          some of <a href="https://github.com/ligdy7/ho-hooks">react hooks</a>.
        </li>
        <li>
          an expandable
          <a href="https://github.com/ligdy7/ho-hooks"
            >Chrome bookmarks Quick Search</a
          >.
        </li>
        <li>
          A cube rotation touch program
          <a href="https://github.com/ligdy7/uni-3d-translate "
            >uni-3d-translate
          </a>
        </li>
        <li>
          a ssr website <a href="https://github.com/ligdy7/qwikbg ">qwikbg </a>
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
