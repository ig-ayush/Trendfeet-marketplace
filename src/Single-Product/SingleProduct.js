document.addEventListener("DOMContentLoaded", function () {
  const urlF = new URLSearchParams(window.location.search);
  const productID = urlF.get("id");

  // Dark mode feature
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

  // Home Page Products
  fetch("../../home-Page-Products.json")
    .then((response) => response.json())
    .then((products) => {
      let product = products.find((p) => p.id == productID);
      if (product) {
        document.getElementById("one-img").src = `../../${product.images[0]}`;
        let thumbnails = product.images
          .map(
            (img) => `
            <img class="thumbnail" src="../../${img}" onclick="changeImageHome('${img}')" alt="product Images">
        `
          )
          .join("");

        document.getElementById("product-images").innerHTML = thumbnails;

        document.getElementById("brand").textContent = product.brand;
        document.getElementById("product-name").textContent =
          product.product_name;
        document.getElementById("disc").textContent = product.dis;
        document.getElementById("price").textContent = `MRP: ${product.price}`;
        document.getElementById("buy-now-link").href = product.link;

        document.getElementById("cart").addEventListener("click", () => {
          addToCart(product);
        });
      }
    })
    .catch((error) => console.error("Error loading products", error));
});

function changeImageHome(image) {
  document.getElementById("one-img").src = `../../${image}`;
}

// Nike Page Products
document.addEventListener("DOMContentLoaded", function () {
  const urlF = new URLSearchParams(window.location.search);
  const productID = urlF.get("id");

  fetch("../Nike/nike.json")
    .then((response) => response.json())
    .then((products) => {
      let product = products.find((p) => p.id == productID);
      if (product) {
        document.getElementById("one-img").src = `../Nike/${product.images[0]}`;
        let thumbnails = product.images
          .map(
            (img) => `
            <img class="thumbnail" src="../Nike/${img}" onclick="changeImageNike('${img}')" alt="product Images">
        `
          )
          .join("");

        document.getElementById("product-images").innerHTML = thumbnails;

        document.getElementById("brand").textContent = product.brand;
        document.getElementById("product-name").textContent =
          product.product_name;
        document.getElementById("disc").textContent = product.dis;
        document.getElementById("price").textContent = `MRP: ${product.price}`;
        document.getElementById("buy-now-link").href = product.link;

        document.getElementById("cart").addEventListener("click", () => {
          addToCart(product);
        });
      }
    })
    .catch((error) => console.error("Error loading products", error));
});

// Adidas Page
document.addEventListener("DOMContentLoaded", function () {
  const urlF = new URLSearchParams(window.location.search);
  const productID = urlF.get("id");

  fetch("../adidas/adidas.json")
    .then((response) => response.json())
    .then((products) => {
      let product = products.find((p) => p.id == productID);
      if (product) {
        document.getElementById(
          "one-img"
        ).src = `../adidas/${product.images[0]}`;
        let thumbnails = product.images
          .map(
            (img) => `
            <img class="thumbnail" src="../adidas/${img}" onclick="changeImageNike('${img}')" alt="product Images">
        `
          )
          .join("");

        document.getElementById("product-images").innerHTML = thumbnails;

        document.getElementById("brand").textContent = product.brand;
        document.getElementById("product-name").textContent =
          product.product_name;
        document.getElementById("disc").textContent = product.dis;
        document.getElementById("price").textContent = `MRP: ${product.price}`;
        document.getElementById("buy-now-link").href = product.link;

        document.getElementById("cart").addEventListener("click", () => {
          addToCart(product);
        });
      }
    })
    .catch((error) => console.error("Error loading products", error));
});
//Puma page's
document.addEventListener("DOMContentLoaded", function () {
  const urlF = new URLSearchParams(window.location.search);
  const productID = urlF.get("id");

  fetch("../Puma/puma.json")
    .then((response) => response.json())
    .then((products) => {
      let product = products.find((p) => p.id == productID);
      if (product) {
        document.getElementById("one-img").src = `../Puma/${product.images[0]}`;
        let thumbnails = product.images
          .map(
            (img) => `
            <img class="thumbnail" src="../Puma/${img}" onclick="changeImageNike('${img}')" alt="product Images">
        `
          )
          .join("");

        document.getElementById("product-images").innerHTML = thumbnails;

        document.getElementById("brand").textContent = product.brand;
        document.getElementById("product-name").textContent =
          product.product_name;
        document.getElementById("disc").textContent = product.dis;
        document.getElementById("price").textContent = `MRP: ${product.price}`;
        document.getElementById("buy-now-link").href = product.link;

        document.getElementById("cart").addEventListener("click", () => {
          addToCart(product);
        });
      }
    })
    .catch((error) => console.error("Error loading products", error));
});

function changeImageNike(image) {
  const brand = document.getElementById("brand").textContent.toLowerCase(); // Get the brand name

  if (brand === "nike") {
    document.getElementById("one-img").src = `../Nike/${image}`;
  } else if (brand === "adidas") {
    document.getElementById("one-img").src = `../adidas/${image}`;
  } else if (brand === "puma") {
    document.getElementById("one-img").src = `../Puma/${image}`;
  }
}

// Add Cart section
const firebaseConfig = {
  apiKey: "AIzaSyAGgWQ0JFmzv4xnN3_Vt5FPpMgJ62ivGPM",
  authDomain: "trendfeet-1d83e.firebaseapp.com",
  databaseURL: "https://trendfeet-1d83e-default-rtdb.firebaseio.com",
  projectId: "trendfeet-1d83e",
  storageBucket: "trendfeet-1d83e.firebasestorage.app",
  messagingSenderId: "45676543220",
  appId: "1:45676543220:web:63190f9fc4feed9e8272a1",
};
// import { getFirestore, doc, setDoc } from "firebase/firestore";

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();
console.log(firebase);

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let exixtedProduct = cart.find((item) => item.id == product.id);
  let LoggedIn = localStorage.getItem("logIn");

  if (exixtedProduct) return;

  if (LoggedIn) {
    if (product.id <= 8) {
      product.images[0] = `../../${product.images[0]}`;
    } else if (product.id <= 32) {
      product.images[0] = `../Nike/${product.images[0]}`;
    } else if (product.id <= 56) {
      product.images[0] = `../adidas/${product.images[0]}`;
    } else if (product.id <= 80) {
      product.images[0] = `../Puma/${product.images[0]}`;
    }
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    const user = auth.currentUser;
    if (user) {
      console.log(user.uid);
      saveToFirebase(user.uid, cart);
    }
  } else {
    return;
  }
}
// add cart btn
const addCarttn = document.getElementById("cart");
const cart_msg = document.getElementById("cart-msg");
addCarttn.addEventListener("click", () => {
  let LoggedIn = localStorage.getItem("logIn");
  if (!LoggedIn) {
    setTimeout(() => {
      cart_msg.classList.add("click");
      cart_msg.textContent = "🛒Log in to add items to your cart.";
      setTimeout(() => {
        cart_msg.classList.remove("click");
      }, 2500);
    });
  } else {
    setTimeout(() => {
      cart_msg.classList.add("click");
      setTimeout(() => {
        cart_msg.classList.remove("click");
      }, 2500);
    });
  }
});

// Adding Item to Firebase
function saveToFirebase(uid, cartItems) {
  const cartRef = db.collection("carts").doc(uid);
  cartRef.set({ items: cartItems })
    .then(() => {
      console.log("✅ Cart saved to Firebase");
    })
    .catch((error) => {
      console.error("❌ Error saving cart:", error);
    });
}