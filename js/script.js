// ---------------------------------------------------------------------------
// Variables
var listSurname = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
// La variabile userSurnameInput è globale perché verrà poi utilizzata in un'altra funzione.
var userSurnameInput;

function userSurnamePush() {

    // ---------------------------------------------------------------------------
    // Input value into array
    userSurnameInput = document.getElementById("userSurnameInput").value;
    listSurname.push(userSurnameInput);
    
    // ---------------------------------------------------------------------------
    // Sort array in alphabetical order and NON case sensitive
    listSurname.sort((a, b) => a.localeCompare(b, undefined, {sensitivity: 'base'}));
}

function listSurnamePull() {

    // ---------------------------------------------------------------------------
    // Print the list of surnames in alphabetical order inside and ordered list for the user.
    
    for (var i = 0; i < listSurname.length; i++) {
        document.getElementById("listSurnamePullList").innerHTML += "<li>" + listSurname[i] + "</li>";
    }

    // ---------------------------------------------------------------------------
    // Position check with FOR loop

    // Variables
    // var userSurnamePosition = -1;

    //  for (var i = 0; i < listSurname.length; i++) {
    //      if (userSurnameInput == listSurname[i]) {
    //         userSurnamePosition = i + 1;
    //         document.getElementById("userSurnameActivePush").innerHTML = "La sua posizione nella lista è la numero: " + userSurnamePosition;
    //     }
    //   }

    // ---------------------------------------------------------------------------
    // Position check with WHILE loop
    
    // Variables
    var userSurnamePosition = -1;

    var x = 0;
    while ( userSurnamePosition == -1 && x < listSurname.length) {

     console.log(userSurnameInput);
     if (userSurnameInput == listSurname[i]) {
         userSurnamePosition = x + 1;
         document.getElementById("userSurnameActivePush").innerHTML = "La sua posizione nella lista è la numero: " + userSurnamePosition;
         }

     x++;
     }
}
