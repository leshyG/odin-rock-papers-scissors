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
        log.textContent = "Empate!";
    } else {
        if (user === 1 && opp === 3 || user === 2 && opp === 1 || user === 3 && opp === 2) {
            ++humanScore
            return 1;
        } else {
            ++computerScore;
            return 0;
        }
    }
}

function playAround(choiceId) {
    let userChoice = choiceId;
    let opponentSelection = getComputerChoice();
    log.textContent = "";
    humanElec.textContent = `El usuario eligió: ${userChoice}`;
    computerElec.textContent = `El oponente eligió: ${convertChoiceOpponent(opponentSelection)}`;

    userSelection = convertChoiceUser(userChoice);
    const check = checkWinner(userSelection, opponentSelection);
    (check === 1 ? humanSpan.textContent = humanScore : computerSpan.textContent = computerScore);
    if (humanScore === 5 || computerScore === 5) {
        ( humanScore > computerScore) ? alert("HUMANO GANA") : alert("COMPUTADORA GANA")
        humanScore = 0; computerScore = 0;
        humanSpan.textContent = "0"; computerSpan.textContent = "0";
    } 
}

let humanScore = 0; let computerScore = 0;

const buttons = document.querySelectorAll(".btn");
const humanSpan = document.querySelector("#jugador");
const computerSpan = document.querySelector("#oponente");
const log = document.querySelector("#historial");
const humanElec = document.querySelector("#jugador_el");
const computerElec = document.querySelector("#oponente_el");

buttons.forEach((e) => e.addEventListener("click", () => playAround(e.id)));