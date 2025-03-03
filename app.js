// Variable para almacenar los nombres de las peronas participantes
let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo !== '') {
        amigos.push(nombreAmigo);
        mostrarListaAmigos();
        inputAmigo.value = '';
    } else {
        alert('Por favor, ingrese un nombre válido.');
    }
}

function mostrarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${amigo}`;
        listaAmigos.appendChild(li);
    });
}
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Debe agregar al menos dos amigos para realizar el sorteo.');
        return;
    }

    let amigosSinPareja = [...amigos];
    let resultadoSorteo = [];

    amigos.forEach(amigo => {
        const posiblesParejas = amigosSinPareja.filter(a => a !== amigo);

        if (posiblesParejas.length === 0) {
            alert('No es posible completar el sorteo, por favor intente de nuevo.');
            return;
        }
        const randomIndex = Math.floor(Math.random() * posiblesParejas.length);
        const pareja = posiblesParejas[randomIndex];

        resultadoSorteo.push({ amigo, pareja });

        amigosSinPareja = amigosSinPareja.filter(a => a !== pareja);
    });

    mostrarResultado(resultadoSorteo);
}

function mostrarResultado(resultadoSorteo) {
    const resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = '';

    resultadoSorteo.forEach((relacion) => {
        const li = document.createElement('li');
        li.textContent = `${relacion.amigo} -> ${relacion.pareja}`;
        resultadoLista.appendChild(li);
    });
}
