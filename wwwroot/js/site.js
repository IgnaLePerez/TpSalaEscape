txtDialogo = document.getElementById("txt");

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
    "¿Cuál de estas bandas es considerada una de las más importantes del rock nacional argentino?",
    "¿Quién fue el cantante y líder de Sumo?",
    "¿Cuál de estas NO fue una banda de Charly García?"
];

let indiceDialogo = 0;
let indicePregunta = 0;

function AvanzarDialogo() {
    if (indiceDialogo < dialogos.length) {
        txtDialogo.innerHTML = dialogos[indiceDialogo];
        indiceDialogo++;
    }
}   

function AvanzarPreguntas() {
    if (indicePregunta < preguntas.length) {
        txtDialogo.innerHTML = preguntas[indicePregunta];
        indicePregunta++;
    }
}

function VerificarRespuesta(respuesta, opcion) {
    if (respuesta === "Soda Stereo") {
        AvanzarPreguntas();
    }
        
}
