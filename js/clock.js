const clock = document.querySelector("#clock");

function prettyNumber(num) {
  const temp = num.toString();
  return temp.padStart(2, "0");
}

function getClock() {
  const date = new Date();
  const hours = prettyNumber(date.getHours());
  const minutes = prettyNumber(date.getMinutes());
  const seconds = prettyNumber(date.getSeconds());
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
