// document.getElementById("app").innerHTML = `
// <h1>Hello Parcel!</h1>
// <div>
//   Look
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
//   for more info about Parcel.
// </div>
// `;


//alert("Dobry den!");              //<- upozorneni/vyskakovaci okno v chromu


let a = 'Hello world';            //<- let signalizuje promennou

document.getElementById("app").innerHTML = a +  '!!!! <br/><br>';       //br nam to zase odradkuje
document.getElementById("app").innerHTML = document.getElementById("app").innerHTML + 'Dalsi text <br/><br>';


var b = 55;                      //<- var vs let ... jedna je brana jako lokalni a druha jako soukroma
var c = 11;                      //+ var je vice pouzivane

document.getElementById("vysledek").innerHTML = 'Priklad: ((b+c)*b-b*c)/b <br/>';         //pokud tam chci mit nekolik veci napsanych se stejnym id tak to musim spojit dohromady 
document.getElementById("vysledek").innerHTML = document.getElementById("vysledek").innerHTML + 'Vysledek je: ' + ((b + c) * b - b * c) / b;    //<-^