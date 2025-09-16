document.getElementById("hitung").addEventListener("click", function () {
  const uts = Number(document.getElementById("uts").value);
  const uas = Number(document.getElementById("uas").value);
  const tugas = Number(document.getElementById("tugas").value);

  const nilaiAkhir = (uts * 0.3) + (uas * 0.4) + (tugas * 0.3);

  let keterangan = "";

  if (nilaiAkhir >= 80) {
    keterangan = "Lulus dengan Predikat A";
  } else if (nilaiAkhir >= 70) {
    keterangan = "Lulus dengan Predikat B";
  } else if (nilaiAkhir >= 60) {
    keterangan = "Lulus dengan Predikat C";
  } else {
    keterangan = "Tidak Lulus";
  }

  document.getElementById("hasil").textContent =
    "Hasil: " + nilaiAkhir.toFixed(2) + " → " + keterangan;
});
