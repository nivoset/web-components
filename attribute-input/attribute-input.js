customElements.define('attribute-input',
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
    get color() {
        return this.getAttribute('color') || "#b81568";
    }
      
    set color(newValue) {
        this.setAttribute('color', newValue);
    }
    static get observedAttributes() {
        return ['value', "color"];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`${name} changed from ${oldValue} to ${newValue}`);
        this.render();
      }
    render() {
        this.shadowRoot.innerHTML = `
            <style>
              h1 { color: ${this.color}}
            </style>
            <h1>${this.value}</h1>
          `
    }
  }
)