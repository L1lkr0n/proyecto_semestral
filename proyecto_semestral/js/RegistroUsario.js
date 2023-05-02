const nombre = document.getElementById("v_nombre");
const correo = document.getElementById("v_gmail");
const contrasenia = document.getElementById("v_contrasena");
const respuesta = document.getElementById("v_respuesta");
const terminosYcondiciones = document.getElementById("termsAndConditions");
const form = document.getElementById("form");
const listInputs = document.querySelectorAll(".form-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let condicion = validacionForm();
  if (condicion) {
    enviarFormulario();
  }
});

function validacionForm() {
  form.lastElementChild.innerHTML = " ";
  let condicion = true;
  listInputs.forEach((element) => {
    element.lastElementChild.innerHTML = "";
  });

  if (nombre.value.length < 1 || nombre.value.trim() == "") {
    mostrarMensajeError("v_nombre", "Ingrese un nombre valido");
    condicion = false;
  }

  if (correo.value.length < 1 || correo.value.trim() == "") {
    mostrarMensajeError("v_gmail", "Ingrese un correo valido");
    condicion = false;
  }

  if (contrasenia.value.length < 1 || contrasenia.value.trim() == "") {
    mostrarMensajeError("v_contrasena", "Ingrese una contraseña valida");
    condicion = false;
  } 
  
  if (respuesta.value.length < 1 || respuesta.value.trim() == "") {
    mostrarMensajeError("v_respuesta", "Ingrese su respuesta");
    condicion = false;
  }

  if (!terminosYcondiciones.checked) {
  mostrarMensajeError("termsAndConditions", "Acepte los terminos y condiciones");
  condicion = false;
  } else {
  mostrarMensajeError("termsAndConditions", "");
  }

  return condicion;
}

function mostrarMensajeError(claseInput, mensaje) {
  let elemento = document.querySelector(`.${claseInput}`);
  elemento.lastElementChild.innerHTML = mensaje;
}

function enviarFormulario() {
  form.reset();
  form.lastElementChild.innerHTML = "Registrado Correctamente";
}