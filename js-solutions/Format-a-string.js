function list(names) {
  let i = 0,
    rtrnString = "",
    length = names.length;
  switch (true) {
    case length >= 2:
      while (i < length - 2) {
        rtrnString += `${names[i].name}, `;
        i++;
      }
      return (rtrnString += `${names[length - 2].name} & ${
        names[length - 1].name
      }`);
    case length === 1:
      return `${names[0].name}`;
    default:
      return "";
  }
}
