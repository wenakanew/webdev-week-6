const form = document.getElementById('myForm');
const feedback = document.getElementById('feedback');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value;
  const password = form.password.value;

  if (name === "" || email === "" || password === "") {
    feedback.textContent = "Please fill all fields.";
    feedback.style.color = "red";
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    feedback.textContent = "Invalid email format.";
    return;
  }

  if (password.length < 8) {
    feedback.textContent = "Password must be at least 8 characters.";
    return;
  }

  feedback.textContent = "Form submitted successfully!";
  feedback.style.color = "green";
});




const passwordInput = document.getElementById('password');
passwordInput.addEventListener('input', () => {
  if (passwordInput.value.length < 8) {
    passwordInput.style.borderColor = "red";
  } else {
    passwordInput.style.borderColor = "green";
  }
});
