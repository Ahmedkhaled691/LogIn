const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

const SignUpData = document.getElementById("SignUpData");
const SignInData = document.getElementById("SignInData");

var SignUpName = document.getElementById("name");
var SignUpEmail = document.getElementById("email");
var SignUpPass = document.getElementById("pass");

var Users = [];

SignUpData.addEventListener("click", () => {
  if (!SignUpName.value || !SignUpEmail.value || !SignUpPass.value) {
    // check ..........
    document.getElementById(
      "massege"
    ).innerHTML = `<p> All Inputs Is Requerd !</p>`;
  } else {
    document.getElementById("massege").innerHTML = ``;
    var obj = {
      name: SignUpName.value,
      Email: SignUpEmail.value,
      Password: SignUpPass.value,
    };

    Users.push(obj);

    localStorage.setItem("user", JSON.stringify(Users));

    alert("sign up success :)");
    container.classList.remove("active");
    SignUpName.value = "";
    SignUpEmail.value = "";
    SignUpPass.value = "";
  }
});

var SignInEmail = document.getElementById("SignInEmail");
var SignInPass = document.getElementById("SignInPass");
User = JSON.parse(localStorage.getItem("user"));

function login() {
  if (!SignInEmail.value || !SignInPass.value) {
    document.getElementById(
      "massege2"
    ).innerHTML = `<p> All Inputs Is Requerd !</p>`;
    return false;
  } else {
    for (var i = 0; i < User.length; i++) {
      if (User[i].Email == SignInEmail.value && User[i].Password == SignInPass.value) {
        localStorage.setItem("sessionUser" ,User[i].name )
        SignInData.setAttribute("href" , "home.html")
      }
      else {
        document.getElementById(
          "massege2"
        ).innerHTML = `<p> user not exist </p>`;
      }
    }
  }
}


// ----------------------------------------------
registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});
