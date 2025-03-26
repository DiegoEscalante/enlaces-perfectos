function createCarousel(images, texts, selectors) {
    let currentIndex = 0;
    let showingText = false;
  
    const leftButton = document.querySelector(selectors.left);
    const rightButton = document.querySelector(selectors.right);
    const imageButton = document.querySelector(selectors.button);
    const image = document.querySelector(selectors.image);
    const text = document.querySelector(selectors.text);
  
    const updateButtons = () => {
      leftButton.style.cursor = currentIndex === 0 ? "not-allowed" : "pointer";
      leftButton.style.opacity = currentIndex === 0 ? "0.5" : "1";
      rightButton.style.cursor = currentIndex === images.length - 1 ? "not-allowed" : "pointer";
      rightButton.style.opacity = currentIndex === images.length - 1 ? "0.5" : "1";
    };
  
    const updateCarousel = () => {
      image.style.opacity = 0;
      text.style.opacity = 0;
  
      setTimeout(() => {
        image.src = images[currentIndex];
        text.textContent = texts[currentIndex];
  
        if (showingText) {
          image.style.display = "none";
          text.style.display = "flex";
        } else {
          image.style.display = "block";
          text.style.display = "none";
        }
  
        image.style.opacity = 1;
        text.style.opacity = 1;
      }, 300);
  
      updateButtons();
    };
  
    leftButton.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        showingText = false;
        updateCarousel();
      }
    });
  
    rightButton.addEventListener("click", () => {
      if (currentIndex < images.length - 1) {
        currentIndex++;
        showingText = false;
        updateCarousel();
      }
    });
  
    imageButton.addEventListener("click", () => {
      showingText = !showingText;
      updateCarousel();
    });
  
    updateCarousel();
}

createCarousel(
    [
      "./images/AndriusLina1.jpg",
      "./images/AndriusLina2.jpg",
      "./images/AndriusLina3.jpg"
    ],
    [
      "Texto para imagen 1: Amor y libertad.",
      "Texto para imagen 2: Resistencia y esperanza.",
      "Texto para imagen 3: Compromiso mutuo en medio del conflicto."
    ],
    {
      left: ".left-button",
      right: ".right-button",
      button: ".image-button1",
      image: ".image-carousel1",
      text: ".text-carousel1"
    }
);
  
createCarousel(
    [
      "./images/ProfesorStella1.jpg",
      "./images/ProfesorStella2.jpg",
      "./images/ProfesorStella3.jpg"
    ],
    [
      "Texto 1: La conexión intelectual.",
      "Texto 2: Comprensión emocional.",
      "Texto 3: Amor auténtico y maduro."
    ],
    {
      left: ".left-button2",
      right: ".right-button2",
      button: ".image-button2",
      image: ".image-carousel2",
      text: ".text-carousel2"
    }
);
  
createCarousel(
    [
      "./images/MargeGulio1.jpg",
      "./images/MargeGulio2.jpg",
      "./images/MargeGulio3.jpg"
    ],
    [
      "Texto 1: Ilusión inicial.",
      "Texto 2: Crisis del vínculo.",
      "Texto 3: Consolidación del amor."
    ],
    {
      left: ".left-button3",
      right: ".right-button3",
      button: ".image-button3",
      image: ".image-carousel3",
      text: ".text-carousel3"
    }
);