const btn = document.getElementById("revealBtn");
const message = document.getElementById("message");
const loveList = document.getElementById("loveList");
const footnote = document.getElementById("footnote");
const chatContainer = document.getElementById("chatContainer");
const audio = document.querySelector("audio");

const chatLines = [
  "disha, idk how to write shit properly but this is straight from me.",
  "we’ve been through a lot. from random calls to fighting to fixing shit,i still want it all with you.",
  "you’re home to me.",
  "this is just a small reminder of the stuff i love about you. (there’s more which i will be updating)"
];

btn.addEventListener("click", () => {
  message.classList.remove("hidden");
  message.classList.add("reveal");
  btn.style.display = "none";
  audio.play();
  showChatBubbles(0);
  confettiBurst();
});

function showChatBubbles(index) {
  if (index < chatLines.length) {
    const bubble = document.createElement("div");
    bubble.classList.add("chat-bubble");
    bubble.textContent = "";
    chatContainer.appendChild(bubble);

    let i = 0;
    function type() {
      if (i < chatLines[index].length) {
        bubble.textContent += chatLines[index].charAt(i);
        i++;
        setTimeout(type, 25);
      } else {
        setTimeout(() => showChatBubbles(index + 1), 600);
      }
    }
    type();
  } else {
    loveList.classList.remove("hidden");
    footnote.classList.remove("hidden");
  }
}

function confettiBurst() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}

// Heart click effect
const canvas = document.getElementById('heartCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

function drawHeart(x, y, size, alpha) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(size, size);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(0, -3, -5, -15, -25, -15);
  ctx.bezierCurveTo(-55, -15, -55, 22.5, -55, 22.5);
  ctx.bezierCurveTo(-55, 40, -35, 62, 0, 80);
  ctx.bezierCurveTo(35, 62, 55, 40, 55, 22.5);
  ctx.bezierCurveTo(55, 22.5, 55, -15, 25, -15);
  ctx.bezierCurveTo(10, -15, 0, -3, 0, 0);
  ctx.closePath();
  ctx.fillStyle = "rgba(255, 105, 180," + alpha + ")";
  ctx.fill();
  ctx.restore();
}

function animateHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts = hearts.filter(h => h.alpha > 0);
  hearts.forEach(h => {
    drawHeart(h.x, h.y, h.size, h.alpha);
    h.y -= 1;
    h.alpha -= 0.01;
  });
  requestAnimationFrame(animateHearts);
}

canvas.addEventListener("click", (e) => {
  hearts.push({
    x: e.clientX,
    y: e.clientY,
    size: Math.random() * 0.5 + 0.2,
    alpha: 1
  });
});

animateHearts();
