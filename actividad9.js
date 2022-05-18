// Ejercicios de Objetos y sus métodos básicos:


// Del siguiente objeto:
    var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
 /**
 *  
    1. Muestra en pantalla el valor de la propiedad name mediante dot notation
    2. Muestra en pantalla el valor de la propiedad age mediante bracket notation
    3. Modifica el valor de la propiedad name y que el nuevo valor sea: "Steve Jobs"
 */
console.log(student.name);
console.log(student['age']);
student.name="Steve Jobs";
console.log(student.name);


 //Escriba un programa de JavaScript para enumerar las propiedades de un objeto de JavaScript.
    //Objeto de muestra:

    var student = {
        name: "David Rayy",
        class: "VI",
        rollno: 12
    };

    function propObjeto(obj){
        let info = "El objeto tiene: "+ Object.keys(obj).length + " propiedades y son: " + Object.entries(obj) ;
        return info;
    } 

    console.log(propObjeto(student));

    



//Verifica si la propiedad name se encuentra dentro del siguiente objeto:
     var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };

function verProp(obj, prop){
    let propArr= Object.getOwnPropertyNames(obj);
    if(propArr.indexOf(prop)!= -1){
        return true;
    }else{
        return false;
    }
}

console.log(verProp(student,"name"))

/** Escriba un programa de JavaScript para eliminar la propiedad rollno del siguiente objeto. 
 * Imprima también el objeto antes o después de eliminar la propiedad. 
 * Objeto para usar:
 * */
   var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };

    function removeProp(obj, prop){
        delete obj[prop];
    }
    removeProp(student, "rollno");
    console.log(propObjeto(student))


/**
 * Escriba un programa para modificar el valor de la segunda propiedad del siguiente objeto:
 */
    var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
//La nueva edad debe ser 35.
 
student.age = 35;



/**
 * Escriba un programa para añadir una nueva propiedad al siguiente objeto:
 */ var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };

   // La nueva propiedad debe ser: pet y agregue un valor, ejemplo: cat, dog.

Object.defineProperty(student, 'pet',{
  enumerable: true,
  configurable: false,
  writable: false,
  value: 'dog'

})
console.log(propObjeto(student));

/**
 * Crea un código para llenar un objecto vacio:
 * 
 * const objeto = {}
 * 
 * Con las siguiente propiedades:
    * color
    * tamaño
    * peso
    * cantidad
    * 
*/