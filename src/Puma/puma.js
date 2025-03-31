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
//   All Products

document.addEventListener("DOMContentLoaded", function () {
  fetch("puma.json")
    .then((response) => response.json())
    .then((products) => {
      let container = document.querySelector(".products");
      console.log(container);

      container.innerHTML = products.map(
        (product) =>
          ` <div class="product">
                <div class="image">
                  <img src="${product.images[0]}" alt="puma" />
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
  window.location.href = `../Single-Product/SinglePRoduct.html?id=${id}`;
  console.log(id);
};
