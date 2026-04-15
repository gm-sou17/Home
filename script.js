// Like button toggle + count
function like(btn) {
  let liked = btn.classList.contains("liked");

  if (!liked) {
    btn.classList.add("liked");
    btn.innerText = "💖 Liked";
  } else {
    btn.classList.remove("liked");
    btn.innerText = "❤️ Like";
  }
}

// Optional: Page load animation
window.onload = () => {
  let cards = document.querySelectorAll(".card");

  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";

    setTimeout(() => {
      card.style.transition = "0.5s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 200);
  });
};

const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let agree = document.getElementById("agree").checked;
    let error = document.getElementById("error");

    // Validation
    if (name.length < 3) {
      error.innerText = "Name must be at least 3 characters";
    } 
    else if (!email.includes("@")) {
      error.innerText = "Enter valid email";
    }
    else if (password.length < 6) {
      error.innerText = "Password must be at least 6 characters";
    } 
    else if (password !== confirmPassword) {
      error.innerText = "Passwords do not match";
    }
    else if (!agree) {
      error.innerText = "Please confirm your details";
    } 
    else {
      error.innerText = "";
      alert("Signup Successful 🎉");

      // Redirect to home
      window.location.href = "index.html";
    }
  });
}

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let error = document.getElementById("error");

    let savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      error.innerText = "No user found. Please signup first.";
    } 
    else if (email !== savedUser.email) {
      error.innerText = "Email not found";
    } 
    else if (password !== savedUser.password) {
      error.innerText = "Wrong password";
    } 
    else {
      error.innerText = "";
      alert("Login Successful 🚀");

      // Redirect to home
      window.location.href = "index.html";
    }
  });
}