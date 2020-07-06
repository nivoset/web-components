customElements.define('calc-button',
  class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode: 'open'});
      this.render();
    }

    static get observedAttributes() {
      return ['value', "operator"];
    }

    get value() {
      return this.getAttribute('value');
    }
    set value(newValue) {
      this.setAttribute('value', newValue);
    }

    get operator() {
      return this.getAttribute('operator');
    }
    set operator(newValue) {
      this.setAttribute('operator', (newValue !== null && newValue !== undefined) ? "operation" : "");
    }
    connectedCallback() { 
      this.operator = this.getAttribute("operator");
    }
    attributeChangedCallback() {
      this.render();
    }
    render() {
      this.shadowRoot.innerHTML = `
        <div class="${this.operator}">${this.value}</div>
        <style>
          div {
            background-color: var(--button-background-color);
            color: var(--button-text-color);
            cursor: pointer;
            text-align: center;
            border: 1px solid #999;
          }
          .operation {
            background-color: var(--operator-background-color);
            color: var(--operator-text-color);
          }
          div::selection {
            color: none;
            background: none;
          }
        </style>
        `
      this.shadowRoot.firstElementChild.onclick = e => 
        this.dispatchEvent(new CustomEvent("custom-event", {
          detail: { key: this.value }
        }));
    }
  }
)