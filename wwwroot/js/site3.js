const opcionesSala3 = document.querySelectorAll('.sala3-opcion');
const botonComprobar = document.getElementById('btnComprobar');
const mensajeSala3 = document.getElementById('mensajeError');
const contenedorErrorSala3 = document.querySelector('.error-container');

const respuestasSala3 = {
    'alta-suciedad': 'andres-calamaro',
    artaud: 'pescado-rabioso',
    oktubre: 'los-redondos',
    'corpinos-en-la-madrugada': 'sumo'
};

const seleccionSala3 = {
    album: null,
    artista: null
};

let parejasCorrectas = 0;

function ocultarMensajeErrorSala3() {
    contenedorErrorSala3.classList.add('error-container-oculto');
    mensajeSala3.textContent = '';
}

function mostrarMensajeErrorSala3(mensaje) {
    mensajeSala3.textContent = mensaje;
    contenedorErrorSala3.classList.remove('error-container-oculto');
}

function actualizarBotonComprobar() {
    botonComprobar.disabled = !seleccionSala3.album || !seleccionSala3.artista;
}

opcionesSala3.forEach((opcion) => {
    opcion.addEventListener('click', () => {
        if (opcion.disabled) {
            return;
        }

        const tipo = opcion.dataset.tipo;

        document.querySelectorAll(`.sala3-opcion[data-tipo="${tipo}"]`).forEach((otraOpcion) => {
            otraOpcion.classList.remove('sala3-seleccionada');
            otraOpcion.setAttribute('aria-pressed', 'false');
        });

        opcion.classList.add('sala3-seleccionada');
        opcion.setAttribute('aria-pressed', 'true');
        seleccionSala3[tipo] = opcion.dataset.valor;
        ocultarMensajeErrorSala3();
        mensajeSala3.classList.remove('sala3-mensaje-correcto');
        actualizarBotonComprobar();
    });
});

botonComprobar.addEventListener('click', () => {
    const respuestaCorrecta = respuestasSala3[seleccionSala3.album] === seleccionSala3.artista;

    if (!respuestaCorrecta) {
        mostrarMensajeErrorSala3('Respuesta incorrecta. Intenta de nuevo.');
        mensajeSala3.classList.remove('sala3-mensaje-correcto');
        return;
    }

    const albumSeleccionado = document.querySelector(
        `.sala3-opcion[data-tipo="album"][data-valor="${seleccionSala3.album}"]`
    );
    const artistaSeleccionado = document.querySelector(
        `.sala3-opcion[data-tipo="artista"][data-valor="${seleccionSala3.artista}"]`
    );

    [albumSeleccionado, artistaSeleccionado].forEach((opcion) => {
        opcion.disabled = true;
        opcion.classList.remove('sala3-seleccionada');
        opcion.classList.add('sala3-correcta');
        opcion.setAttribute('aria-pressed', 'false');
    });

    parejasCorrectas++;
    seleccionSala3.album = null;
    seleccionSala3.artista = null;
    actualizarBotonComprobar();

    if (parejasCorrectas === Object.keys(respuestasSala3).length) {
        window.location.href = '/home/AvanzarSala';
        return;
    }

    ocultarMensajeErrorSala3();
});