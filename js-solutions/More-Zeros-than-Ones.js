const moreZeros = (s) => {
  let finalArray = [],
    zero_patt = /[0]/g;
  let binArray = [...new Set([...s])]
    .map((char) => char.charCodeAt(0).toString(2))
    .forEach((bin) => {
      let zero_arr = bin.match(zero_patt),
        one_string = bin.replace(zero_patt, ""),
        zero_string = zero_arr ? zero_arr.join("") : false;
      if (zero_string.length > one_string.length) {
        finalArray.push(bin);
      }
    });
  finalArray = finalArray.map((bin) => String.fromCharCode(parseInt(bin, 2)));
  return finalArray;
};
