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
    indexNombre:    0,
    indexApellido:  1,
    indexDni:       2,
    indexEmail:     3,
    indexTel:       4
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

//Crear primera fila.
agregarFila();

function calcularMonto(){
    let personas = document.getElementsByClassName(constantes.classPersona);
    let newMonto = constantes.monto * personas.length;
    monto.innerHTML = "$ " + newMonto.toLocaleString();
}


function agregarFila(){
    let nuevaFila = document.createElement("div");
    nuevaFila.classList.add("inscripcion-persona");
    
    let divisorFila = document.createElement("div");
    divisorFila.classList.add("inscripcion-divisor");

    let punteroUltimaFila = obtenerPunteroUltimaFila();

    let nombre_div = document.createElement("div");
    nombre_div.classList.add("inscripcion-item");

    let nombre_input = document.createElement("input");
    nombre_input.type = "text";
    nombre_input.name = "nombre";
    nombre_input.placeholder = "Nombre";
    nombre_input.required = true;

    nombre_div.append(nombre_input);

    let apellido_div = document.createElement("div");
    apellido_div.classList.add("inscripcion-item");

    let apellido_input = document.createElement("input");
    apellido_input.type = "text";
    apellido_input.name = "apellido";
    apellido_input.placeholder = "Apellido";
    apellido_input.required = true;

    apellido_div.append(apellido_input);

    let dni_div = document.createElement("div");
    dni_div.classList.add("inscripcion-item");

    let dni_input = document.createElement("input");
    dni_input.type = "number";
    dni_input.name = "dni";
    dni_input.placeholder = "Numero de Documento";
    dni_input.required = true;

    dni_div.append(dni_input);

    let email_div = document.createElement("div");
    email_div.classList.add("inscripcion-item");

    let email_input = document.createElement("input");
    email_input.type = "email";
    email_input.name = "email";
    email_input.placeholder = "Direccion de Correo";
    email_input.required = true;

    email_div.append(email_input);

    let tel_div = document.createElement("div");
    tel_div.classList.add("inscripcion-item");

    let tel_input = document.createElement("input");
    tel_input.type = "tel";
    tel_input.name = "telefono";
    tel_input.placeholder = "Numero de Telefono";
    tel_input.required = true;
    tel_input.pattern = "[0-9]{8}";

    tel_div.append(tel_input);

    let addrow_div = document.createElement("div");
    addrow_div.classList.add("inscripcion-addrow");

    let addrow_button = document.createElement("input");
    addrow_button.type = "button";
    addrow_button.value = "Agregar fila";
    addrow_button.classList.add("inscripcionButton-addrow");
    addrow_button.setAttribute("onclick","agregarFila();");

    let delrow_button = document.createElement("input");
    delrow_button.type = "button";
    delrow_button.value = "Eliminar fila";
    delrow_button.classList.add("inscripcionButton-addrow");
    delrow_button.setAttribute("onclick","eliminarFila(this);");

    addrow_div.append(addrow_button);
    addrow_div.append(delrow_button);
    
    nuevaFila.append(nombre_div);
    nuevaFila.append(apellido_div);
    nuevaFila.append(dni_div);
    nuevaFila.append(email_div);
    nuevaFila.append(tel_div);
    nuevaFila.append(addrow_div);
    
    tabla.insertBefore(nuevaFila, punteroUltimaFila);
    tabla.insertBefore(divisorFila, punteroUltimaFila);

    calcularMonto();

    return;
}

function eliminarFila(puntero){
    let personas = document.getElementsByClassName(constantes.classPersona);
    let fila = puntero.parentNode.parentNode;

    if(personas.length > 1){
        eliminarCampos(fila);
        calcularMonto();
    }else{
        limpiarCampos(fila);
    }
}

function eliminarCampos(fila){
    let divisor = fila.nextSibling;
    fila.remove();
    divisor.remove();
}

function limpiarCampos(fila){
    let fila_nombre = fila.childNodes[constantes.indexNombre].childNodes[0];
    let fila_apellido = fila.childNodes[constantes.indexApellido].childNodes[0];
    let fila_dni = fila.childNodes[constantes.indexDni].childNodes[0];
    let fila_email = fila.childNodes[constantes.indexEmail].childNodes[0];
    let fila_tel = fila.childNodes[constantes.indexTel].childNodes[0];

    fila_nombre.value = "";
    fila_apellido.value = "";
    fila_dni.value = "";
    fila_email.value = "";
    fila_tel.value = "";

    return;
}

function obtenerPunteroUltimaFila(){
    let i;
    let tablaChilds = tabla.childNodes;
    for(i = 0; i < tablaChilds.length; i++){
        if(tablaChilds[(i+1)].className == constantes.classDecision){
            return tablaChilds[i];
        }
    }
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

        aux_nombre = personas[i].childNodes[constantes.indexNombre].childNodes[0].value;
        aux_apellido = personas[i].childNodes[constantes.indexApellido].childNodes[0].value;
        aux_dni = personas[i].childNodes[constantes.indexDni].childNodes[0].value;

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