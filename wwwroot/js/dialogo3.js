const dialogos = [
    "Pero todavía no te creas un experto.",
    "La última prueba es la que importa.",
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
