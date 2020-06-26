# :cowboy_hat_face: Codewars Solutions :cowboy_hat_face:
<!-- Terminal CMD to update ReadMe Code: npm run docs -->
A collection of Code Wars Solutions by Adam Shappy

My Current Rank: ![](https://www.codewars.com/users/mrshappy0/badges/large).

**Disclaimer**: This is by no means the best solution for these problems.

![](kyu-info.png)

---

#### [Create Phone Number](https://www.codewars.com/kata/525f50e3b73515a6db000b83) | [Solution](https://github.com/mrshappy0/codewars/blob/master/js-solutions/Create-Phone-Number.js)

**Problem** (6kyu):

_Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number._

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./js-solutions/Create-Phone-Number.js) -->
<!-- The below code snippet is automatically added from ./js-solutions/Create-Phone-Number.js -->
```js
createPhoneNumber = (numbers, n = numbers.join("")) =>
  `(${n.slice(0, 3)}) ${n.slice(3, 6)}-${n.slice(6, 10)}`;
```
<!-- AUTO-GENERATED-CONTENT:END *-->

---

#### [Adjacent Repeated Words in a String](https://www.codewars.com/kata/5245a9138ca049e9a10007b8) | [Solution](https://github.com/mrshappy0/codewars/blob/master/js-solutions/Adjacent-repeated-words-in-a-string.js)

**Problem** (6kyu):

*You know how sometimes you write the the same word twice in a sentence, but then don't notice that it happened? For example, you've been distracted for a second. Did you notice that "the" is doubled in the first sentence of this description?*

*As as aS you can see, it's not easy to spot those errors, especially if words differ in case, like *"as"* at the beginning of the sentence.*

*Write a function that counts the number of sections repeating the same word (case insensitive). The occurence of two or more equal words next after each other count as one.*

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./js-solutions/Adjacent-repeated-words-in-a-string.js) -->
<!-- The below code snippet is automatically added from ./js-solutions/Adjacent-repeated-words-in-a-string.js -->
```js
countAdjacentPairs = (searchString, p1 = /\b(\w+)\b\s+\1\b\s*(\1\b\s)*/gi) =>
  searchString === "" ? 0 : (searchString.match(p1) || []).length;
```
<!-- AUTO-GENERATED-CONTENT:END *-->

---

#### [Persistent Bugger](https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec) | [Solution](https://github.com/mrshappy0/codewars/blob/master/js-solutions/Persistent-bugger.js)

**Problem** (6kyu):

_Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit._

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./js-solutions/Persistent-bugger.js) -->
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