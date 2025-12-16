// ======================================
// OBTENER PERSONA DESDE LA URL
// ======================================
const params = new URLSearchParams(window.location.search);
const persona = params.get("persona");

// ======================================
// DATOS DE REGALOS
// ======================================
const regalos = {
  paola: [
    {
      nombre: "Cartera",
      link: "https://yape.pe",
      img: "paola2.jpeg"
    },
    {
      nombre: "Bolso",
      link: "https://plin.pe",
      img: "img/bolso.jpg"
    }
  ],

  avril: [
    {
      nombre: "Agenda",
      link: "https://yape.pe",
      img: "img/agenda.jpg"
    },
    {
      nombre: "Taza",
      link: "https://plin.pe",
      img: "img/taza.jpg"
    }
  ],

  jenny: [
    {
      nombre: "Libro",
      link: "https://yape.pe",
      img: "img/libro.jpg"
    }
  ],
  cesarm: [
    {
      nombre: "Carro Hotweels",
      link: "https://yape.pe",
      img: "cesar mant 1.jpeg"
    }
  ],
};

// ======================================
// REFERENCIAS HTML
// ======================================
const contenedor = document.getElementById("opciones");

// ======================================
// VALIDACIÓN
// ======================================
if (!persona || !regalos[persona]) {
  contenedor.innerHTML = `
    <p style="text-align:center; font-size:18px;">
      No hay opciones disponibles.
    </p>
  `;
} else {

  // ======================================
  // CREAR TARJETAS
  // ======================================
  regalos[persona].forEach(item => {

    const card = document.createElement("div");
    card.className = "card-opcion";

    card.innerHTML = `
      <img src="${item.img}" alt="${item.nombre}">
      <h3>${item.nombre}</h3>
      <a href="${item.link}" target="_blank">Select</a>
    `;

    contenedor.appendChild(card);

  });
}