
const background = document.getElementById("background");

const icons = ["💖","💕","💘","🌸","🌹","🌺","💞","💗"];

function createFloatingItem() {
  const span = document.createElement("span");
  span.classList.add("float");
  span.innerText = icons[Math.floor(Math.random() * icons.length)];

  span.style.left = Math.random() * 100 + "vw";
  span.style.fontSize = Math.random() * 20 + 20 + "px";
  span.style.animationDuration = Math.random() * 10 + 8 + "s";

  background.appendChild(span);

  setTimeout(() => {
    span.remove();
  }, 18000);
}

// Genera flores/corazones constantemente
setInterval(createFloatingItem, 400);

let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");
let modal = document.getElementById("modal");

let scale = 1;

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("click", moveNoButton);

function moveNoButton() {
  const padding = 20;

  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = "fixed";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";

  // cada intento hace crecer el SÍ
  scale += 0.15;
  yesBtn.style.transform = `scale(${scale})`;
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("click", moveNoButton);

function moveNoButton() {
  const padding = 20;

  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = "fixed";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";

  // cada intento hace crecer el SÍ
  scale += 0.15;
  yesBtn.style.transform = `scale(${scale})`;
}

yesBtn.addEventListener("click", () => {
  modal.style.display = "flex";

  setTimeout(() => {
    fireworks();
  }, 400);
});


function closeModal() {
  modal.style.display = "none";
}

function fireworks() {
  for (let i = 0; i < 40; i++) {
    const spark = document.createElement("div");
    spark.style.position = "fixed";
    spark.style.width = "8px";
    spark.style.height = "8px";
    spark.style.background = "hsl(" + Math.random() * 360 + ",100%,70%)";
    spark.style.borderRadius = "50%";
    spark.style.left = "50%";
    spark.style.top = "50%";
    spark.style.zIndex = "10";

    document.body.appendChild(spark);

    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 300 + 50;

    spark.animate([
      { transform: "translate(0,0)", opacity: 1 },
      {
        transform: `translate(${Math.cos(angle)*distance}px, ${Math.sin(angle)*distance}px)`,
        opacity: 0
      }
    ], {
      duration: 1200,
      easing: "ease-out"
    });

    setTimeout(() => spark.remove(), 1200);
  }
}

const music = document.getElementById("bgMusic");

document.addEventListener("click", () => {
  if (music.paused) {
    music.volume = 0.4;
    music.play();
    console.log("🎶 Música iniciada");
  }
}, { once: true });
