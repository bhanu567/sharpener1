var forms = document.getElementById("valueFrom");

forms.addEventListener("submit", () => {
  var nam = document.getElementsByTagName("input")[0].value;

  var email = document.getElementsByTagName("input")[1].value;

  //to add in localstorage
  localStorage.setItem("name", nam);
  localStorage.setItem("Email", email);

  //to get the stored value
  localStorage.getItem("name");

  //to delete the stored value
  localStorage.removeItem("nam");

  sessionStorage.setItem("name", nam);
  sessionStorage.setItem("email", email);

  //adding cookie and their deletion time
  document.cookie = "name = Bhanu";

  document.cookie = "name = " + nam + "  " + new Date(2024, 5, 1).toUTCString();

  document.cookie = "name = Bhanu  " + new Date(2024, 5, 1).toUTCString();

  document.cookie =
    "email = " + email + "  " + new Date(2024, 5, 1).toUTCString();
});

//to display getItem
// console.log(localStorage.getItem("nam"));
setTimeout(() => {
  localStorage.removeItem("nam");
  localStorage.removeItem("email");
  console.log(localStorage.getItem("nam"));
}, 6000);

//storing objects
let myObj = {
  nam : "Bhanu",
  age : 24
};

//since, localStorage can only store the strings not number or booleans. So, Converting to Strings
let myObj_serialized = JSON.stringify(myObj);

//storing
localStorage.setItem("myObj", myObj_serialized);

//converting strings to objects
let myObj_deserailized = JSON.parse(localStorage.getItem("myObj"));

console.log(myObj_deserailized);

