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
      "Lina mantiene su dignidad al conservar su identidad como artista, incluso en medio del horror. Sus dibujos son un acto de resistencia y amor propio, una forma de no dejarse vencer por el dolor ni olvidar quién es realmente.",
      "Elena, la madre de Lina, ejerce su libertad al elegir amar y ayudar a otros, pese a estar prisionera. Su bondad constante demuestra que la libertad interior sigue viva cuando se actúa con integridad y se rechaza el odio.",
      "Andrius asume con valentía el cuidado de su madre y el apoyo a Lina, mostrando responsabilidad emocional. A través de ese vínculo, él y Lina encuentran una forma de felicidad, construida en medio del sufrimiento y basada en el amor verdadero."
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
      "La relación entre el profesor y Stella empieza con una conexión emocional, pero avanza gracias a gestos de cuidado y escucha. Él va más allá del sentimiento, mostrando interés genuino que ayuda a construir un amor más profundo y racional.",
      "Ambos se respetan, se comunican con empatía y valoran sus diferencias. Se conocen poco a poco, creando un vínculo basado en identidad, intimidad y complementariedad, lo que fortalece su relación de forma sana y estable.",
      "El profesor combina emoción y acción: siente afecto por Stella y actúa para apoyarla. Ella, con libertad, responde desde la reciprocidad. Esta unión de sentimiento y decisión convierte su relación en un amor maduro y real."
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
      "Margherita se enamora rápidamente de Giulio, idealizándolo, pero él no muestra el mismo compromiso. La relación se queda en la emoción inicial, sin pasar al amor racional ni construirse con acciones reales, lo que genera un vínculo superficial y unilateral.",
      "Faltan elementos clave como la comunicación auténtica y la reciprocidad. Margherita busca conexión, pero Giulio no responde con la misma apertura, lo que impide el desarrollo de una relación sana y provoca frustración y confusión en ella.",
      "Margherita entrega mucho emocionalmente, pero Giulio no actúa para fortalecer el vínculo. Esto crea una relación desequilibrada, cercana a lo tóxico, con señales de estancamiento y fragmentación emocional que afectan el bienestar de Margherita."
    ],
    {
      left: ".left-button3",
      right: ".right-button3",
      button: ".image-button3",
      image: ".image-carousel3",
      text: ".text-carousel3"
    }
);