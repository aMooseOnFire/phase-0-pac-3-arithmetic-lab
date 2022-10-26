function add (a, b) {
    return a + b
}

function subtract (a,b) {
    return a - b
}

function multiply (a,b) {
    return a*b
}

function divide (a,b) {
    return a/b
}

function increment (number) {
    return number += 1
}

function decrement (number) {
    return number -= 1
}

function makeInt (a, b) {
    const parsed = parseInt(a, 10);
    return parsed;
}

function preserveDecimal (a, b) {
    const preserved = parseFloat (a);
    return preserved;
}