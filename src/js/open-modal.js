import { containerImages } from './gallery-creation';
export const lightBox = document.querySelector(".lightbox");
export const openModal = document.querySelector('.lightbox__image');

containerImages.addEventListener('click', onClick);

function onClick(evt) { 
   evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  lightBox.classList.add("is-open");
  openModal.src = evt.target.dataset.source;
  openModal.alt = evt.target.alt;

};
