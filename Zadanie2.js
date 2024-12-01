/* 2. Math Calculator
Aplikacja kalkulatora matematycznego wykorzystująca klasy, metody, template stringi oraz destrukturyzację.

Stwórz aplikację kalkulatora, który będzie wykonywał podstawowe operacje matematyczne:

dodawanie,
odejmowanie,
mnożenie
dzielenie.
Każda operacja powinna być reprezentowana jako metoda w klasie Calculator. Wynik operacji powinien być wyświetlany za pomocą template stringów.

Funkcjonalności do zaimplementowania:
Utworzenie klasy Calculator z metodami: add, substruct, multipy, divide. x
Przechowywanie parametrów z użyciem const i let. essa
Przekazywanie parametrów do metod z wykorzystaniem destrukturyzacji.
Wyświetlanie wyników w konsoli za pomocą template stringów. */

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