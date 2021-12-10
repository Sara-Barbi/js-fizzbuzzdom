let blocco = document.getElementById("myblock");

for(let index = 1; index <= 100; index++){
   
    if( (index%3 == 0) && (index%5 == 0) ){
        blocco.innerHTML +=  `<div class=" mystyle fizzbuzz">FIZZBUZZ</div>`;

    } else if(index%3 == 0) {
        blocco.innerHTML +=  `<div class="mystyle tree">FIZZ</div>`;

    } else if(index%5 == 0) {
        blocco.innerHTML +=  `<div class="mystyle five">BUZZ</div>`;

    }else{
        blocco.innerHTML +=  `<div class="mystyle">`+ index +`</div>`;

    }
}
