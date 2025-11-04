// contact.js - simple form validation and message display
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const phone = document.getElementById("contactPhone").value.trim();
    const message = document.getElementById("contactMessage").value.trim();

    if (!name || !email || !phone || !message) {
      feedback.style.display = "block";
      feedback.style.color = "red";
      feedback.textContent = "Please fill out all fields before submitting.";
      return;
    }

    // Simple email validation
    if (!email.includes("@")) {
      feedback.style.display = "block";
      feedback.style.color = "red";
      feedback.textContent = "Please enter a valid email address.";
      return;
    }

    // Success message
    feedback.style.display = "block";
    feedback.style.color = "#0a9396";
    feedback.textContent = "Thank you! Your message has been sent successfully.";

    // Reset form after submission
    form.reset();
  });
});
