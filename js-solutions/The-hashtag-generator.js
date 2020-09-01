function generateHashtag(str) {
  if (!str.trim()) return false;
  str = str
    .split(" ")
    .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
    .join("");
  return str.length >= 140 ? false : `#${str}`;
}
