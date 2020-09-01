function XO(str) {
  let o_reg = /[o]/gi,
    x_reg = /[x]/gi,
    o_array = str.match(o_reg),
    x_array = str.match(x_reg);
  if (o_array && x_array) {
    return o_array.length == x_array.length;
  } else {
    return str === "";
  }
}
