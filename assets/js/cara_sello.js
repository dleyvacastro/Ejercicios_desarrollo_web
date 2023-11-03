let playerMoney = 1000;

function flipCoin(){
    return (Math.random() < 0.5) ? 'cara' : 'sello';
}

function calculateBet(playerBet, playerMoney, playerGuess){
    if (playerBet > playerMoney) {
        console.log("No tienes suficiente dinero");
        return;
    }

    if (playerGuess === flipCoin()) {
        playerMoney += playerBet*2;
        window.alert("Ganaste");
    } else {
        playerMoney -= playerBet;
        window.alert("Perdiste");
    }

}

function play(playerName) {

    let playerBet = parseInt(prompt("Ingrese su apuesta: "));
    let playerGuess = prompt("Ingrese su eleccion: ");

    calculateBet(playerBet, playerMoney, playerGuess);
    window.alert(`${playerName}, Tu dinero es: ${playerMoney}`);
}
function main() {
    let playerName = prompt("Ingrese su nombre: ");
    ;
    while (true){
        play(playerName)
        if (prompt("desea continuar?") !== "si") break;
    }
}

main()