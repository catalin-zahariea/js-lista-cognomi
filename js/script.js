var listSurname = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
var userSurnameInput;

function userSurnamePush() {
  userSurnameInput = document.getElementById("userSurnameInput").value;
  listSurname.push(userSurnameInput);
  listSurname.sort();
}

function listSurnamePull() {
  // Array check
  console.log(listSurname);

  for (var i = 0; i < listSurname.length; i++) {
    document.getElementById("listSurnamePullList").innerHTML +=
      "<li>" + listSurname[i] + "</li>";
  }
}
