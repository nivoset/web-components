
import OPERATIONS from "./operations.js"

export default class {
  constructor(onUpdate) {
    this.onUpdate = onUpdate;
    this.clear();
    this.keyEvent = (event) => {
      const { key } = event.detail;
      switch (key) {
        case "=":
          console.log("equals");
          this.equals(); 
          break;
        case "%":
          this.percent(); 
          break;
        case ".":
          this.addDot(); 
          break;
        case "C": 
          this.clear(); 
          break;
        case "+": 
        case "-": 
        case "÷": 
        case "x": 
          this.setOperator(key);
          break;
        case "+/-":
          this.sign();
          break;
        default:
          this.addDigit(key);
      }
    }
  }
  fireUpdate(change) {
    if (this.onUpdate) this.onUpdate(this.current, change);
  }
  sign() {
    if (this.current.includes("-"))
      this.current = this.current.slice(1);
    else
      this.current = `-${this.current}`
    this.fireUpdate("sign");
  }
  get clear() { this.clear() }
  clear() {
    this.current = "0";
    this.previous = null;
    this.operator = null;
    this.clearOnType = true;
    this.fireUpdate("clear");
  }
  addDigit(digit) {
    if (this.clearOnType) {
      this.current = this.current.includes("-") ? '-' : '';
      this.clearOnType = false;
    }
    this.current = `${this.current}${digit}`;
    this.fireUpdate(digit);
  }
  addDot() {
    if (!this.current.includes('.')) {
      if (this.current === '0') {
        this.clearOnType = false;
      }
      this.addDigit('.');
    }
  }
  setOperator(operation) {
    if (this.operator) this.equals();
    this.operator = operation;
    this.previous = this.current;
    this.current = "0";
    this.clearOnType = true;
    this.fireUpdate(operation);
  }
  percent() {
    this.current = `${parseFloat(this.current/100)}`;
    this.fireUpdate("%");
  }
  equals() {
    if (this.previous === null || !OPERATIONS.has(this.operator)) return;
    this.current = `${
      OPERATIONS.get(this.operator)(
        parseFloat(this.previous),
        parseFloat(this.current)
      )
    }`;
    this.previous = null;
    this.operator = null;
    this.clearOnType = true;
    this.fireUpdate("=");
  }
  backspace() {
    this.current = this.current.slice(0,-1);
    if (!this.current.length) {
      this.current = "0";
      this.clearOnType = true;
    }
  }
}