import './styles/style.css';
import './styles/main.css';
import './styles/overlay.css';
import './styles/medias.css';
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
const galleryNavBar = document.querySelector('.galleryNavBtn');
const contactNavBtn = document.querySelector('.contactNavBtn');
const orderNavBar = document.querySelector('.orderNavBtn');
const accountNavBtn = document.querySelector('.accountNavBtn');
const menuBtn = document.querySelector('.menu-button');
// const closeOverlay = document.querySelector('.closeOverlay');

menuBtn.addEventListener('click', () => {
    console.log('menu button was clicked');
    const overlay = document.querySelector('.overlay')
    if (overlay.style.width === '100%') { // closing the menu overlay
        overlay.style.width = '0';
        document.querySelector('#menuOpen').style.display = 'block';
        document.querySelector('#menuClose').style.display = 'none';
        document.body.classList.remove('no-scroll');
    } else {
        overlay.style.width = '100%';
        document.querySelector('#menuOpen').style.display = 'none';
        document.querySelector('#menuClose').style.display = 'block';
        document.body.classList.add('no-scroll');
    }
})

// closeOverlay.addEventListener('click', () => {
//     console.log('close overlay was clicked');
// })

// homeNavBtn.addEventListener('click', () => {
//     console.log('home button was clicked');
//     container.innerHTML = home();
//     loadHomeImages();

// });

homeNavBtn.forEach(btn => {
    const info = btn.dataset.info;
    btn.addEventListener('click', () => {
        console.log(`home was clicked from a ${info} device`);
    })
})

// aboutNavBtn.addEventListener('click', () => {
//     console.log('about button was clicked');
//     container.innerHTML = about();
// });

aboutNavBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('about was clicked');
    });
})
galleryNavBar.addEventListener('click', () => {
    console.log('gallery button was clicked');
    container.innerHTML = gallery();
});
contactNavBtn.addEventListener('click', () => {
    console.log('contact button was clicked');
});
orderNavBar.addEventListener('click', () => {
    console.log('order button was clicked');
});
accountNavBtn.addEventListener('click', () => {
    console.log('account button was clicked');
});



