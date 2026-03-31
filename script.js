const formulario = document.querySelector("#formulario-moto");

formulario.addEventListener("submit", (e) => {
  e.preventDefault(); 


  const nombre = document.querySelector("#nombre").value;
  const producto = document.querySelector("#producto").value;
  const mensaje = document.querySelector("#mensaje").value;
  const telefono = "584245409099"; 


  const mensajeWhatsApp = `Hola Mari! Mi nombre es ${nombre}. Me gustaría contratar el servicio de: ${producto}. ${mensaje}`;


  const url = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(mensajeWhatsApp)}`;


  window.open(url, "_blank");
});
