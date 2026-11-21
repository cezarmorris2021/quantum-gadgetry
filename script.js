document.addEventListener("DOMContentLoaded", () => {
  const inbox = "cezarmorris2021@gmail.com";
  const openDraft = (subject, body) => {
    window.location.href = `mailto:${inbox}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const signupForm = document.querySelector(".signup-form");
  if (signupForm) {
    signupForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const email = signupForm.querySelector('input[type="email"]')?.value.trim() || "";
      openDraft("Quantum Gadgetry contact request", `Please contact me about Quantum Gadgetry.\n\nReply email: ${email}`);
    });
  }

  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const fields = [...contactForm.querySelectorAll("input, textarea")];
      const [name, email, message] = fields.map((field) => field.value.trim());
      openDraft("Quantum Gadgetry inquiry", `Name/codename: ${name}\nReply email: ${email}\n\nMessage:\n${message}`);
    });
  }
});
