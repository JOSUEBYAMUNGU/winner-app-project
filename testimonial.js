  document.addEventListener("DOMContentLoaded", () => {
    const temoignages = [
      { nom: "Claire N.", message: "Un service impeccable pour notre mariage, photos magnifiques !" },
      { nom: "Jean-Paul M.", message: "Très professionnels et à l’écoute. Merci Winner Agency !" },
      { nom: "Fatou B.", message: "Une expérience inoubliable. Vidéos de qualité, équipe ponctuelle." }
    ];

    const container = document.getElementById("temoignages-container");
    if (!container) return;

    temoignages.forEach(t => {
      const div = document.createElement("div");
      div.className = "temoignage";
      div.innerHTML = `
        <p class="message">"t.message"</p>
        <p class="auteur">-{t.nom}</p>
      `;
      container.appendChild(div);
    });
  });