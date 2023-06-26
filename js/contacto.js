//DECLARO 
let formulario = document.querySelector("#form");
let consulta = document.getElementById("consulta");
let mError = document.getElementById("mensaje-error");
let limite = document.getElementById("limite");
//PARA EL TEXTAREA Y SU CONTADOR DE CARACTERES
let contador = 0;
let maximo = 1000;
//ehhh.... envio exitoso?
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
    console.log("formulario deteneido");
    validar();
    
});
//ehhh.... envio exitoso?


//CANTIDAD DE CARACTERES DEL TEXTAREA
consulta.addEventListener("keyup", () => {
    contador = consulta.value.length;
    console.log(contador);
    if (contador <= maximo) {
        limite.innerHTML = (maximo - contador) + "/" + maximo;
    } else {
        consulta.value = consulta.value.substring(0, 1000); /*para esta linea esta linea hubo que googlear pa que mentir */
    }
    /*No pense que funcionara :0 */
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
        mensajesError += "<p>El Campo apellido es invalido</p>"
    }
    //---------- VALIDO CORREO ELECTRONICO
    let correo = document.querySelector("#correo").value;
    if ((correo == "") || (!expRegCorreo.test(correo))) {
        console.log("error correo")
        error = true;
        mensajesError += "<p>El Correo no es valido</p>";
    }

    //---------- VALIDO TELEFONO
    let telefono = document.querySelector("#telefono").value;
    if (telefono != "") {
        if ((!expRegCel.test(telefono))) {
            console.log("error telefono no valido");
            if (!expRegCel2.test(telefono)) {
                console.log("error telefono no valido sin guion");
                error = true;
                mensajesError += "<p>El Telefono ingresado no es valido</p>";
            }
        }
    }


    if (error) {
        //mensaje de errror
        mError.innerHTML = mensajesError;
    } else {
        pop.classList.add("supra")
        pop.classList.remove("d-none");
        volver.addEventListener("click", () => {
            pop.classList.add("d-none");
            pop.classList.remove("supra");
            
            form.submit(); //enviado
            alert("enviado!");
            
        });
        
    }
};