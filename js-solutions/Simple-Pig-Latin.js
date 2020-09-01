function pigIt(str) {
  let arr = str.split(" "),
    i = 0;
  let finalArr = [];
  while (i < arr.length) {
    if (arr[i] !== "?" && arr[i] !== "!") {
      finalArr.push(arr[i].slice(1) + arr[i][0] + "ay");
      i++;
    } else {
      finalArr.push(arr[i]);
      i++;
    }
  }
  return finalArr.join(" ");
}
