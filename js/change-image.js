import '../vendor/nouislider/nouislider.js';
import { stringToNumber } from './util.js';

const SCALE_VALUE = {
  MIN: 25,
  MAX: 100,
  STEP: 25
};

const scaleInput = document.querySelector('.scale__control--value');
const scaleDown = document.querySelector('.scale__control--smaller');
const scaleUp = document.querySelector('.scale__control--bigger');
const imagePreview = document.querySelector('.img-upload__preview img');

const updateValue = (value) => {
  scaleInput.value = `${value}%`;
};

const updateButtons = () => {
  const value = stringToNumber(scaleInput);
  scaleDown.disabled = value <= SCALE_VALUE.MIN;
  scaleUp.disabled = value >= SCALE_VALUE.MAX;
};

scaleUp.addEventListener('click', () => {
  let value = stringToNumber(scaleInput);
  value += SCALE_VALUE.STEP;
  imagePreview.style.transform = `scale(0.${value})`;

  if (value >= SCALE_VALUE.MAX) {
    value = SCALE_VALUE.MAX;
    imagePreview.style.transform = 'scale(1)';
  }

  updateValue(value);
  updateButtons();
});

scaleDown.addEventListener('click', () => {
  let value = stringToNumber(scaleInput);
  value -= SCALE_VALUE.STEP;

  if (value <= SCALE_VALUE.MIN) {
    value = SCALE_VALUE.MIN;
  }

  updateValue(value);
  imagePreview.style.transform = `scale(0.${value})`;
  updateButtons();
});

updateButtons();

export {imagePreview};
