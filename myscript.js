let blocco = document.querySelector(".myblock");

for(let index = 1; index <= 100; index++) {
   let element = `<div class= "mystyle">${index}</div >`
   blocco.innerHTML += element ;
   
}