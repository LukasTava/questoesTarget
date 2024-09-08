function fibonacci(n) {
    let a = 0, b = 1;
    while (a <= n) {
        if (a === n) {
            return true;
        }
        [a, b] = [b, a + b];
    }
    return false;
}

const numero = 13;

if (fibonacci(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}
