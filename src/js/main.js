import MainSlider from './modules/slider/slider-main';
import MiniSlider from './modules/slider/slider-mini';
import VideoPlayer from './modules/playVideo';
import Diffeence from './modules/difference';
// import Mask from './modules/mask';
import Form from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    const slider = new MainSlider({
        container : '.page',
        btns : 'a.next'
    });
    slider.render();

    const modulePageSlider = new MainSlider({
        container : '.moduleapp',
        btns : 'a.next',
        next: '.nextmodule',
        prev : '.prevmodule'
    });
    modulePageSlider.render();

    const showUpSlider = new MiniSlider({
        container : '.showup__content-slider',
        next: '.showup__next',
        prev : '.showup__prev',
        activeClass: 'card-active',
        animate: true
    });
    showUpSlider.init();

    const modulesSlider = new MiniSlider({
        container : '.modules__content-slider',
        next: '.modules__info-btns .slick-next',
        prev : '.modules__info-btns .slick-prev',
        activeClass: 'card-active',
        animate: true,
        autoplay: true
    });
    modulesSlider.init();

    const feedSlider = new MiniSlider({
        container : '.feed__slider',
        next: '.feed__slider .slick-next',
        prev : '.feed__slider .slick-prev',
        activeClass: 'feed__item-active'
    });
    feedSlider.init();

    new VideoPlayer('.showup .play', '.overlay').init();
    new VideoPlayer('.module__video-item .play', '.overlay').init();

    new Diffeence('.officerold', '.officernew', '.officer__card-item').init();

    new Form('form').init();
});


