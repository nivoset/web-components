
class CardTemplate extends HTMLElement {
	constructor() {
		super();
		let template = document.getElementById('card-template');
		let templateContent = template.content;
		this.attachShadow({mode: 'open'})
			.appendChild(templateContent.cloneNode(true));
	}
}

customElements.define('card-template', CardTemplate);