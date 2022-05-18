function sumaArreglo(array){
    let suma=0;
    for(let i=0; i<array.length; i++){
        suma+= array[i];
    }
    return suma;
}

var arr= [1,2,3,4,10,11];

var res= sumaArreglo(arr);

console.log(res);

