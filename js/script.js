document.getElementById("formulario").addEventListener("submit", function (e) {

  e.preventDefault(); // Detiene el envío automático

  let valido = true;

  const email = document.getElementById("email").value.trim();

  const cancion = document.getElementById("cancion").value.trim();


  document.getElementById("error-email").textContent = "";

  document.getElementById("error-cancion").textContent = "";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {

    document.getElementById("error-email").textContent = "Correo invalido.";

    valido = false;

  }

  if (cancion.length < 10) {

    document.getElementById("error-cancion").textContent = "La recomendación debe tener al menos 10 letras de largo.";

    valido = false;

  }

  if (valido) {

    this.submit();

  }
});

