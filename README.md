# :cowboy_hat_face: Codewars Solutions :cowboy_hat_face:

<!-- Terminal CMD to update ReadMe Code: npm run docs -->

A collection of Code Wars Solutions by Adam Shappy

My Current Rank: ![](https://www.codewars.com/users/mrshappy0/badges/large).

**Disclaimer**: This is by no means the best solution for these problems.

![](kyu-info.png)

## Table of Contents

<details>
  <summary><strong>Click for list of links to all problems!</strong></summary>

1.  [Create Phone Number](https://github.com/mrshappy0/codewars#create-phone-number--solution) (6kyu)
2.  [Adjacent Repeated Words in a String](https://github.com/mrshappy0/codewars#adjacent-repeated-words-in-a-string--solution) (6kyu)
3.  [Persistent Bugger](persistent-bugger--solution) (6kyu)
4.  [Two Sum](https://github.com/mrshappy0/codewars#two-sum--solution) (6kyu)
5.  [Calculator](https://github.com/mrshappy0/codewars#calculator--solution) (3kyu)
6.  [Extract the domain name from a URL](https://github.com/mrshappy0/codewars#extract-the-domain-name-from-a-url--solution) (5kyu)
7.  [Decode the Morse code, advanced](https://github.com/mrshappy0/codewars#decode-the-morse-code-advanced--solution) (4kyu)
8.  [Human readable duration format](https://github.com/mrshappy0/codewars#human-readable-duration-format--solution) (4kuy)
9.  [Count the smiley faces!](https://github.com/mrshappy0/codewars#count-the-smiley-faces--solution) (6kyu)
10. [Snakes and Ladders](https://github.com/mrshappy0/codewars#snakes-and-ladders--solution) (5kyu)
11. [Validate Sudoku with size 'NxN'](https://github.com/mrshappy0/codewars#validate-sudoku-with-size-nxn--solution)(4kyu)
12. [RGB to hex conversion](https://github.com/mrshappy0/codewars#rgb-to-hex-conversion--solution)(5kyu)
13. [Beeramid](https://github.com/mrshappy0/codewars#beeramid--solution)(5kyu)
14. [The hashtag generator](https://github.com/mrshappy0/codewars#The-hashtag-generator--solution)(5kyu)
15. [Encrypt this!](https://github.com/mrshappy0/codewars#Encrypt-this--solution)(4kyu)

</details>

---

### [Create Phone Number](https://www.codewars.com/kata/525f50e3b73515a6db000b83) | [Solution](https://github.com/mrshappy0/codewarDecode the Morse code, advanced

_Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number._

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./js-solutions/Create-Phone-Number.js) -->
<!-- The below code snippet is automatically added from ./js-solutions/Create-Phone-Number.js -->

```js
createPhoneNumber = (numbers, n = numbers.join("")) =>
  `(${n.slice(0, 3)}) ${n.slice(3, 6)}-${n.slice(6, 10)}`;
```

<!-- AUTO-GENERATED-CONTENT:END *-->

---

### [Adjacent Repeated Words in a String](https://www.codewars.com/kata/5245a9138ca049e9a10007b8) | [Solution](https://github.com/mrshappy0/codewars/blob/master/js-solutions/Adjacent-repeated-words-in-a-string.js)

**Problem** (6kyu):

_You know how sometimes you write the the same word twice in a sentence, but then don't notice that it happened? For example, you've been distracted for a second. Did you notice that "the" is doubled in the first sentence of this description?_

_As as aS you can see, it's not easy to spot those errors, especially if words differ in case, like _"as"_ at the beginning of the sentence._

_Write a function that counts the number of sections repeating the same word (case insensitive). The occurence of two or more equal words next after each other count as one._

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./js-solutions/Adjacent-repeated-words-in-a-string.js) -->
<!-- The below code snippet is automatically added from ./js-solutions/Adjacent-repeated-words-in-a-string.js -->

```js
countAdjacentPairs = (searchString, p1 = /\b(\w+)\b\s+\1\b\s*(\1\b\s)*/gi) =>
  searchString === "" ? 0 : (searchString.match(p1) || []).length;
```

<!-- AUTO-GENERATED-CONTENT:END *-->

---

### [Persistent Bugger](https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec) | [Solution](https://github.com/mrshappy0/codewars/blob/master/js-solutions/Persistent-bugger.js)

**Problem** (6kyu):

_Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit._

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./js-solutions/Persistent-bugger.js) -->
<!-- The below code snippet is automatically added from ./js-solutions/Persistent-bugger.js -->

```js
persistence = (num, i = 0, ar = []) => {
  return num
    .toString()
    .split("")
    .reduce((a, b) => a * b).length === 1
    ? i
    : persistence(
        num
          .toString()
          .split("")
          .reduce((a, b) => a * b),
        i + 1
      );
};
```

<!-- AUTO-GENERATED-CONTENT:END *-->

---

### [Two Sum](https://www.codewars.com/kata/52c31f8e6605bcc646000082) | [Solution](https://github.com/mrshappy0/codewars/blob/master/js-solutions/Two-Sum.js)

**Problem** (6kyu):

_Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple like so: (index1, index2)._

_For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted._

_The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array)._

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./js-solutions/Two-Sum.js) -->
<!-- The below code snippet is automatically added from ./js-solutions/Two-Sum.js -->

```js
function twoSum(numbers, target) {
  let arr = [],
    arr_mod = numbers.forEach((el, i) => {
      if (numbers.slice(i + 1).includes(target - el)) {
        arr.push(i);
        arr.push(numbers.slice(i + 1).indexOf(target - el) + i + 1);
      }
    });
  return arr;
}
```

<!-- AUTO-GENERATED-CONTENT:END *-->

---

### [Calculator](https://www.codewars.com/kata/5235c913397cbf2508000048) | [Solution](https://github.com/mrshappy0/codewars/blob/master/js-solutions/Calculator.js)

**Problem** (3kyu):

_Create a simple calculator that given a string of operators (), +, -, \*, / and numbers separated by spaces returns the value of that expression_

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./js-solutions/Calculator.js) -->
<!-- The below code snippet is automatically added from ./js-solutions/Calculator.js -->

```js
const Calculator = function () {
  this.evaluate = (string) => {
    let m = /(\S*)(\s)([/*])(\s)(\S*)/,
      s = /(\S*)(\s)([-+])(\s)(\S*)/;
    mOrD = (str) => {
      let finalStr = str.replace(m, (match, p1, p2, p3, p4, p5) => {
        return p3 === "/" ? Number(p1) / Number(p5) : Number(p1) * Number(p5);
      });
      return finalStr === str ? finalStr : mOrD(finalStr);
    };
    string = mOrD(string);
    aOrS = (str) => {
      let finalStr = str.replace(s, (match, p1, p2, p3, p4, p5) => {
        return p3 === "-" ? Number(p1) - Number(p5) : Number(p1) + Number(p5);
      });
      return finalStr === str ? finalStr : aOrS(finalStr);
    };
    return (string = aOrS(string));
  };
};
```

<!-- AUTO-GENERATED-CONTENT:END *-->

---

### [Extract the domain name from a URL](https://www.codewars.com/kata/514a024011ea4fb54200004b) | [Solution](https://github.com/mrshappy0/codewars/blob/master/js-solutions/Extract-the-domain-name-from-a-URL.js)

**Problem** (5kyu):

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./js-solutions/Extract-the-domain-name-from-a-URL.js) -->
<!-- The below code snippet is automatically added from ./js-solutions/Extract-the-domain-name-from-a-URL.js -->

```js
function domainName(url) {
  let p1 = /[\w-]*(?=\.)/g,
    check1 = url.includes("//"),
    check2 = url.includes("www.");
  domExtract = (index) => url.slice(index).match(p1)[0];
  if (check1)
    return check2
      ? domExtract(url.search("www.") + 4)
      : domExtract(url.search(/[/]{2}/g) + 2);
  else if (check2) return domExtract(url.search("www.") + 4);
  else return domExtract(0);
}
```

<!-- AUTO-GENERATED-CONTENT:END *-->

---

### [Decode the Morse code, advanced](https://www.codewars.com/kata/54b72c16cd7f5154e9000457) | [Solution](https://github.com/mrshappy0/codewars/blob/master/js-solutions/Decode-the-Morse-code.js)

**Problem** (4kyu):

In this kata you have to write a Morse code decoder for wired electrical telegraph.

Electric telegraph is operated on a 2-wire line with a key that, when pressed, connects the wires together, which can be detected on a remote station. The Morse code encodes every character being transmitted as a sequence of "dots" (short presses on the key) and "dashes" (long presses on the key).

When transmitting the Morse code, the international standard specifies that:

    "Dot" – is 1 time unit long.
    "Dash" – is 3 time units long.
    Pause between dots and dashes in a character – is 1 time unit long.
    Pause between characters inside a word – is 3 time units long.
    Pause between words – is 7 time units long.

However, the standard does not specify how long that "time unit" is. And in fact different operators would transmit at different speed. An amateur person may need a few seconds to transmit a single character, a skilled professional can transmit 60 words per minute, and robotic transmitters may go way faster.

For this kata we assume the message receiving is performed automatically by the hardware that checks the line periodically, and if the line is connected (the key at the remote station is down), 1 is recorded, and if the line is not connected (remote key is up), 0 is recorded. After the message is fully received, it gets to you for decoding as a string containing only symbols 0 and 1.

For example, the message HEY JUDE, that is ···· · −·−− ·−−− ··− −·· · may be received as follows:

1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011

As you may see, this transmission is perfectly accurate according to the standard, and the hardware sampled the line exactly two times per "dot".

That said, your task is to implement two functions:

1. Function decodeBits(bits), that should find out the transmission rate of the message, correctly decode the message to dots ., dashes - and spaces (one between characters, three between words) and return those as a string. Note that some extra 0's may naturally occur at the beginning and the end of a message, make sure to ignore them. Also if you have trouble discerning if the particular sequence of 1's is a dot or a dash, assume it's a dot.

2. Function decodeMorse(morseCode), that would take the output of the previous function and return a human-readable string.

NOTE: For coding purposes you have to use ASCII characters . and -, not Unicode characters.

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./js-solutions/Decode-the-Morse-code.js) -->
<!-- The below code snippet is automatically added from ./js-solutions/Decode-the-Morse-code.js -->

```js
var decodeBits = function (bits) {
  let rx1 = /(\s)+/g,
    rx2 = /(\d)+/g,
    str = bits.replace(/0/g, " ").replace(/(\d+)/g, `,$1,`);
  findMin = (regexPattern, string) =>
    Math.min(
      ...(string.match(regexPattern) || []).map((el) => (el = el.length))
    );
  let min = Math.min(findMin(rx2, str), findMin(rx1, str));
  return str
    .split(",")
    .map((el) => {
      if (el.includes("1")) {
        if (el.length === min) {
          return (el = ".");
        } else {
          return (el = "-");
        }
      } else {
        if (el.length === min) {
          return (el = "");
        } else if (el.length === min * 3) {
          return (el = " ");
        } else if (el.length === min * 7) {
          return (el = "   ");
        }
      }
    })
    .join("");
};
var decodeMorse = function (morseCode) {
  morseCode = morseCode.replace(/\s\s\s/g, " _ ").split(" ");
  morseCode = morseCode.map((el) => {
    return el === "_" ? (el = " ") : (el = MORSE_CODE[el]);
  });
  if (morseCode.join("") === "T") return "E";
  return morseCode.join("");
};
```

<!-- AUTO-GENERATED-CONTENT:END *-->

---

### [Human readable duration format](https://www.codewars.com/kata/52742f58faf5485cae000b9a) | [Solution](https://github.com/mrshappy0/codewars/blob/master/js-solutions/Human-readable-duration-format.js)

**Problem** (4kyu):

Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

```js
formatDuration(62); // returns "1 minute and 2 seconds"
formatDuration(3662); // returns "1 hour, 1 minute and 2 seconds"
```

For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.
Detailed rules

The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./js-solutions/Human-readable-duration-format.js) -->
<!-- The below code snippet is automatically added from ./js-solutions/Human-readable-duration-format.js -->

```js
function formatDuration(seconds) {
  let t = [],
    t_rem = [],
    unit = ["second", "minute", "hour", "day", "year"];
  if (seconds === 0) return "now";
  t_rem[0] = seconds % 60;
  t[1] = (seconds - t_rem[0]) / 60;
  t_rem[1] = t[1] % 60;
  t[2] = (t[1] - t_rem[1]) / 60;
  t_rem[2] = t[2] % 24;
  t[3] = (t[2] - t_rem[2]) / 24;
  t_rem[3] = t[3] % 365;
  t_rem[4] = (t[3] - t_rem[3]) / 365;

  let len = t_rem.filter((l) => l).length;

  function stringify(timeVar, strMod) {
    return timeVar
      ? `${timeVar} ${strMod}` + `${timeVar !== 1 ? "s" : ""},`
      : "";
  }

  let i = 4;
  while (i >= 0) {
    t_rem[i] = stringify(t_rem[i], unit[i]);
    i--;
  }

  t_rem = t_rem.reverse().filter((l) => l);
  if (t_rem.length > 1) {
    let secl_el = t_rem[t_rem.length - 2];
    t_rem[t_rem.length - 2] = secl_el.substring(0, secl_el.length - 1);
    t_rem.splice(-1, 0, "and");
  }
  let last_el = t_rem[t_rem.length - 1];
  last_el = last_el.substring(0, last_el.length - 1);
  t_rem[t_rem.length - 1] = t_rem[t_rem.length - 1].substring(
    0,
    t_rem[t_rem.length - 1].length - 1
  );
  return t_rem.join(" ");
}
```

<!-- AUTO-GENERATED-CONTENT:END *-->

---

### [Count the smiley faces!](https://www.codewars.com/kata/583203e6eb35d7980400002a) | [Solution](https://github.com/mrshappy0/codewars/blob/master/js-solutions/Count-the-smiley-faces.js)

**Problem** (4kyu):

Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

- Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
- A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
- Every smiling face must have a smiling mouth that should be marked with either ) or D

No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]
Example

```js
countSmileys([":)", ";(", ";}", ":-D"]); // should return 2;
countSmileys([";D", ":-(", ":-)", ";~)"]); // should return 3;
countSmileys([";]", ":[", ";*", ":$", ";-D"]); // should return 1;
```

Note: In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./js-solutions/Count-the-smiley-faces.js) -->
<!-- The below code snippet is automatically added from ./js-solutions/Count-the-smiley-faces.js -->

```js
countSmileys = (arr) =>
  ((arr = arr.toString().match(/[;:][~-]?[)D]/g)) ? arr : "").length;
```

<!-- AUTO-GENERATED-CONTENT:END *-->

---

### [Snakes and Ladders](https://www.codewars.com/kata/587136ba2eefcb92a9000027) | [Solution](https://github.com/mrshappy0/codewars/blob/master/js-solutions/Snakes-and-Ladders.js)

**Problem** (5kyu):

**Task:**
Your task is to make a simple class called SnakesLadders. The test cases will call the method play(die1, die2) independantly of the state of the game or the player turn. The variables die1 and die2 are the die thrown in a turn and are both integers between 1 and 6. The player will move the sum of die1 and die2.

**Rules:**

1.  There are two players and both start off the board on square 0.

2.  Player 1 starts and alternates with player 2.

3.  You follow the numbers up the board in order 1=>100

4.  If the value of both die are the same then that player will have another go.

5.  Climb up ladders. The ladders on the game board allow you to move upwards and get ahead faster. If you land exactly on a square that shows an image of the bottom of a ladder, then you may move the player all the way up to the square at the top of the ladder. (even if you roll a double).

6.  Slide down snakes. Snakes move you back on the board because you have to slide down them. If you land exactly at the top of a snake, slide move the player all the way to the square at the bottom of the snake or chute. (even if you roll a double).

7.  Land exactly on the last square to win. The first person to reach the highest square on the board wins. But there's a twist! If you roll too high, your player "bounces" off the last square and moves back. You can only win by rolling the exact number needed to land on the last square. For example, if you are on square 98 and roll a five, move your game piece to 100 (two moves), then "bounce" back to 99, 98, 97 (three, four then five moves.)

8.  If the Player rolled a double and lands on the finish square “100” without any remaining moves then the Player wins the game and does not have to roll again.

**Returns:**
Return Player n Wins!. Where n is winning player that has landed on square 100 without any remainding moves left.

Return Game over! if a player has won and another player tries to play.

Otherwise return Player n is on square x. Where n is the current player and x is the sqaure they are currently on.

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./js-solutions/Snakes-and-Ladders.js) -->
<!-- The below code snippet is automatically added from ./js-solutions/Snakes-and-Ladders.js -->

```js
function SnakesLadders() {
  gameStats.start();
}
let gameStats = {
  pos: { p1: 0, p2: 0 },
  p1turn: true,
  ladders: {
    2: 38,
    7: 14,
    8: 31,
    15: 26,
    21: 42,
    28: 84,
    36: 44,
    51: 67,
    71: 91,
    78: 98,
    87: 94,
  },
  snakes: {
    16: 6,
    46: 25,
    49: 11,
    62: 19,
    64: 60,
    74: 53,
    89: 68,
    92: 88,
    95: 75,
    99: 80,
  },
  start: function () {
    this.pos.p1 = 0;
    this.pos.p2 = 0;
    this.p1turn = true;
  },
};
SnakesLadders.prototype.play = function (die1, die2) {
  const dieSum = die1 + die2;
  let gameMessage = "";
  if (gameStats.pos.p1 == 100 || gameStats.pos.p2 == 100) return "Game over!";
  sOrLs = (player) => {
    if (Object.keys(gameStats.ladders).includes(`${gameStats.pos[player]}`)) {
      gameStats.pos[player] = gameStats.ladders[`${gameStats.pos[player]}`];
    }
    if (Object.keys(gameStats.snakes).includes(`${gameStats.pos[player]}`)) {
      gameStats.pos[player] = gameStats.snakes[`${gameStats.pos[player]}`];
    }
  };
  over100 = (player, sum) => {
    if (gameStats.pos[player] > 100) {
      gameStats.pos[player] =
        100 - (sum - (100 - (gameStats.pos[player] - sum)));
      sOrLs(player);
    }
  };
  turnMovement = (player) => {
    gameStats.pos[player] += dieSum;
    sOrLs(player);
    over100(player, dieSum);
    gameStats.pos[player] == 100
      ? (gameMessage = `Player ${player[1]} Wins!`)
      : (gameMessage = `Player ${player[1]} is on square ${gameStats.pos[player]}`);
  };
  gameStats.p1turn ? turnMovement("p1") : turnMovement("p2");
  if (die1 !== die2) gameStats.p1turn = !gameStats.p1turn;
  return gameMessage;
};
```

<!-- AUTO-GENERATED-CONTENT:END *-->

---

### [Validate Sudoku with size `NxN`](https://www.codewars.com/kata/540afbe2dc9f615d5e000425) | [Solution](https://github.com/mrshappy0/codewars/blob/master/js-solutions/Validate-sudoku-nxn.js)

**Problem** (4kyu):

Given a Sudoku data structure with size NxN, N > 0 and √N == integer, write a method to validate if it has been filled out correctly.

The data structure is a multi-dimensional Array, i.e:

```js
[
  [7, 8, 4, 1, 5, 9, 3, 2, 6],
  [5, 3, 9, 6, 7, 2, 8, 4, 1],
  [6, 1, 2, 4, 3, 8, 7, 5, 9],

  [9, 2, 8, 7, 1, 5, 4, 6, 3],
  [3, 5, 7, 8, 4, 6, 1, 9, 2],
  [4, 6, 1, 9, 2, 3, 5, 8, 7],

  [8, 7, 6, 3, 9, 4, 2, 1, 5],
  [2, 4, 3, 5, 6, 1, 9, 7, 8],
  [1, 9, 5, 2, 8, 7, 6, 3, 4],
];
```

Rules for validation:

Data structure dimension: NxN where N > 0 and √N == integer
Rows may only contain integers: 1..N (N included)
Columns may only contain integers: 1..N (N included)
'Little squares' (3x3 in example above) may also only contain integers: 1..N (N included)

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./js-solutions/Validate-sudoku-nxn.js) -->
<!-- The below code snippet is automatically added from ./js-solutions/Validate-sudoku-nxn.js -->

```js
var Sudoku = function (data) {
  return {
    isValid: function () {
      let i = 0,
        j = 0,
        end;

      //    check rows
      while (i < data.length) {
        let arr = [...new Set(data[i])];
        arr.filter((el) => el <= data.length && el > 0);
        data.length === arr.length && arr[0] !== "" && arr[0] !== true
          ? (end = true)
          : (end = false);
        i++;
      }
      i = 0;

      //    check columns
      while (i < data.length && end) {
        let set = new Set(),
          arr = [];
        while (j < data.length) {
          if (data[j][i] <= data.length && data[j][i] > 0) set.add(data[j][i]);
          j++;
        }
        arr = [...set];
        data.length === arr.length && arr[0] !== "" && arr[0] !== true
          ? (end = true)
          : (end = false);
        j = 0;
        i++;
      }

      //    little squares check
      if (data.length === 9 && end) {
        recursiveBoi = (someData) => {
          someData = someData.filter((el) => el != null && el != "");
          if (!someData[0]) {
            return true;
          } else {
            let arr = [],
              set = new Set();
            for (let i = 0; i < 3; i++) {
              arr.push(...someData[i].splice(0, 3));
            }
            arr = [...new Set(arr)];
            arr.filter((el) => el <= data.length && el > 0);
            data.length === arr.length && arr[0] !== "" && arr[0] !== true
              ? recursiveBoi(someData)
              : (end = false);
          }
        };
        recursiveBoi(data);
      }

      return end;
    },
  };
};
```

<!-- The below code snippet is automatically added from ./js-solutions/Validate-sudoku-nxn.js -->
<!-- AUTO-GENERATED-CONTENT:END *-->

---

### [RGB To Hex Conversion](https://www.codewars.com/kata/513e08acc600c94f01000001) | [Solution](https://github.com/mrshappy0/codewars/blob/master/js-solutions/RGB-to-hex.js)

**Problem** (5kyu):

The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

```js
rgb(255, 255, 255); // returns FFFFFF
rgb(255, 255, 300); // returns FFFFFF
rgb(0, 0, 0); // returns 000000
rgb(148, 0, 211); // returns 9400D3
```

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./js-solutions/RGB-to-hex.js) -->
<!-- The below code snippet is automatically added from ./js-solutions/RGB-to-hex.js -->

```js
let rgb = (r, g, b, Z = 0) =>
  [r, g, b]
    .map((l) =>
      ("0" + (l > 255 ? "FF" : l <= 0 ? "00" : l).toString(16)).slice(-2)
    )
    .join("")
    .toUpperCase();
```

<!-- The below code snippet is automatically added from ./js-solutions/RGB-to-hex.js -->
<!-- AUTO-GENERATED-CONTENT:END *-->

---

### [Beeramid](https://www.codewars.com/kata/52449b062fb80683ec000024) | [Solution](https://github.com/mrshappy0/codewars/blob/master/js-solutions/beeramid.js)

**Problem** (5kyu):

Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.

A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...

Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:

1. your referral bonus, and

2. the price of a beer can

For example:

```js
beeramid(1500, 2); // should === 12
beeramid(5000, 3); // should === 16
```

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./js-solutions/Beeramid.js) -->
<!-- The below code snippet is automatically added from ./js-solutions/Beeramid.js -->

```js
var beeramid = function (bonus, price) {
  let i = 1,
    sum = 0;
  while (sum <= (bonus - (bonus % price)) / price) {
    sum += i ** 2;
    i++;
  }
  return i - 2;
};
```

<!-- AUTO-GENERATED-CONTENT:END *-->

---

### [The Hashtag Generator](https://www.codewars.com/kata/52449b062fb80683ec000024) | [Solution](https://github.com/mrshappy0/codewars/blob/master/js-solutions/The-hashtag-generator.js)

**Problem** (5kyu):

The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

- It must start with a hashtag (#).
- All words must have their first letter capitalized.
- If the final result is longer than 140 chars it must return false.
- If the input or the result is an empty string it must return false.

" Hello there thanks for trying my Kata" => "#HelloThereThanksForTryingMyKata"
" Hello World " => "#HelloWorld"
"" => false

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./js-solutions/The-hashtag-generator.js) -->
<!-- The below code snippet is automatically added from ./js-solutions/The-hashtag-generator.js -->

```js
function generateHashtag(str) {
  if (!str.trim()) return false;
  str = str
    .split(" ")
    .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
    .join("");
  return str.length >= 140 ? false : `#${str}`;
}
```

<!-- AUTO-GENERATED-CONTENT:END *-->

### [Encrypt this!](https://www.codewars.com/kata/5848565e273af816fb000449) | [Solution](https://github.com/mrshappy0/codewars/blob/master/js-solutions/Encrypt-this.js)

**Problem** (4kyu):

Description:

Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

    Your message is a string containing space separated words.
    You need to encrypt each word in the message using the following rules:
        The first letter needs to be converted to its ASCII code.
        The second letter needs to be switched with the last letter
    Keepin' it simple: There are no special characters in input.

Examples:

```js
encryptThis("Hello") === "72olle";
encryptThis("good") === "103doo";
encryptThis("hello world") === "104olle 119drlo";
```

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./js-solutions/Encrypt-this.js) -->
<!-- The below code snippet is automatically added from ./js-solutions/Encrypt-this.js -->

```js
var encryptThis = function (text) {
  let fin_str = "";
  fin_str = text
    .split(" ")
    .map((elem) => {
      let first = elem[0],
        second = elem[1] || elem[0],
        end = elem[elem.length - 1];
      if (elem.length === 1) return elem.replace(first, elem.charCodeAt(0));
      else {
        elem = elem.slice(0, -1) + second;
        elem = elem.replace(first, elem.charCodeAt(0));
        elem = elem.replace(second, end);
        return elem;
      }
    })
    .join(" ");
  return fin_str;
};
```

<!-- The below code snippet is automatically added from ./js-solutions/Encrypt-this.js -->
<!-- AUTO-GENERATED-CONTENT:END *-->
