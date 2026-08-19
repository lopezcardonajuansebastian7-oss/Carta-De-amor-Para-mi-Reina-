const inicio = document.getElementById("inicio");
const carta = document.getElementById("carta");
const corazon = document.querySelector(".corazon");

let abierto = false;


/* =====================================
   ABRIR CARTA
===================================== */

function abrirCarta() {

    if (abierto) {
        return;
    }

    abierto = true;


    /* El corazón crece */

    corazon.style.animation =
        "latido 0.5s infinite";


    /* Desaparece la primera pantalla */

    setTimeout(() => {

        inicio.style.opacity = "0";

        inicio.style.transform =
            "scale(0.7)";

    }, 300);


    /* Aparece la carta */

    setTimeout(() => {

        inicio.classList.add("oculto");

        carta.classList.remove("oculto");

        carta.style.opacity = "1";

        carta.style.transform =
            "scale(1)";

    }, 1300);

}


/* =====================================
   TOCAR CORAZÓN
===================================== */

corazon.addEventListener(
    "click",
    abrirCarta
);


/* =====================================
   TOCAR PANTALLA
===================================== */

inicio.addEventListener(
    "click",
    function(event) {

        if (
            event.target === inicio ||
            event.target.classList.contains("tocar")
        ) {

            abrirCarta();

        }

    }
);


/* =====================================
   ENTER
===================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            abrirCarta();

        }

    }
);
