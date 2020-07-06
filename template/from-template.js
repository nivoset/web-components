
customElements.define('from-template', class FromTemplate extends HTMLElement {
	constructor() {
		super();
		let template = document.getElementById('my-paragraph');
		let templateContent = template.content;
		this.attachShadow({mode: 'open'})
			.appendChild(templateContent.cloneNode(true));
	}
});

customElements.define('from-template-2', 
	class extends HTMLElement {
		constructor() {
			super();
			let template = document.getElementById('my-paragraph-2');
			let templateContent = template.content;
			this.attachShadow({mode: 'open'})
				.appendChild(templateContent.cloneNode(true));
	}
});