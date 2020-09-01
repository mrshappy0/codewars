var beeramid = function (bonus, price) {
  let i = 1,
    sum = 0;
  while (sum <= (bonus - (bonus % price)) / price) {
    sum += i ** 2;
    i++;
  }
  return i - 2;
};
