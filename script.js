const contactForm = document.querySelector("#contact-form");
const userName = document.querySelector("#user-name");
const userEmail = document.querySelector("#user-email");
const userMessage = document.querySelector("#user-message");
const formResult = document.querySelector("#form-result");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = userName.value.trim();
    const email = userEmail.value.trim();
    const message = userMessage.value.trim();

    if (!name || !email || !message) {
        formResult.textContent = "Please fill in all fields.";
        formResult.className = "error-message";
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        formResult.textContent = "Please enter a valid email.";
        formResult.className = "error-message";
        return;
    }

    formResult.textContent = "Thank you! Your form is valid.";
    formResult.className = "success-message";
    contactForm.reset();
});

const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");

menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    navLinks.classList.toggle("active", !isExpanded);
});

navLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    }
});

document.querySelector("#explore-btn").addEventListener("click", () => {
    document.querySelector("#services").scrollIntoView({ behavior: "smooth" });
});

const mainTitle = document.querySelector("#main-title");
const heroDescription = document.querySelector("#hero-description");

document.querySelector("#change-text-btn").addEventListener("click", () => {
    mainTitle.innerHTML = 'Technology Starts <span>Here</span>';
    heroDescription.textContent = "Welcome to the amazing world of Nova.";
});

document.querySelector("#theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});

const topButton = document.querySelector("#top-button");

window.addEventListener("scroll", () => {
    topButton.classList.toggle("visible", window.scrollY > 300);
});

topButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

const searchInput = document.querySelector("#service-search");
const serviceCards = document.querySelectorAll(".service-card");
const searchEmpty = document.querySelector("#search-empty");

searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.trim().toLowerCase();
    let visibleCards = 0;

    serviceCards.forEach((card) => {
        const matches = card.textContent.toLowerCase().includes(searchText);
        card.hidden = !matches;
        visibleCards += Number(matches);
    });

    searchEmpty.hidden = visibleCards > 0;
});

const novaServices = [
    "AI",
    "Web Development",
    "Cybersecurity",
    "Graphic Design"
];

for (let i = 0; i < novaServices.length; i++) {
    console.log(novaServices[i]);
}
function welcomeMessage() {
    console.log("Welcome to Nova Website!");
}

welcomeMessage();
const projectButtons = document.querySelectorAll(".project-button");

projectButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        document.querySelector("#contact").scrollIntoView({
            behavior: "smooth"
        });
    });
});
const novaNavLinks = document.querySelectorAll(".nav-links a");
const novaSections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", function() {
    let currentSection = "";

    novaSections.forEach(function(section) {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    novaNavLinks.forEach(function(link) {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});
window.addEventListener("load", function() {
    const novaLoader = document.querySelector("#loader");

    if (novaLoader) {
        novaLoader.classList.add("hide");

        setTimeout(function() {
            novaLoader.style.display = "none";
        }, 500);
    }
});
