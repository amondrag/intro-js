/**
 * Una funcion engloba un procedimiento en especifico para una tarea a realizar.
 * Crear un afucnion que reciba un alista de numeros enteros y un numero a buscar 
 * y que retorne en que posicion se encuentra el elemento a buscar.
    */

const list = [1,2,3,4,5,6,7]

//parametro: lista de numero y un numero 
//Regular function
/**function findNumber(array, number){
    for(let i=0; i < array.length; i++){
        if(array[i] == number){
            return i;
        }
    }
}


const x = findNumber(list,4)
console.log(x)
*/



//Arrow function
const findNumber = (array, number) => {
    for(let i=0; i < array.length; i++){
        if(array[i] == number){
           console.log(i);
        }
    }
}

findNumber(list,4)