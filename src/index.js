import './styles/style.css';
import './styles/main.css';
import './styles/overlay.css';
import './styles/medias.css';
import { closeOverlay, toggleOverlay } from './modules/functions'
import loadImages, { loadHomeImages } from './modules/loadImages';
import home from './modules/home';
import about from './modules/about';
import gallery from './modules/gallery';

const container = document.querySelector('.content-container');


document.addEventListener('DOMContentLoaded', () => {
    loadImages();
    container.innerHTML = home();
    loadHomeImages();
    console.log('page loaded');
})

const homeNavBtn = document.querySelectorAll('.homeNavBtn');
const aboutNavBtn = document.querySelectorAll('.aboutNavBtn');
const galleryNavBtn = document.querySelectorAll('.galleryNavBtn');
const menuBtn = document.querySelector('.menu-button');

menuBtn.addEventListener('click', () => {
    console.log('menu button was clicked');
    toggleOverlay();
});


homeNavBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.dataset.info === 'menu') {
            closeOverlay();
        }
        container.innerHTML = home();
        loadHomeImages();
    });
});

aboutNavBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.dataset.info === 'menu') {
            closeOverlay();
        }
        container.innerHTML = about();
    });
});

galleryNavBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.dataset.info === 'menu') {
            closeOverlay();
        }
        container.innerHTML = about();
    });
});