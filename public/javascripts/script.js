let map;
let lugares = [];
let markersLayer;
let usuario = null;

document.addEventListener("DOMContentLoaded", () => {
  iniciarMapa();
  cargarMonumentos();
  initLogin();
  updateAuthUI();
});

function iniciarMapa() {
  map = L.map("map").setView([36.7213, -4.4214], 14);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap"
  }).addTo(map);

  markersLayer = L.layerGroup().addTo(map);
}

async function cargarMonumentos() {
  try {
    const res = await fetch("/api/monumentos");
    const data = await res.json();

    lugares = data.features || [];

    mostrarLista();
    ponerMarcadores();
  } catch (error) {
    console.error("Error cargando monumentos:", error);
    Swal.fire("Error", "No se pudo cargar el GeoJSON", "error");
  }
}

function ponerMarcadores() {
  markersLayer.clearLayers();

  lugares.forEach((lugar) => {
    const coords = lugar.geometry.coordinates;

    const marker = L.marker([coords[1], coords[0]]).addTo(markersLayer);

    marker.on("click", () => {
      centrarLugar(lugar);
      mostrarInfo(lugar);
    });
  });
}

function mostrarLista() {
  const lista = document.getElementById("placesList");
  lista.innerHTML = "";

  lugares.forEach((lugar) => {
    const nombre = lugar.properties.NOMBRE || "Lugar";
    const direccion = lugar.properties.DIRECCION || "Dirección no disponible";

    const li = document.createElement("div");
    li.className = "list-group-item";
    li.style.cursor = "pointer";

    li.innerHTML = `
      <div class="fw-bold">${nombre}</div>
      <div class="small text-muted">${direccion}</div>
    `;

    li.addEventListener("click", () => {
      centrarLugar(lugar);
      mostrarInfo(lugar);
    });

    lista.appendChild(li);
  });
}

function centrarLugar(lugar) {
  const coords = lugar.geometry.coordinates;
  map.setView([coords[1], coords[0]], 18);
}

function mostrarInfo(lugar) {
  const p = lugar.properties;

  Swal.fire({
    title: p.NOMBRE || "Monumento",
    html: `
      <p><strong>Dirección:</strong> ${p.DIRECCION || "No disponible"}</p>
      <p>${p.DESCRIPCION || "Sin descripción"}</p>
    `,
    confirmButtonText: "OK"
  });
}

function initLogin() {
  const btnLogin = document.getElementById("btnLogin");
  const btnLogout = document.getElementById("btnLogout");

  if (btnLogin) {
    btnLogin.addEventListener("click", () => {
      Swal.fire({
        title: "Login",
        html: `
          <input id="user" class="swal2-input" placeholder="usuario">
          <input id="pass" type="password" class="swal2-input" placeholder="password">
        `,
        confirmButtonText: "Entrar",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        preConfirm: () => {
          const user = document.getElementById("user").value;
          const pass = document.getElementById("pass").value;

          if (user === "admin" && pass === "1234") {
            localStorage.setItem("login", "true");
            localStorage.setItem("usuario", "admin");
            usuario = "admin";
            return true;
          } else {
            Swal.showValidationMessage("Credenciales incorrectas");
            return false;
          }
        }
      }).then((result) => {
        if (result.isConfirmed) {
          updateAuthUI();

          Swal.fire({
            icon: "success",
            title: "Login correcto"
          });
        }
      });
    });
  }

  if (btnLogout) {
    btnLogout.addEventListener("click", () => {
      localStorage.removeItem("login");
      localStorage.removeItem("usuario");
      usuario = null;
      updateAuthUI();

      Swal.fire({
        icon: "success",
        title: "Sesión cerrada"
      });
    });
  }
}

function updateAuthUI() {
  const logueado = localStorage.getItem("login") === "true";
  const nombreUsuario = localStorage.getItem("usuario");

  const btnLogin = document.getElementById("btnLogin");
  const btnLogout = document.getElementById("btnLogout");
  const userStatus = document.getElementById("userStatus");

  if (logueado) {
    if (btnLogin) btnLogin.classList.add("d-none");
    if (btnLogout) btnLogout.classList.remove("d-none");
    if (userStatus) userStatus.textContent = `Usuario: ${nombreUsuario}`;
  } else {
    if (btnLogin) btnLogin.classList.remove("d-none");
    if (btnLogout) btnLogout.classList.add("d-none");
    if (userStatus) userStatus.textContent = "No autenticado";
  }
}