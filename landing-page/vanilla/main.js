import 'swiper/css';
import 'swiper/css/lazy';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.scss';

import slideOne from './js/SlideOne';
import slideThree from './js/SlideThree';
import Accordion from './js/Accordion';
import contactForm from './js/ContactForm';


slideOne.init();
slideThree.init();
contactForm.init();

const accordion = new Accordion();
accordion.init({
    containerId: 'pageHome_accordion'
});
