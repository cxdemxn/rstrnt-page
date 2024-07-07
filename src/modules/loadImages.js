import {loadImagesToContainer, getAllImages} from './functions';

const allImagesContainerSelector = {
    "./logo.png": ".logo",
    "./home-banner.png": ".home-banner-image",
    "./hamburger.png": ".home-body-section-2",
    "./home-section-3.png" : ".home-section-3-image",
    "./home-section-4.png" : ".home-section-4-image",
}

export default function loadImages() {
    const allImagesPath = getAllImages();
    // console.log(allImagesPath);

    loadImagesToContainer(allImagesContainerSelector, allImagesPath);
}