var listSurname = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
var userSurnameInput;

function userSurnamePush() {
  userSurnameInput = document.getElementById("userSurnameInput").value;
  listSurname.push(userSurnameInput);
}

// Array check
console.log(listSurname);

function listSurnamePull() {
  console.log(listSurname);
}
