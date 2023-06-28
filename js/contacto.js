//DECLARO
let formulario = document.querySelector("#form");
let consulta = document.getElementById("consulta");
let mError = document.getElementById("mensaje-error");
let limite = document.getElementById("limite");
//PARA EL TEXTAREA Y SU CONTADOR DE CARACTERES
let contador = 0;
let maximo = 1000;
let volver = document.getElementById("volver");
let pop = document.getElementById("warning");

//EXPRESIONES REGULARES PARA EL FORM
let expRegPalabra = /^[a-zA-Z]+$/;
let expRegCorreo = /^[0-9a-zA-Z.-._..]+\@[0-9a-zA-Z.-._..]+\.[0-9a-zA-Z]+$/;
let expRegCel = /^[0-9]{4}\-[0-9]{4}$/;
let expRegCel2 = /^[0-9]{8}$/;

// DECLARO LAS FUNCIONES
formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  validar();
});

//CANTIDAD DE CARACTERES DEL TEXTAREA
consulta.addEventListener("keyup", () => {
  contador = consulta.value.length;

  if (contador <= maximo) {
    limite.innerHTML = maximo - contador + "/" + maximo;
  } else {
    consulta.value = consulta.value.substring(0, 1000);
  }
});

function validar() {
  let error = false;
  let mensajesError = "";
  let nombre = document.querySelector("#nombre").value;
  if (nombre == "" || nombre.length < 2 || !expRegPalabra.test(nombre)) {
    error = true;
    mensajesError += "<p>El campo nombre es invalido</p>";
  }
  let apellido = document.querySelector("#apellido").value;
  if (apellido == "" || apellido.length < 2 || !expRegPalabra.test(apellido)) {
    error = true;
    mensajesError += "<p>El Campo apellido es invalido</p>";
  }
  let correo = document.querySelector("#correo").value;
  if (correo == "" || !expRegCorreo.test(correo)) {
    error = true;
    mensajesError += "<p>El Correo no es valido</p>";
  }

  let telefono = document.querySelector("#telefono").value;
  if (telefono != "") {
    if (!expRegCel.test(telefono)) {
      if (!expRegCel2.test(telefono)) {
        error = true;
        mensajesError += "<p>El Telefono ingresado no es valido</p>";
      }
    }
  }

  if (error) {
    mError.innerHTML = mensajesError;
  } else {
    pop.classList.add("supra");
    pop.classList.remove("d-none");
    volver.addEventListener("click", () => {
      pop.classList.add("d-none");
      pop.classList.remove("supra");

      form.submit();
      alert("enviado!");
    });
  }
}
