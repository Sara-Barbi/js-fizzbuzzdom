let blocco = document.getElementById("myblock"); //richiamo l'elemento dell'html

for(let index = 1; index <= 100; index++){ //stabilisco un contatore all'interno di for
   
    if( (index%3 == 0) && (index%5 == 0) ){ //stabilisco la condizione in if dentro for
        blocco.innerHTML +=  `<div class=" mystyle fizzbuzz">FIZZBUZZ</div>`; //aggiungiamo la stringa che ci interessa a querlla condizione METTERE += PER GENERARE PIù DI UN ELEMENTO

    } else if(index%3 == 0) {
        blocco.innerHTML +=  `<div class="mystyle tree">FIZZ</div>`;

    } else if(index%5 == 0) {
        blocco.innerHTML +=  `<div class="mystyle five">BUZZ</div>`;

    }else{
        blocco.innerHTML +=  `<div class="mystyle">`+ index +`</div>`;

    }
}
