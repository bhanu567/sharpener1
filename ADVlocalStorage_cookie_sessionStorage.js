var forms = document.getElementById("valueFrom");

forms.addEventListener("submit", () => {
  var nam = document.getElementsByTagName("input")[0].value;

  var email = document.getElementsByTagName("input")[1].value;

  var phone = document.getElementsByTagName("input")[2].value;
  let myObj = {
    name: nam,
    email: email,
    phonenumber: phone,
  };

  let myObj_serialized = JSON.stringify(myObj);
  localStorage.setItem(email, myObj_serialized);

  var list = document.createElement("ul");
  var lists = document.createElement("li");

  //Adding delete Button
  var button = document.createElement("button");
  button.id="btn";
  button.innerHTML = "DELETE";
  lists.innerText = `${nam} - ${email} - ${phone}`;
  lists.appendChild(button);
  list.appendChild(lists);
  document.getElementById("x1").appendChild(list);

  //Adding Delete Functionality
  button.addEventListener("click", (e) => {
    button.parentElement.parentElement.remove();
    localStorage.removeItem(email);
  })
});

