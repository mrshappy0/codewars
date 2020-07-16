var decodeBits = function (bits) {
    let rx1 = /(\s)+/g, rx2 = /(\d)+/g, str = bits.replace(/0/g, " ").replace(/(\d+)/g, `,$1,`);
    findMin = (regexPattern, string) => Math.min(...(string.match(regexPattern)||[]).map((el) => (el = el.length)));
    let min= Math.min(findMin(rx2, str),findMin(rx1, str))
    return str.split(",").map((el) => {
      if (el.includes("1")) {
        if (el.length === min) {
          return (el = ".");
        } else {
          return (el = "-");
        }
      } else {
        if (el.length === min) {
          return (el = "");
        } else if (el.length === min * 3) {
          return (el = " ");
        } else if (el.length === min * 7) {
          return (el = "   ");
        }
      }
    }).join("");
  };
  var decodeMorse = function (morseCode) {
    morseCode = morseCode.replace(/\s\s\s/g, " _ ").split(" ");
    morseCode = morseCode.map((el) => {
      return el === "_" ? (el = " ") : (el = MORSE_CODE[el]);
    });
    if (morseCode.join("") === "T") return "E";
    return morseCode.join("");
  };
