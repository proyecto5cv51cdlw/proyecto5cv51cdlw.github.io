class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2023
        Lemus Way César Daniel
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
