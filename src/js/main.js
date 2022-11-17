import MainSlider from './modules/slider/slider-main';
import Slider from "./modules/slider/slider";
import VideoPlayer from "./modules/playVideo";


window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    const mainSlider = new MainSlider({page : '.slider', btns : '.next'});
    mainSlider.render();

    const player = new VideoPlayer('.showup .play', '.overlay');
    player.init();
});

