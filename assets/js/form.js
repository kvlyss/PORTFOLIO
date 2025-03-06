const form = document.getElementById("contactForm");
const denominationInput = document.getElementById("denomination");
const objetInput = document.getElementById("objet");
const emailInput = document.getElementById("email");
const telephoneInput = document.getElementById("telephone");
const messageInput = document.getElementById("message");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let hasErrors = false;
    if (!denominationInput.value || denominationInput.value.length < 2 || denominationInput.value.length > 50) {
        denominationInput.classList.add("border", "border-danger");
        denominationInput.nextElementSibling.innerText = "Le nom ou la raison sociale doit faire entre 2 et 50 caractères.";
        hasErrors = true;
    } else {
        denominationInput.classList.remove("border", "border-danger");
        denominationInput.nextElementSibling.innerText = "";
    }
    if (!objetInput.value || objetInput.value.length < 3 || objetInput.value.length > 50) {
        objetInput.classList.add("border", "border-danger");
        objetInput.nextElementSibling.innerText = "L'objet doit faire entre 3 et 50 caractères.";
        hasErrors = true;
    } else {
        objetInput.classList.remove("border", "border-danger");
        objetInput.nextElementSibling.innerText = "";
    }
    if (!emailInput.value || !validateEmail(emailInput.value)) {
        emailInput.classList.add("border", "border-danger");
        emailInput.nextElementSibling.innerText = "Veuillez entrer une adresse mail valide.";
        hasErrors = true;
    } else {
        emailInput.classList.remove("border", "border-danger");
        emailInput.nextElementSibling.innerText = "";
    }
    if (messageInput.value.length < 10 || messageInput.value.length > 3000) {
        messageInput.classList.add("border", "border-danger");
        messageInput.nextElementSibling.innerText = "Le message doit faire entre 10 et 3000 caractères.";
        hasErrors = true;
    } else {
        messageInput.classList.remove("border", "border-danger");
        messageInput.nextElementSibling.innerText = "";
    }
    if (hasErrors) {
        return;
    }
    form.submit();
}
);
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
