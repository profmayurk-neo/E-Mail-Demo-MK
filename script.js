// Day 3 concepts: variables, strings, regular expressions, conditions and DOM events.

const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const statusMessage = document.getElementById("statusMessage");
const togglePassword = document.getElementById("togglePassword");

// This beginner-friendly pattern checks common email formats; it cannot prove that
// the address exists or that the mailbox belongs to the user.
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

// Match the class-note character rules, with an 8–12 character length requirement.
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#\-$\^])[A-Za-z\d@#\-$\^]{8,12}$/;

function setFieldState(input, errorElement, message) {
  errorElement.textContent = message;
  input.classList.toggle("invalid", Boolean(message));
  input.classList.toggle("valid", !message && input.value.length > 0);
  input.setAttribute("aria-invalid", message ? "true" : "false");
}

function validateEmail() {
  const email = emailInput.value.trim();
  let message = "";

  if (email === "") {
    message = "Please enter your email address.";
  } else if (!emailRegex.test(email)) {
    message = "Invalid email. Enter an address like learner@example.com.";
  }

  setFieldState(emailInput, emailError, message);
  return message === "";
}

function validatePassword() {
  const password = passwordInput.value;
  let message = "";

  if (password === "") {
    message = "Please enter your password.";
  } else if (!passwordRegex.test(password)) {
    message =
      "Invalid password. Use 8–12 characters with uppercase, lowercase, a digit and one allowed special character (@ # - $ ^).";
  }

  setFieldState(passwordInput, passwordError, message);
  return message === "";
}

emailInput.addEventListener("input", () => {
  validateEmail();
  hideStatus();
});

passwordInput.addEventListener("input", () => {
  validatePassword();
  hideStatus();
});

togglePassword.addEventListener("click", () => {
  const isHidden = passwordInput.type === "password";
  passwordInput.type = isHidden ? "text" : "password";
  togglePassword.textContent = isHidden ? "Hide" : "Show";
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();

  statusMessage.className = "status";

  if (!isEmailValid) {
    statusMessage.textContent = "Invalid Email";
    statusMessage.classList.add("error");
    emailInput.focus();
  } else if (!isPasswordValid) {
    statusMessage.textContent = "Invalid Pass";
    statusMessage.classList.add("error");
    passwordInput.focus();
  } else {
    statusMessage.textContent =
      "Valid Data — email and password formats are correct.";
    statusMessage.classList.add("success");
  }
});

function hideStatus() {
  statusMessage.className = "status";
  statusMessage.textContent = "";
}
