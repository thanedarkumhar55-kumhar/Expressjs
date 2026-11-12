// ==================================
// CONTACT FORM VALIDATION
// ==================================

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  if (!form) return;

  const fields = ["name", "email", "subject", "message"];

  const status = document.getElementById("form-status");

  const count = document.getElementById("message-count");

  const message = document.getElementById("message");

  const submit = form.querySelector('button[type="submit"]');

  // Message character counter

  message.addEventListener("input", () => {
    count.textContent = `${message.value.length} / 1000`;
  });

  // Display error

  function setError(field, text) {
    const input = form.elements[field];

    const error = document.getElementById(`${field}-error`);

    error.textContent = text;

    input.classList.toggle("invalid", Boolean(text));

    input.setAttribute("aria-invalid", String(Boolean(text)));
  }

  // Validate all fields

  function validate() {
    let valid = true;

    const values = Object.fromEntries(
      fields.map((key) => [key, form.elements[key].value.trim()]),
    );

    // Clear old errors

    fields.forEach((key) => {
      setError(key, "");
    });

    // Name validation

    if (values.name.length < 2) {
      setError("name", "Please enter at least 2 characters.");

      valid = false;
    }

    // Email validation

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!emailPattern.test(values.email)) {
      setError("email", "Enter a valid email address.");

      valid = false;
    }

    // Subject validation

    if (values.subject.length < 3) {
      setError("subject", "Please enter a subject.");

      valid = false;
    }

    // Message validation

    if (values.message.length < 20) {
      setError("message", "Please write at least 20 characters.");

      valid = false;
    }

    return valid;
  }

  // Revalidate while typing

  fields.forEach((key) => {
    form.elements[key].addEventListener("input", () => {
      if (form.elements[key].classList.contains("invalid")) {
        validate();
      }
    });
  });

  // Submit handler

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    status.className = "form-status";

    status.textContent = "";

    // Check validation

    if (!validate()) {
      status.textContent = "Please correct the highlighted fields.";

      status.classList.add("error");

      form.querySelector(".invalid")?.focus();

      return;
    }

    // Loading state

    submit.disabled = true;

    submit.querySelector(".submit-label").hidden = true;

    submit.querySelector(".submit-loading").hidden = false;

    // Simulated validation delay

    await new Promise((resolve) => {
      setTimeout(resolve, 450);
    });

    // Restore button

    submit.disabled = false;

    submit.querySelector(".submit-label").hidden = false;

    submit.querySelector(".submit-loading").hidden = true;

    // Success feedback

    status.textContent =
      "Validation successful. No email was sent: connect a backend endpoint to deliver this message.";

    status.classList.add("success");

    /*
            REAL BACKEND INTEGRATION:

            Use fetch() to send form data to
            your Node.js / Express API.

            Example:

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            });
        */
  });
});
