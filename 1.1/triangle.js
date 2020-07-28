// TUGAS 3

const printSegitiga = 9;
if (typeof printSegitiga === "number") {
    let hasil = '';
    for (let i = printSegitiga; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            hasil += j;
        }
        console.log(hasil);
        hasil = ''; 
    }
} else {
    console.log("Data harus number");
}