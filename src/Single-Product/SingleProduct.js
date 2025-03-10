document.addEventListener("DOMContentLoaded", function () {
  const urlF = new URLSearchParams(window.location.search);
  const productID = urlF.get("id");

  fetch("../../home-Page-Products.json")
    .then((response) => response.json())
    .then((products) => {
      let product = products.find((p) => p.id == productID);
      if (product) {
        document.getElementById("one-img").src = `../../${product.images[0]}`;
        let thumbnails = product.images
          .map(
            (img) => `
            <img class="thumbnail" src="../../${img}" onclick="changeImage('${img}')" alt="product Images">
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
      }
    })
    .catch((error) => console.error("Error loading products", error));
});

function changeImage(image) {
  document.getElementById("one-img").src = `../../${image}`;
}

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
