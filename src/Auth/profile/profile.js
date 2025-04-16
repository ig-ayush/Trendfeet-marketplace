document.addEventListener("DOMContentLoaded", function () {
  const toggleSwitch = document.querySelector(".switch input");
  const body = document.body;

  function enableDarkMode() {
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
    toggleSwitch.checked = true;
  }

  function disableDarkMode() {
    body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
    toggleSwitch.checked = false;
  }

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    enableDarkMode();
  }

  toggleSwitch.addEventListener("change", function () {
    if (this.checked) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });
});

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

document.addEventListener("DOMContentLoaded", () => {
  let localData = localStorage.getItem("userInfo");
  let userInfo = JSON.parse(localData);

  let name = document.querySelector(".info h1");
  let email = document.querySelector(".info h3");

  name.textContent = userInfo.name;
  email.textContent = userInfo.email;
});
const profile_pic = [
  "image-1.jpg",
  "image-2.jpg",
  "image-3.jpg",
  "image-4.jpg",
  "image-5.jpg",
];
const pic_con = document.getElementById("pro-pic");

function switchImage() {
  const randomImage = Math.floor(Math.random() * profile_pic.length);
  console.log(profile_pic[randomImage]);
  pic_con.style.backgroundImage = `url(images/${profile_pic[randomImage]})`;
}

setInterval(switchImage, 10000);

document.addEventListener("DOMContentLoaded", function () {
  fetch("../../../home-Page-Products.json")
    .then((response) => response.json())
    .then((products) => {
      let container = document.querySelector(".products-profile");
      console.log(container);

      container.innerHTML = products.map(
        (product) =>
          ` <div class="product">
              <div class="image">
                <img src="../../../${product.images[0]}" alt="puma" />
              </div>
              <h4 class="brand-name style">${product.brand}</h4>
              <h3 class="product-name style">${product.product_name}</h3>
              <h5 class="dis style">${product.dis}</h5>
              <h3 class="mrp style">MRP: ${product.price}</h3>
              <button class="view" onclick="view(${product.id})">View</button>
            </div>`
      );
    })
    .catch((error) => console.error("Error loading products", error));
});

const view = (id) => {
  window.location.href = `../../Single-Product/SinglePRoduct.html?id=${id}`;
  console.log(id);
};

// Logout
const logout = document.querySelector(".logOut button");

logout.addEventListener("click", () => {
  // localStorage.removeItem("userInfo");
  localStorage.removeItem("cart");
  localStorage.removeItem("logIn");
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("User signed out.");
      // Now clear or update the UI
    })
    .catch((error) => {
      console.error("Sign out error:", error);
    });

  window.location.href = "../login.html";
});
