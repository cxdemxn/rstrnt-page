import './styles/style.css';
import './styles/main.css';
import './styles/overlay.css';
import './styles/medias.css';
import { closeOverlay, toggleOverlay } from './modules/functions'
import loadImages, { loadHomeImages } from './modules/loadImages';
import tabToPage from './utils/tabToPage'
import home from './modules/home';
import overlay from './modules/overlay';

const container = document.querySelector('.content-container');
const overlayWrapper = document.createElement('div');
    overlayWrapper.innerHTML = overlay();
    document.body.appendChild(overlayWrapper);


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
        tabToPage(btn, 'home');
    });
});

aboutNavBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        tabToPage(btn, 'about');
    });
});

galleryNavBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        tabToPage(btn, 'gallery');
    });
});