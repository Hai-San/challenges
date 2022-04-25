import Inputmask from 'inputmask/dist/inputmask.es6';

class ContactForm {
    init() {
        Inputmask({ 
            mask: '(99) 9999-9999[9]',
            greedy: false,
            clearIncomplete: true,
            showMaskOnHover: false
        }).mask('#contactForm_inputPhone');
    }
}

const contactForm = new ContactForm();

export default contactForm;
