function importAll(r) {
    let images = {};
    r.keys().forEach((key) => (images[key] = r(key)));
    return images;
  }

/**
 * 
 * @param {object} allImagesContainerSelector - holds selector names for every image in allImagesPath. uses the same keys as allImagesPath
 * @param {object} allImagesPath - holds src paths for all images in image folder. uses file name as key in the objrct
 * @param {object} className holds class name(s) to include for all images (optional)
 */
export function loadImagesToContainer(allImagesContainerSelector, allImagesPath, className) {

    for (const fileName in allImagesPath) { // accesses all image paths by their fileName
        if (fileName in allImagesContainerSelector) { // appends image to its respective container if image has a container in the DOM
            const element = document.querySelector(allImagesContainerSelector[fileName]);
            if (element) { // checks if the selector is exists in the DOM
                const image = new Image();
                image.src = allImagesPath[fileName];
                element.appendChild(image);
            }
        }
    }
}

// gets all images in a directory
export function getAllImages() {
    const images = importAll(require.context('./../assets/imgs', false, /\.(png|jpeg|jpg|svg)$/))

    return images;
}