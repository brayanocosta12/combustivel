function combustivel(){
    var gasolina = document.getElementById('gasolina').value;
    var etanol = document.getElementById('etanol').value;
    var result = document.getElementById('result').value;
    var maisBarato = etanol/gasolina;



    if (gasolina != '' && etanol != ''){

   
    
    if(maisBarato >= 0.7){
        result.innerHTML = 'melhor abastecer com gasolina';

    }

    else{
        result.innerHTML = 'melhor etanol';
    } 
    }
    else{
        alert('prencha todos os campos');
    }



}


function verificarInput(event){
    var letra = event.key;

    if (letra != 0 &&
        letra != 1 && 
        letra != 2 && 
        letra != 3 && 
        letra != 4 && 
        letra != 5 && 
        letra != 6 && 
        letra != 7 && 
        letra != 8 && 
        letra != 9 && 
        letra != 10 && 
        letra != ',' && 
        letra != '.' && 
        letra != 'Tab' &&
        letra != 'Enter' && 
        letra != 'Backspace' && 
        letra != 'Delete' && 
        letra != 'ArrowLeft' && 
        letra != 'ArrowRight')

        alert('caractere invalido');
        document.getElementById('gasolina').value = '';
        document.getElementById('etanol').value = '';

}

































