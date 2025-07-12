function buatRentang(mulai, selesai) {
    let output = "";
    for (let i = mulai; i <= selesai; i++) {
        output += i;
        if (i < selesai) output += ",";
    }
    return output;
}

module.exports = {buatRentang};
