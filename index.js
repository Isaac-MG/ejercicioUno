let sandia = (numero) => {
    if(numero === 0 || numero === '' || typeof numero != 'number' || numero >= 100){
        console.log('número ingresado no valido');
    }
    else{
        if(numero%2 === 0){
            console.log('SI');
        }
        else{
            console.log('NO');
        }
    }
}