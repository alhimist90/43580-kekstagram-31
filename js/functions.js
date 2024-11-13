const checkMaxLength = (string = '', maxLength = 1) => string.length <= maxLength;

/**********************/
const checkPalindrome = (string = '') => {
  string = string.replaceAll(' ', '').toLowerCase();

  let reversedWord = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversedWord += string[i];
  }

  return reversedWord === string;
};

/**********************/
const getNumber = (string) => {
  const NUMBERS = [0, 1, 2, 3, 4, 5 ,6, 7, 8, 9];

  if (typeof string === 'number') {
    return string;
  }

  let numbers = '';
  for (let i = 0; i <= string.length - 1; i++) {
    for (let j = 0; j <= NUMBERS.length - 1; j++) {
      if(string[i].includes(NUMBERS[j])) {
        numbers += `${NUMBERS[j]}`;
      }
    }
  }

  if (numbers !== '') {
    return Math.round(numbers);
  } else {
    return NaN;
  }

};
