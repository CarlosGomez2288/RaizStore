document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todos los títulos de categoría
  const categoryTitles = document.querySelectorAll(".category-title");

  // Añade un evento de clic a cada título
  categoryTitles.forEach((title) => {
    title.addEventListener("click", function () {
      // Obtiene el objetivo (el ID de la lista a expandir/contraer)
      const targetId = this.getAttribute("data-target");
      const targetElement = document.querySelector(targetId);

      // Alterna la clase .active en el título
      this.classList.toggle("active");

      // Si el elemento ya está expandido, lo contraemos
      if (targetElement.classList.contains("show")) {
        targetElement.style.height = `${targetElement.scrollHeight}px`; // Establece la altura actual
        setTimeout(() => {
          targetElement.style.height = "0"; // Contraer
        }, 100); // Pequeño retraso para asegurar la transición
        targetElement.classList.remove("show");
      } else {
        // Si el elemento está contraído, lo expandimos
        targetElement.style.height = `${targetElement.scrollHeight}px`; // Expandir
        targetElement.classList.add("show");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const abrirCategoria = document.getElementById("abrir-categoria");
  const cerrarCategoria = document.getElementById("cerrar-categoria");
  const categorias = document.getElementById("categorias");
  
  
  
  abrirCategoria.addEventListener("click", function () {
    categorias.classList.add("visible");
    
  });

  cerrarCategoria.addEventListener("click", function () {
    categorias.classList.remove("visible");
  });

  
});
