function add(x1, x2){
    return x1+x2;
}

function multiply(x1, x2){
    return x1*x2;
}

function dividir(x1, x2){
    if(x2==0){
        console.log("No se puede dividir con cero '0'");
    }else{
        return x1/x2;
    }
}

console.log(dividir(20,2));