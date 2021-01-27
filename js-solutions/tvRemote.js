let tvRemote = (word) => {
  let keyBoard = [
    ["a", "b", "c", "d", "e", 1, 2, 3],
    ["f", "g", "h", "i", "j", 4, 5, 6],
    ["k", "l", "m", "n", "o", 7, 8, 9],
    ["p", "q", "r", "s", "t", ".", "@", 0],
    ["u", "v", "w", "x", "y", "z", "_", "/"],
  ];
  let finalArr = [[0, 0]];
  let steps = [];

  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < keyBoard.length; j++) {
      for (let k = 0; k < keyBoard[j].length; k++) {
        if (word[i] === keyBoard[j][k]) {
          finalArr.push([j, k]);
        }
      }
    }
  }
  finalArr.forEach((curr, index, arr) => {
    if (index < arr.length - 1) {
      console.log(
        Math.abs(curr[0] - arr[index + 1][0]),
        Math.abs(curr[1] - arr[index + 1][1])
      );
      tempArr = [
        Math.abs(curr[0] - arr[index + 1][0]),
        Math.abs(curr[1] - arr[index + 1][1]),
      ];
      steps.push(tempArr.reduce((a, b) => a + b));
    }
  });
  return steps.reduce((a, b) => a + b) + word.length;
};

module.exports = {
  tvRemote,
};
