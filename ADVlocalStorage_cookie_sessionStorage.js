//Storing as a object of different field with one more field phone

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

  // showData(myObj);

  axios
    .post(
      "https://crudcrud.com/api/531c0e32b38243ecbaecf4196816cfec/registrationlist",
      myObj
    )
    .then((res) => {
      let myObj = {
        name: res.data.name,
        email: res.data.email,
        phonenumber: res.data.phonenumber,
      };
      showData(myObj);
    })
    .catch((err) => {
      x1.innerHTML = x1.innerHTML + "<h4>Something Went Wrong</h4>";
    });
});

window.addEventListener("DOMContentLoaded", () => {
  axios
    .get(
      "https://crudcrud.com/api/531c0e32b38243ecbaecf4196816cfec/registrationlist"
    )
    .then((r) => {
      for (let index = 0; index < r.data.length; index++) {
        showData(r.data[index]);
      }
    })
    .catch((e) => {
      prompt(e);
    });
});

function showData(myObj) {
  let myObj_serialized = JSON.stringify(myObj);
  localStorage.setItem(myObj.email, myObj_serialized);
  var list = document.createElement("ul");
  var lists = document.createElement("li");

  //Adding delete Button
  var del = document.createElement("button");
  del.innerHTML = "DELETE";
  lists.innerText = `${myObj.name} - ${myObj.email} - ${myObj.phonenumber}`;
  lists.appendChild(del);
  list.appendChild(lists);
  document.getElementById("x1").appendChild(list);

  //Adding Edit Button
  var Edit = document.createElement("button");
  lists.appendChild(Edit);
  Edit.innerHTML = "EDIT";

  //Adding Delete Functionality
  del.addEventListener("click", () => {
    del.parentElement.parentElement.remove();
    localStorage.removeItem(myObj.email);
  });

  //Adding Edit Functionality
  Edit.addEventListener("click", () => {
    document.getElementsByTagName("input")[0].value = myObj.name;
    document.getElementsByTagName("input")[1].value = myObj.email;
    document.getElementsByTagName("input")[2].value = myObj.phonenumber;
    localStorage.removeItem(myObj.email);
    Edit.parentElement.parentElement.remove();
  });
}
