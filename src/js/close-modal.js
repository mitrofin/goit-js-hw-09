import { lightBox } from './open-modal';
import { openModal} from './open-modal';
const closeModal = document.querySelector('[data-action="close-lightbox"]');

closeModal.addEventListener('click', onCloseModal);
function onCloseModal(evt) {
  if (evt.target.nodeName === 'IMG') {
    return;
  }
  lightBox.classList.remove('is-open');
  openModal.removeAttribute('src');
  openModal.removeAttribute("alt");
};
