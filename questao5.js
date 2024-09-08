function inverterString(str) {
    let resultado = '';
    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
    }
    return resultado;
}

// Informe a string a ser invertida
const texto = "Lukas";
const textoInvertido = inverterString(texto);

console.log("String invertida:", textoInvertido);
