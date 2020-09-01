function iqTest(numbers) {
  let even_arr = [],
    odd_arr = [],
    arr = numbers.split(" "),
    toggle = true,
    finalIndex = 1,
    i = 0;
  while (toggle && i < arr.length + 1) {
    let o_length = odd_arr.length,
      e_length = even_arr.length;
    if (e_length >= 1 && o_length >= 1 && e_length !== o_length) {
      e_length > o_length
        ? (finalIndex += odd_arr[0])
        : (finalIndex += even_arr[0]);
      toggle = false;
    } else {
      if (parseInt(arr[i]) % 2 === 0) {
        even_arr.push(i);
      } else {
        odd_arr.push(i);
      }
      i++;
    }
  }
  return finalIndex;
}
