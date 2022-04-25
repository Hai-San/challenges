export default class Accordion {
    constructor() {
        this.activeClass = 'is_active';
    }

    init({ containerId = 'accordion' } = {
        containerId: undefined
    }) {
        this.containerId = containerId;
        this.container = document.getElementById(this.containerId);
        this.buttons = document.querySelectorAll(`#${this.containerId} .js_accordion_button`);
		
        if (this.buttons.length > 0) {
            this.enableAccordion();
        }
    }
	
    enableAccordion() {
        this.buttons.forEach((button) => {
            if (!button.classList.contains('disabled')) {
                button.addEventListener('click', (event) => {
                    const parent = document.getElementById(button.dataset.parent);

                    if (parent.classList.contains(this.activeClass)) {
                        parent.classList.remove(this.activeClass);
                        button.setAttribute('aria-expanded', false);
                    } else {
                        this.disableAll();
                        parent.classList.add(this.activeClass);
                        button.setAttribute('aria-expanded', true);
                    }
                });
            }
        });
    }
	
    disableAll() {
        this.activeButtons = document.querySelectorAll(`#${this.containerId} [aria-expanded="true"]`);

        if (this.activeButtons.length > 0) {
            this.activeButtons.forEach(button => button.click());
        }
    }
}
