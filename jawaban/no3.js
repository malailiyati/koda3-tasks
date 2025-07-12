function triangleIsiTerbalik(num) {
  if (typeof num === "number" && num >= 0) {
    for (let i = 1; i <= num; i++) {
      let line = " ";
      for (let j = i; j >= 1; j--) {
        line += j + " ";
      }
      console.log(line);
    }
  } else {
    console.log("paramenter harus bertipe data nomor dan harus positif");
  }
}

module.exports = triangleIsiTerbalik;
