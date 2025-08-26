 document.addEventListener("DOMContentLoaded", () => {
  const files = [
    { name: "Photos Mariage - 15 juin.zip", url: "#" },
    { name: "Vidéo d'anniversaire - Enfant 2025.mp4", url: "#" },
    { name: "Affiche Concert - Juin 2025.jpg", url: "#" }
  ];

  const listContainer = document.getElementById("file-list");

  files.forEach(file => {
    const div = document.createElement("div");
    div.className = "file";

    const name = document.createElement("p");
    name.textContent = file.name;

    const link = document.createElement("a");
    link.href = file.url;
    link.textContent = "Télécharger";

    div.appendChild(name);
    div.appendChild(link);
    listContainer.appendChild(div);
  });
});