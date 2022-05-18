
let inicio = document.getElementById('inicio');
let jugador1 = document.getElementById('jugador1');
let jugador2 = document.getElementById('jugador2');
let jugador3 = document.getElementById('jugador3');


function iniciar(){
    inicio.style = 'none';
    let intervalo = setInterval(carrera, 150);
    
    let posicion1 = 0;
    let posicion2 = 0;
    let posicion3 = 0;

    
    function carrera(){
        posicion1 += Math.round(Math.random()*20);
        jugador1.style.left= `${posicion1}px`; 

        posicion2 += Math.round(Math.random()*20);
        jugador2.style.left= `${posicion2}px`; 

        posicion3 += Math.round(Math.random()*20);
        jugador3.style.left= `${posicion3}px`; 

        if(posicion1>=663){
            alert('Gano el rojo');
            clearInterval(intervalo)
        }else if(posicion2>= 663){
            alert('Gano el azul');
            clearInterval(intervalo)
        }else if(posicion3>=663)
        alert('Gano el amarillo');
        clearInterval(intervalo)
    }
}


inicio.addEventListener('click', iniciar);
