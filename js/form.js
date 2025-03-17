import { isEscapeKey } from './util.js';

const loadButtonPhoto = document.querySelector('#upload-file');
const loadFormPhoto = document.querySelector('#upload-select-image');
const loadFormPhotoModal = document.querySelector('.img-upload__overlay');
const closeButtonFormPhotoModal = document.querySelector('#upload-cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    // eslint-disable-next-line no-use-before-define
    closeFormPhotoModal();
    loadFormPhoto.reset();
  }
};

const openFormPhotoModal = () => {
  document.querySelector('body').classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);

  loadFormPhotoModal.classList.remove('hidden');
};

const closeFormPhotoModal = () => {
  document.querySelector('body').classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);

  loadFormPhotoModal.classList.add('hidden');
};

loadButtonPhoto.addEventListener('input', openFormPhotoModal);
closeButtonFormPhotoModal.addEventListener('click', closeFormPhotoModal);
