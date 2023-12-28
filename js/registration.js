//// set data in local storage
document.getElementById("form").onsubmit = function (event) {
  ///cteate userid from 1 to 10
  let userIdCteatedAutomatic = Math.floor(Math.random() * 10 + 1);
  /// after validation
  ///select elements
  let userName = document.getElementById("userName").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  // //get items form local storage
  localStorage.setItem("userName", userName);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  ///// set IsLoged true in local storage
  ////after validation on registration
  localStorage.setItem("IsLoged", true);
  ////needed validated... conflict userids
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
function validat_Submit(event) {
  if (
    document.querySelector("#userName").value.length > 3 &&
    document.querySelector("#password").value.length > 3 &&
    document.querySelector("#confirmPassword").value.length > 3
  ) {
    document.getElementById(
      "notValed"
    ).innerHTML = `<img src="/images/valid.png" >`;
    event.target.submit();
  } else {
    event.preventDefault();
    document.getElementById("#Txt").focus();
  }
}
