snail = function (array) {
  let final_arr = [];
  function recursiveBoi(arr) {
    let temp_arr = [],
      length = arr.length,
      side_loop = length - 2,
      i = 1,
      j = 1;
    if (array[0].length !== 0 && array[0].length !== 1) {
      final_arr = final_arr.concat(...arr.splice(0, 1));
      while (i <= side_loop) {
        final_arr.push(...arr[i - 1].splice(length - 1, 1));
        i++;
      }
      final_arr = final_arr.concat(...arr.splice(length - 2, 1)[0].reverse());
      while (j <= side_loop) {
        temp_arr.push(...arr[j - 1].splice(0, 1));
        j++;
      }
      final_arr = final_arr.concat(temp_arr.reverse());
      if (arr[0]) {
        return recursiveBoi(arr);
      } else {
        return final_arr;
      }
      return recursiveBoi(arr);
    } else if (array[0].length === 0 || array[0].length === 1) {
      if (final_arr.length > 0) {
        return final_arr.concat(...array[0]);
      } else return array[0];
    }
  }
  return recursiveBoi(array);
};
