function tribonacci(signature, n) {
  let i = signature.length;
  switch (true) {
    case n > 3:
      while (i < n) {
        signature.push(
          signature[signature.length - 1] +
            signature[signature.length - 2] +
            signature[signature.length - 3]
        );
        i++;
      }
      return signature;
    case n === 2:
      return [signature[0], signature[1]];
    case n === 1:
      return [signature[0]];
    case n === 0:
      return [];
  }
}
