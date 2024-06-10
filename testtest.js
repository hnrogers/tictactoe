function createPlayer(name, password, pronouns) {
    let wins = 0;
    let losses = 0;
    let ties = 0;
    let scorecard = [wins, losses, ties];

    const gameWin = () => scorecard[0]++;
    const gameLoss = () => scorecard[1]++;
    const gameTie = () => scorecard[2]++;
    
    const totalWins = () => scorecard[0];
    const totalLosses = () => scorecard[1]; 
    const totalTies = () => scorecard[2]; 

    return { name, password, pronouns, 
            gameWin, gameLoss, gameTie, 
            totalWins, totalLosses, totalTies };
}

const pA = createPlayer("a", "aaa", "she/her");
const pB = createPlayer("b", "bbb", "she/her");
const pC = createPlayer("c", "ccc", "she/her");

function winner(p1, p2) {
    p1.gameWin();
    p2.gameLoss();
}

winner(pA, pB);
winner(pA, pB);
winner(pB, pA);

console.log(pA.totalWins());