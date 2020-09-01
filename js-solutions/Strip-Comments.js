function solution(input, markers) {
  let first_index = input.indexOf(markers[0]) - 1,
    second_index = input.indexOf(markers[1]) - 1;
  return (
    input.slice(input[0], first_index) +
    input.slice(input.indexOf("\n"), second_index)
  );
}
