function showDate() {
  const dates = document.querySelector('.date');
  const date = new Date();
  const options = {weekday: 'long', month: 'long', day: 'numeric', timeZoneName: 'short'};
  const currentDate = date.toLocaleDateString('ru-Ru', options);
  dates.textContent = currentDate;
}

function showTime() {
  const time = document.querySelector('.time');
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  time.textContent = currentTime;

  showDate()

  setTimeout(showTime, 1000);
};

showTime();
