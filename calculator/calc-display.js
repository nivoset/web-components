customElements.define('calc-display',
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
    static get observedAttributes() {
        return ['value'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`${name} changed from ${oldValue} to ${newValue}`);
        this.render();
      }
    render() {
        this.shadowRoot.innerHTML = `
            <style>
            div {
                grid-column: 1 / 5;
                background-color: var(--display-background-color);
                color: var(--display-text-color);
            }
            </style>
            <div>${this.value}</div>
          `
    }
  }
)