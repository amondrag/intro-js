/**
 * Escriba una función de JavaScript que tomará una serie de números almacenados
 * y encontrará el segundo número más bajo y segundo más altos, respectivamente
 * del siguiente arreglo:
 */
 const arr = [3,4,6,1,5,2,9,10,23,12]

function segundosValores(array){
    function compara ( a, b ){ return a - b; }
    array.sort(compara);
    let segundoAlt= array[array.length-2];
    let segundoBajo= array[1];
    return "El segundo mas bajo es: "+ segundoBajo+ "\nEl segundo mas alto es: " + segundoAlt;
}

console.log(segundosValores(arr));


const coleccion = [
    {a: 11, b:224, name: "M48 Bulldog"},
    {a:23, b:56, name: "Object 140"},
    {a: 32, b:75, name: "T57 Heavy"}
];

function union(array){
    let conc = []
    const ab= array.map((data)=> data.a+data.b);
    const names= array.map((item)=> item.name);
    for(let i=0; i<ab.length;i++){
        conc.push(ab[i]+ " "+names[i] + "-+-");
    }
    conc = conc.reduce((prev,curr) => prev+curr);
    return conc ;
}

console.log(union(coleccion));

/*
Hacer una función para que reciba ese arreglo de objetos
y que retorne la suma de "a" y "b" de cada objeto y concatenarlo
al String "name" para que devuelva algo así: 

            ["235 M48 Bulldog-=-79 Object 140-=-107 T57 Heavy" ]
*/


/**
  * Dadas dos matrices de enteros,
  * encuentra qué elementos faltan en la segunda matriz
  * de la primera matriz.

Ejemplo

La matriz es la lista original. Los números que faltan son
     matriz = [7,2,5,3,5,3]
     br = [7,2,5,4,6,3,5,3]

     Los números que faltan en arr son [4,6]

*/
matriz = [7,2,5,3,5,3];
br = [7,2,5,4,6,3,5,3];


function valoresFalt(matriz1, matriz2){
    const faltantes=[];
    for(let i=0; i<matriz2.length;i++){
        if(!matriz1.includes(matriz2[i])){
            faltantes.push(matriz2[i]);
        }
    }
    return faltantes;
}

console.log(valoresFalt(matriz, br));