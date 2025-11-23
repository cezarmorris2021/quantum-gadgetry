document.addEventListener("DOMContentLoaded", () => {
  // Simple fake "form" handlers so people see feedback even before you wire a backend.
  const signupForm = document.querySelector(".signup-form");
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Request received. In production, connect this form to your email service or autoresponder.");
    });
  }

  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Message prepared for HQ. In production, wire this form to Formspree, Basin, or your backend.");
    });
  }
});
