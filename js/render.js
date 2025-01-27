import {similarDescriptionPhotos} from './data.js';

const listPicture = document.querySelector('.pictures');
const templatePicture = document.querySelector('#picture').content.querySelector('.picture');

const photosData = similarDescriptionPhotos();

const fragmentPhotos = document.createDocumentFragment();

photosData.forEach(({url, description, likes, comments}) => {
  const pictureElement = templatePicture.cloneNode(true);

  const pictureImg = pictureElement.querySelector('.picture__img');
  const pictureLikes = pictureElement.querySelector('.picture__likes');
  const pictureComments = pictureElement.querySelector('.picture__comments');


  pictureImg.src = url;
  pictureImg.alt = description;
  pictureLikes.textContent = likes;
  pictureComments.textContent = comments.length;

  fragmentPhotos.appendChild(pictureElement);
});

listPicture.appendChild(fragmentPhotos);
