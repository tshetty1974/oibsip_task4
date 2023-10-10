// Sample user data (for demonstration, not secure)
const users = [];

const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const loginUsername = document.getElementById("login-username").value;
    const loginPassword = document.getElementById("login-password").value;

    const user = users.find(u => u.username === loginUsername && u.password === loginPassword);

    if (user) {
        // Successful login
        message.textContent = "Login successful!";
        message.style.color = "green";
        // Redirect to a secured page (e.g., secured.html)
        setTimeout(() => {
            window.location.href = "secured.html";
        }, 1000);
    } else {
        // Failed login
        message.textContent = "Invalid username or password.";
        message.style.color = "red";
    }
});

registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const registerUsername = document.getElementById("register-username").value;
    const registerPassword = document.getElementById("register-password").value;

    // Check if the username is already taken
    const existingUser = users.find(u => u.username === registerUsername);

    if (existingUser) {
        message.textContent = "Username already exists. Please choose a different one.";
        message.style.color = "red";
    } else {
        // Register the user
        users.push({ username: registerUsername, password: registerPassword });
        message.textContent = "Registration successful. You can now login.";
        message.style.color = "green";
    }
});

