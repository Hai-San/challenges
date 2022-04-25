<template>
    <main class="pageHome">
        <section class="pageHome_slideOne">
            <div class="pageHome_header">
                <h1 class="pageHome_header_title">
                    Lorem ipsum
                </h1>
                <p class="pageHome_header_text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
                <a
                    class="pageHome_header_scrollButton"
                    href="#pageHome_slideThree"
                    title="Clique para rolar até a segunda sessão"
                >
                    <img
                        aria-disabled="true"
                        src="@assets/arrow-down-dark.svg"
                        alt="Seta para baixo"
                    >
                </a>
            </div>
            <div class="pageHome_slideOne_container">
                <SlideOne />
            </div>
        </section>

        <section
            id="pageHome_slideThree"
            class="pageHome_slideThree"
        >
            <div class="pageHome_slideThree_container">
                <SlideThree />
            </div>
        </section>

        <section class="pageHome_info">
            <div class="pageHome_info_container">
                <div class="pageHome_info_imageContainer">
                    <img
                        class="pageHome_info_image"
                        :src="slideImg"
                        alt="Lorem ipsum"
                    >
                </div>
                <div class="pageHome_info_content">
                    <h2 class="pageHome_info_title">
                        Lorem ipsum
                    </h2>
                    <div class="pageHome_info_text">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                        </p>
                        <b>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                        </b>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="pageHome_accordion">
            <div class="pageHome_accordion_container">
                <Accordion />
            </div>
        </section>
        <section class="pageHome_contact">
            <div class="pageHome_contact_container">
                <ContactForm />
            </div>
        </section>        
    </main>
    <Footer />
</template>

<script>
import SlideOne from '@/components/SlideOne.vue'
import SlideThree from '@/components/SlideThree.vue'
import Accordion from '@/components/Accordion.vue'
import ContactForm from '@/components/ContactForm.vue'
import Footer from '@/components/Footer.vue'

import slideImg from '@assets/slider-image-500x500.jpg'

export default {
    name: 'PageHome',
    components: {
        SlideOne,
        SlideThree,
        Accordion,
        ContactForm,
        Footer
    },
    setup() {
        return {
            slideImg
        }
    }
}
</script>

<style lang="scss">
@use '@/styles/tools/convertPxToVh.scss' as *;
@use '@/styles/utils/layout.scss' as *;
@use '@/styles/utils/fonts.scss' as *;
@use '@/styles/tokens/layout.scss' as *;
@use '@/styles/tokens/colors.scss' as *;
@use '@/styles/tokens/spacing.scss' as *;
@use '@/styles/tools/interactions.scss' as *;

.pageHome {
	display: flex;
	align-items: center;
	flex-direction: column;

	width: 100%;
}

.pageHome_slideOne {
	position: relative;

	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;

	width: 100%;

	.slideOne {
		height: 100%;

		.swiper {
			height: 100%;
		}

		.slideOne_slide {
			height: 100%;
		}

		.slideOne_picture {
			height: 100%;
		}
	}
}

.pageHome_slideOne_container {
	display: flex;
	align-items: center;
	justify-content: center;

	width: 100%;
	height: 100vh;
}

.pageHome_header {
	position: absolute;
	z-index: 2;

	display: flex;
	align-items: center;
	flex-direction: column;

	width: 100%;
	padding-top: $spacing-vh-xxl;
}

.pageHome_header_title {
	@extend %font_xxxl_bold;

	color: $color-primary;

	text-align: center;
	text-transform: uppercase;
}

.pageHome_header_text {
	@extend %font_md_bold;
	
	margin-top: $spacing-vh-sm;

	color: $color-primary-dark;

	text-align: center;
}

.pageHome_header_scrollButton {
	margin-top: $spacing-vh-xl;

	transition: transform ease-in-out 220ms;

	will-change: transform;

	@include interaction_full {
		transform: translateY(7%);
	}
}

.pageHome_slideThree {
	display: flex;
	justify-content: center;

	width: 100%;
	padding-top: $spacing-vh-xl;
	padding-bottom: $spacing-vh-xxxl;

	background-color: $color-neutral-low-light;
}

.pageHome_slideThree_container {
	@extend %container;

	justify-content: center;
}

.pageHome_info {
	display: flex;
	justify-content: center;

	width: 100%;	
	padding: $spacing-vh-lg 0px;

	background-color: $color-neutral-high-medium;
}

.pageHome_info_container {
	@extend %container;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;

	gap: pxvh($spacing-xxxl);
}

.pageHome_info_imageContainer {
	position: relative;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-shrink: 0;
	overflow: hidden;

	width: pxvh(386);
	max-width: 100%;

	border: $spacing-vh-md solid  $color-neutral-low-medium;
	border-radius: 50%;

	&::after {
		content: '';

		padding-top: 100%;
	}

}

.pageHome_info_image {	
	position: absolute;

	width: 100%;
	height: 100%;

	object-fit: cover;
}

.pageHome_info_content {
	flex-grow: 1;

	max-width: 52%;
	
}

.pageHome_info_title {
	@extend %font_lg_bold;
	margin-bottom: $spacing-px-lg;

	color: $color-neutral-high-pure;

	text-transform: uppercase;
}

.pageHome_info_text {
	display: flex;
	flex-direction: column;

	gap: $spacing-vh-xs;	

	color: $color-neutral-high-pure;

	p {
		@extend %font_xs_regular_text;		
	}

	b {
		@extend %font_xs_bold_text;
	}
	
}

.pageHome_accordion {
	display: flex;
	justify-content: center;

	width: 100%;
	padding: $spacing-vh-xl 0px;

	background-color: $color-neutral-high-light;
}

.pageHome_accordion_container {
	@extend %container;

	justify-content: center;
}

.pageHome_contact {
	display: flex;
	justify-content: center;

	width: 100%;
	padding: $spacing-vh-xl 0px;

	background: rgb(111,111,111);
	background: linear-gradient(-197.5deg, rgba(111,111,111,1) 50%, rgba(69,69,69,1) 50%);

}

.pageHome_contact_container {
	@extend %container;
}

@media (max-width: $media-desktop-sm) {

	.pageHome_info_content {
		max-width: 100%;
		margin-left: 0px;
	}

	.pageHome_info_title {
		text-align: center;
	}

	.pageHome_info_text {
		text-align: center;	
	}
}
@media (max-width: $media-mobile-xl) {

	.pageHome_header {
		position: relative;

		justify-content: center;

		height: 20vh;
		padding: 0px;

		background-color: $color-neutral-low-light;
	}

	.pageHome_header_title {
		color: $color-neutral-high-pure;
	}

	.pageHome_header_text {
		color: $color-neutral-high-pure;
	}

	.pageHome_header_scrollButton {
		position: absolute;
		bottom: - $spacing-px-xxs;

		transform: translateY(100%);
	}

	.pageHome_slideOne_container {
		height: 80vh;
	}

	.pageHome_info_container {
		gap: pxvh($spacing-md);
	}
}
</style>
