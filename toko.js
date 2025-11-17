// PT 

const prompt = require("prompt-sync")({ sigint: true });

let barang = []; // array untuk menyimpan data barang

function tambahBarang() {
  console.log("\n=== Tambah Barang Baru ===");
  const nama = prompt("Masukkan nama barang: ");
  const harga = parseFloat(prompt("Masukkan harga barang: "));

  if (nama === "" || isNaN(harga)) {
    console.log("Input tidak valid! Nama tidak boleh kosong dan harga harus angka.");
    return;
  }

  const dataBaru = { nama: nama, harga: harga };
  barang.push(dataBaru);

  console.log(`Barang '${nama}' berhasil ditambahkan!\n`);
}


function tampilkanBarang() {
  console.log("\n=== Daftar Barang ===");
  if (barang.length === 0) {
    console.log("Belum ada data barang.\n");
    return;
  }

  for (let i = 0; i < barang.length; i++) {
    console.log(`${i + 1}. ${barang[i].nama} - Rp ${barang[i].harga}`);
  }
  console.log(""); // baris kosong
}


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

  // menggunakan sort() berdasarkan harga (termurah ke termahal)
  barang.sort((a, b) => a.harga - b.harga);
  console.log("Data barang berhasil diurutkan berdasarkan harga (termurah ke termahal).");
  tampilkanBarang();
}


while (true) {
  console.log("=== MENU UTAMA TOKO ===");
  console.log("1. Tambah Barang");
  console.log("2. Tampilkan Barang");
  console.log("3. Cari Barang");
  console.log("4. Urutkan Barang (Harga)");
  console.log("5. Keluar");

  const pilihan = prompt("Pilih menu (1-5): ");
  console.log(""); // jarak antar menu

  if (pilihan === "1") {
    tambahBarang();
  } else if (pilihan === "2") {
    tampilkanBarang();
  } else if (pilihan === "3") {
    cariBarang();
  } else if (pilihan === "4") {
    urutkanBarang();
  } else if (pilihan === "5") {
    console.log("Terima kasih telah menggunakan aplikasi ini!");
    break; // keluar dari while(true)
  } else {
    console.log("Pilihan tidak valid! Silakan coba lagi.\n");
  }
}

