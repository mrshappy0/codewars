var encryptThis = function (text) {
  let fin_str = "";
  fin_str = text
    .split(" ")
    .map((elem) => {
      let first = elem[0],
        second = elem[1] || elem[0],
        end = elem[elem.length - 1];
      if (elem.length === 1) return elem.replace(first, elem.charCodeAt(0));
      else {
        elem = elem.slice(0, -1) + second;
        elem = elem.replace(first, elem.charCodeAt(0));
        elem = elem.replace(second, end);
        return elem;
      }
    })
    .join(" ");
  return fin_str;
};
