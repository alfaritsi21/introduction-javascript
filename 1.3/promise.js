// let janjian = new Promise((resolve, reject) => {
//     // Proses GET API
//     let success = true;
//     let data = ['Futsal', 'Badminton'];
//     if (success) {
//         // resolve ('Berhasil');
//         resolve(data);
//     } else {
//         reject(new Error('Janjian dibatalkan'));
//         // reject('Janjian dibatalkan');
//     }
// });

let janjian = new Promise((resolve, reject) => {
    let data = ['Futsal', 'Badminton'];
    setTimeout(() => {
        resolve(data);
    }, 2000);
    setTimeout(() => {
        reject('Data Error');
    }, 1000);
});

janjian
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });