function cariBarang() {
  console.log("\n=== Cari Barang ===");
  if (barang.length === 0) {
    console.log("Belum ada data barang untuk dicari.\n");
    return;
  }

  const keyword = prompt("Masukkan nama barang yang dicari: ").toLowerCase();
  let ditemukan = false;

  for (let i = 0; i < barang.length; i++) {
    if (barang[i].nama.toLowerCase().includes(keyword)) {
      console.log(`Ditemukan: ${barang[i].nama} - Rp ${barang[i].harga}`);
      ditemukan = true;
    }
  }

  if (!ditemukan) {
    console.log("Barang tidak ditemukan.");
  }
  console.log("");
}

function urutkanBarang() {
  console.log("\n=== Urutkan Barang Berdasarkan Harga ===");
  if (barang.length === 0) {
    console.log("Belum ada data untuk diurutkan.\n");
    return;
  }

  barang.sort((a, b) => a.harga - b.harga);
  console.log("Data berhasil diurutkan (termurah ke termahal):");
  tampilkanBarang();
}
