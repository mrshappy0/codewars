function tvRemote(word) {
  if (word.length == 0) return 0;
  let keyBoard = {
    "a": [0, 0],
    "b": [0, 1],
    "c": [0, 2],
    "d": [0, 3],
    "e": [0, 4],
    "1": [0, 5],
    "2": [0, 6],
    "3": [0, 7],
    "f": [1, 0],
    "g": [1, 1],
    "h": [1, 2],
    "i": [1, 3],
    "j": [1, 4],
    "4": [1, 5],
    "5": [1, 6],
    "6": [1, 7],
    "k": [2, 0],
    "l": [2, 1],
    "m": [2, 2],
    "n": [2, 3],
    "o": [2, 4],
    "7": [2, 5],
    "8": [2, 6],
    "9": [2, 7],
    "p": [3, 0],
    "q": [3, 1],
    "r": [3, 2],
    "s": [3, 3],
    "t": [3, 4],
    ".": [3, 5],
    "@": [3, 6],
    "0": [3, 7],
    "u": [4, 0],
    "v": [4, 1],
    "w": [4, 2],
    "x": [4, 3],
    "y": [4, 4],
    "z": [4, 5],
    "_": [4, 6],
    "/": [4, 7],
    "aA": [5, 0],
    "SP": [5, 1],
  };

  let steps = [];
  let positions = [[0, 0]];
  let wordArr = word.split("");
  let capLocks = false;
  let isCapital = (i) => {
    return wordArr[i] == wordArr[i].toUpperCase();
  };
  let isNumOrSpec = (i) => {
    return (
      Number.isInteger(parseInt(wordArr[i])) ||
      [".", "@", "_", "/"].includes(wordArr[i])
    );
  };
  let isSpace = (i) => {
    return wordArr[i] === " ";
  };

  let toggleEvent = (char, capKey) => {
    positions.push(keyBoard["aA"]);
    capKey
      ? positions.push(keyBoard[wordArr[char].toLowerCase()])
      : positions.push(keyBoard[wordArr[char]]);
    capLocks = !capLocks;
    steps.push(1);
  };

  let noToggleEvent = (char, capKey) => {
    capKey
      ? positions.push(keyBoard[wordArr[char].toLowerCase()])
      : positions.push(keyBoard[wordArr[char]]);
  };

  for (i = 0; i < wordArr.length; i++) {
    switch (true) {
      case isNumOrSpec(i):
        positions.push(keyBoard[wordArr[i]]);
        break;
      case isSpace(i):
        positions.push(keyBoard["SP"]);
        break;
      case capLocks:
        if (isCapital(i)) {
          noToggleEvent(i, "capKey");
        } else if (!isCapital(i)) {
          toggleEvent(i);
        }
        break;
      case !capLocks:
        if (isCapital(i)) {
          toggleEvent(i, "capKey");
        } else if (!isCapital(i)) {
          noToggleEvent(i);
        }
        break;
    }
  }

  positions.forEach((curr, index, arr) => {
    if (index < arr.length - 1) {
      tempArr = [
        Math.abs(curr[0] - arr[index + 1][0]),
        Math.abs(curr[1] - arr[index + 1][1]),
      ];
      steps.push(tempArr.reduce((a, b) => a + b));
    }
  });

  return steps.reduce((a, b) => a + b) + word.length;
}

module.exports = {
  tvRemote,
};
