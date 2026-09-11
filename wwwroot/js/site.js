txtDialogo = document.getElementById("txt");
btnOpcion1 = document.getElementById("btnOpcion1");
btnOpcion2 = document.getElementById("btnOpcion2");
btnOpcion3 = document.getElementById("btnOpcion3");
btnOpcion4 = document.getElementById("btnOpcion4");
mensajeError = document.getElementById("mensajeError");


const dialogos = [
    // ESCENA 1 — ENTRÁS A LA SALA
    "Estás en mi casa. Y no estás acá por casualidad.",
    
    // ESCENA 2 — EL MOTIVO
    "Quiero comprobar cuánto sabés de rock nacional.",
    "Porque decir que te gusta el rock es fácil...",
    "...demostrarlo es otra cosa.",
    
    // ESCENA 3 — LA AMENAZA
    "Te voy a hacer unas preguntas.",
    "Nada de buscar respuestas. Nada de trampas.",
    "Empecemos."
];

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

let indiceDialogo = 0;
let indicePregunta = 0;
mensajeError.innerHTML = "";

function AvanzarDialogo() {
    if (indiceDialogo < dialogos.length) {
        txtDialogo.innerHTML = dialogos[indiceDialogo];
        indiceDialogo++;
    }
}   

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
        
        mensajeError.innerHTML = "";
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
        mensajeError.innerHTML = "Respuesta incorrecta. Intenta de nuevo.";
        return;
    }
}
        

