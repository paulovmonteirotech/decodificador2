// Function to encrypt text
function criptografarTexto(texto) {
    return texto.replace(/a/g, "3z881")
                .replace(/b/g, "5y78")
                .replace(/c/g, "7x954")
                .replace(/d/g, "4w445")
                .replace(/e/g, "89v1569")
                .replace(/f/g, "54u1515617")
                .replace(/g/g, "251t78")
                .replace(/h/g, "754654s78")
                .replace(/i/g, "r78")
                .replace(/j/g, "q78")
                .replace(/k/g, "p78")
                .replace(/l/g, "o78")
                .replace(/m/g, "n78");
}

// Function to decrypt text
function descriptografarTexto(texto) {
    return texto.replace(/3z881/g, "a")
                .replace(/5y78/g, "b")
                .replace(/7x954/g, "c")
                .replace(/4w445/g, "d")
                .replace(/89v1569/g, "e")
                .replace(/54u1515617/g, "f")
                .replace(/93t251/g, "g")
                .replace(/754654s78/g, "h")
                .replace(/r78/g, "i")
                .replace(/q78/g, "j")
                .replace(/p78/g, "k")
                .replace(/o78/g, "l")
                .replace(/n78/g, "m");
}

function processarTexto(operacao) {
    var texto = document.getElementById("texto").value.toLowerCase();
    var resultado = "";

    if (operacao === 'criptografar') {
        resultado = criptografarTexto(texto);
    } else if (operacao === 'descriptografar') {
        resultado = descriptografarTexto(texto);
    }

    document.getElementById("resultado").innerText = resultado;
};


