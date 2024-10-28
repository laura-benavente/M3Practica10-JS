
class Persona {
    constructor(nombre, apellidos, edad) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
    }
}

const personas = [];

function agregarPersona() {
    for (let i = 0; i < 5; i++) {
        const nombre = prompt("Ingresa el nombre:");
        const apellidos = prompt("Ingresa los apellidos:");
        const edad = prompt("Ingresa la edad:");
        const nuevaPersona = new Persona(nombre, apellidos, edad);
        personas.push(nuevaPersona);
    }
}

function mostrarPersonas() {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";
    personas.forEach((persona, index) => {
        resultadoDiv.innerHTML += `<p>Nombre: ${persona.nombre} Apellido: ${persona.apellidos}, Edad: ${persona.edad}</p>`;
    });
}
