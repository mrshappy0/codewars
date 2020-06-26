# :cowboy_hat_face: Codewars Solutions :cowboy_hat_face:

A collection of Code Wars Solutions by Adam Shappy

![](https://www.codewars.com/users/mrshappy0/badges/large).

**Disclaimer**: This is by no means the best solution for these problems.

---

#### [Create Phone Number](https://www.codewars.com/kata/525f50e3b73515a6db000b83) | [Solution](https://github.com/mrshappy0/codewars/blob/master/Create-Phone-Number.js)

**Problem**:

_Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number._

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./Create-Phone-Number.js) -->
<!-- The below code snippet is automatically added from ./Create-Phone-Number.js -->
```js
createPhoneNumber = (numbers, n = numbers.join("")) =>
  `(${n.slice(0, 3)}) ${n.slice(3, 6)}-${n.slice(6, 10)}`;
```
<!-- The below code snippet is automatically added from ./Create-Phone-Number.js -->
<!-- AUTO-GENERATED-CONTENT:END *-->
