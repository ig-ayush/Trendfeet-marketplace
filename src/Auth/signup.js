document.addEventListener("DOMContentLoaded", function () {
  const toggleSwitch = document.querySelector(".switch input");
  const body = document.body;

  // Function to enable dark mode
  function enableDarkMode() {
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
    toggleSwitch.checked = true;
  }

  // Function to disable dark mode (light mode)
  function disableDarkMode() {
    body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
    toggleSwitch.checked = false;
  }

  // Check local storage for theme preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    enableDarkMode();
  }

  // Event Listener for the Toggle Button
  toggleSwitch.addEventListener("change", function () {
    if (this.checked) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });
});

//   DataBase -> Firebase

const firebaseConfig = {
  apiKey: "AIzaSyAGgWQ0JFmzv4xnN3_Vt5FPpMgJ62ivGPM",
  authDomain: "trendfeet-1d83e.firebaseapp.com",
  databaseURL: "https://trendfeet-1d83e-default-rtdb.firebaseio.com",
  projectId: "trendfeet-1d83e",
  storageBucket: "trendfeet-1d83e.firebasestorage.app",
  messagingSenderId: "45676543220",
  appId: "1:45676543220:web:63190f9fc4feed9e8272a1",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();
console.log(firebase);

// SignUP
const signUpBtn = document.getElementById("signUpBtn");
signUpBtn.addEventListener("click", () => signUp());

function signUp() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let conPassword = document.getElementById("copass").value;

  if (password != conPassword) {
    alert("Password Mismatch");
    return;
  }
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userAuth) => {
      const user = userAuth.user;

      database.ref("users/" + user.uid).set({ email: user.email });
      console.log("User signed up:", user.email);
      window.location.href = "login.html";
    })
    .then(() => {
      localStorage.setItem("signInMsg", " Welcome! Log in to continue. ✅ ");
    })
    .then(() => {
      let userData = {
        name: name,
        email: email,
      };
      localStorage.setItem("userInfo", JSON.stringify(userData));
      console.log("data saved");
    })

    .catch((error) => console.error("Signup error:", error.message));
}
