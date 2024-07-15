import './styles/style.css';
import './styles/main.css';
import loadImages, { loadHomeImages } from './modules/loadImages';
import home from './modules/home';
import about from './modules/about';
import gallery from './modules/gallery';

loadImages();

const homeNavBtn = document.querySelector('#homeNavBtn');
const aboutNavBtn = document.querySelector('#aboutNavBtn');
const galleryNavBar = document.querySelector('#galleryNavBtn');
const contactNavBtn = document.querySelector('#contactNavBtn');
const orderNavBar = document.querySelector('#orderNavBtn');
const accountNavBtn = document.querySelector('#accountNavBtn');

const container = document.querySelector('.content-container');


homeNavBtn.addEventListener('click', () => {
    console.log('home button was clicked');
    container.innerHTML = home();
    loadHomeImages();

});
aboutNavBtn.addEventListener('click', () => {
    console.log('about button was clicked');
    container.innerHTML = about();
});
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



