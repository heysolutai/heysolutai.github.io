// Tema claro/escuro: segue o sistema até a pessoa escolher; a escolha fica salva neste navegador.
(function () {
  var root = document.documentElement;

  function systemDark() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function current() {
    return root.getAttribute("data-theme") || (systemDark() ? "dark" : "light");
  }

  var button = document.querySelector(".theme-toggle");
  if (button) {
    button.addEventListener("click", function () {
      var next = current() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("tema", next); } catch (e) {}
    });
  }

  var year = document.querySelector("[data-ano]");
  if (year) year.textContent = new Date().getFullYear();
})();
