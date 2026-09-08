const dialogos = [
    "Parece que sabés algo de rock.",
    "Pero no te agrandes.",
    "Eso fue apenas para entrar en calor.",
    "Ahora quiero ver si realmente conocés la historia.",
    "Porque saber nombres de bandas cualquiera puede.",
    "Lo difícil es saber de dónde vienen.",
    "Así que preparate.",
    "La próxima prueba va a ser un poco más complicada.",
    "¿Seguís queriendo escapar?",
    "Entonces demostrame cuánto sabés.",
    "[COMIENZA EL DESAFÍO 2]"
];

let indiceDialogo = 0;

function AvanzarDialogo() {
    let txtDialogo = document.getElementById("txt");
    if (indiceDialogo < dialogos.length) {
        txtDialogo.innerHTML = dialogos[indiceDialogo];
        indiceDialogo++;
    }
}
