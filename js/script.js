// ---------------------------------------------------------------------------
// Variables
var listSurname = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
var userSurnamePush = document.getElementById('userSurnamePush');
var listSurnamePull = document.getElementById('listSurnamePull');

// ____________________________
// Button click activates function to push Surname inside listSurname array.
//
userSurnamePush.addEventListener('click', function() {

    // ____________________________
    // Variables
    var userSurnameInput = document.getElementById("userSurnameInput").value;

    
    listSurname.push(userSurnameInput);
    
    // ____________________________
    // Sort array in alphabetical order and NON case sensitive
    listSurname.sort((a, b) => a.localeCompare(b, undefined, {sensitivity: 'base'}));

});


// ____________________________
// Button click activates function to print list and showcase user input position
// inside the array.
//
listSurnamePull.addEventListener('click', function () {

    // ____________________________
    // Print the list of surnames in alphabetical order inside and ordered list for the user.
    
    for (var i = 0; i < listSurname.length; i++) {
        document.getElementById("listSurnamePullList").innerHTML += "<li>" + listSurname[i] + "</li>";
    }

    // ____________________________
    // Position check with FOR loop

    // Variables
    // var userSurnamePosition = -1;

    //  for (var i = 0; i < listSurname.length; i++) {
    //      if (userSurnameInput == listSurname[i]) {
    //         userSurnamePosition = i + 1;
    //         document.getElementById("userSurnameActivePush").innerHTML = "La sua posizione nella lista è la numero: " + userSurnamePosition;
    //     }
    //   }

    // ____________________________
    // Position check with WHILE loop
    
    // Variables
    var userSurnamePosition = -1;

    var x = 0;
    while ( userSurnamePosition == -1 && x < listSurname.length) {

     console.log(userSurnameInput);
     if (userSurnameInput == listSurname[x]) {
         userSurnamePosition = x + 1;
         document.getElementById("userSurnameActivePush").innerHTML = "La sua posizione nella lista è la numero: " + userSurnamePosition;
         }

     x++;
     }

});

