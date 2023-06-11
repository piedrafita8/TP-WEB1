//Cargar constantes
const constantes = {
    monto:          6000,
    classPersona:   "inscripcion-persona",
    classItem:      "inscripcion-item",
    classAddrow:    "inscripcion-addrow",
    classDivisor:   "inscripcion-divisor",
    classDecision:  "inscripcion-decision",
    classCerrarMsj: "inscripcionMensaje-cerrar",
    objMensaje:     "inscripcionResultados",
    objGrid:        "tabla",
    objMonto:       "inscripcionMonto",
    objForm:        "inscripcion-form",
    objMensajeTxt:  "mensaje-mensaje",
    indexNombre:    1,
    indexApellido:  3,
    indexDni:       5
};

//Variables globales
var tabla = document.getElementById(constantes.objGrid);
var monto = document.getElementById(constantes.objMonto);
var mensaje = document.getElementById(constantes.objMensaje);
var cerrarMsj = document.getElementsByClassName(constantes.classCerrarMsj)[0];
var formInsc = document.getElementById(constantes.objForm);
var mensajetxt = document.getElementById(constantes.objMensajeTxt);

//Funcion para el mensaje de resultados se cierre al apretar (X)
cerrarMsj.onclick = function(){
    mensaje.style.display = "none";
}
//Funcion si el usuario apreta cualquier lado fuera del mensaje.
window.onclick = function(event) {
    if (event.target == mensaje) {
        mensaje.style.display = "none";
    }
  }

//Carga inicialmente el valor de 1 persona.
monto.innerHTML = "$ " + constantes.monto.toLocaleString();


function agregarFila(){
    console.log("TODO - Agregar Fila");
}

function eliminarFila(puntero){
    let fila = puntero.parentNode.parentNode.id;
    console.log("TODO - Eliminar Fila");
}

formInsc.addEventListener("submit", (evento) => {
    evento.preventDefault();
    let arrayMensajes = [];
    let personas = document.getElementsByClassName(constantes.classPersona);
    let i;
    let aux_mensaje;
    let aux_nombre;
    let aux_apellido;
    let aux_dni;
    
    for(i = 0; i < personas.length; i++){
        aux_mensaje = "";
        aux_nombre = "";
        aux_apellido = "";
        aux_dni = "";

        aux_nombre = personas[i].childNodes[constantes.indexNombre].childNodes[1].value;
        aux_apellido = personas[i].childNodes[constantes.indexApellido].childNodes[1].value;
        aux_dni = personas[i].childNodes[constantes.indexDni].childNodes[1].value;

        aux_mensaje = aux_apellido + ", " + aux_nombre + ". DNI: " + aux_dni + "\n";
        arrayMensajes.push(aux_mensaje);
    }
    
    mensajetxt.innerHTML = "";
    for(i = 0; i < arrayMensajes.length; i++){
        mensajetxt.innerHTML = mensajetxt.innerHTML + arrayMensajes[i];
    }

    mensaje.style.display = "block";
});

console.log("Javascript preparado!");