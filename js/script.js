var listSurname = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
var userSurnameInput;
var userSurnameActivePushFlag = false;
var userSurnameInputIndex;

function userSurnamePush() {
  userSurnameInput = document.getElementById("userSurnameInput").value;
  listSurname.push(userSurnameInput);
  listSurname.sort();
  userSurnameInputIndex = listSurname.indexOf(userSurnameInput);
  userSurnameInputIndex++;
}

function listSurnamePull() {
  // Array check
  console.log(listSurname);

  for (var i = 0; i < listSurname.length; i++) {
    document.getElementById("listSurnamePullList").innerHTML +=
      "<li>" + listSurname[i] + "</li>";
  }

  console.log(userSurnameInput);
  console.log(userSurnameInputIndex);


  for (var i = 0; i < listSurname.length; i++) {
    if (userSurnameInput = listSurname[i]) {
      document.getElementById("userSurnameActivePush").innerHTML =
        "La sua posizione nella lista è la numero: " + userSurnameInputIndex;
        break;
    }
  }

//   var i = 0;
//   while ( userSurnameInput != listSurname[i]) {
//     i++
//   }
}
