const destinationDate = "1 january 2021";

const get = id => {
  return document.getElementById(id);
};

const countdown = () => {
  const endDate = new Date(destinationDate);
  const startDate = new Date();

  const milliseconds = endDate - startDate;

  let day, hour, minute, seconds;
  seconds = Math.floor(milliseconds / 1000);
  minute = Math.floor(seconds / 60);
  seconds = seconds % 60;
  hour = Math.floor(minute / 60);
  minute = minute % 60;
  day = Math.floor(hour / 24);
  hour = hour % 24;

  get("days").innerHTML = `${day < 10 ? "0" + day : day}`;
  get("hours").innerHTML = `${hour < 10 ? "0" + hour : hour}`;
  get("minutes").innerHTML = `${minute < 10 ? "0" + minute : minute}`;
  get("seconds").innerHTML = `${seconds < 10 ? "0" + seconds : seconds}`;
};

countdown();

setInterval(function() {
  countdown();
}, 1000);
