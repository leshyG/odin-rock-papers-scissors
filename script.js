function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1
}

function getUserChoice() {
    let choice = prompt("¿Piedra, papel o tijera?");
    if (choice === null || choice === undefined) {
        console.error("Opción inválida!");
        return -1;
    }
    return choice;
}

function convertChoiceOpponent(choice) {
    return (choice === 1) ? "Piedra" : ((choice === 2) ? "Papel" : "Tijera")
}

function convertChoiceUser(choice) {
    choice = choice.toLowerCase();
    return (choice === "piedra") ? 1 : ((choice === "papel") ? 2 : ((choice === "tijera") ? 3 : null));
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
        }
        console.log("Ganaste!")
        return ++humanScore;
    } else if (user == 3) {
        if (opp === 1) {
            console.log("Perdiste! Piedra le gana a Tijera!")
        }
        console.log("Ganaste!")
        return ++humanScore;
    }
}
let humanScore = 0, computerScore = 0;
let userSelection = convertChoiceUser(getUserChoice());
let opponentSelection = getComputerChoice();

console.log(convertChoiceOpponent(opponentSelection));
console.log(userSelection);

checkWinner(userSelection,opponentSelection)
console.log(`El oponente va: ${computerScore}`)
console.log(`El usuario va : ${humanScore}`)