function esPalindromo(palabra){
    palabra=palabra.toLowerCase();
    let palabraReversa= palabra.split("").reverse().join("");
    if(palabra=== palabraReversa){
        return "Es palindromo"
    }else{
        return "No es palindromo";
    }
}

var aux= esPalindromo("Salud");
console.log(aux)

console.log(esPalindromo("MaDam"))
console.log(esPalindromo("computadora"))