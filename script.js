function obtenerEleccionComputadora() {
    return Math.floor(Math.random() * 3) + 1
}

function obtenerEleccionUsuario() {
    return parseInt(prompt("¿Piedra (1), papel (2) o tijera (3)?"));
}

let userSelection = obtenerEleccionUsuario();
let opponentSelection = obtenerEleccionComputadora();
console.log(opponentSelection);
if (userSelection === null || userSelection === undefined) {
    console.log("Elija una opción válida!");
} else if (userSelection === opponentSelection) {
    console.log("Empate!")
} else if (userSelection === 1) {
    opponentSelection === 2 ? console.log("Perdiste!") : console.log("Ganaste!");
} else if (userSelection === 2) {
    opponentSelection === 3 ? console.log("Perdiste!") : console.log("Ganaste!");
} else if (userSelection == 3) {
    opponentSelection === 1 ? console.log("Perdiste!") : console.log("Ganaste!");
}