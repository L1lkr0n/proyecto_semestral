const gmail = document.getElementById("v_email");
const contrasenia = document.getElementById("v_contrasenia");
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

  if (gmail.value.length < 1 || gmail.value.trim() == "") {
    mostrarMensajeError("v_email", "Ingrese un correo valido");
    condicion = false;
  }

  if (contrasenia.value.length < 1 || contrasenia.value.trim() == "") {
    mostrarMensajeError("v_contrasenia", "Ingrese una contraseña valida");
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
  form.lastElementChild.innerHTML = "Inicio correctamente";
}
