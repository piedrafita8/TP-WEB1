//DECLARO VARIABLES 
let formulario=document.querySelector("#form")
let nombre=document.querySelector("#nombre").value;
let apellido=document.querySelector("#apellido").value;
let correo=document.querySelector("#correo").value;
let telefono=document.querySelector("#telefono").value;

// DECLARO LAS FUNCIONES
formulario.addEventListener("submit",(e)=>{
    e.preventDefault
    console.log("formulario deteneido");
    validar();
});



function validar(){
    let error=false;
    let mensajesError="";
    if(nombre==""){

    }
    if(error){
        //mensaje de errror
    }else{
        form.submit(); //enviado
    }
};