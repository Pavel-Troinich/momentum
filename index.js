// swow time and date

function showDate() {
  const dates = document.querySelector('.date');
  const date = new Date();
  const options = {weekday: 'long', month: 'long', day: 'numeric', timeZoneName: 'short'};
  const currentDate = date.toLocaleDateString('en-En', options);
  dates.textContent = currentDate;
}

function showTime() {
  const time = document.querySelector('.time');
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  time.textContent = currentTime;

  showDate()
  showGreeting();

  setTimeout(showTime, 1000);
};

showTime();

// show greeting
function getTimeOfDay() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay = '';
  if (hours >= 0 && hours < 6) timeOfDay = 'night';
  else if (hours >= 6 && hours <= 12) timeOfDay = 'morning';
  else if (hours >= 12 && hours < 18) timeOfDay = 'day';
  else if (hours >= 18 && hours < 24) timeOfDay = 'evening';
  return timeOfDay
}

function showGreeting() {
  const greeting = document.querySelector('.greeting');
  greeting.textContent = `Good ${getTimeOfDay()},`;
};

// get Name
const name = document.querySelector('.name');

function setLocalItem() {
  localStorage.setItem('name', name.value);
};

function getLocalItem() {
  if(localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
  }
};

window.addEventListener("beforeunload", setLocalItem);
window.addEventListener("load", getLocalItem);

// slider

let randomNum;

function getRandomNum() {
  randomNum = Math.floor((Math.random() * 20) + 1);
};

getRandomNum();

function setBG() {
  const timeOfDay = getTimeOfDay();
  const bgNum = randomNum.toString().padStart(2, '0');

  const img = new Image();
  img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
  img.onload = () => {      
    document.body.style.backgroundImage = `url(${img.src})`;
  };
  console.log(img.src);
}

setBG();

function slideNext() {
  if (randomNum === 20) randomNum = 1;
  else randomNum++;
  setBG();
};

function slidePrev() {
  if (randomNum === 1) randomNum = 20;
  else randomNum--;
  setBG();
};

const nextBtn = document.querySelector('.slide-next');
const prevBtn = document.querySelector('.slide-prev');

nextBtn.addEventListener('click', slideNext);
prevBtn.addEventListener('click', slidePrev);