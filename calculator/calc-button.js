customElements.define('calc-button',
  class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode: 'open'});
      this.render();
    }
    get value() {
        return this.getAttribute('value');
    }
      
    set value(newValue) {
        this.setAttribute('value', newValue);
    }
    get operator() {
        return this.getAttribute('operator') || "";
    }
      
    set operator(newValue) {
        this.setAttribute('operator', newValue);
    }
    static get observedAttributes() {
        return ['value', "operator"];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`${name} changed from ${oldValue} to ${newValue}`);
        this.render();
      }
    render() {
        this.shadowRoot.innerHTML = `
            <style>
            </style>
            <h1 class="${this.operator}">${this.operator} -- ${this.value}</h1>
          `
    }
  }
)