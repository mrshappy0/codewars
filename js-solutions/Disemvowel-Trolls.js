function disemvowel(str) {
  let regexPattern = /A|E|I|O|U|a|e|i|o|u/g;
  str = str.replace(regexPattern, "");
  return str;
}
