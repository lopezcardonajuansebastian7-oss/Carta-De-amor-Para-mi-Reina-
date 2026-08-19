const inicio = document.getElementById("inicio");
const carta = document.getElementById("carta");
const corazon = document.querySelector(".corazon");

corazon.addEventListener("click", abrir);

function abrir() {

    inicio.style.opacity = "0";
    inicio.style.transform = "scale(.8)";

    setTimeout(() => {

        inicio.classList.add("oculto");
        carta.classList.remove("oculto");

    }, 900);
}
