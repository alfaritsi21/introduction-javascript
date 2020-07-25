// TUGAS 4

let data = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874'
    },
    phone: '1-770-736-8031 x56442',
    wewbsite: 'hildegard.org'
}

let newData = {
    ...data,
    name: 'Arqi Alfaritsi',
    email: 'arqi.alfaritsi21@gmail.com',
    hobby: ['bermain alat musik', 'badminton']
}

// TUGAS A
console.log(newData);

// TUGAS B
const {address: {street, city}} = newData;
console.log(`Menurut data yang ada, dia tinggal di jalan ${street} yang berada di kota ${city}`);