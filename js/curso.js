let mostrar_ocultar = document.getElementById("cambiar");
let unidades = document.getElementById("contenidoUnidades");

// uni0
let uni0 = document.getElementById("unidad0");
let uni00 = document.getElementById("unidad0.0");
// uni0
let uni1 = document.getElementById("unidad1");
let uni11 = document.getElementById("unidad1.1");
// uni2
let uni2 = document.getElementById("unidad2");
let uni22 = document.getElementById("unidad2.2");
//Ver detalles de la descripcion del curso
let detalles = document.getElementById("detalles");
let verDesc = document.getElementById("verDesc");

//ver detalles de la descripcion curso
detalles.addEventListener("click", () => {
  verDesc.classList.toggle("d-none");
  if (detalles.textContent == "Ver Detalles") {
    detalles.innerHTML = "Ocultar Detalles";
  } else {
    detalles.innerHTML = "Ver Detalles";
  }
});

//mostrar ocultar unidades
mostrar_ocultar.addEventListener("click", function () {
  unidades.classList.toggle("d-none");
  if (mostrar_ocultar.value == "ver mas") {
    mostrar_ocultar.value = "ver menos";
  } else {
    mostrar_ocultar.value = "ver mas";
  }
});

//mostrar ocultar unidades0
uni0.addEventListener("click", function () {
  uni00.classList.toggle("d-none");
  uni11.classList.add("d-none");
  uni22.classList.add("d-none");
});
//mostrar ocultar unidades1
uni1.addEventListener("click", function () {
  uni11.classList.toggle("d-none");
  uni00.classList.add("d-none");
  uni22.classList.add("d-none");
});
//mostrar ocultar unidades2
uni2.addEventListener("click", function () {
  uni22.classList.toggle("d-none");
  uni11.classList.add("d-none");
  uni00.classList.add("d-none");
});





//VEAMOS QUE SE PUEDE HACER
const allCursosC = {
  0: "Python",
  1: "Photoshop",
  2: "E-commerce",
  3: "Desarrollo De Videojuegos",
  4: "Fotografía",
  5: "CSS",
};
let compr=document.getElementsByName("compr");
compr.forEach((t)=>{
  t.addEventListener("click",()=>{
    console.log("value: "+(parseInt(t.value)));
    let i = 0;
    while(i<6){
      if(t.value==allCursosC[i])
      console.log("existe el valor:"+t);
      i++
    };
  });
});
