import getHtml from "./render.js"
import "./calc-button.js";

class WebCalculator extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open"});
        this._value = "0";
        window.test = this;

        this.initialRender();
        this.addEvents();
        this.styleVariables = this.shadowRoot.querySelector(".calculator").style;
    }
    static get observedAttributes() {  return ["theme"]; }

    attributeChangedCallback (name, oldVal, newVal) {
        console.log(`${name} changed to ${newVal} from ${oldVal}`)
        switch (name) {
            case "theme": 
                switch (newVal) {
                    case "dark":
                        this.styleVariables.setProperty("--display-background-color", "#333");
                        this.styleVariables.setProperty("--display-text-color", "white");

                        this.styleVariables.setProperty("--button-background-color", " #353C51");
                        this.styleVariables.setProperty("--button-text-color", "#fff");

                        this.styleVariables.setProperty("--operator-background-color", "#aa5c00");
                        this.styleVariables.setProperty("--operator-text-color", "white");

                        break;
                    default:
                        this.styleVariables.setProperty("--display-background-color", "#333");
                        this.styleVariables.setProperty("--display-text-color", "white");

                        this.styleVariables.setProperty("--button-background-color", "#F2F2F2");
                        this.styleVariables.setProperty("--button-text-color", "black");

                        this.styleVariables.setProperty("--operator-background-color", "orange");
                        this.styleVariables.setProperty("--operator-text-color", "white");
                }
                break;
            
        }
    }
    connectedCallback() { console.log("Added"); }
    disconnectedCallback() { console.log("Removed"); }

    addEvents() {
        this.addButtonEvents();
        this.addDotEvent();
        this.addEqualEvent();
        this.addOperatorsEvents();
    }
    addEqualEvent() {
        this.shadowRoot.querySelector("#equal")
            .addEventListener("click", () => console.log("Equals clicked"));
    }
    addOperatorsEvents() {

        this.shadowRoot.querySelector("#minus")
            .addEventListener("click", () => console.log("minus clicked"));
        this.shadowRoot.querySelector("#add")
            .addEventListener("click", () => console.log("add clicked"));
        this.shadowRoot.querySelector("#divide")
            .addEventListener("click", () => console.log("divide clicked"));
        this.shadowRoot.querySelector("#multiply")
            .addEventListener("click", () => console.log("multiply clicked"));
        this.shadowRoot.querySelector("#percent")
            .addEventListener("click", () => console.log("percent clicked"));
        this.shadowRoot.querySelector("#sign")
            .addEventListener("click", () => console.log("sign clicked"));
        this.shadowRoot.querySelector("#clear")
            .addEventListener("click", () => {
                this._value = '0';
                this.updateDisplay();
            });
    }
    addDotEvent() {

        const dot = () => {
            if (this._value.indexOf('.') === -1) {
                this.append('.');
            }
        }
        this.shadowRoot.querySelector(`#dot`)
                .addEventListener('click', dot);
    }
    append(number) {
        if (this._value.indexOf(".") === -1 && this._value === '0') {
            this._value = '';
        }
        if (this.operatorClicked) {
            this._value = '';
            this.operatorClicked = false;
        }
        this._value = `${this._value}${number}`;
        this.updateDisplay();
    }
    addButtonEvents() {
        const buttonEvent = (number) => () => this.append(number);
        [...Array(10).keys()]
            .forEach(i =>this.shadowRoot.querySelector(`#button-${i}`)
                            .addEventListener('click', buttonEvent(i)));
    }
    updateDisplay() {
        this.shadowRoot.querySelector(".display").textContent = this._value;
    }
    initialRender() {
        this.shadowRoot.innerHTML = getHtml(this.theme || "light", this.layout, this.value)
    }

    
}

window.customElements.define("web-calculator", WebCalculator);