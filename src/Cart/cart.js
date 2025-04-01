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

//   Products
document.addEventListener("DOMContentLoaded", () => {
  displayCart();
});

function displayCart() {
  console.log("cart");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let container = document.querySelector(".container");

  if (cart.length === 0) {
    document.querySelector(".cart-msg").style.display = "flex";
    container.innerHTML = "";
    return;
  }

  container.innerHTML = cart
    .map(
      (product, index) =>
        `
    <div class="product">
      <div class="image">
        <img src="${product.images[0]}" alt="" />
      </div>
      <div class="details">
        <div>
          <h2 id="product-name">${product.product_name}</h2>
          <h2 id="price">${product.price}</h2>
        </div>
        <h3 id="brand">${product.brand}</h3>
        <h4 id="disc">${product.dis}</h4>
        <section id="other">
          <p>Inclusive of all taxes</p>
          <p>(Also includes all applicable duties)</p>
        </section>
        <section class="buttons" id="buttons">
            <button class="chekout" onclick="view(${product.id})">VIEW</button>
            <div id="remove" onclick="removeItem(${index})"><i class="fa-solid fa-trash"></i></div>
        </section>
      </div>
    </div>
  `
    )
    .join("");
}

function view(id) {
  window.location.href = `../Single-Product/SinglePRoduct.html?id=${id}`;
}
function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function clearAll() {
  localStorage.removeItem("cart");
  displayCart();
}

function get() {
  window.location.href = "../../index.html";
}
