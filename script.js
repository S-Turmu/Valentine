function moveRandomEl(elm) {
  elm.style.position = "fixed"; 
  
  const padding = 20;
  const maxX = window.innerWidth - elm.clientWidth - padding;
  const maxY = window.innerHeight - elm.clientHeight - padding;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  elm.style.left = randomX + "px";
  elm.style.top = randomY + "px";
}

const moveRandom = document.querySelector("#move-random");

// 1. Солих мессежүүдээ энд зарлана
const messages = ["No (You can't catch me!)", "No", "No (Pwease? 🥺)", "No (buru tovch 🥀)", "No (ugu ymu? 🥺)", "darulku ymcn ψ(｀∇´)ψ"];

// 2. Хулганатай үед (Desktop)
moveRandom.addEventListener("mouseenter", function (e) {
  moveRandomEl(e.target);
  // Текстийг санамсаргүйгээр солих
  e.target.innerText = messages[Math.floor(Math.random() * messages.length)];
});

// 3. Утас дээр (Mobile - Touch)
moveRandom.addEventListener("touchstart", function (e) {
  e.preventDefault();
  moveRandomEl(e.target);
  // Утас дээр ч бас текстийг нь солино
  e.target.innerText = messages[Math.floor(Math.random() * messages.length)];
}, { passive: false });

// Click хийхийг хаах
moveRandom.addEventListener("click", function (e) {
  e.preventDefault();
});


