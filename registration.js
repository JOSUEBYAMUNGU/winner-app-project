   document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.fullname.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (!name || !email || !password || !confirm) {
      alert("Tous les champs sont obligatoires.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Adresse e-mail invalide.");
      return;
    }

    if (password.length < 6) {
      alert("Le mot de passe doit contenir au moins 6 caractères.");
      return;
    }

    if (password !== confirm) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }
    //alert("Inscription réussie !");
    
    form.reset();
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }
});


