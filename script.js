const menuBtn = document.getElementById('menu-btn');
const mainNav = document.getElementById('main-nav');

menuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('is-active');
});

const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('is-active');
    });
});




// ==========================================
// SECCIÓN SKILLS - ANIMACIÓN CANVAS
// ==========================================

const skillsSection = document.getElementById('skills-section');
const skillsCanvas = document.getElementById('skills-canvas');

if (skillsSection && skillsCanvas) {
    const ctxSkills = skillsCanvas.getContext('2d');

    let violetParticles = [];
    const violetParticleCount = 80;

    function resizeSkills() {
        skillsCanvas.width = skillsSection.offsetWidth;
        skillsCanvas.height = skillsSection.offsetHeight;
    }

    window.addEventListener('resize', resizeSkills);
    resizeSkills();

    // Clase para las Partículas del Portal 
    class VioletParticle {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * skillsCanvas.width;
            this.y = Math.random() * skillsCanvas.height;
            this.size = Math.random() * 5; // Más grandes
            this.speed = Math.random() * 7 + 1;
            this.opacity = 0;
        }
        update(safePercent) {
            let dx = this.x - skillsCanvas.width / 2;
            let dy = this.y - skillsCanvas.height / 2;
            this.x += dx * 0.01 * this.speed;
            this.y += dy * 0.01 * this.speed;

            this.opacity = Math.min(.7, safePercent * 2);

            if (this.x < 0 || this.x > skillsCanvas.width || this.y < 0 || this.y > skillsCanvas.height) {
                this.reset();
            }
        }
        draw() {
            ctxSkills.beginPath();
            ctxSkills.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctxSkills.fillStyle = `rgba(60, 173, 247, ${this.opacity})`;
            ctxSkills.fill();
        }
    }

    // Inicializar partículas
    for (let i = 0; i < violetParticleCount; i++) {
        violetParticles.push(new VioletParticle());
    }

    // Loop de Animación
    function renderSkills() {
        ctxSkills.clearRect(0, 0, skillsCanvas.width, skillsCanvas.height);

        const rect = skillsSection.getBoundingClientRect();

        // Evitar el reseteo calculando el scroll basado en qué tanto entró la sección en pantalla.
        // Cuando el borde superior de skills entra por abajo de la pantalla, scrollPercent = 0.
        // A medida que sube hasta tocar la parte superior de la pantalla, se convierte en 1.
        let scrollPercent = (window.innerHeight - rect.top) / window.innerHeight;

        // Limitamos a un máximo de 1. Si pasas la sección hacia abajo (rect.top es negativo), se queda en 1 y no se reinicia.
        const safePercent = Math.max(0, Math.min(1, scrollPercent));

        // A. Dibujar el Haz de Luz Central
        if (safePercent > 0.05) {
            let gradient = ctxSkills.createRadialGradient(
                skillsCanvas.width / 2, skillsCanvas.height / 2, 0,
                skillsCanvas.width / 2, skillsCanvas.height / 2, safePercent * skillsCanvas.width * 0.8
            );
            // Usamos rgba para que funcione correctamente (rgb no soporta opacidad como 4to parametro sin /)
            gradient.addColorStop(0, `rgba(17, 75, 154, ${safePercent * 0.4})`);
            gradient.addColorStop(1, 'transparent');
            ctxSkills.fillStyle = gradient;
            ctxSkills.fillRect(0, 0, skillsCanvas.width, skillsCanvas.height);
        }

        // B. Actualizar y dibujar partículas violetas
        violetParticles.forEach(p => {
            p.update(safePercent);
            p.draw();
        });

        requestAnimationFrame(renderSkills);
    }

    // Iniciar loop por primera vez
    renderSkills();
}




document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.soft-skills__card');

    accordions.forEach(accordion => {
        accordion.addEventListener('click', () => {
            const header = accordion.querySelector('.accordion__toggle');
            const isActive = accordion.classList.contains('active');

            // Primero cerramos TODOS los acordeones
            accordions.forEach(item => {
                item.classList.remove('active');
                item.querySelector('.accordion__toggle').setAttribute('aria-expanded', 'false');
            });

            // Si el que clickeamos NO estaba activo, lo abrimos
            if (!isActive) {
                accordion.classList.add('active');
                header.setAttribute('aria-expanded', 'true');
            }
        });
    });
});


const carrouselProjects = document.querySelector('.carrousel__projects');
const punto = document.querySelectorAll('.punto');

punto.forEach((cadaPunto, i) => {
    punto[i].addEventListener('click', () => {
        let posicion = i;
        // La matemática ahora es perfecta: -100 mueve exactamente 1 ventana entera (tu celular) sumando imagen y márgenes.
        let operacion = posicion * -100;
        carrouselProjects.style.transform = `translateX(${operacion}%)`;

        // Lógica visual: Apagamos todos los puntos y prendemos solo el tocado
        punto.forEach((p) => p.classList.remove('activo'));
        punto[i].classList.add('activo');
    })
})


/* =========================================
   CINEMATIC TRANSITION (SCROLL-LINKED)
========================================= */
const track = document.getElementById('cinematic-track');
const curtainLeft = document.querySelector('.curtain--left');
const curtainRight = document.querySelector('.curtain--right');
const curtainTop = document.querySelector('.curtain--top');
const curtainBottom = document.querySelector('.curtain--bottom');
const sceneContact = document.getElementById('scene-contact');

// Optimizamos el scroll handler usando requestAnimationFrame pasivo
let isTicking = false;

window.addEventListener('scroll', () => {
    if (!isTicking) {
        window.requestAnimationFrame(() => {
            if (track && curtainLeft) {
                updateCinematicTransition();
            }
            isTicking = false;
        });
        isTicking = true;
    }
}, { passive: true });

function updateCinematicTransition() {
    const rect = track.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // El track entra a la pantalla cuando rect.top == windowHeight.
    // Sale completamente de animar cuando su altura completa (track.offsetHeight) pasa.
    let distance = track.offsetHeight;
    let progress = (windowHeight - rect.top) / distance;
    progress = Math.max(0, Math.min(1, progress));

    let leftRightTransform = -100;
    let topBottomTransform = 0;

    // 0.0 a 0.10: Buffer inicial
    if (progress <= 0.10) {
        leftRightTransform = -100;
    } else if (progress > 0.10 && progress <= 0.40) {
        let phase1Progress = (progress - 0.10) / 0.30;
        leftRightTransform = -100 + (phase1Progress * 100);
    } else {
        leftRightTransform = 0;
    }

    // Intercambio a mitad del blackout
    if (progress > 0.45) {
        curtainLeft.style.opacity = '0';
        curtainRight.style.opacity = '0';
        curtainTop.style.opacity = '1';
        curtainBottom.style.opacity = '1';
        if (sceneContact) {
            sceneContact.style.opacity = '1';
            sceneContact.style.pointerEvents = 'auto'; // Permitir clics
        }
    } else {
        curtainLeft.style.opacity = '1';
        curtainRight.style.opacity = '1';
        curtainTop.style.opacity = '0';
        curtainBottom.style.opacity = '0';
        if (sceneContact) {
            sceneContact.style.opacity = '0';
            sceneContact.style.pointerEvents = 'none'; // Previene clicks invisibles
        }
    }

    // 0.55 a 0.85: Las cortinas abren
    if (progress < 0.55) {
        topBottomTransform = 0;
    } else if (progress >= 0.55 && progress <= 0.85) {
        let phase3Progress = (progress - 0.55) / 0.30;
        topBottomTransform = phase3Progress * 100;
    } else {
        topBottomTransform = 100;
    }

    // Aplicamos transformaciones a las Fixed Curtains
    curtainLeft.style.transform = `translateX(${leftRightTransform}%)`;
    curtainRight.style.transform = `translateX(${-leftRightTransform}%)`;
    curtainTop.style.transform = `translateY(${-topBottomTransform}%)`;
    curtainBottom.style.transform = `translateY(${topBottomTransform}%)`;
}

