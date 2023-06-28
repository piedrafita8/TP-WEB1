const allCursos = {
  0: "python",
  1: "Photoshop",
  2: "E-commerce",
  3: "Desarrollo De Videojuegos",
  4: "Fotografía",
  5: "CSS",
};

let mCursos = 6;
let cantCarrito = document.getElementById("cant-carrito");
let compro = document.getElementsByName("compro");

// para el mensaje de alerta
let irA = document.getElementById("irA");
let noIrA = document.getElementById("noIrA");
let war = document.getElementById("warning");

let conta = sessionStorage.getItem("acc");
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
        war.classList.remove("d-none");
        noIrA.addEventListener("click", () => {
          war.classList.add("d-none");
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
