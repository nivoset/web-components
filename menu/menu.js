import style from "./menu-style.js";

const menuItems = [
	{ address: "/attribute-input/index.html", label: "Attributes" },
	{ address: "/template/index.html", label: "Template" },
	{ address: "/slot/index.html", label: "Slot" },,
	{ address: "/template-rotation/index.html", label: "Template-rotation" },
	{ address: "/slot-advanced/index.html", label: "Advanced Slot" },
]

customElements.define('menu-bar',
  class MenuBar extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({mode: 'open'})
      this.shadowRoot.innerHTML = `${style}
      <div id="menu-bar">
			<div id="menu">
				<div id="bar1" class="bar"></div>
				<div id="bar2" class="bar"></div>
				<div id="bar3" class="bar"></div>
			</div>
			<nav>
				<ul class="nav" id="nav">
					${menuItems.map(({address, label}) => `<li><a href="${address}">${label}</a></li>`).join("\r\n")}
				</ul>
			</nav>
		</div>
		<div class="menu-bg" id="menu-bg"></div>
		<div id="display-area"><slot></slot></div>
	  `
	  this.shadowRoot.querySelector("#menu").addEventListener("click", () => {
		this.shadowRoot.getElementById("menu").classList.toggle("change");
		this.shadowRoot.getElementById("nav").classList.toggle("change");
		
		this.shadowRoot.getElementById("menu-bg").classList.toggle("change-bg");
	  });
    }
  }
);