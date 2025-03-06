import { listPicture } from './render.js';
import { renderModalPhoto, loadComments, commentsPhotoArray, commentsLoader} from './render_photo.js';
import { isEscapeKey } from './util.js';

const bigPicture = document.querySelector('.big-picture');
const closeButtonPhoto = document.querySelector('.big-picture__cancel');

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

    document.querySelector('body').classList.add('modal-open');

    renderModalPhoto(evt);

    document.addEventListener('keydown', onDocumentKeydown);

    const loadCommentsFunction = loadComments(commentsPhotoArray);

    loadCommentsFunction();

    const loadCommentsClick = () => {
      loadCommentsFunction();
    };

    commentsLoader.addEventListener('click', loadCommentsClick);
  }
};

const closeModalPhoto = () => {
  bigPicture.classList.add('hidden');

  document.querySelector('body').classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);

  const loadCommentsFunction = loadComments(commentsPhotoArray);

  const loadCommentsClick = () => {
    loadCommentsFunction();
  };

  commentsLoader.removeEventListener('click', loadCommentsClick);
};

listPicture.addEventListener('click', openModalPhoto);
closeButtonPhoto.addEventListener('click', closeModalPhoto);

export {closeButtonPhoto};
