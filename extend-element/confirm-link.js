customElements.define('confirm-link',
  class extends HTMLAnchorElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.addEventListener("click", e => {
          const result = confirm(
              `Are you sure you want to go to '${this.href}'?`
          );
          if (!result) e.preventDefault();
      });
    }
  }, { 
    extends: "a" 
  }
)