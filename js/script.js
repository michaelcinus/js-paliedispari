//--------------------          PALINDROMA    --------------    

/*Chiedo all'utente una parola 
var parola = prompt("inserisci una parola");

//richiamo la function
var risultato = Palindroma(parola);

//verifico il risultato e riferisco all'utente
if (risultato == true) {
    document.getElementById("h1").innerHTML = "La parola inserita è palindroma";
} else  {
    document.getElementById("h1").innerHTML = "La parola inserita non è palindroma";
}


//function per capire se la parola è palindroma
function Palindroma(array) {
    var a  = Math.floor(array.length / 2);
    for  (var i = 0; i < a; i++)
      if (array[i] == array[array.length - i - 1]){
          return true;
      } else {
          return false;
      }
  }

 */



//--------------------          PARI E DISPARI    --------------    

// chiedo all'utente un numero
var num = parseInt(prompt("inserisci un numero"));
var btnPari = document.getElementById("pari");
var btnDispari = document.getElementById("dispari");


//l'utente sceglio il bottone pari o il bottone dispari
btnPari.addEventListener("click", function () {
   var somma = num + numeroRandom(0, 5);
   var risultato = pariDispari(somma);
   if (risultato == true) {
    document.getElementById("h1").innerHTML = "Hai vinto, il numero è pari";
   } else {
    document.getElementById("h1").innerHTML = "Hai perso, il numero è dispari";
   }
   console.log(somma);

});

btnDispari.addEventListener("click", function () {
    var somma = num + numeroRandom(0, 5);
    var risultato = pariDispari(somma);
    if (risultato == true) {
     document.getElementById("h1").innerHTML = "Hai perso, il numero è pari";
    } else {
     document.getElementById("h1").innerHTML = "Hai vinto, il numero è dispari";
    }
    console.log(somma);

});


//function numero random
function numeroRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var result = Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
    return result;
  }

  //function pari o dispari 
  function pariDispari(num) {
    if(num % 2 == 0) {
      return true;
    }
    else {
      return false;
    }
  }