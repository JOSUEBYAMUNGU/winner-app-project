    document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('reservationForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const date = form.date.value;
    const type = form.type.value;

    if (!name || !email || !date || !type) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    if (!validateEmail(email)) {
      alert("Adresse email invalide.");
      return;
    }

    alert("Votre réservation a été envoyée avec succès !");
    form.reset();
  });

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email.toLowerCase());
  }
});