const formulario = document.querySelector("#formulario-moto");

formulario.addEventListener("submit", (e) => {
  e.preventDefault(); // Evita que la página se recargue

  // 1. Capturamos los datos
  const nombre = document.querySelector("#nombre").value;
  const producto = document.querySelector("#producto").value;
  const telefono = "584245409099"; // PONE TU NÚMERO AQUÍ (con código de país)

  // 2. Armamos el mensaje para WhatsApp
  const mensajeWhatsApp = `Hola, mi nombre es ${nombre}. Estoy interesado en: ${producto}.`;

  // 3. Creamos la URL mágica de WhatsApp
  const url = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(mensajeWhatsApp)}`;

  // 4. ¡Mandamos al usuario al chat!
  window.open(url, "_blank");
});
