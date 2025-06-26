const btn = document.getElementById("revealBtn");
const message = document.getElementById("message");

btn.addEventListener("click", () => {
  message.classList.remove("hidden");
  message.classList.add("reveal");
  btn.style.display = "none";
});
