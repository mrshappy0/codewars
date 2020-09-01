let rgb = (r, g, b, Z = 0) =>
  [r, g, b]
    .map((l) =>
      ("0" + (l > 255 ? "FF" : l <= 0 ? "00" : l).toString(16)).slice(-2)
    )
    .join("")
    .toUpperCase();
