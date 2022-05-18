var nombre, edad;

nombre=prompt("Ingresa tu nombre", "");
edad=Number(prompt("Ingresa tu edad"));

if(edad>=18){
    alert("Puede ingresar a la discoteca")
    if(nombre == "Mario"||nombre == "Carlos"){ //Se debe de hacer una doble comparación para evitar que solo compare con nada y deje pasar cualquier otro nombre
        alert("Puede acceder al VIP")
    }
}else{
    alert("No puede acceder a la discoteca")
}
