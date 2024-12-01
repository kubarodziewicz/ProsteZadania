class Calculator {
    add(a, b) {
        return console.log(`${a} + ${b} = ${a + b}`)
    }

    subtract(a, b) {
        return console.log(`${a} - ${b} = ${a - b}`)
    }

    multiply(a, b) {
        return console.log(`${a} * ${b} = ${a * b}`)
    }

    divide(a, b) {
        return console.log(`${a} / ${b} = ${a / b}`)
    }
}

const operacja = new Calculator()

operacja.add(256, 16)
operacja.subtract(256,16)
operacja.multiply(10,20)
operacja.divide(25,5)