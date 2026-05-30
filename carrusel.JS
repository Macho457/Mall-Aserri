  let indiceImagen = 0; // Controla qué imagen se muestra
  mostrarSlides(indiceImagen);

  // Función que ejecutan las flechas al hacer clic
  function cambiarImagen(direccion) {
    mostrarSlides(indiceImagen += direccion);
  }

  // Función principal para alternar las imágenes
  function mostrarSlides(n) {
    let slides = document.getElementsByClassName("mi-slide");
    
    // Si llega al final, vuelve a la primera
    if (n >= slides.length) { indiceImagen = 0; }
    // Si va hacia atrás desde la primera, va a la última
    if (n < 0) { indiceImagen = slides.length - 1; }
    
    // Ocultar todas las imágenes primero
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    
    // Mostrar únicamente la imagen activa
    slides[indiceImagen].style.display = "block";
  }