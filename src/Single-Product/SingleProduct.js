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
          addCart();
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
          addCart(product);
        });
      }
    })
    .catch((error) => console.error("Error loading products", error));
});

function changeImageNike(image) {
  document.getElementById("one-img").src = `../Nike/${image}`;
}

// Add Cart section
function addCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let existingProduct = cart.find((item) => item.id === product.id);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    product.quantity = 1;
    cart.push(product);
  }
  localStorage.setItem("Cart", JSON.stringify(product));
  console.log("Product added");
}
