function cambioTemperatura(tempe, tip){
    tip=tip.toLowerCase();
    let res;
    //Covierte de °F a °C
    if(tip=="c"){ 
        res= (tempe-32)/1.8 + "°C";
    }//Convierte de °C a °F
    else if(tip=="f"){
        res= (tempe*1.8)+32 + "°F";
    }
    return res;
}

console.log(cambioTemperatura(42, "f"));