<template>
    <div class="slideOne">
        <swiper
            :slides-per-view="1"
            :space-between="0"
            :pagination="{ clickable: true }"
            :lazy="true"
            :modules="modules"
        >
            <swiper-slide
                v-for="(item, index) in slideItens"
                :key="item.title + index"
                class="slideOne_slide"
            >
                <picture class="slideOne_picture">
                    <source
                        class="swiper-lazy"
                        :data-srcset="item.imgUrlSm"
                        media="(max-width: 480px)"
                    >
                    <source
                        class="swiper-lazy"
                        :data-srcset="item.imgUrlMd"
                        media="(max-width: 768px)"
                    >
                    <img
                        class="slideOne_image swiper-lazy"
                        :data-src="item.imgUrl"
                        :alt="item.title"
                    >
                </picture>
                <div
                    class="swiper-lazy-preloader swiper-lazy-preloader-black"
                />
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Lazy, A11y } from 'swiper'
import 'swiper/scss'
import 'swiper/scss/lazy'
import 'swiper/scss/pagination'
import slideImg from '@assets/slider-image-1920x937.jpg'
import slideImgMd from '@assets/slider-image-768x375.jpg'
import slideImgSm from '@assets/slider-image-480x568.jpg'

export default {
    name: 'SlideOne',
    components: {
        Swiper,
        SwiperSlide
    },
    setup() {
        const slideItens = [
            {
                title: 'Lorem ipsum',
                imgUrl: slideImg,
                imgUrlMd: slideImgMd,
                imgUrlSm: slideImgSm
            },
            {
                title: 'Lorem ipsum 2',
                imgUrl: slideImg,
                imgUrlMd: slideImgMd,
                imgUrlSm: slideImgSm
            },
            {
                title: 'Lorem ipsum 3',
                imgUrl: slideImg,
                imgUrlMd: slideImgMd,
                imgUrlSm: slideImgSm
            }
        ]
        return {
            slideItens,
            modules: [ Pagination, Lazy, A11y ]
        }
    }
}
</script>

<style lang="scss">
@use '@/styles/tokens/colors.scss' as *;
@use '@/styles/tokens/border.scss' as *;
@use '@/styles/tokens/spacing.scss' as *;
@use '@/styles/tools/interactions.scss' as *;

.slideOne {
	width: 100%;

	.swiper-pagination {
		bottom: 0px;

		padding: $spacing-vh-sm 0px;

		background-color: $color-background-overlay;
	}

	.swiper-pagination-bullet {
		width: 42px;
		height: 42px;

		opacity: 1;
		background-color: $color-neutral-high-pure;
		border: $border-size-px-lg solid $color-neutral-low-medium;

		transition: background-color ease-in-out 250ms;

		will-change: background-color;

		&.swiper-pagination-bullet-active {
			background-color: $color-primary;
			border-color: $color-neutral-high-pure;
		}

		@include interaction_full {

			&:not(.swiper-pagination-bullet-active) {
				background-color: $color-primary;
			}
		}
	}

	.slideOne_slide {
		display: flex;
	}

	.slideOne_picture {
		width: 100%;
	}

	.slideOne_image {
		width: 100%;
		height: 100%;

		object-fit: cover;
	}
}

</style>