//Chiedo all'utente una parola 
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