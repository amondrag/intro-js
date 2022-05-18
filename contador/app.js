//Inicializar mi contador 
let count =0;

//Traer el elemento 

let value = document.getElementById('contador');


//metodo del evento incrementar

function increment(){
    count++;
    value.textContent=count;
}

function reset(){
    count=0;
    value.textContent=count;
}

function decrement(){
    if(count >=1){
        count--;
        value.textContent=count;
    }
}