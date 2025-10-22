const prompt = require('prompt-sync')();

let barang = [];

function tambahBarang() {
    console.log("\n=== Tambah Data Barang ===");

    let nama = prompt("masukan nama barang: ");
    let harga = parsefloat(prompt("Masukan harga barang: "));

    if (nama === "" || isNaN(harga)) {
        console.log("input tidak valid! pastikan nama dan harga diisi dengan benar.")
        return;
    }

    barang.push({ nama: nama, harga: harga });

    console.log(`barang '${nama}' dengan harga Rp${harga} berhasil ditambahkan! `);
}

while (true) {
    console.log("\n=== MENU DATA BARANG ===");
    console.log("1. Tambah Barang");
    console.log("2. Lihat Daftar Barang");
    console.log("3. Keluar");

    let pilih = prompt("pilih menu (1-3): ");

    if (pilih == "1") {
        tambahBarang();
    } else if (pilih == "2"){
        console.log("\n=== Daftar Barang ===");
        if (barang.length === 0) {
            console.log("Belum ada data barang.");
        } else {
            barang.forEach((b, i) =>  {
                console.log(`${i + 1}. $ {b.nama} - Rp${b.harga}`);
            });
        }
    } else if (pilih == "3") {
        console.log("teima kasih! program selesai. ")
        break;
    } else {
        console.log("pilhan tidak valid");
    }
}