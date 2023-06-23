//DECLARO VARIABLES 
let formulario = document.querySelector("#form");
let consulta= document.getElementById("consulta");
let mError = document.getElementById("mensaje-error");

let expRegPalabra = /^[a-zA-Z]+$/;
let expRegCorreo = /^[0-9a-zA-Z.-._..]+\@[0-9a-zA-Z.-._..]+\.[0-9a-zA-Z]+$/;
let expRegCel = /^[0-9]{4}\-[0-9]{4}$/;
let expRegCel2 = /^[0-9]{8}$/;

// DECLARO LAS FUNCIONES
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("formulario deteneido");
    validar();
});

consulta.addEventListener("keypress",()=>{
    
});


function validar() {
    let error = false;
    let mensajesError = "";
    //----------- VALIDO NOMBRE
    let nombre = document.querySelector("#nombre").value;
    if ((nombre == "") || (nombre.length < 2) || (!expRegPalabra.test(nombre))) {
        console.log("Error nombre invlido");
        error = true;
        mensajesError += "<p>El campo nombre es invalido</p>";
    }
    //---------- VALIDO APELLIDO
    let apellido = document.querySelector("#apellido").value;
    if ((apellido == "") || (apellido.length < 2) || (!expRegPalabra.test(apellido))) {
        console.log("Error apellido invalido");
        error = true;
        mensajesError += "<p>El campo apellido es invalido</p>"
    }
    //---------- VALIDO CORREO ELECTRONICO
    let correo = document.querySelector("#correo").value;
    if((correo=="") || (!expRegCorreo.test(correo))){
        console.log("error correo")
        error=true;
        mensajesError+="<p>El Correo no es valido</p>";
    }

    //---------- VALIDO TELEFONO
    let telefono = document.querySelector("#telefono").value;
    if (telefono != "") {
        if ((!expRegCel.test(telefono))) {
            console.log("error telefono no valido");
            if (!expRegCel2.test(telefono)) {
                console.log("error telefono no valido sin guion");
                error = true;
                mensajesError += "<p>El telefono no es valido</p>";
            }
        }
    }




    if (error) {
        //mensaje de errror
        mError.innerHTML = mensajesError;
    } else {
        form.submit(); //enviado
    }
};