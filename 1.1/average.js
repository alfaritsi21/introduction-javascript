// TUGAS 2

const mtk = 180;
const bahasaIndonesia = 80;
const bahasaInggris = 80;
const ipa = 80;
let grade = '';
const average = (mtk+bahasaIndonesia+bahasaInggris+ipa)/4;

if(average >= 90 && average <= 100) {
    grade = 'A';
} else if(average >= 80 && average <= 89) {
    grade = 'B';
} else if(average >= 70 && average <= 79) {
    grade = 'C';
} else if(average >= 60 && average <= 69) {
    grade = 'D';
} else if(average >= 0 && average <= 59) {
    grade = 'E';
} else {grade = 'Cek kembali nilai!'}

console.log(`Rata-rata = ${average}
Grade= ${grade}`);