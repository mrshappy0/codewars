function SnakesLadders() {
    gameStats.start();
  }
  let gameStats = {
    pos: {p1: 0,p2: 0},
    p1turn: true,
    ladders: {"2":38, "7":14, "8":31, "15":26, "21":42, "28":84, "36":44, "51":67, "71":91, "78":98, "87":94},
    snakes: {"16":6, "46":25, "49":11, "62":19, "64":60, "74":53, "89":68, "92":88, "95":75, "99":80},
    start: function () {
      this.pos.p1 = 0;
      this.pos.p2 = 0;
      this.p1turn = true;
    },
  };
  SnakesLadders.prototype.play = function (die1, die2) {
    const dieSum = die1 + die2; let gameMessage = "";
    if (gameStats.pos.p1 == 100 || gameStats.pos.p2 == 100) return "Game over!";
    sOrLs = player => {
      if (Object.keys(gameStats.ladders).includes(`${gameStats.pos[player]}`)) {
        gameStats.pos[player] = gameStats.ladders[`${gameStats.pos[player]}`];
      }
      if (Object.keys(gameStats.snakes).includes(`${gameStats.pos[player]}`)) {
        gameStats.pos[player] = gameStats.snakes[`${gameStats.pos[player]}`];
      }
    }
    over100 = (player, sum)=> {
      if (gameStats.pos[player] > 100) {
        gameStats.pos[player] = 100 - (sum - (100 - (gameStats.pos[player] - sum)));
        sOrLs(player);
      }
    }
    turnMovement = player =>{
      gameStats.pos[player] += dieSum;
      sOrLs(player);
      over100(player, dieSum);
      gameStats.pos[player] == 100 ? (gameMessage = `Player ${player[1]} Wins!`) : (gameMessage = `Player ${player[1]} is on square ${gameStats.pos[player]}`);
    }
    gameStats.p1turn ? turnMovement("p1") : turnMovement("p2")
    if (die1 !== die2) gameStats.p1turn = !gameStats.p1turn;
    return gameMessage;
  };