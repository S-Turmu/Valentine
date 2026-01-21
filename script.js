function moveRandomEl(elm) {
  elm.style.position = "fixed"; 
  
  // Дэлгэцийн хэмжээг тооцох
  const padding = 20;
  const maxX = window.innerWidth - elm.clientWidth - padding;
  const maxY = window.innerHeight - elm.clientHeight - padding;

  // Санамсаргүй байрлал (0-ээс дэлгэцийн төгсгөл хүртэл)
  const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
  const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

  elm.style.left = randomX + "px";
  elm.style.top = randomY + "px";
}

const moveRandom = document.querySelector("#move-random");

// Утас дээр (Хуруугаар хүрэхэд л шууд зугтана)
moveRandom.addEventListener("touchstart", function (e) {
  e.preventDefault(); // "Yes" дээр давхар дарагдахаас сэргийлнэ
  moveRandomEl(e.target);
}, { passive: false });

// Хулганатай үед (Desktop)
moveRandom.addEventListener("mouseenter", function (e) {
  moveRandomEl(e.target);
});

// Click хийх оролдлогыг хаах
moveRandom.addEventListener("click", function (e) {
  e.preventDefault();
});
