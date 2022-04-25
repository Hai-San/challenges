<template>
    <form
        class="contactForm"
        action=""
    >
        <div class="contactForm_field">
            <label
                class="contactForm_label"
                for="contactForm_inputName"
            >
                <span class="contactForm_label_text">*Nome:</span>
                <input
                    id="contactForm_inputName"
                    class="contactForm_input"
                    type="text"
                    placeholder="Informe seu nome"
                    required
                >
            </label>
        </div>

        <div class="contactForm_field -medium">
            <label
                class="contactForm_label"
                for="contactForm_inputEmail"
            >
                <span class="contactForm_label_text">*E-mail:</span>
                <input
                    id="contactForm_inputEmail"
                    class="contactForm_input"
                    type="email"
                    placeholder="Informe seu e-mail"
                    required
                ></label>
        </div>        

        <div class="contactForm_field -medium">
            <label
                class="contactForm_label"
                for="contactForm_inputPhone"
            >
                <span class="contactForm_label_text">*Telefone:</span>
                <input
                    id="contactForm_inputPhone"
                    ref="inputPhone"
                    class="contactForm_input"
                    type="text"
                    placeholder="(__) ____-____"
                    required
                >
            </label>
        </div>

        <div class="contactForm_field">
            <label
                class="contactForm_label"
                for="contactForm_inputMessage"
            >
                <span class="contactForm_label_text -textarea">*Mensagem:</span>
                <textarea
                    id="contactForm_inputMessage"
                    class="contactForm_input -textarea"
                    name="message"
                    placeholder="Escreva aqui"
                    required
                />
            </label>
        </div>

        <button
            class="contactForm_submit"
            type="submit"
        >
            Enviar
        </button>
    </form>
</template>

<script>
import Inputmask from 'inputmask/dist/inputmask.es6'
import { ref, onMounted } from 'vue'

export default {
    name: 'ContactForm',
    setup() {
        const inputPhone = ref(null)
        onMounted(() => {
            Inputmask({ 
                mask: '(99) 9999-9999[9]',
                greedy: false,
                clearIncomplete: true,
                showMaskOnHover: false
			 }).mask(inputPhone.value)
        })
        
        return {
            inputPhone
        }
    }
}
</script>

<style lang="scss">
@use '@/styles/utils/fonts.scss' as *;
@use '@/styles/tokens/colors.scss' as *;
@use '@/styles/tokens/spacing.scss' as *;
@use '@/styles/tokens/layout.scss' as *;
@use '@/styles/tools/interactions.scss' as *;

.contactForm {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;

	width: 100%;
	gap: $spacing-vh-md;
}

.contactForm_field {
	width: 100%;
	
	&.-medium {
		width: calc(50% - ($spacing-vh-md / 2));
	}
}

.contactForm_label {
	display: flex;
	align-items: center;

	width: 100%;
	padding: $spacing-px-sm;

	background-color: $color-neutral-high-lightest;
	border-radius: 10px;
}

.contactForm_label_text {
	@extend %font_sm_bold;

	margin-right: $spacing-vh-xxxs;

	color: $color-neutral-low-dark;

	&.-textarea {
		align-self: flex-start;

		margin-top: $spacing-px-nano;
	}
}

.contactForm_input {
	@extend %font_sm_regular;
	
	flex-grow: 1;

	color: $color-neutral-low-lightest;
	background-color: transparent;

	&.-textarea {
		min-height: 180px;
	}

	&:-webkit-autofill {

		&:hover,
		&:focus,
		&:active {
			box-shadow: 0 0 0 30px $color-neutral-high-light inset !important;
		}
	}
	

	&:-webkit-autofill {
		box-shadow: 0 0 0 30px $color-neutral-high-light inset !important;

		-webkit-text-fill-color: $color-neutral-low-lightest !important;
	}
}

.contactForm_submit {
	@extend %font_sm_bold;

	padding: $spacing-px-sm $spacing-px-xl;

	color: $color-neutral-low-dark;
	background-color: $color-neutral-high-pure;
	border-radius: 10px;

	text-transform: uppercase;

	transition: color ease-in-out 250ms, background-color ease-in-out 250ms;

	cursor: pointer;

	will-change: color, background-color;

	@include interaction_full {
		color: $color-neutral-high-pure;
		background-color: $color-neutral-low-dark;
	}

}

@media (max-width: $media-mobile-xl) {

	.contactForm_field {

		&.-medium {
			width: 100%;
		}
	}
}
</style>