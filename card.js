document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("product-container");

  // URL de la API
  const apiURL = "http://localhost:3001/ropa"; // Asegúrate de que el servidor JSON esté corriendo

  // Fetch para obtener los datos de la API
  fetch(apiURL)
    .then((response) => {
      if (!response.ok) throw new Error("Error al obtener los datos de la API");
      return response.json();
    })
    .then((data) => {
      // Generar tarjetas para cada producto
      data.forEach((product) => {
        const card = `
          <div class="card col-4" style="width: 20rem;">
            <img src="${product.img}" class="mt-5" alt="${product.name}">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.descripcion}</p>
              <p class="card-text text-success">${product.oferta}</p>
              <p class="card-text"><strong>Precio: $${product.price}</strong></p>
            </div>
          </div>
        `;
        container.innerHTML += card; // Agregar la tarjeta al contenedor
      });
    })
    .catch((error) => {
      console.error("Error:", error);
      container.innerHTML = "<p>Error al cargar los productos.</p>";
    });
});
