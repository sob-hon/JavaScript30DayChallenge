const keys = document.querySelectorAll(".key");

window.addEventListener("keydown", playSound);

keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});

function playSound(event) {
  const audio = document.querySelector(`audio[data-key = "${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key = "${event.keyCode}"]`);
  if (!audio) {
    return;
  }
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function removeTransition(event) {
  if(event.propertyName != "transform"){
    return;
  }
  this.classList.remove("playing");
}
