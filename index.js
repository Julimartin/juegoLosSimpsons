let INDEX_FRASE = 0;    
let puntaje = 0;
cargarFrase(INDEX_FRASE);

function cargarFrase(index) {
    objetoFrase = baseDeFrases[index];
    opciones = [...objetoFrase.distractores];
    opciones.push(objetoFrase.respuesta)

    // opciones.sort(()=> Math.random()-0.5); //desorganiza las opciones
    document.getElementById("nivel").innerHTML = objetoFrase.nivel;
    document.getElementById("frase").innerHTML = objetoFrase.frase;
    document.getElementById("nrofrase").innerHTML = "Frase: " + objetoFrase.numero;
    document.getElementById("btn1").innerHTML = `<img src="${opciones[0]}">`;
    document.getElementById("btn2").innerHTML = `<img src="${opciones[1]}">`;
    document.getElementById("btn3").innerHTML = `<img src="${opciones[2]}">`;
}

async function seleccionarOpcion(index) {
    if (respuestaValida(index)) {
        await Swal.fire({
            icon: 'success',
            title: 'Super!',
            text: 'Acertaste',
        })
        puntaje++;
    } else {
        await Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'casi lo logras',
        })
    }
    INDEX_FRASE++;

    if (finalDelJuego()) {
        await Swal.fire({
            title: 'Juego terminado',
            text: `tu puntaje fue de ${puntaje}/${baseDeFrases.length}`,
        })
        reiniciarJuego();
    }
    cargarFrase(INDEX_FRASE);
}


function respuestaValida(index) {
    return opciones[index] == objetoFrase.respuesta;
}

function finalDelJuego() {
    return INDEX_FRASE == baseDeFrases.length;
}

var botonReinicio = document.getElementById("reiniciar");

function reiniciarJuego() {
    INDEX_FRASE = 0;
    puntaje = 0;
    cargarFrase(INDEX_FRASE);
}

botonReinicio.addEventListener("click", reiniciarJuego);

