function cetakTabel(n) {
  if (typeof n === "number" && n >= 0) {
    let hasil = 0;
    for (let i = 1; i <= 10; i++) {
      hasil = n * i;
      let line = " ";
      line += n + " x " + i + " = " + hasil;

      console.log(line);
    }
  } else {
    console.log("paramenter harus bertipe data nomor dan harus positif");
  }
}

module.exports = cetakTabel;
