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

function showGreeting() {
  const greeting = document.querySelector('.greeting');
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay = '';
  if (hours >= 0 && hours < 6) timeOfDay = 'night';
  else if (hours >= 6 && hours <= 12) timeOfDay = 'morning';
  else if (hours >= 12 && hours < 18) timeOfDay = 'day';
  else if (hours >= 18 && hours < 24) timeOfDay = 'evening';

  greeting.textContent = `Good ${timeOfDay}`;
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
  else {
    name.value = '!';
  }
};

window.addEventListener("beforeunload", setLocalItem);
window.addEventListener("load", getLocalItem);



