function toCamelCase(str) {
  let regex_underscore = /[-_]./g;
  if (str === "") {
    return str;
  } else {
    let i = 0;
    let loop_length = str.match(/[_-]/g).length;
    while (i <= loop_length) {
      let index = str.search(/[_-]/g);
      str = str.replace(`_${str[index + 1]}`, str[index + 1].toUpperCase());
      str = str.replace(`-${str[index + 1]}`, str[index + 1].toUpperCase());
      i++;
    }
    return str;
  }
}
