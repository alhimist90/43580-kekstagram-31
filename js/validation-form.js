import '../vendor/pristine/pristine.min.js';
import {getLowerCaseArray} from './util.js';

const MAX_LENGTH_ARRAY_HASHTAG = 5;

const form = document.querySelector('#upload-select-image');
const hashtagInput = form.querySelector('.text__hashtags');
const regexpHashtag = /^#[a-zа-яё0-9]{1,19}$/i;

// create the pristine instance
const pristine = new Pristine(form, {
  // class of the parent element where the error/success class is added
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  successClass: 'has-success',
  // class of the parent element where error text element is appended
  errorTextParent: 'img-upload__field-wrapper',
  // type of element to create for the error text
  errorTextTag: 'div',
  // class of the error text element
  errorTextClass: 'text-help'
});

const validateHashtag = (value) => {
  if (value.trim() === '') {
    return true;
  }

  const hashtagArray = value.split(/\s+/);
  if (hashtagArray.length > MAX_LENGTH_ARRAY_HASHTAG) {
    return false;
  }

  const uniqueHashtags = new Set(hashtagArray);
  if (uniqueHashtags.size !== hashtagArray.length) {
    return false;
  }

  return hashtagArray.every((hashtag) => regexpHashtag.test(hashtag));
};

const errorHashtagMessage = (value) => {
  const hashtagArray = value.split(/\s+/);
  if (hashtagArray.length > MAX_LENGTH_ARRAY_HASHTAG) {
    return 'Не более 5 хештегов';
  }
  const hashtagArrayLowerCase = getLowerCaseArray(hashtagArray);
  const uniqueHashtags = new Set(hashtagArrayLowerCase);
  if (uniqueHashtags.size !== hashtagArray.length) {
    return 'Хештеги должны быть уникальными';
  }

  return 'Хештег невалиден';
};

pristine.addValidator(hashtagInput, validateHashtag, errorHashtagMessage);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

