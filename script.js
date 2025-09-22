// ========== Musik Background ==========
const musicBtn = document.getElementById("music-btn");
const bgMusic = document.getElementById("bg-music");

let isPlaying = false;

musicBtn.addEventListener("click", () => {
  if (isPlaying) {
    bgMusic.pause();
    musicBtn.innerHTML = '<i class="fas fa-music"></i>';
  } else {
    bgMusic.play();
    musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
  }
  isPlaying = !isPlaying;
});

// ========== Countdown ==========
const targetDate = new Date("Nov 10, 2025 09:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    document.getElementById("countdown-timer").innerHTML = "<p>Acara sudah dimulai 🎉</p>";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown(); // jalankan pertama kali

// ========== Animasi Scroll ==========
const slideUpElements = document.querySelectorAll(".slide-up");

function checkSlide() {
  const triggerBottom = window.innerHeight * 0.85;

  slideUpElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", checkSlide);
window.addEventListener("load", checkSlide);
