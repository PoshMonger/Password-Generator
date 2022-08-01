// what they sound like
function gen_lowercase() {
    console.log("into gen_lowercase")
    // CharCode 97 - 122  (26)
    var roulette = 97 + Math.floor(Math.random() * (122 - 97 + 1))
    return (String.fromCharCode(roulette))
  }
  function gen_uppercase() {
    console.log("into gen_uppercase")
    // CharCode 65 - 90  (26)
    var roulette = 65 + Math.floor(Math.random() * (90 - 65 + 1))
    return (String.fromCharCode(roulette))
  }
  function gen_numeric() {
    console.log("into gen_numeric")
    // CharCode 48 - 57  (10)
    var roulette = 48 + Math.floor(Math.random() * (57 - 48 + 1))
    return (String.fromCharCode(roulette))
  }

  function gen_special() {
    // total: 33
    console.log("into gen_special")
    var option = Math.floor(Math.random() * (33 + 1)) // 1 - 33
  
    if (option >= 1 && option <= 16) {
      // CharCode 32 - 47 (16 total)   space!"#$%&'()*+,-./
      return (String.fromCharCode(32 + Math.floor(Math.random() * 16)));
    }
    else if (option >= 17 && option <= 23) {
      // CharCode 58 - 64 (7 total)    :;<=>?@
      return (String.fromCharCode(58 + Math.floor(Math.random() * 7)));
    }
    else if (option >= 24 && option <= 29) {
      // CharCode 91 - 96 (6 total)    [\]^_`
      return (String.fromCharCode(91 + Math.floor(Math.random() * 6)));
    } else { // (option >= 30 && option <= 33)
      // CharCode 123 - 126 (4 total)  {|}~ 
      return (String.fromCharCode(123 + Math.floor(Math.random() * 4)));
    }
  }

  export {gen_lowercase,gen_numeric,gen_special,gen_uppercase}