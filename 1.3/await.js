// // async function helloWorld() { // async mengubah function menjadi synchronous
// //     // let result = await doAsync();
// //     // let showResult = showAsync();
// //     let result = await doAsync();
// //     let showResult = await showAsync();
// // }

// const { reject } = require("async");

// async function helloWorld() { // async mengubah function menjadi synchronous
//     // let result = await doAsync();
//     // let showResult = showAsync();
//     let result = await doAsync();
//     let showResult = await showAsync(result);
// }

// function doAsync() {
//     return 'Hai !';
// }

// function showAsync(result) {
//     console.log(result)
// }

// console.log(helloWorld());


// =====================================

const data = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(20);
    }, 1000);
    setTimeout(() => {
        reject(new Error('Data Rejected'));
    }, 2000);
});

async function sum(a, b) {
    let additionalData = 0;
    try {
        additionalData = await data;
        let result = a + b + additionalData;
        console.log(result);
    } catch (error) {
        console.log(error)
    }
}

sum(10, 11);