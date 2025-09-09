document.addEventListener("DOMContentLoaded", () => {
  // GALLERY SECTION - CAROUSEL AND GRID LOGIC
  const galleryImages = [
    "./imgs/gallery_11.jpg",
    "./imgs/gallery_2.jpg",
    "./imgs/gallery_3.jpg",
    "./imgs/gallery_4.jpg",
    "./imgs/gallery_5.jpg",
    "./imgs/gallery_6.jpg",
    "./imgs/gallery_7.jpg",
    "./imgs/gallery_8.jpg",
    "./imgs/gallery_9.jpg",
    "./imgs/gallery_10.jpg",
    "./imgs/gallery_1.jpg",
    "./imgs/gallery_12.jpg",
    "./imgs/gallery_13.jpg",
    "./imgs/gallery_14.jpg",
    "./imgs/gallery_15.jpg",
    "./imgs/gallery_16.jpg",
    "./imgs/gallery_17.jpg",
    "./imgs/gallery_18.jpg",
    "./imgs/gallery_19.jpg",
    "./imgs/gallery_20.jpg",
    "./imgs/gallery_21.jpg",
  ];

  let currentIndex = 0;

  const carouselView = document.getElementById("carousel-view");

  // LOOP TO ADD IMGS AND CLASS DYNAMICALLY
  if (carouselView) {
    galleryImages.forEach((src, i) => {
      const img = document.createElement("img");
      img.src = src;
      img.loading = "lazy";
      img.classList.add("carousel-img");
      if (i === currentIndex) {
        img.classList.add("active");
      }
      carouselView.appendChild(img);
    });
  }

  // UPDATE AND TOGGLE ACTIVE CLASS FOR TRANSITION EFFECT
  const updateCarousel = () => {
    const allImgs = document.querySelectorAll(".carousel-img");
    allImgs.forEach((img, i) => {
      img.classList.toggle("active", i === currentIndex);
    });
  };

  // NEXT/PREV IMG - % IS CLEVER TRICK TO HAVE IMG CYCLE BACK TO START
  const nextImg = () => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    updateCarousel();
  };

  const prevImg = () => {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    updateCarousel();
  };

  // SWAP TO GRID LAYOUT + CLICK IMG TO GO TO THAT IMG IN CAROUSEL

  const showThumbnails = document.getElementById("show-thumbnails");
  if (showThumbnails) {
    showThumbnails.addEventListener("click", () => {
      const gridView = document.getElementById("grid-view");
      const carouselControl = document.getElementById("carousel-control");

      if (gridView.style.display === "none") {
        gridView.innerHTML = "";
        carouselControl.style.display = "none";

        galleryImages.forEach((src, i) => {
          const img = document.createElement("img");
          img.src = src;
          img.loading = "lazy";
          img.classList.add("thumb");
          img.addEventListener("click", () => {
            carouselControl.style.display = "flex";

            currentIndex = i;
            updateCarousel();
            gridView.style.display = "none";
            carouselView.style.display = "block";
            window.scrollTo({ top: 0, behavior: "smooth" });
          });
          gridView.appendChild(img);
        });
        gridView.style.display = "grid";
        carouselView.style.display = "none";
      } else {
        gridView.style.display = "none";
        carouselView.style.display = "block";
      }
    });
  }

  // ROTATING CHALLENGE
  const challenges = [
    { theme: "Bittersweet", description: "Like burnt caramel or a goodbye at golden hour." },
    { theme: "Negative Space", description: "Let emptiness do the talking." },
    { theme: "Found Geometry", description: "Circles, triangles, symmetry in the wild." },
    { theme: "Texture", description: "Zoom in. Let your viewer feel the surface." },
    { theme: "Solitude", description: "One subject. One mood. One quiet moment." },
    { theme: "Contrast", description: "Light vs dark. Soft vs sharp. Find the tension." },
    { theme: "Motion", description: "Capture movement—blurred, frozen, or implied." },
    { theme: "Reflections", description: "Mirrors, puddles, glass—what’s real and what’s not?" },
    { theme: "Color Story", description: "Pick one color and build a narrative around it." },
    { theme: "Unseen", description: "Photograph something most people overlook." },
    { theme: "Monochrome Mood", description: "One color, many emotions." },
    { theme: "Lines & Layers", description: "Geometry meets depth." },
    { theme: "Shadowplay", description: "Let shadows be the subject." },
    { theme: "Blurred Boundaries", description: "Focus vs abstraction." },
    { theme: "Fragmented", description: "Cropped, broken, or incomplete compositions." },
    { theme: "Negative Emotion Space", description: "Use emptiness to evoke feeling." },
  ];

  const theme = document.getElementById("theme");
  const description = document.getElementById("description");

  if (theme && description) {
    const randomIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomIndex];

    theme.textContent = challenge.theme;
    description.textContent = challenge.description;
  }

  // SCREEN FLASH
  const flash = document.getElementById("screen-flash");

  function triggerFlash() {
    flash.style.opacity = "1";
    setTimeout(() => {
      flash.style.opacity = "0";
    }, 150); // quick flash duration
  }

  // CONTACT FORM SOUND
  const form = document.getElementById("form");
  const cameraSound = document.getElementById("camera-sound");

  if (form) {
    form.addEventListener("submit", (e) => {
      cameraSound.currentTime = 0;
      cameraSound.play();
      triggerFlash();
    });
  }

  // EVENT LISTENERS
  document.getElementById("next").addEventListener("click", nextImg);
  document.getElementById("prev").addEventListener("click", prevImg);
});
