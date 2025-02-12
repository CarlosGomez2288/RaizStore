const carousel = document.querySelector('.carousel-producto');
const categories = document.querySelectorAll('.item-categoria');
const totalCategories = categories.length;
const visibleCategories = 4; // Número de categorías visibles a la vez
let currentIndex = 0;

// Botón "Siguiente"
document.querySelector('.carousel-control.next').addEventListener('click', () => {
  if (currentIndex < totalCategories - visibleCategories) {
    currentIndex++;
  } else {
    currentIndex = 0; // Vuelve al inicio si llega al final
  }
  updateCarousel();
});

// Botón "Anterior"
document.querySelector('.carousel-control.prev').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalCategories - visibleCategories; // Vuelve al final si está al inicio
  }
  updateCarousel();
});

// Actualiza la posición del carrusel
function updateCarousel() {
  const offset = -currentIndex * (100 / visibleCategories);
  carousel.style.transform = `translateX(${offset}%)`;
}


document.addEventListener("DOMContentLoaded", () =>{
  const abrirmenu = document.getElementById("abrir-menu");
  const cerrarmenu = document.getElementById("cerrar-menu");
  const navmenu = document.getElementById("nav-collum");

  abrirmenu.addEventListener("click", () =>{
    navmenu.classList.add("visible");
  });

  cerrarmenu.addEventListener("click", () =>{
    navmenu.classList.remove("visible");
  })
  // Cerrar al tocar fuera del menú
  
});
