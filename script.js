// Project Filter
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        projectCards.forEach(function(card) {

            if (filter === "all" || card.getAttribute("data-category") === filter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });
    });
});
// FAQ Accordion
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function(question) {
    question.addEventListener("click", function() {

        const answer = question.nextElementSibling;

        if (answer.style.display === "block") {
            answer.style.display = "none";
            question.querySelector("span").textContent = "+";
        } else {
            answer.style.display = "block";
            question.querySelector("span").textContent = "−";
        }

    });
});
// Contact Form Validation
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || phone === "" || message === "") {
        formMessage.textContent = "Please fill in all fields.";
        return;
    }

    formMessage.textContent = "Registration submitted successfully!";
    contactForm.reset();
});
// Mobile Navigation
const menuButton = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", function() {
    navMenu.classList.toggle("show");
});
