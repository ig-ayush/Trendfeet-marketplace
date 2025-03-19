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