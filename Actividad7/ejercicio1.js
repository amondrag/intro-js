function findWord(phrase, word){
    word= word.toLowerCase();
    phrase= phrase.toLowerCase();
    if(phrase.indexOf(word)!= -1){
        return true;
    } else{
        return false;
    }
}


var esta = findWord("Hola mundo", "MUNDO");
console.log(esta);