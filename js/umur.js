document.getElementById("hitung").addEventListener("click", function () {
  const umur = Number(document.getElementById("uts").value);

  let keterangan = "";

  if (umur >= 25) {
    keterangan = "kamu udah dewasa";
  } else if (umur >= 18) {
    keterangan = "kamu udah dewasa muda";
  } else if (umur >= 13) {
    keterangan = "kamu udah remaja";
  } else if (umur >= 1) {
    keterangan = "kamu masih anak-anak";
  } else {
    keterangan = "umur tidak valid";
  }

  document.getElementById("hasil").textContent =
    "Hasil: " + umur + " → " + keterangan;
});
