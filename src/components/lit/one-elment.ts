import { LitElement, html, css } from "lit";

export class OneElement extends LitElement {
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
    return html` <slot></slot> `;
  }
}

customElements.define("oen-element", OneElement);

declare global {
  interface HTMLElementTagNameMap {
    "one-element": OneElement;
  }
}
