
class FromTemplate extends HTMLElement {
	constructor() {
		super();
		let template = document.getElementById('my-paragraph');
		let templateContent = template.content;

		this.attachShadow({mode: 'open'})
			.appendChild(templateContent.cloneNode(true));
	}
}

customElements.define('from-template', FromTemplate);