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
document.getElementById("vysledek").innerHTML = document.getElementById("vysledek").innerHTML + 'Vysledek je: ' + ((b + c) * b - b * c) / b + '<br/><br/>';    //<-^



//prikazy Alert, Prompt a Confirm:

/*
 var year = prompt("Ve kterem roce ses narodil?");
 if(year < 1990)
   alert('bylo ti 28')
 else
    alert('bude ti 28')
*/

/*
 var osmnact = confirm("Bylo vam uz 18?")
 alert(osmnact);
*/


//podminene prikazy if a ?:

var cislo = 18;
var osmnact;

// if(cislo < 18)
//   osmnact = "nebylo 18";
// else
//   osmnact = "bylo 18";
// document.getElementById("cislo").innerHTML = osmnact;

//toto v je to same jako toto ^, akorat kratsi

osmnact = (cislo < 18) ? "nebylo 18" : "bylo 18";
document.getElementById("cislo").innerHTML = document.getElementById("cislo").innerHTML = osmnact;

/*
var promenna = prompt("Zadej cislo:", "");
alert(+ promenna + 100);      //samotna promenna se vypise jako ta promenna a za ni 100, ALE kdyz pred ni dame + tak se to jakoby zmeni na matematickou operaci a secte se to
*/



//funkce:

function OdectiTri(x)
{
  return +x -3;
}
//alert(OdectiTri(5))

for(var i = 0; i < 5; i++)      //kdyz tam jako dalsi mam alert tak nesmim dat i-- v tomto pripade... jinak se to cely posere!!!!!
//  alert(OdectiTri(i))          //budou furt donekonecna vyskakovat okna




