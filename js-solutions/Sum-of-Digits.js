function digital_root(n) {
  const reducer = (a, b) => parseInt(a) + parseInt(b);
  let arr = [...n.toString()];
  return arr.length !== 1
    ? digital_root(arr.reduce(reducer))
    : parseInt(arr[0]);
}
