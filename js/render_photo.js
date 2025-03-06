import { photosData } from './render.js';

const photoModal = document.querySelector('.big-picture__img img');
const photoLikesCount = document.querySelector('.likes-count');
const photoCommentsCount = document.querySelector('.social__comment-total-count');
const photoDescription = document.querySelector('.social__caption');
const commentsWrapper = document.querySelector('.social__comments');
const commentsLoader = document.querySelector('.comments-loader');
const commentsShownCount = document.querySelector('.social__comment-shown-count');
const fragmentsComments = document.createDocumentFragment();

const createComment = () => {
  const commentElement = document.createElement('li');
  commentElement.classList.add('social__comment');

  const commentImage = document.createElement('img');
  commentImage.classList.add('social__picture');
  commentImage.src = '';
  commentImage.alt = '';
  commentImage.width = '35';
  commentImage.height = '35';

  const commentText = document.createElement('p');
  commentText.classList.add('social__text');

  commentElement.appendChild(commentImage);
  commentElement.appendChild(commentText);

  return commentElement;
};


function loadComments(comments) {

  const ITEMS_PER_PAGE = 5;
  let currentIndex = 0;

  return function () {
    const nextItems = comments.slice(currentIndex, currentIndex + ITEMS_PER_PAGE); // Берём след. N элементов

    nextItems.forEach(({avatar, message, name}) => {
      const comment = createComment();

      const commentImage = comment.querySelector('.social__picture');
      const commentText = comment.querySelector('.social__text');

      commentImage.src = avatar;
      commentImage.alt = name;

      commentText.textContent = message;

      fragmentsComments.appendChild(comment);
    });

    commentsWrapper.appendChild(fragmentsComments);
    currentIndex += ITEMS_PER_PAGE;

    if (currentIndex >= comments.length) {
      commentsShownCount.textContent = comments.length;
      commentsLoader.classList.add('hidden'); // Скрываем кнопку, если элементов больше нет
    } else {
      commentsLoader.classList.remove('hidden');
      commentsShownCount.textContent = currentIndex;
    }
  };

}

let commentsPhotoArray = [];

const renderModalPhoto = (photo) => {
  commentsWrapper.textContent = '';
  fragmentsComments.textContent = '';
  photosData.forEach(({url, description, likes, comments, id}) => {
    if (photo.target.closest(`#photo-id-${id}`)) {
      photoModal.src = url;
      photoLikesCount.textContent = likes;
      photoCommentsCount.textContent = comments.length;
      photoDescription.textContent = description;

      commentsPhotoArray = [...comments];
    }
  });
};

export {renderModalPhoto, loadComments, commentsPhotoArray, commentsLoader};
