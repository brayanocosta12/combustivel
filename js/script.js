function combustivel(){
    var gasolina = document.getElementById('gasoline').value;
    var etanol = document.getElementById('etanol').value;
    var result = document.getElementById('result').value;
    var maisBarato = entanol/gasolibe;


    gasolina = gasolina.replace(',','.');
    etanol = etanol.replace(',','.');
    
    if(maisBarato >= 0.7){
        result.innerHTML = 'melhor abastecer com gasolina';

    }else{
        result.innerHTML = 'melhor etanol'
    }















}































//if (letra != 0 && letra != 1 && letra != 2 && letra != 3 && letra != 4 && letra != 5 && letra != 6 && letra != 7 && letra != 8 && letra != 9 && letra != ',' && letra != '.' && letra != 'Tab' && letra != 'Enter' && letra != 'Backspace' && letra != 'Delete' && letra != 'ArrowLeft' && letra != 'ArrowRight')