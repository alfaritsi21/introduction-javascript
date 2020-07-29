// TUGAS 3

let nilaiAwal = '';
let nilaiAkhir = '';
let dataArray = [];

const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    if (nilaiAwal < nilaiAkhir) {
        if (dataArray.length > 4) {
            dataArray.sort(function(a, b){return a-b})
            let result = [];
            dataArray.forEach(item => {
                if(item > nilaiAwal && item < nilaiAkhir) {
                    // result.push(item);
                    result = [ ...result, item];
                }
            }); 
            console.log(result)
        } else {
            console.log('Jumlah angka dalam dataArray tidak ada')
        }
    } else {
        console.log('Nilai akhir harus lebih besar dari nilai awal')
    }
}

seleksiNilai (5, 20, [2, 25, 4, 14, 17, 30, 8])