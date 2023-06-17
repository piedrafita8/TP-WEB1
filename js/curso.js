//declaro y/o asigno
let mostrar_ocultar=document.getElementById("cambiar");
let unidades=document.getElementById("contenidoUnidades");

// unidades ocultar
// uni0
let uni0=document.getElementById("unidad0");
let uni00=document.getElementById("unidad0.0");
// uni0
let uni1=document.getElementById("unidad1");
let uni11=document.getElementById("unidad1.1");
// uni2
let uni2=document.getElementById("unidad2");
let uni22=document.getElementById("unidad2.2");

//funciones

//mostrar ocultar unidades
mostrar_ocultar.addEventListener("click",function(){
    unidades.classList.toggle("d-none");
    //pendiente dea gregar trnasition trnasition
        if (mostrar_ocultar.value=="ver mas"){
            mostrar_ocultar.value="ver menos";
        } else{
            mostrar_ocultar.value="ver mas";
        }
});


//mostrar ocultar unidades0
uni0.addEventListener("click",function(){
    uni00.classList.toggle("d-none");
    uni11.classList.add("d-none");
    uni22.classList.add("d-none");
});
//mostrar ocultar unidades1
uni1.addEventListener("click",function(){
    uni11.classList.toggle("d-none");
    uni00.classList.add("d-none");
    uni22.classList.add("d-none");
});
//mostrar ocultar unidades2
uni2.addEventListener("click",function(){
    uni22.classList.toggle("d-none");
    uni11.classList.add("d-none");
    uni00.classList.add("d-none");
});