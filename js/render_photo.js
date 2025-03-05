import { photosData } from './render.js';

const photoModal = document.querySelector('.big-picture__img img');
const photoLikesCount = document.querySelector('.likes-count');
const photoCommentsCount = document.querySelector('.social__comment-total-count');
const photoDescription = document.querySelector('.social__caption');
const commentsWrapper = document.querySelector('.social__comments');
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

const renderModalPhoto = (photo) => {
  commentsWrapper.textContent = '';
  fragmentsComments.textContent = '';
  photosData.forEach(({url, description, likes, comments, id}) => {
    if (photo.target.closest(`#photo-id-${id}`)) {
      photoCommentsCount.classList.add('hidden');

      photoModal.src = url;
      photoLikesCount.textContent = likes;
      photoCommentsCount.textContent = comments.length;
      photoDescription.textContent = description;

      comments.forEach(({avatar, message, name}) => {
        const comment = createComment();

        const commentImage = comment.querySelector('.social__picture');
        const commentText = comment.querySelector('.social__text');

        commentImage.src = avatar;
        commentImage.alt = name;

        commentText.textContent = message;

        fragmentsComments.appendChild(comment);
      });

      commentsWrapper.appendChild(fragmentsComments);
    }
  });
};

export {renderModalPhoto};
