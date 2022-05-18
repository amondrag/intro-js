let val1, val2,res;

let value = document.getElementById('pantalla');

let signo;

function siete(){
    value.textContent=7;
}
function ocho(){
    value.textContent=8;
}
function multi(){
    signo = "x";
    val1=  value;
    value.textContent='';
}

function mates(){
    switch(signo){
        case "x":
           res= value;
           value.textContent=res; 
    }
}