(function exercicio() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    
    readline.question('Qual palavra que gostaria de verificar se é Palindromo?\n', input => {
        if(isPalindromo(input)) {
            console.log(`"${input}" é um Palindromo!`);
        } else {
            console.log(`"${input}" não é um Palindromo!`);
        }
        readline.close();
    });
})();

function isPalindromo (frase) {
    var fraseSemSimbolos = frase.toLowerCase().replace(/[\W_]/g, '');
    var fraseSemSimbolosInvertida = fraseSemSimbolos.split('').reverse().join(''); 
    return fraseSemSimbolosInvertida === fraseSemSimbolos;
}

module.exports = {
    isPalindromo
};