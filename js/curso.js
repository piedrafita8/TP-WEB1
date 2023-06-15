//declaro y/o asigno
let mostrar_ocultar=document.getElementById("cambiar");
let unidades=document.getElementById("contenidoUnidades");

//funciones

mostrar_ocultar.addEventListener("click",function(){
    unidades.classList.toggle("d-none");
        if (mostrar_ocultar.value=='ver mas'){
            mostrar_ocultar.value='ver menos';
        } else {
            mostrar_ocultar.value='ver mas';
        }
});