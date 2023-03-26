// JavaScript

const hargaOngkir = 60000;
const biayaLayanan = 0.5;
const bunga = 0.3;

function hitung() {
  let nilaiRupiah = document.getElementById("nilai-rupiah").value;

  let hasilHitung = nilaiRupiah + hargaOngkir;
  let hasilCicilanPerBulan = hasilHitung / 3;

  if (nilaiRupiah) {
    document.getElementById("hasil-hitung-cicilan").innerHTML = eval(hasilHitung);
  }
}
