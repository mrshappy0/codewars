function solution(list) {
  let regexPattern = /((?<=(\d-\d)),(\d)|(?<=(\d-\d\d)),(\d\d)|(?<=(\d--\d\d)),-(\d\d)|(?<=(\d--\d)),-(\d))/g;
  let toggleRun = false,
    temp_arr = [],
    unique = [],
    final_arr = [],
    i = 0,
    length = list.length;
  function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }
  while (i < length) {
    let i_adder = 0;
    i = i + i_adder;
    let fake = Array.from({ length: 3 }, (_, j) => j + list[i]);
    let mini_arr = [list[i], list[i + 1], list[i + 2]];
    if (compareArrays(fake, mini_arr)) {
      temp_arr = [...temp_arr, ...mini_arr];
      unique = [...new Set(temp_arr)];
      toggleRun = true;
    } else {
      if (toggleRun) {
        final_arr.push(`${Math.min(...unique)}-${Math.max(...unique)}`);
        toggleRun = false;
        temp_arr = [];
        i_adder = 1;
      } else {
        final_arr.push(list[i]);
      }
    }
    i++;
  }
  return final_arr.toString(2).replace(regexPattern, "");
}
