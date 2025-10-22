const contactForm = document.getElementById("contact-form");
const nameEl = document.getElementById("name");
const emailEl = document.getElementById("email");
const subjectEl = document.getElementById("subject");
const messageEl = document.getElementById("message");
const successEl = document.getElementById("test-contact-success-message");

function displayErrMessage() {}
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;
  successEl.textContent = "";
  successEl.hidden = true;

  const inputValues = [
    { element: nameEl, key: "name" },
    { element: emailEl, key: "email" },
    { element: subjectEl, key: "subject" },
    { element: messageEl, key: "message" },
  ];

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  inputValues.forEach(({ element, key }) => {
    const input = element.value.trim();
    const errMessageEl = document.getElementById(`test-contact-error-${key}`);
    errMessageEl.textContent = "";
    errMessageEl.hidden = true;

    if (!input) {
      errMessageEl.textContent = "This field is required.";
      errMessageEl.hidden = false;
      isValid = false;
    } else if (key === "email" && !emailRegex.test(input)) {
      errMessageEl.textContent = "Enter a valid email address.";
      errMessageEl.hidden = false;
      isValid = false;
    } else if (key === "message" && input.length < element.minLength) {
      errMessageEl.textContent = `Message must be at least ${element.minLength} characters`;
      errMessageEl.hidden = false;
      isValid = false;
    }
  });
  if (isValid) {
    successEl.textContent = "✅ Message submitted successfully!";
    successEl.hidden = false;
    contactForm.reset();
  }
});
