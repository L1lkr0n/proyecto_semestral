const objeto = document.querySelectorAll(".form-check");

function validarRadio1(){
  var s="no";
for(var i=0;i<document.form1.objetos.length;i++)
{
  if(document.fomr1.objetos[i].checked){
    alert("marco:"+document.form1.objetos[i].value);
    s="si";
  }
}
if(s=="no"){
  alert("Debe seleccionar un objeto");
}
validarRadio2();
}
function validarRadio2(){
  var s="no";
for(var i=0;i<document.form2.columnas.length;i++)
{
  if(document.form2.columnas[i].checked){
    alert("marco:"+document.form2.columnas[i].value);
    s="si";
  }
}
if(s=="no"){
  alert("Debe seleccionar una columna");
}
validarRadio3();
}
function validarRadio3(){
  var s="no";
for(var i=0;i<document.form3.filas.length;i++)
{
  if(document.fomr3.filas[i].checked){
    alert("marco:"+document.form3.filas[i].value);
    s="si";
  }
}
if(s=="no"){
  alert("Debe seleccionar una fila");
}
}

const nombre = document.getElementById("v_name");
const color = document.getElementById("v_color");
const talla = document.getElementById("v_talla");
const tipo = document.getElementById("v_tipo");
const material = document.getElementById("v_material");
const precio = document.getElementById("v_precio");
const form = document.getElementById("form4");
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
    alert("v_name", "Ingrese un nombre valido");
    condicion = false;
  }

  if (color.value.length < 1 || color.value.trim() == "") {
    alert("v_color", "Ingrese un color valido");
    condicion = false;
  }
  
  if (talla.value.length < 1 || talla.value.trim() == "") {
    alert("v_talla", "Ingrese una talla valida");
    condicion = false;
  }

  if (tipo.value.length < 1 || tipo.value.trim() == "") {
    alert("v_tipo", "Ingrese un tipo valido");
    condicion = false;
  }

  if (material.value.length < 1 || material.value.trim() == "") {
    alert("v_material", "Ingrese un material valido");
    condicion = false;
  }

  if (precio.value.length < 1 || precio.value.trim() == "") {
    alert("v_precio", "Ingrese un precio valido");
    condicion = false;
  }else {
    alert("v_precio", "");
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
