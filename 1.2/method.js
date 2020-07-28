// const data = {
//     name: "Arqi",

//     // addLastName: function (lastName) {
//     //     const {name} = this
//     //     console.log(data.name + lastName)
//     // }


//     addLastName: (lastName) => {
//         console.log(data.name + lastName)
//     }
// }

// data.addLastName('Alfaritsi')

// JOIN()
let fruits = ["Banana", "Apple", "Mango"]
let allFruits = fruits.join(' ')
console.log(fruits)
console.log(allFruits)

// SORT()
let sortASCFruits = fruits.sort() //ascending
let sortDESCFruits = fruits.sort().reverse() //descending
console.log(sortDESCFruits)

// MAP()
let data = [
    {name: 'Bagus', lastName: 'Tri'},
    {name: 'Arif', lastName: 'Rahman'},
    {name: 'Ardhika', lastName: 'RN'},
]

data.map((value, index) => {
    console.log(value)
    console.log(index)
})

const newData = data.map((value, index) => ({fullName: value.name + value.lastName}))
console.log(newData)

// FILTER
const age = [15, 16, 19, 20, 25, 17]
const checkAge = age.filter((value) => value >= 17)
console.log(age)
console.log(checkAge)

// PUSH
const sayur = ['bayam']
sayur.push('kangkung')