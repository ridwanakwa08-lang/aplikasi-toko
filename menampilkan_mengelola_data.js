const prompt = require('prompt-sync')();

let barang = [];

function tambahBarang() {
    console.log("\n=== Tambah Data Barang ===");

    let nama = prompt("Masukkan nama barang: ");
    let harga = parseFloat(prompt("Masukkan harga barang: "));

    if (nama === "" || isNaN(harga)) {
        console.log("Input tidak valid! Pastikan nama dan harga diisi dengan benar.");
        return;
    }

    barang.push({ nama: nama, harga: harga });

    console.log(`Barang '${nama}' dengan harga Rp${harga} berhasil ditambahkan!`);
}

//tugas 2 
function tampilkanBarang() {
    console.log("\n=== Daftar Barang ===");
    if (barang.length === 0) {
        console.log("Belum ada data barang.");
    } else {
        for (let i = 0; i < barang.length; i++) {
            console.log(`${i + 1}. ${barang[i].nama} - Rp${barang[i].harga}`);
        }
    }
}

while (true) {
    console.log("\n=== MENU DATA BARANG ===");
    console.log("1. Tambah Barang");
    console.log("2. Lihat Daftar Barang");
    console.log("3. Keluar");

    let pilih = prompt("Pilih menu (1-3): ");

    if (pilih == "1") {
        tambahBarang();
    } else if (pilih == "2") {
        tampilkanBarang();
    } else if (pilih == "3") {
        console.log("Terima kasih! Program selesai.");
        break;
    } else {
        console.log("Pilihan tidak valid.");
    }
}
