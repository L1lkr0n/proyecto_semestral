const email = document.getElementById("v_email");
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

  if (email.value.length < 1 || email.value.trim() == "") {
    mostrarMensajeError("v_email", "Ingrese un correo valido");
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
  form.lastElementChild.innerHTML = "Recuperación exitosa";
}