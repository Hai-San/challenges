<template>
    <div class="slideThree">
        <div class="slideThree_nav slideThree_nav_prev" />
        <swiper
            :slides-per-view="3"
            :space-between="30"
            :navigation="{nextEl: '.slideThree_nav_next', prevEl: '.slideThree_nav_prev'}"
            :lazy="true"
            :breakpoints="{
                '0': {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 10,
                },
                '480': {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 20,
                },
                '720': {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 30,
                },
            }"
            :modules="modules"
        >
            <swiper-slide
                v-for="(item, index) in slideItens"
                :key="item.title + index"
                class="slideThree_slide"
            >
                <div class="slideThree_imageContainer">
                    <img
                        class="slideThree_image swiper-lazy"
                        :data-src="item.imgUrl"
                        :alt="item.title"
                    >
                    <div
                        class="swiper-lazy-preloader swiper-lazy-preloader-light"
                    />
                </div>
                <h3 class="slideThree_title">
                    {{ item.title }}
                </h3>
                <p class="slideThree_description">
                    {{ item.description }}
                </p>                
            </swiper-slide>
        </swiper>
        <div class="slideThree_nav slideThree_nav_next" />
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Lazy, A11y } from 'swiper'
import 'swiper/css'
import 'swiper/scss/lazy'
import 'swiper/css/navigation'
import slideImg from '@assets/slider-image-300x200.jpg'

export default {
    name: 'SlideThree',
    components: {
        Swiper,
        SwiperSlide
    },
    setup() {
        const slideItens = [
            {
                imgUrl: slideImg,
                title: 'Lorem ipsum',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
            },
            {
                imgUrl: slideImg,
                title: 'Lorem ipsum',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
            },
            {
                imgUrl: slideImg,
                title: 'Lorem ipsum',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
            },
            {
                imgUrl: slideImg,
                title: 'Lorem ipsum',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
            },
            {
                imgUrl: slideImg,
                title: 'Lorem ipsum',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
            },
            {
                imgUrl: slideImg,
                title: 'Lorem ipsum',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
            },
            {
                imgUrl: slideImg,
                title: 'Lorem ipsum',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
            },
            {
                imgUrl: slideImg,
                title: 'Lorem ipsum',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
            },
            {
                imgUrl: slideImg,
                title: 'Lorem ipsum',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
            }
        ]
        return {
            slideItens,
            modules: [ Navigation, Lazy, A11y ]
        }
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

.slideThree {
	display: flex;
	align-items: center;
	justify-content: center;

	width: 100%;

	.swiper {
		width: 1025px;
		max-width: 85%;
		margin: 0px $spacing-vh-md;

		.swiper-notification {
			display: none;
		}
	}
}

.slideThree_nav {
	align-self: flex-start;

	width: 50px;
	height: 38px;
	margin-top: pxvh(80);

	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;

	transition: transform ease-in-out 250ms;

	cursor: pointer;

	will-change: transform;
}

.slideThree_nav_prev {
	background-image: url('@assets/arrow-left-light.svg');		

	@include interaction_full {
		transform: translateX(-7%);
	}
}

.slideThree_nav_next {
	background-image: url('@assets/arrow-right-light.svg');	

	@include interaction_full {
		transform: translateX(7%);
	}
}

.slideThree_slide {
	display: flex;
	align-items: center;
	flex-direction: column;
	overflow: hidden;
}

.slideThree_imageContainer {
	position: relative;

	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;

	width: 100%;
	max-width: 300px;

	background-color: $color-neutral-high-medium;
	border: $spacing-px-xxs solid $color-neutral-high-medium;

	&::after {
		content: '';

		padding-top: 56.25%;
	}
}

.slideThree_image {
	position: absolute;

	width: 100%;
	height: 100%;

	opacity: 0;

	object-fit: cover;

	&.swiper-lazy-loaded {
		opacity: 1;
	}
}

.slideThree_title {
	@extend %font_md_bold;

	margin-top: $spacing-px-xxxs;

	color: $color-neutral-high-pure;

	text-align: center;
	text-transform: uppercase;
}

.slideThree_description {
	@extend %font_xs_regular_text;

	margin-top: $spacing-px-xs;

	color: $color-neutral-high-pure;

	text-align: center;
}

@media (max-width: $media-mobile-xl) {

	.slideThree {
		flex-wrap: wrap;

		gap: $spacing-vh-xl;

		.swiper {
			max-width: 100%;
		}
	}

	.slideThree_nav {
		margin-top: 0px;
	}

	.slideThree_nav_prev {
		order: 2;
	}

	.slideThree_nav_next {
		order: 3;
	}
}
</style>