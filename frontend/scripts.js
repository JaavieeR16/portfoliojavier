window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Funcionalidad del menú hamburguesa
document.querySelector(".menu-toggle").addEventListener("click", function() {
    this.classList.toggle("open");
    document.querySelector(".nav-links").classList.toggle("open");
});

// Animación de máquina de escribir
document.addEventListener("DOMContentLoaded", function () {
    const text = "Desarrollador de Aplicaciones Multiplataforma";
    let index = 0;
    let isDeleting = false;
    const speed = 100; // Velocidad de escritura
    const eraseSpeed = 50; // Velocidad de borrado
    const waitTime = 1500; // Tiempo antes de borrar
    const typingElement = document.getElementById("typing-text");

    function typeWriter() {
        if (!isDeleting && index < text.length) {
            typingElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        } else if (isDeleting && index > 0) {
            typingElement.innerHTML = text.substring(0, index - 1);
            index--;
            setTimeout(typeWriter, eraseSpeed);
        } else {
            isDeleting = !isDeleting; // Cambiar entre escribir y borrar
            setTimeout(typeWriter, waitTime);
        }
    }

    typeWriter();
});

// Popup copiar correo
function copiarCorreo() {
    const correo = "javiermonroym16@gmail.com";

    navigator.clipboard.writeText(correo)
        .then(() => {
            let popup = document.getElementById("popup");
            popup.classList.add("show");

            setTimeout(() => {
                popup.classList.remove("show");
            }, 3000);
        })
        .catch(err => {
            console.error("Error al copiar el correo: ", err);
        });
}