let barang = []; // array untuk menyimpan data barang

function tambahBarang() {
  console.log("\n=== Tambah Barang Baru ===");
  const nama = prompt("Masukkan nama barang: ");
  const harga = parseFloat(prompt("Masukkan harga barang: "));

  if (nama === "" || isNaN(harga)) {
    console.log("Input tidak valid! Nama tidak boleh kosong dan harga harus angka.");
    return;
  }

  // Simpan barang ke array
  const dataBaru = { nama: nama, harga: harga };
  barang.push(dataBaru);

  console.log(Barang '${nama}' berhasil ditambahkan!\n);
}
