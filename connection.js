document.addEventListener("DOMContentLoaded", () => {
      // Gestion du menu dropdown mobile
      const dropdownToggle = document.querySelector(".dropdown-toggle");
      const dropdownMenu = document.querySelector(".dropdown-menu");

      dropdownToggle.addEventListener("click", (e) => {
        e.preventDefault();
        const isExpanded = dropdownToggle.getAttribute("aria-expanded") === "true";
        dropdownToggle.setAttribute("aria-expanded", String(!isExpanded));
        dropdownMenu.style.display = isExpanded ? "none" : "block";
      });

      document.addEventListener("click", (e) => {
        if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
          dropdownMenu.style.display = "none";
          dropdownToggle.setAttribute("aria-expanded", "false");
        }
      });

      // Validation du formulaire
      const form = document.querySelector("form");
      const emailInput = document.querySelector("#email");
      const passwordInput = document.querySelector("#password");

      form.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!validateEmail(email)) {
          alert("Adresse email invalide !");
          emailInput.focus();
          return;
        }

        if (password.length < 6) {
          alert("Le mot de passe doit contenir au moins 6 caractères.");
          passwordInput.focus();
          return;
        }

        alert("Connexion réussie !");
        // window.location.href = "dashboard-client.html";
      });

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}
});