// script.js

// Función para animar el encabezado
function animateHeader() {
    var header = document.querySelector("header"); // Selecciona el encabezado
    header.style.opacity = 0; // Establece la opacidad inicial a 0

    // Animación de desvanecimiento
    var opacity = 0;
    var interval = setInterval(function () {
        if (opacity < 1) {
            opacity += 0.05; // Aumenta gradualmente la opacidad
            header.style.opacity = opacity;
        } else {
            clearInterval(interval); // Detiene la animación cuando la opacidad alcanza 1
        }
    }, 50); // Cambia la opacidad cada 50 milisegundos
}

// Función para animar las secciones
function animateSections() {
    var sections = document.querySelectorAll("section"); // Selecciona todas las secciones

    sections.forEach(function (section) {
        section.style.transform = "scale(0)"; // Escala inicial a 0

        // Animación de escala
        var scale = 0;
        var interval = setInterval(function () {
            if (scale < 1) {
                scale += 0.05; // Aumenta gradualmente la escala
                section.style.transform = "scale(" + scale + ")";
            } else {
                clearInterval(interval); // Detiene la animación cuando la escala alcanza 1
            }
        }, 50); // Cambia la escala cada 50 milisegundos
    });
}

// Llama a las funciones de animación cuando la página se carga
window.addEventListener("load", function () {
    animateHeader();
    animateSections();
});
