

const facts = [
    "A day on Venus is longer than a year.",
    "There are more stars than grains of sand on Earth.",
    "Neutron stars can spin 600 times per second.",
    "One million Earths can fit inside the Sun.",
    "The footprints on the Moon will last millions of years.",
    "Jupiter has 95 known moons.",
    "Saturn could float in water because of its low density.",
    "The Milky Way galaxy contains over 100 billion stars.",
    "Light from the Sun takes about 8 minutes to reach Earth.",
    "A year on Mercury lasts only 88 Earth days."
];

const factElement = document.getElementById("fact");

let factIndex = 0;

setInterval(() => {
    factIndex++;

    if (factIndex >= facts.length) {
        factIndex = 0;
    }

    factElement.style.opacity = 0;

    setTimeout(() => {
        factElement.textContent = facts[factIndex];
        factElement.style.opacity = 1;
    }, 500);

}, 4000);


// ======================
// COUNTER ANIMATION
// ======================

const counters = document.querySelectorAll(".stat-card h2");

counters.forEach(counter => {

    const targetText = counter.innerText;

    const target = parseInt(targetText.replace(/\D/g, ""));

    if (isNaN(target)) return;

    let count = 0;

    const speed = target / 100;

    const updateCounter = () => {

        if (count < target) {

            count += speed;

            counter.innerText = Math.floor(count);

            requestAnimationFrame(updateCounter);

        } else {

            counter.innerText = targetText;

        }

    };

    updateCounter();

});


// ======================
// SCROLL REVEAL
// ======================

const revealElements = document.querySelectorAll(
    ".planet-card, .mission-card, .gallery-card, .stat-card"
);

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(50px)";
    element.style.transition = "0.8s ease";

    revealObserver.observe(element);

});


// ======================
// CURSOR GLOW
// ======================

const glow = document.createElement("div");

glow.classList.add("cursor-glow");

document.body.appendChild(glow);

document.addEventListener("mousemove", e => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});


// ======================
// SHOOTING STARS
// ======================

function createStar() {

    const star = document.createElement("span");

    star.classList.add("shooting-star");

    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.top = Math.random() * 300 + "px";

    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 3000);

}

setInterval(createStar, 2500);


// ======================
// BUTTON RIPPLE EFFECT
// ======================

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        ripple.classList.add("ripple");

        const rect = button.getBoundingClientRect();

        ripple.style.left = e.clientX - rect.left + "px";
        ripple.style.top = e.clientY - rect.top + "px";

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);

    });

});


// ======================
// PARALLAX EFFECT
// ======================

window.addEventListener("mousemove", e => {

    const planet = document.querySelector(".planet");

    if (!planet) return;

    const x = (window.innerWidth / 2 - e.pageX) / 50;
    const y = (window.innerHeight / 2 - e.pageY) / 50;

    planet.style.transform =
        `translate(${x}px, ${y}px)`;

});


// ======================
// NAV ACTIVE LINK
// ======================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute("id");
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


// ======================
// HERO TEXT ANIMATION
// ======================

const title = document.querySelector(".hero h1");

if (title) {

    title.animate(
        [
            { opacity: 0, transform: "translateY(50px)" },
            { opacity: 1, transform: "translateY(0)" }
        ],
        {
            duration: 1200,
            easing: "ease-out"
        }
    );

}


// ======================
// FLOATING PLANETS
// ======================

const planets = document.querySelectorAll(".planet-circle");

planets.forEach((planet, index) => {

    setInterval(() => {

        planet.style.transform =
            `translateY(${Math.sin(Date.now()/500 + index)*8}px)`;

    }, 20);

});


// ======================
// PAGE LOADER
// ======================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

console.log("🚀 AstroVerse Loaded Successfully");

