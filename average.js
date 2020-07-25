// TUGAS 2

const mtk = 5;
const bahasaIndonesia = 190;
const bahasaInggris = 125;
const ipa = 143;
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
} else {grade = undefined}

console.log(`Rata-rata = ${average}
Grade= ${grade}`);