import {loadImagesToContainer, getAllImages} from './functions';

const allImagesContainerSelector = {
    "./logo.png": ".logo",
    "./logo-orange.png": ".footer-image",
}

const allHomeImagesContainerSelector = {
    "./home-section-1.png": ".home-section-1-image",
    "./hamburger.png": ".home-section-2-image",
    "./home-section-3.png" : ".home-section-3-image",
    "./home-section-4.png" : ".home-section-4-image",
}

export default function loadImages() {
    const allImagesPath = getAllImages();
    // console.log(allImagesPath);

    loadImagesToContainer(allImagesContainerSelector, allImagesPath);
}

export function loadHomeImages() {
    const imagePaths = getAllImages();
    loadImagesToContainer(allHomeImagesContainerSelector, imagePaths);
}