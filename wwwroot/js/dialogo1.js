const dialogos = [
    "Estás en mi casa. Y no estás acá por casualidad.",
    "Quiero comprobar cuánto sabés de rock nacional.",
    "Porque decir que te gusta el rock es fácil...",
    "...demostrarlo es otra cosa.",
    "Te voy a hacer unas preguntas.",
    "Nada de buscar respuestas. Nada de trampas.",
    "Empecemos."
];

let indiceDialogo = 0;

function AvanzarDialogo() {
    const btnContinuar = document.getElementById("btnContinuar");
    const btnSaltear = document.getElementById("btnSaltear");
    if (indiceDialogo < dialogos.length) {
        txtDialogo.innerHTML = dialogos[indiceDialogo];
        indiceDialogo++;
        if (indiceDialogo === dialogos.length) {
          btnContinuar.style.display = "none";
          btnSaltear.value = "continuar";
        }
    }
}  