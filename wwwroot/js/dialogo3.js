btnSaltear = document.getElementById("btnSaltear");

const dialogos = [
    "Pero todavía no te creas un experto.",
    "La última prueba es la que importa.",
];

let indiceDialogo = 0;

function AvanzarDialogo() {
    let txtDialogo = document.getElementById("txt");
    if (indiceDialogo < dialogos.length) {
        txtDialogo.innerHTML = dialogos[indiceDialogo];
        indiceDialogo++;
        if (indiceDialogo === dialogos.length) {
          btnSaltear.style.display = "none";
        }
    }
    else{
      window.location.href = '/home/IrASala';
    }
}
