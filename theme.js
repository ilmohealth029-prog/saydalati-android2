/* Saydalati - Global Dark Mode */
(function () {
  function applyTheme() {
    const darkMode =
      localStorage.getItem("saydalati_settings_darkMode") === "true";

    document.body.classList.toggle("dark", darkMode);
  }

  applyTheme();

  window.addEventListener("storage", applyTheme);
})();
