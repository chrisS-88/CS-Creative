document.addEventListener("DOMContentLoaded", () => {
  // GALLERY SECTION - CAROUSEL AND GRID LOGIC
  const galleryImages = [
    "./imgs/gallery_1.jpg",
    "./imgs/gallery_2.jpg",
    "./imgs/gallery_3.jpg",
    "./imgs/gallery_4.jpg",
    "./imgs/gallery_5.jpg",
    "./imgs/gallery_6.jpg",
    "./imgs/gallery_7.jpg",
    "./imgs/gallery_8.jpg",
    "./imgs/gallery_9.jpg",
  ];

  let currentIndex = 0;

  const carouselView = document.getElementById("carousel-view");

  // LOOP TO ADD IMGS AND CLASS DYNAMICALLY
  galleryImages.forEach((src, i) => {
    const img = document.createElement("img");
    img.src = src;
    img.classList.add("carousel-img");
    if (i === currentIndex) {
      img.classList.add("active");
    }
    carouselView.appendChild(img);
  });

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

  document.getElementById("show-thumbnails").addEventListener("click", () => {
    const gridView = document.getElementById("grid-view");

    if (gridView.style.display === "none") {
      gridView.innerHTML = "";
      galleryImages.forEach((src, i) => {
        const img = document.createElement("img");
        img.src = src;
        img.classList.add("thumb");
        img.addEventListener("click", () => {
          currentIndex = i;
          updateCarousel();
          gridView.style.display = "none";
          carouselView.style.display = "block";
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

  // EVENT LISTENERS
  document.getElementById("next").addEventListener("click", nextImg);
  document.getElementById("prev").addEventListener("click", prevImg);
});
