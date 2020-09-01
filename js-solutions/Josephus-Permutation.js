function josephus(items, k) {
  let final_arr = [];
  function recursiveFunction(arr, x) {
    while (arr.length > 0) {
      if (x > items.length) return recursiveFunction(items, x - items.length);
      else {
        x--;
        final_arr.push(...items.splice(x, 1));
        x = x + k;
      }
    }
    return final_arr;
  }
  return recursiveFunction(items, k);
}
