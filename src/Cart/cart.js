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

//   Products

document.addEventListener("DOMContentLoaded", () => {
  display();
});

function display() {
  let cart = JSON.parse(localStorage.getItem("Cart")) || [];

  const container = document.querySelector(".container");

  if (cart.length == 0) {
    container.innerHTML = "<h1>Emty Item<h1/>";
    return;
  }

  // container.innerHTML = cart.map((products,index)=>{})
  //     `
  //     <div class="product">
  //       <div class="image">
  //         <img src="../../src/Nike/${products.images[0]}" alt="" />
  //       </div>
  //       <div class="details">
  //         <div>
  //           <h2 id="product-name">${product_name}</h2>
  //           <h2 id="price">${products.price}</h2>
  //         </div>
  //         <h3 id="brand">${products.brand}</h3>
  //         <h4 id="disc">${products.dis}</h4>
  //         <section id="other">
  //           <p>Inclusive of all taxes</p>
  //           <p>(Also includes all applicable duties)</p>
  //         </section>
  //         <section class="buttons" id="buttons">
  //             <button class="chekout">CHECKOUT</button>
  //             <button class="view" >View</button>
  //         </section>
  //       </div>
  //     `;
}
