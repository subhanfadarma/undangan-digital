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
const targetDate = new Date("Nov 15, 2025 09:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    document.getElementById("countdown-timer").innerHTML = "<p>Acara sedang berlangsung 🎉</p>";
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
updateCountdown();

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

// ========== Lightbox Gallery ==========
const gallery = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.getElementById('closeBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function showLightbox(index) {
  currentIndex = index;
  lightbox.style.display = "flex";
  lightboxImg.src = gallery[index].src;
}

function closeLightbox() {
  lightbox.style.display = "none";
}

function showNext() {
  currentIndex = (currentIndex + 1) % gallery.length;
  lightboxImg.src = gallery[currentIndex].src;
}

function showPrev() {
  currentIndex = (currentIndex - 1 + gallery.length) % gallery.length;
  lightboxImg.src = gallery[currentIndex].src;
}

gallery.forEach((img, index) => {
  img.addEventListener("click", () => showLightbox(index));
});

closeBtn.addEventListener("click", closeLightbox);
nextBtn.addEventListener("click", showNext);
prevBtn.addEventListener("click", showPrev);

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});
