function cetakTabel(n) {
  if (typeof n === "number" && n >= 0) {
    let result = "";
    let hasil = 0;
    for (let i = 1; i <= 10; i++) {
      hasil = n * i;
      let line = " ";
      line += n + " x " + i + " = " + hasil;

      result += line + "\n";
    }
    return result;
  } else {
    console.log("paramenter harus bertipe data nomor dan harus positif");
  }
}

module.exports = cetakTabel;
