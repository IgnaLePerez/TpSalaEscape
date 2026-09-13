const destornillador = document.getElementById("destornillador");
const ventila = document.getElementById("ventila");
let tieneDestornillador = false;

destornillador.addEventListener("click", function () {
    tieneDestornillador = true;
    document.body.classList.add("cursor-destornillador");
    destornillador.classList.add("destornillador-tomado");
    destornillador.style.display = "none"
});

ventila.addEventListener("click", function (event) {
    if (!tieneDestornillador) {
        event.preventDefault();
        return;
    }

    event.preventDefault();
    window.location.href = ventila.href;
});
