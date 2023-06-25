const allCursos = {
    0: "python",
    1: "Photoshop",
    2: "E-commerce",
    3: "Desarrollo De Videojuegos",
    4:"Fotografía",
    5: "CSS"
}
let mCursos = 6;
let conta = 0;
let cantCarrito = document.getElementById("cant-carrito");
let compro = document.getElementsByName("compro");

console.log("Comenzamos Funciona?");
/*sessionStorage.setItem("acc","0");*/
/*compro.forEach(x=>{
    x.addEventListener("click", () => {
        if (compro[0] == x) {
            console.log(" dice python abajo?");
            sessionStorage.setItem("carrito","compro.value");
            console.log(compro.value);
            console.log(sessionStorage.getItem("carrito"));
        }
    });
});*/
/// No estaria funcionando


sessionStorage.setItem("comp", "<p>Css</p><p>holi</p>");
console.log(sessionStorage.getItem("comp"));

compro.forEach(x => {
    x.addEventListener("click", () => {
        let i = 0;
        sessionStorage.setItem("acc", conta);
        while (i < mCursos) {
            if (compro[i] == x) {
                console.log("posicion: " + i);
                conta++;
                sessionStorage.setItem("acc", conta);
                cantCarrito.innerHTML = sessionStorage.getItem("acc");
                /*
                sessionStorage.setItem("compre","")
                sessionStorage.setItem("compre",allCursos[i])
                console.log(sessionStorage.getItem("compre"));*/
                console.log("se ve algo ?");
                alert("Desea ir a comprar o permanecer navegando?");
            }
            i++;
        }


    });
});
