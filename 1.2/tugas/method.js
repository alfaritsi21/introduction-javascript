// TUGAS 1

// 1. JOIN : Berfungsi untuk me-returns array menjadi string

let hewan = ["gajah", "kuda"];
let mamalia = hewan.join(" dan ");
console.log(mamalia)


// 2. FIND : Berfungsi untuk me-return nilai elemen pertama dalam array yang sesuai kondisi

const nilai = [50, 70, 80, 85, 75];
const hasil = nilai.find(element => element > 80);
console.log(hasil);


// 3. REVERSE: Berfungsi untuk membalikkan urutan elemen dalam array

let hewan = ["gajah", "kuda", "kucing", "kambing"];
hewan.reverse();


// 4. INCLUDE: Berfungsi untuk menentukan array berisi elemen yang telah ditentukan.
let hewan = ["gajah", "kuda", "kucing", "kambing"];
let hewanBesar = hewan.includes("gajah");

// 5. FOREACH: Berfungsi untuk mengeksekusi fungsi satu kali untuk setiap elemen array
const huruf = ['a', 'b', 'c'];

huruf.forEach(element => console.log(element));

// 6. SORT: Berfungsi untuk mengurutkan elemen array
const angka = [100, 70, 4, 32];
angka.sort();
console.log(angka);

// 7. PUSH: Berfungsi untuk menambahkan elemen ke akhir array dan me-return array baru
let hewan = ["gajah", "kuda", "kucing", "kambing"];
hewan.push("jerapah");
console.log(hewan)

// 8. FILTER: Berfungsi untuk membuat array yang diisi dengan semua elemen array yang telah ditentukan
let hewan = ["gajah", "kuda", "kucing", "kambing"];
let hasil = hewan.filter(word => word.length > 5);
console.log(hasil);

// 9. SLICE: Berfungsi untuk me-return elemen yang dipilih dalam array, sebagai objek array baru
let hewan = ["gajah", "kuda", "kucing", "kambing"];
console.log(hewan.slice(1, 3));

// 10. indexOf: Berfungsi untuk me-return indeks pertama dimana elemen yang diberikan dapat ditemukan dalam array, atau -1 jika tidak ditemukan.
let hewan = ["gajah", "kuda", "kucing", "kambing"];
console.log(hewan.indexOf('kucing'));