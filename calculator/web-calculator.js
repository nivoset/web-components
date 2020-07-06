import Calculator from "./calculator.js"
import "./calc-display.js";
import "./calc-button.js";

class WebCalculator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open"});
    this.calculator = new Calculator(this.onUpdate());
    this.render();
  }
  static get observedAttributes() { return ["value", "theme", "layout"]; }
  attributeChangedCallback (name, oldValue, newValue) {
    console.log(`${name} changed from ${oldValue} to ${newValue}`);
    this.render();
  }
  set value (newValue) { this.setAttribute("value", newValue) }
  get value () { return this.getAttribute("value") || "0"}

  set theme (newValue) { this.setAttribute("theme", newValue) }
  get theme () { return this.getAttribute("theme") || "light"}

  set layout (newValue) { this.setAttribute("layout", newValue) }
  get layout () { return this.getAttribute("layout") || "standard"}

  connectedCallback() { console.log("Calculator added")}
  disconnectedCallback() { console.log("Calculator removed")}

  onUpdate() {
    return (value, change) => {
      this.value = value;
      this.dispatchEvent(new CustomEvent("update", {
        detail: {
          change,
          value: this.current
        }
      }))
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
      <div id="calculator" class="${this.theme} ${this.layout}">
        <calc-display id="display"  value="${this.value}"></calc-display>
        <calc-button id="clear"     value="C" operator></calc-button>
        <calc-button id="sign"      value="+/-" operator></calc-button>
        <calc-button id="percent"   value="%" operator></calc-button>

        <calc-button id="plus"      value="+" operator></calc-button>
        <calc-button id="minus"     value="-" operator></calc-button>
        <calc-button id="multiply"  value="x" operator></calc-button>
        <calc-button id="divide"    value="÷" operator></calc-button>

        <calc-button id="dot"       value="." operator></calc-button>
        <calc-button id="equal"     value="=" operator></calc-button>

        <calc-button id="button-0" value="0"></calc-button>
        <calc-button id="button-1" value="1"></calc-button>
        <calc-button id="button-2" value="2"></calc-button>
        <calc-button id="button-3" value="3"></calc-button>
        <calc-button id="button-4" value="4"></calc-button>
        <calc-button id="button-5" value="5"></calc-button>
        <calc-button id="button-6" value="6"></calc-button>
        <calc-button id="button-7" value="7"></calc-button>
        <calc-button id="button-8" value="8"></calc-button>
        <calc-button id="button-9" value="9"></calc-button>

      </div>
      <style scoped>
        :root {
          --grid-color: black;
        }
        .dark {
          --display-background-color: #333;
          --display-text-color: white;

          --button-background-color: #353c51;
          --button-text-color: white;

          --operator-background-color: #aa5c00;
          --operator-text-color: white;

          --grid-color: black;
        }
        .light {
          --display-background-color: #333;
          --display-text-color: white;

          --button-background-color: #f2f2f2;
          --button-text-color: black;

          --operator-background-color: orange;
          --operator-text-color: white;

          --grid-color: black;
        }
        #calculator {
          font-size: 40px;
          display: grid;
          background-color: var(--grid-color);
          margin: 0 auto;
          grid-auto-rows: minmax(50px, auto);
        }
        .standard {
          width: 400px;
          grid-template-columns: repeat(4, 1fr);
          grid-template-areas:
            "disp disp disp disp"
            "clr  sign perc divd"
            "sevn eght nine mult"
            "four five six  minus"
            "one  two  thre plus"
            "zero zero dot  eql "
        }
        .long {
          width: 500px;
          grid-template-columns: repeat(5, 1fr);
          grid-template-areas:
            "disp disp disp disp disp"
            "sevn eght nine clr  perc"
            "four five six  mult divd"
            "one  two  thre plus minus"
            "sign zero dot  eql  eql "
        }
        #display { grid-area: disp; }
        #divide { grid-area: divd; }
        #multiply { grid-area: mult; }
        #minus { grid-area: minus; }
        #plus { grid-area: plus; }
        #dot { grid-area: dot; }

        #percent { grid-area: perc; }
        #sign { grid-area: sign; }
        #clear { grid-area: clr; }
        #equal { grid-area: eql; }
        
        #button-0 { grid-area: zero; }
        #button-1 { grid-area: one; }
        #button-2 { grid-area: two; }
        #button-3 { grid-area: thre; }
        #button-4 { grid-area: four; }
        #button-5 { grid-area: five; }
        #button-6 { grid-area: six; }
        #button-7 { grid-area: sevn; }
        #button-8 { grid-area: eght; }
        #button-9 { grid-area: nine; }

      </style>
    `;
    this.shadowRoot.firstElementChild.childNodes
      .forEach(elem => elem.addEventListener("custom-event", this.calculator.keyEvent));
    // this.shadowRoot
    //   .querySelectorAll("calc-button")
    //   .forEach(elem => elem.addEventListener("custom-event", e => {
    //     this.calculator.keyEvent(e);
    //   }));
  }
}

customElements.define("web-calculator", WebCalculator)