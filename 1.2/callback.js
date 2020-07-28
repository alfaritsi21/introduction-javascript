function sayHello(name, callback1, callback2) {
    let greeting = `Hello ${name}`
    callback1(greeting)
    callback2(greeting)
    // console.log(name)
    // console.log(callback)
}

function showGreeting(greeting) {
    console.log(greeting)
}

function showGreetings(greeting) {
    console.log(greeting + '!')
}

sayHello('Arkademy', showGreetings, showGreeting)