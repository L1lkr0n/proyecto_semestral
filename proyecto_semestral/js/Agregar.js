const nombre = document.getElementById("v_nombre");
const color = document.getElementById("v_color");
const talla = document.getElementById("v_talla");
const tipo = document.getElementById("v_tipo");
const material = document.getElementById("v_material");
const precio = document.getElementById("v_precio");
const form = document.getElementById("form");
const listInputs = document.querySelectorAll(".mb-3");

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

  if (color.value.length < 1 || color.value.trim() == "") {
    mostrarMensajeError("v_color", "Ingrese un color valido");
    condicion = false;
  }
  
  if (talla.value.length < 1 || talla.value.trim() == "") {
    mostrarMensajeError("v_talla", "Ingrese una talla valida");
    condicion = false;
  }

  if (tipo.value.length < 1 || tipo.value.trim() == "") {
    mostrarMensajeError("v_tipo", "Ingrese un tipo valido");
    condicion = false;
  }

  if (material.value.length < 1 || material.value.trim() == "") {
    mostrarMensajeError("v_material", "Ingrese un material valido");
    condicion = false;
  }

  if (precio.value.length < 1 || precio.value.trim() == "") {
    mostrarMensajeError("v_precio", "Ingrese un precio valido");
    condicion = false;
  }else {
    mostrarMensajeError("v_precio", "");
  }

  return condicion;
}

function mostrarMensajeError(claseInput, mensaje) {
  let elemento = document.querySelector(`.${claseInput}`);
  elemento.lastElementChild.innerHTML = mensaje;
}

function enviarFormulario() {
  form.reset();
  form.lastElementChild.innerHTML = "Modificado correctamente";
}
