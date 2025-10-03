document.addEventListener("DOMContentLoaded", function () {
  // Scroll animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("in-view");
      });
    },
    { threshold: 0.1 }
  );
  document
    .querySelectorAll(".section-transition")
    .forEach((el) => observer.observe(el));

  // Custom cursor
  const cursor = document.createElement("div");
  const follower = document.createElement("div");
  cursor.className = "custom-cursor";
  follower.className = "cursor-follower";
  document.body.appendChild(cursor);
  document.body.appendChild(follower);

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
    setTimeout(() => {
      follower.style.left = e.clientX + "px";
      follower.style.top = e.clientY + "px";
    }, 100);
  });

  if (window.matchMedia("(max-width: 768px)").matches) {
    cursor.style.display = "none";
    follower.style.display = "none";
  }

  // Loading animation
  const loadingBar = document.createElement("div");
  loadingBar.className = "loading-bar";
  document.body.appendChild(loadingBar);
  setTimeout(() => {
    loadingBar.style.width = "100%";
    setTimeout(() => {
      loadingBar.style.opacity = "0";
      setTimeout(() => loadingBar.remove(), 300);
    }, 300);
  }, 100);

  // Добавил обработчики для кнопок lux-btn (из luxov2.js)
  const buttons = document.querySelectorAll(".lux-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const deltaX = (x - centerX) / 15;
      const deltaY = (y - centerY) / 15;

      btn.style.transform = `rotateX(${-deltaY}deg) rotateY(${deltaX}deg) scale(1.05)`;
      btn.style.boxShadow = "0 10px 25px rgba(255,255,255,0.2)";
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
      btn.style.boxShadow = "none";
    });
  });
});

// Parallax background effect
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  document.querySelectorAll(".hero-section-one").forEach((section) => {
    section.style.backgroundPosition = `center ${scrolled * 0.3}px`;
  });
});
// Добавить в luxov.js
// Swiper initialization
const heroSwiper = new Swiper(".hero-one-slider", {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  parallax: true,
});
// Video hover functionality
document.querySelectorAll(".hero-section-one").forEach((slide) => {
  const video = slide.querySelector(".slide-video");

  slide.addEventListener("mouseenter", function () {
    video.play().catch((e) => console.log("Video play failed:", e));
  });

  slide.addEventListener("mouseleave", function () {
    video.pause();
    video.currentTime = 0;
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Инициализация Swiper слайдера
  const heroSwiper = new Swiper(".hero-one-slider", {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000, // Автопереключение каждые 5 секунд
      disableOnInteraction: false,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Управление видео при наведении
  function initVideoHover() {
    const slides = document.querySelectorAll(".hero-section-one");

    slides.forEach((slide) => {
      const video = slide.querySelector(".slide-video");

      slide.addEventListener("mouseenter", function () {
        // Воспроизведение видео с обработкой ошибок
        video.play().catch((e) => {
          console.log("Автовоспроизведение видео предотвращено браузером:", e);
        });
      });

      slide.addEventListener("mouseleave", function () {
        video.pause();
        video.currentTime = 0; // Сброс видео в начало
      });
    });
  }

  initVideoHover();

  // Ваш существующий код для анимаций при прокрутке и кастомного курсора
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("in-view");
      });
    },
    { threshold: 0.1 }
  );
  document
    .querySelectorAll(".section-transition")
    .forEach((el) => observer.observe(el));

  // Кастомный курсор (оставьте ваш существующий код)
  const cursor = document.createElement("div");
  const follower = document.createElement("div");
  cursor.className = "custom-cursor";
  follower.className = "cursor-follower";
  document.body.appendChild(cursor);
  document.body.appendChild(follower);

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
    setTimeout(() => {
      follower.style.left = e.clientX + "px";
      follower.style.top = e.clientY + "px";
    }, 100);
  });

  if (window.matchMedia("(max-width: 768px)").matches) {
    cursor.style.display = "none";
    follower.style.display = "none";
  }
});
