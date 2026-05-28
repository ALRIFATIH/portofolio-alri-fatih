// =========================
// AOS
// =========================
AOS.init({
    duration: 1200,
    once: true
});

// =========================
// TYPING HERO
// =========================
const typingElement =
    document.querySelector(".typing-text");

if (typingElement) {

    new Typed(".typing-text", {
        strings: [
            "Frontend Developer",
            "Creative Coder",
            "UI/UX Designer",
            "JavaScript Developer"
        ],
        typeSpeed: 70,
        backSpeed: 40,
        loop: true
    });

}

// =========================
// PARTICLES
// =========================
if (typeof particlesJS !== "undefined") {

    particlesJS("particles-js", {
        particles: {
            number: {
                value: 80
            },

            color: {
                value: "#00e5ff"
            },

            shape: {
                type: "circle"
            },

            opacity: {
                value: 0.5
            },

            size: {
                value: 3
            },

            line_linked: {
                enable: true,
                distance: 150,
                color: "#00e5ff",
                opacity: 0.3
            },

            move: {
                enable: true,
                speed: 2
            }
        }
    });

}

// =========================
// LOADER TYPING
// =========================
const typingCode =
    document.querySelector(".typing-code");

const codeText = `
Initializing Portfolio...

Loading Components...

Connecting JavaScript...

Launching Website...

Welcome Developer ✔
`;

let i = 0;

function typeCode() {

    if (typingCode && i < codeText.length) {

        typingCode.innerHTML +=
            codeText.charAt(i);

        i++;

        setTimeout(typeCode, 40);

    }

}

typeCode();

// =========================
// HIDE LOADER
// =========================
window.addEventListener("load", () => {

    const loader =
        document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 3500);

});

// =========================
// PARALLAX
// =========================
const heroImage =
    document.querySelector(".hero-right img");

window.addEventListener("mousemove", (e) => {

    if (heroImage) {

        let x =
            (window.innerWidth / 2 - e.pageX) / 40;

        let y =
            (window.innerHeight / 2 - e.pageY) / 40;

        heroImage.style.transform =
            `translate(${x}px, ${y}px)`;

    }

});

// =========================
// BUTTON SCROLL
// =========================
const exploreBtn =
    document.querySelector(".btn-primary");

if (exploreBtn) {

    exploreBtn.addEventListener("click", () => {

        document.querySelector("#about")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

}

// =========================
// ACTIVE NAVBAR
// =========================
const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (pageYOffset >= sectionTop - 200) {

            current =
                section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            .includes(current)
        ) {

            link.classList.add("active");

        }

    });

});

// =========================
// CONTACT BUTTON
// =========================
const sendBtn =
    document.querySelector(".contact-box button");

if (sendBtn) {

    sendBtn.addEventListener("click", () => {

        sendBtn.innerHTML =
            "Message Sent ✔";

        setTimeout(() => {

            sendBtn.innerHTML =
                "Send Message";

        }, 2000);

    });

}

// MOBILE MENU


const menuBtn =
document.querySelector(".menu-btn");

const nav =
document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

    menuBtn.classList.toggle("active");

});

