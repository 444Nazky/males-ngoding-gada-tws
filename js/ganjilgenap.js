function cekBilangan() {
  let angka = document.getElementById("angka").value;

  if (angka % 2 === 0) {
    document.getElementById("hasil").innerText = angka + " Genap";
  } else {
    document.getElementById("hasil").innerText = angka + " Ganjil";
  }
}
