txtDialogo = document.getElementById("txt");
btnOpcion1 = document.getElementById("btnOpcion1");
btnOpcion2 = document.getElementById("btnOpcion2");
btnOpcion3 = document.getElementById("btnOpcion3");
btnOpcion4 = document.getElementById("btnOpcion4");
mensajeError = document.getElementById("mensajeError");
const contenedorError = document.querySelector(".error-container");

function OcultarMensajeError() {
  contenedorError.classList.add("error-container-oculto");
  mensajeError.innerHTML = "";
}

function MostrarMensajeError(mensaje) {
  mensajeError.innerHTML = mensaje;
  contenedorError.classList.remove("error-container-oculto");
}

const preguntas = [
  {
    pregunta: "¿Cuál de estas bandas es considerada una de las más importantes del rock nacional argentino?",
    opciones: [
      { texto: "Don Cornelio y la zona", correcta: false },
      { texto: "Los Ramones", correcta: false },
      { texto: "Soda Stereo", correcta: true },
      { texto: "Pier", correcta: false }
    ]
  },
  {
    pregunta: "¿Quién fue el cantante y líder de Sumo?",
    opciones: [
      { texto: "Fito Páez", correcta: false },
      { texto: "Gustavo Cerati", correcta: false },
      { texto: "Luca Prodan", correcta: true },
      { texto: "Charly García", correcta: false }
    ]
  },
  {
    pregunta: "¿Cuál de estas NO fue una banda de Charly García?",
    opciones: [
      { texto: "Seru Giran", correcta: false },
      { texto: "Los Gatos", correcta: true },
      { texto: "La máquina de hacer pájaros", correcta: false },
      { texto: "PorSuiGieco", correcta: false }
    ]
  }
];
let indicePregunta = 0;
mensajeError.innerHTML = ""; 

function AvanzarPreguntas() {
    indicePregunta++;
    if (indicePregunta < preguntas.length) {

        txtPregunta.innerHTML = preguntas[indicePregunta].pregunta;

        document.getElementById("btnOpcion1").innerHTML =
            preguntas[indicePregunta].opciones[0].texto;

        document.getElementById("btnOpcion2").innerHTML =
            preguntas[indicePregunta].opciones[1].texto;

        document.getElementById("btnOpcion3").innerHTML =
            preguntas[indicePregunta].opciones[2].texto;

        document.getElementById("btnOpcion4").innerHTML =
            preguntas[indicePregunta].opciones[3].texto;
        
        document.getElementById("btnOpcion1").style.backgroundColor = "#8B0000"; 
        document.getElementById("btnOpcion2").style.backgroundColor = "#8B0000";
        document.getElementById("btnOpcion3").style.backgroundColor = "#8B0000";
        document.getElementById("btnOpcion4").style.backgroundColor = "#8B0000";
        
        OcultarMensajeError();
        return;
    }
    else {
        window.location.href = '/home/AvanzarSala';
    }
}

function VerificarRespuesta(opcion) {
    if (preguntas[indicePregunta].opciones[opcion - 1].correcta) {
        AvanzarPreguntas();
    }

    else{
        boton = document.getElementById("btnOpcion" + opcion);
        boton.style.backgroundColor = "red";
        MostrarMensajeError("Respuesta incorrecta. Intenta de nuevo.");
        return;
    }
}
        

