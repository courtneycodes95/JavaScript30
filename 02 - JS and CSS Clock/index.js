function setTime() {
  const secondHand = document.querySelector(".second-hand");
  const minHand = document.querySelector(".min-hand");
  const hourHand = document.querySelector(".hour-hand");

  const now = new Date();
  
  const currSecond = now.getSeconds();
  const secondDeg = (currSecond/60) * 360;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;
  
  const currMin = now.getMinutes();
  const minDeg = ((currMin/60) * 360) + ((currSecond/60)*6) + 90;
  minHand.style.transform = `rotate(${minDeg}deg)`;
  
  const currHour = now.getHours();
  const hourDeg = ((currHour/12) * 360) + ((currMin/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

window.setInterval(setTime, 1000);