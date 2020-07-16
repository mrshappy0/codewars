# :cowboy_hat_face: Codewars Solutions :cowboy_hat_face:

<!-- Terminal CMD to update ReadMe Code: npm run docs -->

A collection of Code Wars Solutions by Adam Shappy

My Current Rank: ![](https://www.codewars.com/users/mrshappy0/badges/large).

**Disclaimer**: This is by no means the best solution for these problems.

![](kyu-info.png)

## Table of Contents

<details>
  <summary><strong>Click for list of links to all problems!</strong></summary>

   1. [Create Phone Number](https://github.com/mrshappy0/codewars#create-phone-number--solution) (6kyu)
   2. [Adjacent Repeated Words in a String](https://github.com/mrshappy0/codewars#adjacent-repeated-words-in-a-string--solution) (6kyu)
   3. [Persistent Bugger](persistent-bugger--solution) (6kyu)
   4. [Two Sum](https://github.com/mrshappy0/codewars#two-sum--solution) (6kyu)
   5. [Calculator](https://github.com/mrshappy0/codewars#calculator--solution) (3kyu)
   6. [Extract the domain name from a URL](https://github.com/mrshappy0/codewars#extract-the-domain-name-from-a-url--solution) (5kyu)
   7. [Decode the Morse code, advanced](https://github.com/mrshappy0/codewars#decode-the-morse-code-advanced--solution) (4kyu)
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
function domainName(url){
    let p1 = /[\w-]*(?=\.)/g, check1 = url.includes("//"), check2 = url.includes("www.")
    domExtract = index => url.slice(index).match(p1)[0]
    if(check1) return check2 ? domExtract(url.search("www.")+4) : domExtract(url.search(/[/]{2}/g)+2)
      else if (check2) return domExtract(url.search("www.") + 4)
      else return domExtract(0)
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

For example, the message HEY JUDE, that is ···· · −·−−   ·−−− ··− −·· · may be received as follows:

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
    let rx1 = /(\s)+/g, rx2 = /(\d)+/g, str = bits.replace(/0/g, " ").replace(/(\d+)/g, `,$1,`);
    findMin = (regexPattern, string) => Math.min(...(string.match(regexPattern)||[]).map((el) => (el = el.length)));
    let min= Math.min(findMin(rx2, str),findMin(rx1, str))
    return str.split(",").map((el) => {
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
    }).join("");
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