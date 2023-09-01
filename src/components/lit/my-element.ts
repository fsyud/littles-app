import { LitElement, html, css } from "lit";

export class MyElement extends LitElement {
  render() {
    return html`
        <h1>🧑‍🚀 Hello, Astronaut!</h1>
        <p>
          Welcome to the official <a href="https://astro.build/">Astro</a> blog
          starter template. This template serves as a lightweight,
          minimally-styled starting point for anyone looking to build a personal
          website, blog, or portfolio with Astro.
        </p>
        <p>Here are a few ideas on how to get started with the template:</p>
        <ul>
          <li>Edit this page in <code>src/pages/index.astro</code></li>
          <li>
            Edit the site header items in
            <code>src/components/Header.astro</code>
          </li>
          <li>
            Add your name to the footer in
            <code>src/components/Footer.astro</code>
          </li>
          <li>
            Check out the included blog posts in <code>src/pages/blog/</code>
          </li>
          <li>
            Customize the blog post page layout in
            <code>src/layouts/BlogPost.astro</code>
          </li>
        </ul>
        <p>
          Looking for a blog template with a bit more personality? Check out
          <a href="https://github.com/Charca/astro-blog-template"
            >astro-blog-template
          </a>
          by <a href="https://twitter.com/Charca">Maxi Ferreira</a>.
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
