import images from './gallery-items';

/* console.log(images); */
export const containerImages = document.querySelector('.js-gallery');

const createImagesGallary = ({ preview, original, description }) => {
  return `<li class="gallery__item">
  <a class="gallery__link"
  href="${original}">
  <img class="gallery__image"
  src ="${preview}"
  data-source="${original}"
  alt = "${description}"/>
  </a>
  </li>`;
};
const makeItemsGallery = images.map(createImagesGallary).join('');
containerImages.insertAdjacentHTML('beforeend', makeItemsGallery);









  

