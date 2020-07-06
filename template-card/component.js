
class CardTemplate extends HTMLElement {
	constructor() {
		super();
		const {content} = document.querySelector('#card-template');
		this.attachShadow({mode: 'open'})
			.appendChild(content.cloneNode(true));
	}
}

customElements.define('card-template', CardTemplate);