function playSound(event) {
  // need to access event.keyCode for charCode
  const keyCode = event.keyCode;
  const audio = document.querySelector(`audio[data-key = "${keyCode}"]`);
  const key = document.querySelector(`.key[data-key = "${keyCode}"]`);

  // error handling - if wrong key is pressed
  if (!audio || !key) return;
  
  // update key element styling
  key.classList.add("playing");

  // error handling - if key is pressed quickly in succession
  audio.currentTime = 0;
  // play audio
  audio.play();
}

// to handle removing "playing" from key class names (two ways)
// MY WAY:
// window.addEventListener("keyup", (event) => {
//   // console.log(event);
//   const keyCode = event.keyCode;
//   const audio = document.querySelector(`audio[data-key = "${keyCode}"]`);
//   const key = document.querySelector(`.key[data-key = "${keyCode}"]`);

//   // update key element styling
//   key.classList.remove("playing");
// })

// WES BOS' WAY:
function removeTransition(event) {
  if (event.propertyName !== "transform") return;
  this.classList.remove("playing");
}



window.addEventListener("keydown", playSound)

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition))