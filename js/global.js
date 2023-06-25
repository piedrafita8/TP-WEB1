
let x2 = sessionStorage.getItem("carrito");
let compro = document.getElementsByClassName("compro");

console.log(x2 + " Funciona");

    compro.addEventListener("click", () => {
        if (compro.value=="0") {
            sessionStorage.setItem("carrito", "");
            console.log("python");
            sessionStorage.setItem("carrito","python");
            console.log(sessionStorage.getItem("carrito"));
        }
    }); /// No estaria funcionando



