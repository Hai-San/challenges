import Swiper, { Pagination, Lazy, A11y } from 'swiper';

class SlideOne {
    init() {
        new Swiper('#slideOne_swiper', {
            slidesPerView: 1,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            lazy: true,
            modules: [ Pagination, Lazy, A11y ]
        });
    }
}

const slideOne = new SlideOne();

export default slideOne;
