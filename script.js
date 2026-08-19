const inicio = document.getElementById("inicio");
const carta = document.getElementById("carta");
const corazon = document.querySelector(".corazon");


/* =====================================
   ABRIR LA CARTA
===================================== */

function abrir() {

    if (!inicio || !carta || !corazon) {
        return;
    }


    /* Evita varios clics */

    corazon.style.pointerEvents = "none";


    /* El corazón hace un pequeño zoom */

    corazon.style.animation =
        "latido .5s infinite";


    /* Desaparece la pantalla inicial */

    inicio.style.opacity = "0";

    inicio.style.transform =
        "scale(.75)";


    /* Después aparece la carta */

    setTimeout(function () {

        inicio.classList.add("oculto");

        carta.classList.remove("oculto");

        carta.style.opacity = "1";

        carta.style.transform =
            "scale(1)";

    }, 1000);

}


/* =====================================
   CLIC EN EL CORAZÓN
===================================== */

corazon.addEventListener(
    "click",
    abrir
);


/* =====================================
   TOCAR EL MENSAJE
===================================== */

const tocar =
    document.querySelector(".tocar");


if (tocar) {

    tocar.addEventListener(
        "click",
        abrir
    );

}


/* =====================================
   TECLA ENTER
===================================== */

document.addEventListener(
    "keydown",
    function (evento) {

        if (evento.key === "Enter") {

            abrir();

        }

    }
);
