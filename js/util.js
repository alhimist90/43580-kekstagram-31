const getRandomInteger = (minValue, maxValue) => {
  const lower = Math.ceil(Math.min(Math.abs(minValue), Math.abs(maxValue)));
  const upper = Math.floor(Math.max(Math.abs(minValue), Math.abs(maxValue)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomIdFromRange = (minValue, maxValue) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(minValue, maxValue);
    if (previousValues.length >= (maxValue - minValue + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(minValue, maxValue);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

const getLowerCaseArray = (array) => array.map((value) => value.toLowerCase());

export {getRandomInteger, getRandomIdFromRange, getRandomArrayElement, isEscapeKey, getLowerCaseArray};
