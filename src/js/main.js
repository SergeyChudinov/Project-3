import Slider from "./modules/slider";

window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    const slider = new Slider('.slider', '.next');
    slider.render();
});

