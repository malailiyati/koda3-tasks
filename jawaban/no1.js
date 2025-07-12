function triangle(num) {
  if (typeof num === "number" && num >= 0) {
    let result = ""
    for (let i = 1; i <= num; i++) {
      let line = " ";
      for (let j = 1; j <= i; j++) {
        line += j + " ";
      }
      result += line + "\n";
    }
    return result
  } else {
    console.log("paramenter harus bertipe data nomor dan harus positif");
  }
}

module.exports = triangle;
