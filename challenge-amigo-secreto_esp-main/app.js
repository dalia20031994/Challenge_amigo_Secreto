const amigos = [];
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');
const inputAmigo = document.getElementById('amigo');

function agregarAmigo() {
    const nombre = inputAmigo.value.trim();
    if (nombre) {
        amigos.push(nombre);
        mostrarAmigos();
        inputAmigo.value = '';
        inputAmigo.focus();
    } else {
        alert('El nombre no es válido. Por favor, ingresa un nombre.');
    }
}

function mostrarAmigos() {
    listaAmigos.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo() {
    if (amigos.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const nombreSorteado = amigos[indiceAleatorio];
        resultado.innerHTML = `<li>El amigo secreto es: <strong>${nombreSorteado}</strong></li>`;
    } else {
        resultado.innerHTML = '<li>No hay nombres en la lista para sortear.</li>';
    }
}
