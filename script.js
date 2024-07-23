document.addEventListener("DOMContentLoaded", function() {
      const urlParams = new URLSearchParams(window.location.search);
      const plantId = urlParams.get('id');
      const contentDiv = document.getElementById("content");
      if (plantId) {
        fetch("plants.json")
          .then((response) => response.json())
          .then((plants) => {
            const plant = plants.find((p) => p.id === parseInt(plantId));
            if (plant) {
              const plantHtml = `
                          <div class="container">
                              <img src="${plant.photo}" alt="Foto Tanaman">
                              <h1>${plant.name}</h1>
                              <p>${plant.description}</p>
                              <div class="section">
                                  <h2>Manfaat Tanaman</h2>
                                  <p>${plant.benefits}</p>
                              </div>
                              <div class="section">
                                  <h2>Perawatan Tanaman</h2>
                                  <p>${plant.care}</p>
                              </div>
                              <div class="section">
                                  <h2>Informasi Tambahan</h2>
                                  <p>${plant.additionalInfo}</p>
                              </div>
                          </div>
                      `;
              contentDiv.innerHTML = plantHtml;
            } else {
              alert("Tanaman tidak ditemukan");
              contentDiv.innerHTML =
                '<p class="error">Tanaman tidak ditemukan.</p>';
            }
          })
          .catch((error) => {
            console.error("Error fetching the JSON:", error);
            contentDiv.innerHTML =
              '<p class="error">Terjadi kesalahan dalam mengambil data.</p>';
          });
      } else {
        alert("ID Tanaman tidak ditemukan");
        contentDiv.innerHTML =
          '<p class="error">ID tanaman tidak ditemukan.</p>';
      }
  });
  