const allCursos = {
  0: "Python",
  1: "Photoshop",
  2: "E-commerce",
  3: "Desarrollo De Videojuegos",
  4: "Fotografía",
  5: "CSS",
};

//LO USO PARA EL MSJ DE ALERTA
let mCursos = 6;
let cantCarrito = document.getElementById("cant-carrito");
let compro = document.getElementsByName("compro");

//PARA EL CARRITO DE COMPRAS Y EL MODAL CORRESPONDIENTE
let hCart = document.querySelector("#h-cart");
let contenedorCart = document.querySelector("#contenedor-cart");
let cerrarCart = document.querySelector("#btn-cart-cerrar");
let contenedorCurso = document.querySelector(".curso");

// ------para el mensaje de alerta
let irA = document.getElementById("irA");
let noIrA = document.getElementById("noIrA");
let war = document.getElementById("warning");
// CONTADOR DEL MODAL CARRITO
let productosCart = document.querySelector(".productos-cart");
let iPrecio = document.querySelectorAll(".i-precio");
let cantItemCart = document.querySelectorAll(".cant-item-cart");
let sinArt = document.getElementById("sin-art");

let accCursos = [false, false, false, false, false, false];
const contaPrecio = {
  0: sessionStorage.getItem("pre0"),
  1: sessionStorage.getItem("pre1"),
  2: sessionStorage.getItem("pre2"),
  3: sessionStorage.getItem("pre3"),
  4: sessionStorage.getItem("pre4"),
  5: sessionStorage.getItem("pre5"),
};
let accPrecio = ["", "", "", "", "", ""];

let conta = sessionStorage.getItem("acc");

//-----FUNCIONES Y EVENTOS PARA EL JS GLOBAL----- 

//ACUMULADOR PARA EL ICONO DEL CARRITO
compro.forEach((x) => {
  x.addEventListener("click", () => {
    let i = 0;
    sessionStorage.setItem("acc", conta);
    while (i < mCursos) {
      if (compro[i] == x) {
        conta++;
        sessionStorage.setItem("acc", conta);
        cantCarrito.innerHTML = sessionStorage.getItem("acc");
        war.classList.add("supra");
        war.classList.remove("d-hidde");
        //FINALIZO EL ACC DEL CARRITO SOLO


        // INICIO COSITAS RARAS ------------------------
        let contaCursos = sessionStorage.getItem("acc" + i);

        if (contaCursos != null && contaCursos != false) {
          accCursos[i] = true;
        }
        if (contaPrecio[i] != null && contaPrecio[i] != "") {
          accPrecio[i] = sessionStorage.getItem("pre" + i);
        }

        accPrecio[i] = iPrecio[i].textContent;
        sessionStorage.setItem("pre" + i, accPrecio[i]);

        console.log(sessionStorage.getItem("pre" + i));
        console.log(allCursos[i]);
        //CREO EL SESSIONSTORAGE PARA CADA CURSO RESPECTO DE LA SELECCION
        sessionStorage.setItem("acc" + i, accCursos[i]);
        console.log(sessionStorage.getItem("acc" + i));/*FUNCIONA ESTO entonces...*/

        const itemAniadido = document.createElement("div");
        itemAniadido.classList.add("item-cart");
        //AÑADO AL DIV CREADO

        //PREGUNTO SI YA EXISTE UN DIV CON LA INFO
        console.log(accCursos[i]);// se puede borrar
        console.log(sessionStorage.getItem("acc" + i)); //se pouede borrar 
        console.log(contaCursos); //se puede borrar
        if (contaCursos==true) {
          console.log("Se permite solo un curso de c/u");
        } else {
          console.log("ingreso al creador");//se puede borrar 
          console.log(accCursos[i]); //se puede borrar
          accCursos[i] = true;
          console.log(accCursos[i]); //se puede borrar
          sessionStorage.setItem("acc" + i, accCursos[i]);
          sinArt.classList.add("d-hidde");
          //CREO EL DIV ITEM
          itemAniadido.innerHTML = `
          <h3>${allCursos[i]}</h3>
          <p>${sessionStorage.getItem("pre" + i)}</p>
          <button value="${i}" name="d" class="eliminar-item-cart">X</button>`;

          productosCart.append(itemAniadido); //añado el div item al div del carrito
        
        }


        // FIN DE COSITAS RARAS -------------------------------
        noIrA.addEventListener("click", () => {
          war.classList.add("d-hidde");
          war.classList.remove("supra");
        });
      }
      i++;
    }
  });
});
if (conta != null && conta != 0) {
  cantCarrito.innerHTML = sessionStorage.getItem("acc");
}
// ------fin de el mensaje de alerta


//FUNCIONALIDAD PARA EL CARRITO DE COMPRAS 
hCart.addEventListener("click", () => {
  contenedorCart.classList.remove("d-hidde");
  contenedorCart.classList.add("content-cart");
});

cerrarCart.addEventListener("click", () => {
  contenedorCart.classList.remove("content-cart");
  contenedorCart.classList.add("d-hidde");
});

productosCart.addEventListener("click",(toctoc)=>{
  //DEVUELVE VALOR TRUE SI SELECCIONO EL BOTON CORRECTO
  console.log(toctoc.target.classList.contains("eliminar-item-cart"));
  if(toctoc.target.classList.contains("eliminar-item-cart")){
    console.log(toctoc.target.parentElement);
    console.log("elemento seleccionado");
    const delItem =toctoc.target.parentElement;
    let t=0;
    let itemAEliminar=delItem.querySelector("button");
    console.log(itemAEliminar.value);
    while(t<mCursos){
      console.log("hace el ciclo?")
      if(itemAEliminar.value == t){
        console.log("valor es: "+t);
        sessionStorage.setItem("acc"+t, false);
        delItem.remove();
      }
      t++;
    }
  }
});


agregarItem();
//COMPRUEBO SI EXISTEN ITEMS EN EL CARRITO Y SI LOS HAY LOS CREO DE NO ESTAR
function agregarItem() {
  let j = 0;
  while (j < mCursos) {
    yaMeCanse=sessionStorage.getItem("acc" + j);
    console.log("valor de:"+j+" - "+sessionStorage.getItem("acc" + j));
    console.log(yaMeCanse.value);
    if (yaMeCanse.sessionStorage.setItem("acc"+t, false)) {
      console.log(sessionStorage.getItem("acc" + j))
      console.log("ocultar h3");
      sinArt.classList.add("d-hidde");
      const itemAniadido = document.createElement("div");
      itemAniadido.classList.add("item-cart");
      itemAniadido.innerHTML = `
    <h3>${allCursos[j]}</h3>
    <p>${sessionStorage.getItem("pre" + j)}</p>
    <button value="${j}" name="d" class="eliminar-item-cart">X</button>`;

      productosCart.append(itemAniadido);
    }else{
      //sinArt.classList.remove("d-hidde");
    }
    j++;
  }
};

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX