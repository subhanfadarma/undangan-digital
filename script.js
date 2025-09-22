// ========== Background Music Control ==========
const music = document.getElementById("background-music");
const musicBtn = document.getElementById("music-btn");

if (music && musicBtn) {
  musicBtn.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
      musicBtn.classList.add("is-playing");
    } else {
      music.pause();
      musicBtn.innerHTML = '<i class="fas fa-music"></i>';
      musicBtn.classList.remove("is-playing");
    }
  });
}

// ========== Countdown Timer ==========
function startCountdown() {
  const countdownDate = new Date("2025-12-31T08:00:00").getTime(); // ganti tanggal sesuai acara
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  if (!daysEl) return;

  setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance < 0) {
      daysEl.innerText = "0";
      hoursEl.innerText = "0";
      minutesEl.innerText = "0";
      secondsEl.innerText = "0";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.innerText = days;
    hoursEl.innerText = hours;
    minutesEl.innerText = minutes;
    secondsEl.innerText = seconds;
  }, 1000);
}
startCountdown();

// ========== Scroll Animations ==========
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".slide-up").forEach(el => observer.observe(el));

// ========== Gallery Lightbox ==========
const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.createElement("div");
lightbox.className = "lightbox";
document.body.appendChild(lightbox);

const lightboxImg = document.createElement("img");
lightboxImg.className = "lightbox-img";
lightbox.appendChild(lightboxImg);

const closeBtn = document.createElement("span");
closeBtn.className = "close-btn";
closeBtn.innerHTML = "&times;";
lightbox.appendChild(closeBtn);

galleryItems.forEach(item => {
  item.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = item.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", e => {
  if (e.target !== lightboxImg) {
    lightbox.style.display = "none";
  }
});