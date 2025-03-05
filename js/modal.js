import { listPicture } from './render.js';
import { renderModalPhoto } from './render_photo.js';
import { isEscapeKey } from './util.js';

const bigPicture = document.querySelector('.big-picture');
const closeButtonPhoto = document.querySelector('.big-picture__cancel');

const countComment = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    // eslint-disable-next-line no-use-before-define
    closeModalPhoto();
  }
};

const openModalPhoto = (evt) => {
  evt.preventDefault();
  if (evt.target.closest('.picture')) {
    bigPicture.classList.remove('hidden');

    countComment.classList.add('hidden');
    commentsLoader.classList.add('hidden');

    document.querySelector('body').classList.add('modal-open');

    renderModalPhoto(evt);

    document.addEventListener('keydown', onDocumentKeydown);
  }
};

const closeModalPhoto = () => {
  bigPicture.classList.add('hidden');

  document.querySelector('body').classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
};

listPicture.addEventListener('click', openModalPhoto);
closeButtonPhoto.addEventListener('click', closeModalPhoto);
