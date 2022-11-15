import Slider from "./modules/slider";
import VideoPlayer from "./modules/playVideo";

window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    const slider = new Slider('.slider', '.next');
    slider.render();

    const player = new VideoPlayer('.showup .play', '.overlay');
    player.init();
});

