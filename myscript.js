let blocco = document.querySelector(".myblock");

for(let index = 1; index <= 100; index++) {
   if(index%3 == 0 )and(index%5 == 0){
        let element = `<div class= "fizzbuzz">FIZZBUZZ${index}</div >`
        blocco.innerHTML += element ;    
}else (index%3 == 0) {
    let element = `<div class= "tree">FIZZ${index}</div >`
    blocco.innerHTML += element ;    
} else (index%5 == 0) {
    let element = `<div class= "five">BUZZ${index}</div >`
    blocco.innerHTML += element ;    
}else{
    let element = `<div class= "mystyle">${index}</div >`
    blocco.innerHTML += element ;    
}


    let element = `<div class= "fizzbuzz">FizzBuzz</div >`
    blocco.innerHTML += element ; 
}
