txtDialogo = document.getElementById("txt");
btnOpcion1 = document.getElementById("btnOpcion1");
btnOpcion2 = document.getElementById("btnOpcion2");
btnOpcion3 = document.getElementById("btnOpcion3");
btnOpcion4 = document.getElementById("btnOpcion4");
mensajeError = document.getElementById("mensajeError");

const preguntas = [
  {
    pregunta: "¿De qué canción es la letra? \"Estoy muy solo y triste acá en este mundo abandonado...\"",
    opciones: [
      { texto: "La balsa", correcta: true },
      { texto: "Wadu Wadu", correcta: false },
      { texto: "Motor Psico", correcta: false },
      { texto: "Tarea Fina", correcta: false }
    ]
  },
  {
    pregunta: "¿De qué canción es la letra? \"Tu imaginación, me programa en vivo\"",
    opciones: [
      { texto: "Pronta entrega", correcta: false },
      { texto: "Amame peteribí", correcta: false },
      { texto: "Natural", correcta: false },
      { texto: "Luna de miel", correcta: true }
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
        
        document.getElementById("btnOpcion1").style.backgroundColor = "white"; 
        document.getElementById("btnOpcion2").style.backgroundColor = "white";
        document.getElementById("btnOpcion3").style.backgroundColor = "white";
        document.getElementById("btnOpcion4").style.backgroundColor = "white";
        
        mensajeError.innerHTML = "";
        return;
    }
    else {
        window.location.href = '/home/PartidaGanada';
    }
}

function VerificarRespuesta(opcion) {
    if (preguntas[indicePregunta].opciones[opcion - 1].correcta) {
        AvanzarPreguntas();
    }

    else{
        boton = document.getElementById("btnOpcion" + opcion);
        boton.style.backgroundColor = "red";
        mensajeError.innerHTML = "Respuesta incorrecta. Intenta de nuevo.";
        return;
    }
}
