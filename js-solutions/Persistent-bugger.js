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
