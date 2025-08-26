  document.addEventListener("DOMContentLoaded", () => {
      // Dropdown toggle for mobile
      const dropdownToggle = document.querySelector(".dropdown-toggle");
      const dropdownMenu = document.querySelector(".dropdown-menu");

      dropdownToggle.addEventListener("click", (e) => {
        e.preventDefault();
        const expanded = dropdownToggle.getAttribute("aria-expanded") === "true";
        dropdownToggle.setAttribute("aria-expanded", String(!expanded));
        dropdownMenu.style.display = expanded ? "none" : "block";
      });

      document.addEventListener("click", (e) => {
        if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
          dropdownMenu.style.display = "none";
          dropdownToggle.setAttribute("aria-expanded", "false");
        }
      });

      // Form validation
      const form = document.getElementById("contactForm");

      form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (name.length < 2) {
          alert("Veuillez entrer un nom valide.");
          form.name.focus();
          return;
        }

        if (!validateEmail(email)) {
          alert("Veuillez entrer une adresse email valide.");
          form.email.focus();
          return;
        }

        if (message.length < 10) {
          alert("Votre message doit contenir au moins 10 caractères.");
          form.message.focus();
          return;
        }

        alert("Merci pour votre message. Nous vous répondrons rapidement.");
        form.reset();
      });

      function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email.toLowerCase());
      }
    });