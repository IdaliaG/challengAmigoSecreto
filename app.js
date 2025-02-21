// El principal objetivo de este desafío es fortalecer tus habilidades 
// en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const amigo = input.value.trim();
    //valida que solo sean letras las que se ingresen en el nombre
    const regex = /^[a-zA-Z\s]*$/;
    if (!regex.test(amigo)) {
        alert("Solo se permiten letras y espacios en blanco en el nombre");
        return;
    }
  
    if (amigo == "") {
        alert("Ingresa un nombre valido");
        return;
    }
    amigos.push(amigo);
    actualizarlista();
    input.value = '';
}

function actualizarlista() {
    //funcion que actualiza la lista cada que se ingresa un amigo
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });

}
function sortearAmigo() {
    //funcion para el sorteo aleatorio del amigo secreto
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Selecciona aleatoriamente un nombre de la lista de amigos
    const random = Math.floor(Math.random() * amigos.length);
    const ganador = amigos[random];

    // Mostrar el amigo ganador
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpia la lista
    const li = document.createElement('li');
    li.textContent = `¡El amigo sorteado es: ${ganador}!`;
    lista.appendChild(li);
    amigos = []; // Limpiar la lista de amigos
}

