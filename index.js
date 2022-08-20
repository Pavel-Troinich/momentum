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
  else if (hours >= 12 && hours < 18) timeOfDay = 'afternoon';
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
  localStorage.setItem('city', city.value);
};

function getLocalItem() {
  if(localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
    city.value = localStorage.getItem('city');
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
}

setBG();

function slideNext() {
  (randomNum === 20) ? randomNum = 1 : randomNum++;
  setBG();
};

function slidePrev() {
  (randomNum === 1) ? randomNum = 20 : randomNum--;
  setBG();
};

const nextBtn = document.querySelector('.slide-next');
const prevBtn = document.querySelector('.slide-prev');

nextBtn.addEventListener('click', slideNext);
prevBtn.addEventListener('click', slidePrev);

// Weather

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');

const city = document.querySelector('.city');
city.addEventListener('change', getWeather);

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=4311e3e2747fbe3f5dadc9a4fee1bec0&units=metric`;
  const res = await fetch(url);
  const data = await res.json();

  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp}°C`;
  weatherDescription.textContent = `${data.weather[0].main}`
  wind.textContent = `Wind ${data.wind.speed} m/s`;
  humidity.textContent = `Hum. ${data.main.humidity}%`;
};

getWeather();

