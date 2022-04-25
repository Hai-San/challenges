import Swiper, { Navigation, Lazy, A11y } from 'swiper';

class SlideThree {
    init() {
        new Swiper('#slideThree_swiper', {
            spaceBetween: 30,
            breakpoints:{
                '0': {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 10
                },
                '480': {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 20
                },
                '720': {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 30
                }
            },
            navigation: {
                nextEl: '.slideThree_nav_next',
                prevEl: '.slideThree_nav_prev'
            },
            lazy: true,
            modules: [ Navigation, Lazy, A11y ]
        });
    }
}

const slideThree = new SlideThree();

export default slideThree;
