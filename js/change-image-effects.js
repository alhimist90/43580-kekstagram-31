const SLIDER_VALUE = {
  RANGE_MIN: 0,
  RANGE_MAX: 1,
  START: 1,
  STEP: 0.1,
  CONNECT: 'lower'
};

const imagePreview = document.querySelector('.img-upload__preview img');
const sliderColorSchemeWrapper = document.querySelector('.img-upload__effect-level');
const sliderColorScheme = document.querySelector('.effect-level__slider');
const effectsList = document.querySelector('.effects__list');
const valueElement = document.querySelector('.effect-level__value');

noUiSlider.create(sliderColorScheme, {
  range: {
    min: SLIDER_VALUE.RANGE_MIN,
    max: SLIDER_VALUE.RANGE_MAX,
  },
  start: SLIDER_VALUE.START,
  step: SLIDER_VALUE.STEP,
  connect: SLIDER_VALUE.CONNECT,
});

const updateChangeEffect = (effect = '', unitValue = '', startValue = SLIDER_VALUE.START, step = SLIDER_VALUE.STEP, minRange = SLIDER_VALUE.RANGE_MIN, maxRange = SLIDER_VALUE.RANGE_MAX) => {
  sliderColorSchemeWrapper.classList.remove('visually-hidden');

  sliderColorScheme.noUiSlider.updateOptions({
    range: {
      min: minRange,
      max: maxRange,
    },
    start: startValue,
    step: step
  });

  sliderColorScheme.noUiSlider.on('update', () => {
    valueElement.value = sliderColorScheme.noUiSlider.get();
    imagePreview.style.filter = `${effect}(${valueElement.value}${unitValue})`;
  });
};

const changeEffect = (evt) => {
  switch (evt.target.id){
    case 'effect-none': {
      imagePreview.removeAttribute('style');
      sliderColorSchemeWrapper.classList.add('visually-hidden');
      break;
    }

    case 'effect-chrome': {
      updateChangeEffect('grayscale');
      break;
    }

    case 'effect-sepia': {
      updateChangeEffect('sepia');
      break;
    }

    case 'effect-marvin': {
      updateChangeEffect('invert', '%', 100, 1, undefined, 100);
      break;
    }

    case 'effect-phobos': {
      updateChangeEffect('blur', 'px', 3, undefined, undefined, 3);
      break;
    }

    case 'effect-heat': {
      updateChangeEffect('brightness', undefined, 3, undefined, 1, 3);
      break;
    }

  }
};

effectsList.addEventListener('change', changeEffect);
