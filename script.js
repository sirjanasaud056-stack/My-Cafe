// Welcome message
window.onload = function () {
    alert("☕ Welcome to Bean & Brew Café!");
};

// Contact Form Submission
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.querySelector('input[type="text"]').value;
    let email = document.querySelector('input[type="email"]').value;
    let message = document.querySelector("textarea").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all the fields.");
    } else {
        alert("Thank you, " + name + "! Your message has been sent successfully.");
        this.reset();
    }
});

// Smooth Scrolling
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
