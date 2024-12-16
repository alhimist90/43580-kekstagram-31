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

/**********************/

const separatorTime = (time) => time.split(':');

const checkDurationMeeting = (startDay, endDay, startMeeting, durationMeeting) => {
  const startTime = separatorTime(startDay);
  const endTime = separatorTime(endDay);
  const startMeetingTime = separatorTime(startMeeting);

  const currentDateStartDay = new Date(Date.UTC(2022, 0, 1, startTime[0], startTime[1]));
  const currentDateStartDayMillis = currentDateStartDay.getTime();

  const currentDateEndDay = new Date(Date.UTC(2022, 0, 1, endTime[0], endTime[1]));
  const currentDateEndDayMillis = currentDateEndDay.getTime();

  const currentDateStartMeeting = new Date(Date.UTC(2022, 0, 1, startMeetingTime[0], startMeetingTime[1]));
  const currentDateStartMeetingMillis = currentDateStartMeeting.getTime();

  const durationMeetingMillis = durationMeeting * 60000;

  const currentDateEndMeeting = new Date();
  currentDateEndMeeting.setTime(currentDateEndDayMillis + durationMeetingMillis);
  const currentDateEndMeetingMillis = currentDateStartMeetingMillis + durationMeetingMillis;

  if (currentDateStartMeetingMillis < currentDateStartDayMillis || currentDateEndDayMillis <= currentDateStartMeetingMillis) {
    return false;
  }

  if (currentDateEndMeetingMillis > currentDateEndDayMillis) {
    return false;
  }

  return true;
};
