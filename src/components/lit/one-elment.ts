import { LitElement, html } from "lit";
import { styles } from "./styles.ts";

export class OneElement extends LitElement {
  static styles = styles;

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define("oen-element", OneElement);

declare global {
  interface HTMLElementTagNameMap {
    "one-element": OneElement;
  }
}
