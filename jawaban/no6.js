function buatRentang(mulai, selesai) {
  let output = "";
  for (let i = mulai; i <= selesai; i++) {
    output += i;
    if (i < selesai) output += ",";
  }
  console.log(output);
}

module.exports = buatRentang;
