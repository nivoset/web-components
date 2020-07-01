customElements.define('template-rotation',
  class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode: 'open'});
    }
    get speed() {
        return this.getAttribute('speed');
    }
      
    set speed(newValue) {
        this.setAttribute('speed', newValue);
    }
    static get observedAttributes() {
        return ['speed'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
          case 'speed':
            this.render();
            break;
        }
      }
    render() {
        this.shadowRoot.innerHTML = `
        <style>
            div {
                animation-name: spinner;
                animation-timing-function: linear;
                animation-iteration-count: infinite;
                animation-duration: ${this.speed}s;
                transform-style: preserve-3d;
                text-align:center;
            }
            @keyframes spinner {
                from {
                    transform: rotateY(0deg);
                }
                to {
                    transform: rotateY(-360deg);
                }
            }
        </style>
        <div>
            <slot></slot>
        </div>
            `
    }
  }
)