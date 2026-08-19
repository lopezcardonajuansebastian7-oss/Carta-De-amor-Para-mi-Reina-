const inicio = document.getElementById("inicio");
const carta = document.getElementById("carta");

let abierto = false;


/* =================================
   ABRIR CARTA
================================= */

function abrirCarta() {

    if (abierto) return;

    abierto = true;

    inicio.style.opacity = "0";
    inicio.style.transform = "scale(0.75)";

    setTimeout(() => {

        inicio.classList.add("oculto");

        carta.classList.remove("oculto");

        setTimeout(() => {

            carta.style.opacity = "1";
            carta.style.transform = "scale(1)";

        }, 100);

    }, 1200);
}


/* =================================
   TOCAR LA PANTALLA
================================= */

inicio.addEventListener("click", abrirCarta);


/* =================================
   TAMBIÉN SE PUEDE ABRIR CON ENTER
================================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        abrirCarta();
    }

});