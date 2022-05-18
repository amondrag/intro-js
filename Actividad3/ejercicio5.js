var num_1,num_2, num_3;

num_1=prompt("Ingresa un numero", 0);
num_2=prompt("Ingresa otro numero", 0);
num_3=prompt("Ingresa otro numero", 0);

if(num_1>=num_2){
    if(num_1>=num_3){
        alert("El numero " + num_1 + " es mayor o igual que " + num_3 + " y "+ num_2)
    } else{
        alert("El numero " + num_3 + " es mayor "+ num_1 + " y "+ num_2)
    }
} else if (num_2>=num_3){

    alert("El numero " + num_2+ " es mayor o igual que "+ num_1 + " - "+ num_3)
}else{
    alert("El numero " + num_3+ " es mayor o igual que "+ num_2 + " - "+ num_3)

}