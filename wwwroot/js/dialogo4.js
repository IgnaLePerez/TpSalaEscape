const dialogos = [
    "Pero todavía no terminamos",
    "Cof, cof. Me muero de sed",
    "Cof, cof",
    "Voy a buscar agua",
    "No se te ocurra hacer nada",
];

let indiceDialogo = 0;

function AvanzarDialogo() {
  let txtDialogo = document.getElementById("txt");
  let btnContinuar = document.getElementById("btnContinuar");
  let btnSaltear = document.getElementById("btnSaltear");;
    if (indiceDialogo < dialogos.length) {
        txtDialogo.innerHTML = dialogos[indiceDialogo];
        indiceDialogo++;
        if (indiceDialogo === dialogos.length) {
          btnContinuar.style.display = "none";
          btnSaltear.value = "continuar";
        }
    }
}
