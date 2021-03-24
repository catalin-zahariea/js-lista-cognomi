var listSurname = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
var userSurnameInput;
var userSurnameInputIndex;

userSurnameInput = prompt("Inserisci");
//listSurname.push(userSurnameInput);
listSurname.sort();
userSurnameInputIndex = listSurname.indexOf(userSurnameInput);
userSurnameInputIndex++;

// Array check
// console.log(listSurname);

for (var i = 0; i < listSurname.length; i++) {
  document.getElementById("listSurnamePullList").innerHTML +=
    "<li>" + listSurname[i] + "</li>";
}

// console.log(userSurnameInput);
// console.log(userSurnameInputIndex);

//   for (var i = 0; i < listSurname.length; i++) {
//     if (userSurnameInput == listSurname[i]) {
//       document.getElementById("userSurnameActivePush").innerHTML =
//         "La sua posizione nella lista è la numero: " + userSurnameInputIndex;
//     }
//   }

var userSurnameActivePushFlag = false;

/*
1. pippo
2. pluto
3. topolino
*/

// cerca la posizione

var elemento = listSurname.indexOf('pppp');

console.log('indice trovato :' + elemento);

elemento = listSurname.indexOf('Gialli');

console.log('indice trovato : ' + elemento);

var i = 0;
var posizione = -1;

while (posizione == -1 &&  i < listSurname.length) {

//   console.log((i + 1) + ". " + listSurname[i]);

  if (listSurname[i] == userSurnameInput) {
    posizione = i + 1;
  }
  /*
  if (userSurnameInput == listSurname[i]) {
    userSurnameActivePushFlag = true;
  }
  */

  console.log(i);

  i++;
}


if (posizione == -1) {

    console.log('elemento non trovato');

} else {

    console.log('elemento in posizione : ' + posizione);
}


// stampa il risultato ottenuto

//console.log(posizione);

