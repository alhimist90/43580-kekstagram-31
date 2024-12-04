const SIMILAR_DESCRIPTION_PHOTOS_COUNT = 25;

const objectId = {
  MIN: 1,
  MAX: 25
};

const countLikes = {
  MIN: 15,
  MAX: 200
};

const countComments = {
  MIN: 0,
  MAX: 30
};

const idPhoto = {
  MIN: 1,
  MAX: 25
};

const idAvatar = {
  MIN: 1,
  MAX: 6
};

const description = [
  'Кот',
  'Женщина',
  'Мужчина',
  'Крутые парни',
  'Дети',
  'Карандаш',
  'Ручка',
  'Мышка',
  'Репка',
  'Словарь',
];

const messageComments = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const nameComments = [
  'Валентина',
  'Карло',
  'Пабло',
  'Тони',
  'ДИмка',
  'Настя',
  'Жакан',
  'Аллик',
  'Лев',
  'Тигр',
];

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

const generateRandomIdComments = getRandomIdFromRange(1, 100);

const createComments = () => {
  const randomIdAvatar = getRandomInteger(idAvatar.MIN, idAvatar.MAX);
  const randomMessage = getRandomArrayElement(messageComments);
  const randomName = getRandomArrayElement(nameComments);

  return {
    id: generateRandomIdComments(),
    avatar: `img/avatar-${randomIdAvatar}.svg`,
    message: randomMessage,
    name: randomName,
  };

};

const generatePhotoId = getRandomIdFromRange(idPhoto.MIN, idPhoto.MAX);
const generateObjectId = getRandomIdFromRange(objectId.MIN, objectId.MAX);

const createDescriptionPhoto = () => {
  const randomDescription = getRandomArrayElement(description);
  const randomLikes = getRandomInteger(countLikes.MIN, countLikes.MAX);
  const randomComments = getRandomInteger(countComments.MIN, countComments.MAX);

  return {
    id: generateObjectId(),
    url: `photos/${generatePhotoId()}.jpg`,
    description: randomDescription,
    likes: randomLikes,
    comments: Array.from({length: randomComments}, createComments),
  };
};

const similarDescriptionPhotos = Array.from({length: SIMILAR_DESCRIPTION_PHOTOS_COUNT}, createDescriptionPhoto);

console.log(similarDescriptionPhotos);
