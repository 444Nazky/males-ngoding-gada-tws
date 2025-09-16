document.getElementById("hitung").addEventListener("click", function () {
  const belanja = Number(document.getElementById("belanja").value);

  let diskon = 0;

  if (belanja >= 500000) {
    diskon = belanja * 0.2;
  } else if (belanja >= 250000) {
    diskon = belanja * 0.1;
  } else {
    diskon = 0;
  }

  const totalBayar = belanja - diskon;

  document.getElementById("hasilBelanja").textContent =
    "Total Belanja: Rp " + belanja.toLocaleString("id-ID");
  document.getElementById("hasilDiskon").textContent =
    "Diskon: Rp " + diskon.toLocaleString("id-ID");
  document.getElementById("hasilBayar").textContent =
    "Total Bayar: Rp " + totalBayar.toLocaleString("id-ID");
});
