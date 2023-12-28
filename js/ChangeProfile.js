//// get data from local storage
document.getElementById("submit").onclick = function (event) {
  event.preventDefault();
  document.getElementById("userName").value = localStorage.getItem("userName");
  document.getElementById("email").value = localStorage.getItem("email");
  document.getElementById("password").value = localStorage.getItem("password");
  document.getElementById("confirmPassword").value =
    localStorage.getItem("password");
};
//// set new data in local storage
document.getElementById("submit2").onclick = function (event) {
  let userName = document.getElementById("userName").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  localStorage.setItem("userName", userName);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  localStorage.setItem("IsLoged", true);
  localStorage.setItem("userId", userIdCteatedAutomatic);
};
//  FullName
function blurBorder(element) {
  if (element.value.length < 3) {
    document.querySelector("#notValed").style = "block";
    element.focus();
    element.select();
  } else {
    document.querySelector("#notValed").style.display = "none";
    document.querySelector("#valed").style = "block";
  }
}

// Email

function CheckEmail(element) {
  let Email = element.value;
  let EmailReg = /^\w+@\w+.(com|net|edu|org)?$/;
  if (EmailReg.test(Email)) {
    document.querySelector(".nottValed").style.display = "none";
    document.querySelector(".Valedd").style = "block";
  } else {
    document.querySelector(".nottValed").style = "none";
    element.focus();
    element.select();
  }
}

// Check Passowrd

function Passowrd(element) {
  var Passowrd1 = document.querySelector("#password").value;
  var confirmPassword = document.querySelector("#confirmPassword").value;
  if (Passowrd1 != confirmPassword) {
    document.querySelector(".notValed").style = "block";
    element.focus();
    element.select();
  } else {
    document.querySelector(".notValed").style.display = "none";
    document.querySelector(".Valed").style = "block";
  }
}

// Validat Submit
document.querySelector("#form").addEventListener("submit", function (event) {
  let userName = document.querySelector("#userName").value;
  let Passowrd = document.querySelector("#password").value;
  let confirmPassowrd = document.querySelector("#confirmPassword").value;
  // let submit = document.querySelector("#submit2").value;
  if (userName.length > 3 && Passowrd == confirmPassowrd) {
    event.target.submit();
  } else {
    event.preventDefault();
  }
});
