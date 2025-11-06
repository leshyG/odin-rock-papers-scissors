function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1 // 1; Piedra | 2: Papel | 3: Tijera
}

function getUserChoice() {
    let choice = prompt("¿Piedra, papel o tijera?");
    if (choice === null) {
        throw new Error("Operación cancelada!");
    }
    if (choice === "") {
        throw new Error("No ingresaste una opción!");
    }
    return choice;
}

function convertChoiceOpponent(choice) {
    return (choice === 1) ? "Piedra" : ((choice === 2) ? "Papel" : "Tijera")
}

function convertChoiceUser(choice) {
    choice = choice[0].toUpperCase() + choice.slice(1).toLowerCase();
    if (choice === "Piedra") {
        return 1;
    } else if (choice === "Papel") {
        return 2;
    } else if (choice === "Tijera") {
        return 3;
    } else {
        throw new Error("Opción inválida!!")
    }
}

function checkWinner(user, opp) {
    if (user === opp) {
        console.log("Empate!")
    } else if (user === 1) {
        if (opp === 2) {
            console.log("Perdiste! Papel le gana a Piedra!")
            return ++computerScore;
        }
        console.log("Ganaste!")
        return ++humanScore;
    } else if (user === 2) {
        if (opp === 3) {
            console.log("Perdiste! Tijera le gana a Papel!")
            return ++computerScore;
        }
        console.log("Ganaste!")
        return ++humanScore;
    } else if (user == 3) {
        if (opp === 1) {
            console.log("Perdiste! Piedra le gana a Tijera!")
            return ++computerScore;
        }
        console.log("Ganaste!")
        return ++humanScore;
    }
}

function playAround() {
    let userText = getUserChoice();
    let opponentSelection = getComputerChoice();

    console.log(`El usuario eligió ${userText}`);
    console.log(`El oponente eligió: ${opponentSelection}`);

    userSelection = convertChoiceUser(userText);
    checkWinner(userSelection, opponentSelection)
    console.log(`El oponente va: ${computerScore}`)
    console.log(`El usuario va : ${humanScore}`)
}

let humanScore = 0, computerScore = 0;
// let playCount = parseInt(prompt("¿Cuántas partidas quieres jugar?"));
// if (isNaN(playCount) || playAround < 1) {
//     throw new Error("Asigne un valor válido!");
// }
const buttons = document.querySelectorAll(".btn");
buttons.forEach((e) => e.addEventListener("click", () => playAround()));