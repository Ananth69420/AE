const btn = document.getElementById("revealBtn");
const message = document.getElementById("message");

btn.addEventListener("click", () => {
  message.classList.remove("hidden");
  message.classList.add("reveal");
  btn.style.display = "none";
});
const audio = document.querySelector("audio");
btn.addEventListener("click", () => {
  audio.play(); // triggers audio after user interaction
});
