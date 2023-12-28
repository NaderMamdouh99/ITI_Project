


///validation input on submit
document.getElementById("form").onsubmit = function (event) {
  event.preventDefault();
  ////get elements form local storage
  // let userNameLocalStorage  =  localStorage.getItem("userName");
  // let passwordLocalStorage  =  localStorage.getItem("password");
  ///get elements by id
  let userName = document.getElementById("userName").value;
  let password = document.getElementById("password").value;
  let email = document.getElementById("email").value;

  ////store loging case in local storage (true: loged, false: un loged)
  localStorage.setItem("IsLoged", true);

  /////////  new  ///////////////////////////////////

   //get users form localstorage and parse them
  let Users =  JSON.parse(localStorage.getItem("Users"));
  // let length = Users.length;

  for(let i = 0; i < Users.length;i++){
    if(Users[i].username == userName){
        // userLocalstorage = Users[i].username ;
        if(Users[i].email == email){
          if(Users[i].password == password){
            //update userId in localstorage with user id form api 
            
            localStorage.setItem("userName",Users[i].username )
            localStorage.setItem("password",Users[i].password)
            localStorage.setItem("mail",Users[i].email)
            localStorage.setItem("userId",Users[i].id)
            localStorage.setItem("IsLoged",true)
            //submit form 
            this.submit();
          }
          else{ 
            console.log("error password")
          }

        }
        else{
          console.log("error email");
        }
    }
    else{
      console.log("error username")
    }
    
}







  
  // ///fetch data from api and check user is registered or not 
  // fetch('https://fakestoreapi.com/users')
  // // fetch('https://asp-mvc-with-android-66943-default-rtdb.firebaseio.com/.json')
  //   .then((users) => users.json())
  //   .then((users) => {
  //     console.log(users)
  //     for (OneUser of users) {
  //         console.log(OneUser)
  //       // // check if username and password is correct and identical with users in api 
  //       if (userName == OneUser.username && password == OneUser.password) {
  //         //update userId in localstorage with user id form api 
  //         localStorage.setItem("userId",OneUser.id)
  //         localStorage.setItem("userName",OneUser.username)
  //         localStorage.setItem("password",OneUser.password)
  //         // submit form 
  //         this.submit();
  //       }

  //     }

  //   });

}




















//// do not remove that///////////////////////////////////////////////////////////////////////////////////////
// ///validation input on submit
// document.getElementById("form").onsubmit = function (event) {
//     ////get elements form local storage
//     // let userNameLocalStorage  =  localStorage.getItem("userName");
//     // let passwordLocalStorage  =  localStorage.getItem("password");
//     ///get elements by id
//     let userName = document.getElementById("userName").value;
//     let password = document.getElementById("password").value;
//     ////store loging case in local storage (true: loged, false: un loged)
//     localStorage.setItem("IsLoged", true);

//     /////////  new  ///////////////////////////////////
//     event.preventDefault();
//     ///fetch data from api and check user is registered or not 
//     fetch('https://fakestoreapi.com/users')
//     // fetch('https://asp-mvc-with-android-66943-default-rtdb.firebaseio.com/.json')
//       .then((users) => users.json())
//       .then((users) => {
//         console.log(users)
//         for (OneUser of users) {
//             console.log(OneUser)
//           // // check if username and password is correct and identical with users in api 
//           if (userName == OneUser.username && password == OneUser.password) {
//             //update userId in localstorage with user id form api 
//             localStorage.setItem("userId",OneUser.id)
//             localStorage.setItem("userName",OneUser.username)
//             localStorage.setItem("password",OneUser.password)
//             // submit form 
//             this.submit();
//           }

//         }

//       });
  
//   }
/////////// dont remove that/////////////////////////////////////

       //local storage  important do not remove this 
    // //check if username is free  in local storage ///////////////////////////////////
    // if (userName == "") {
    //   event.preventDefault();
    //   localStorage.setItem("IsLoged",false);///unloged becuse the username fault
    //   console.log("username free")
    // }
    // ///check if usename is not existed
    // if (userNameLocalStorage == null) {
    //   event.preventDefault();
    //   localStorage.setItem("IsLoged",false);
    //   console.log("this account is not registered")
    // }
    // /// don't forget email
    // if (userNameLocalStorage != null && userNameLocalStorage != userName) {
    //   event.preventDefault();
    //   localStorage.setItem("IsLoged",false);
    //   console.log("this account is not registered22")
    // }
    // //check if password is not correct 
    // if (userNameLocalStorage != null && userNameLocalStorage == userName && passwordLocalStorage != password) {
    //   event.preventDefault();
    //   localStorage.setItem("IsLoged",false);
    //   console.log("password is not correct ")
    // }
         //local storage  important do not remove this 