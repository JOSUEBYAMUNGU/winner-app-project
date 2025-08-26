  document.addEventListener("DOMContentLoaded", () => {
    const images = [
      { src: "img1.jpg", alt: "Mariage" },
      { src: "img2.jpg", alt: "Anniversaire" },
      { src: "img3.jpg", alt: "Shooting" }
    ];

    const galerie = document.getElementById("galerie-container");
    if (!galerie) return;

    images.forEach(img => {
      const figure = document.createElement("figure");
      const image = document.createElement("img");
      const caption = document.createElement("figcaption");

      image.src = img.src;
      image.alt = img.alt;
      caption.textContent = img.alt;

      figure.appendChild(image);
      figure.appendChild(caption);
      galerie.appendChild(figure);
    });
  });