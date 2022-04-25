<template>
    <ul class="accordion">
        <li
            v-for="(item, index) in accordionItens"
            :key="item.title + index"
            class="accordion_item"
        >
            <h2
                :id="`accordion_label_${index}`"
                class="accordion_label"                
            >
                <button
                    :aria-controls="`accordion_content_${index}`"
                    :aria-expanded="item.status"
                    class="accordion_button"
                    type="button"
                    @click="toggleAccordion(index)"
                >
                    {{ item.title }}
                </button>
            </h2>
            <section
                v-show="item.status"
                :id="`accordion_content_${index}`"
                :aria-labelledby="`accordion_label_${index}`"
                class="accordion_content"
            >
                <img
                    class="accordion_content_image"
                    :src="item.imageUrl"
                    :alt="item.title"
                >
                <p class="accordion_content_text">
                    {{ item.text }}
                </p>
            </section>
        </li>
    </ul>
</template>

<script>
import { ref } from 'vue'
import accordionImg from '@assets/slider-image-300x200.jpg'

export default {
    name: 'Accordion',
    setup() {
        const accordionItens = ref([
            {
                title: 'Lorem ipsum',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
                imageUrl: accordionImg,
                status: false
            },
            {
                title: 'Lorem ipsum',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
                imageUrl: accordionImg,
                status: false
            },
            {
                title: 'Lorem ipsum',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
                imageUrl: accordionImg,
                status: false
            },
            {
                title: 'Lorem ipsum',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
                imageUrl: accordionImg,
                status: false
            }
        ])

        function toggleAccordion(itemIndex) {
            accordionItens.value.map((item, index) => {
                if(itemIndex !== index) {
                    item.status = false
                }
            })

            accordionItens.value[itemIndex].status = !accordionItens.value[itemIndex].status
        }

        return { accordionItens, toggleAccordion }
    }
}
</script>

<style lang="scss">
@use '@/styles/tools/convertPxToVh.scss' as *;
@use '@/styles/utils/fonts.scss' as *;
@use '@/styles/tokens/colors.scss' as *;
@use '@/styles/tokens/spacing.scss' as *;
@use '@/styles/tokens/layout.scss' as *;
@use '@/styles/tools/interactions.scss' as *;

.accordion {
	display: flex;
	align-items: flex-start;
	flex-direction: column;

	width: 100%;
	padding: 0px;
	gap: 1px;
}

.accordion_item {
	display: flex;
	flex-direction: column;
	overflow: hidden;

	width: 100%;

	&:first-of-type {
		
		.accordion_button {
			border-radius: 10px 10px 0px 0px;
		}
	}

	&:last-of-type {
		border-radius: 0px 0px 10px 10px;
	}
}

.accordion_label {
	display: flex;

	width: 100%;
}

.accordion_button {
	@extend %font_md_bold;

	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 100%;
	padding: $spacing-vh-md;

	color: $color-neutral-high-pure;
	background-color: $color-neutral-high-medium;
	border-top: 1px solid transparent;
	border-bottom: 1px solid transparent;

	transition:opacity ease-in-out 250ms;

	cursor: pointer;

	will-change: opacity;

	&::after {
		content: '';

		width: 18px;
		height: 25px;

		background-color: $color-neutral-high-pure;

		-webkit-mask: url('@assets/arrow-down-light.svg');

		mask: url('@assets/arrow-down-light.svg');
		mask-size: contain;
	}

	&[aria-expanded='true'] {
		color: $color-neutral-high-medium;
		background-color: $color-neutral-high-pure;

		&::after {
			background-color: $color-neutral-high-medium;

			-webkit-mask: url('@assets/arrow-up-light.svg');

			mask: url('@assets/arrow-up-light.svg');
		}
	}

	@include interaction_full {
		opacity: .75;
	}
}

.accordion_content {
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;

	width: 100%;
	padding: $spacing-vh-xxs $spacing-vh-md $spacing-vh-md $spacing-vh-md;
	gap: $spacing-vh-lg;

	background-color: $color-neutral-high-pure;
}

.accordion_content_image {
	flex-shrink: 0;

	max-width: pxvh(320);

	border: $spacing-px-xxxs solid  $color-neutral-high-medium;
}

.accordion_content_text {
	@extend %font_xs_regular_text;

	flex-grow: 1;

	width: min-content;
	min-width: 290px;
	

	color:  $color-neutral-high-medium;
}

@media (max-width: $media-mobile-xl) {

	.accordion_content {
		justify-content: center;
	}

	.accordion_content_text {
		text-align: center;
	}
}
</style>