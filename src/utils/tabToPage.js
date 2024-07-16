import { closeOverlay } from './../modules/functions';
import { loadHomeImages } from './../modules/loadImages';

import home from './../modules/home';
import about from './../modules/about';
import gallery from './../modules/gallery';



export default function(button, page) {
    const container = document.querySelector('.content-container');
    if (button.dataset.info === 'menu') {
        closeOverlay();
    }

    switch (page) {
        case 'about':
            container.innerHTML = about();
            break;
        case 'home':
            container.innerHTML = home();
            loadHomeImages();
            break;
        case 'gallery':
            container.innerHTML = gallery();
        default:
            break;
    }
}