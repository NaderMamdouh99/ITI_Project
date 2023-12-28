


//// on submit form event stor user in local sotarage
        
     document.getElementById("form").onsubmit = function (event) {
    event.preventDefault();
    ///cteate userid from 1 to 10 
    // let userIdCteatedAutomatic =20;     //Math.floor((Math.random() * 10) + 1);
    /// after validation
    ///select elements
    let userName = document.getElementById("userName").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let confirmPassword = document.getElementById("confirmPassword").value

    // ///get users form local storage
    // let User  = localStorage.getItem("Users");
    // let  Users=  JSON.parse(User)
    // let length = Users.length;
    // let userLocalstorage ;
    // let emailLocalstorage ;
    // // console.log(Users)



    // ///validate if email and username are existed before 
    // for(let i = 0; i < Users.length;i++){
    //     if(Users[i].username == userName){
    //         userLocalstorage = Users[i].username ;
    //     }
    //     if(Users[i].email == email){
    //         emailLocalstorage = Users[i].email ;
    //     }
    // }
    // ///check if username is exited before or not
    // if(userLocalstorage  == userName){
    //     console.log("user is Repeated")
    // }
    // ///check if email is exited before or not
    // else if(emailLocalstorage == email){
    //     console.log("email is Repeated")
    // }
    // else{
    //     /// check if password   equal confirmpassword or not
    //     if(password == confirmPassword){
    //         /// fill new user with registration data
    //         let newUser = {"id":length+1, "username":userName, "email":email, "password":password}
    //         //push data in Users
    //         Users.push(newUser)
    //         console.log(Users)
    //         ////set Users after push into localstorage
    //         localStorage.setItem("Users",JSON.stringify(Users))
    //         /////set some detail about user in localstorage
    //         localStorage.setItem("IsLoged",true)
    //         localStorage.setItem("userId", length+1)
    //         localStorage.setItem( "email",email)
    //         localStorage.setItem("userName",userName)

    //         //// submit form if all validation  are ok 
    //         // this.submit();

    //     }
    //     else{
    //         console.log("password not equal confirmpassword")
    //     }
       

    // }
  
///////////// Add item to fire base /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////post users from api into localstorage
     fetch("https://asp-mvc-with-android-66943-default-rtdb.firebaseio.com/users.json")

    .then((users)=>users.json())
    .then((users)=>{

        for(let i = 0; i < users.length; i++){
            ///validate if email and username are existed before 
            ///check if username is exited before or not
            if(users[i].username  == userName){
                console.log("user is Repeated from fetch")
                event.preventDefault()
                break;
            }
            ///check if email is exited before or not
            else if(users[i].email == email){
                console.log("email is Repeated from fetch")
                event.preventDefault()

                break;

            }
            else{
                /// check if password   equal confirmpassword or not
                if(password == confirmPassword){
                    let length  = users.length;
                    /// fill new user with registration data
                    let newUser = {"id":length+1, "username":userName, "email":email, "password":password}
                    //push data in Users
                    users.push(newUser)
                     
                    ////set Users after push into localstorage
                    localStorage.setItem("Users",JSON.stringify(users))
                    /////set some detail about user in localstorage
                    localStorage.setItem("IsLoged",true)
                    localStorage.setItem("userId", length+1)
                    localStorage.setItem( "email",email)
                    localStorage.setItem("userName",userName)

                    
                    // this.submit();
                   
                        fetch("https://asp-mvc-with-android-66943-default-rtdb.firebaseio.com/users.json",
                        {
                            method: "PUT",
                            mode: "cors",
                            cache: "no-cache",
                            credentials: "same-origin",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            redirect: "follow",
                            referrerPolicy: "no-referrer",
                            body: JSON.stringify( users)  
                            
                        })
                        .then(response => {
                            localStorage.setItem("formfetc ","fromfetch")
                           //// submit form if all validation  are ok  ,,, and new user registered in fire base 
                           this.submit();
                       
                        })
                        .catch(error => {
                        
                            console.log("error Put  from fetch")
                            event.preventDefault();
                         
                           
                        })


                }
                else{
                    console.log("password not equal confirmpassword  from fetch")
                event.preventDefault()
                break;

                }
            

            }



        }

    })

    ///////////// Add item to data base /////////////////////////////////////////////////////////////////////////////////////////////////////////////////






    

}

 
    //// //get items form local storage
    //    localStorage.setItem("userName",userName);
    //    localStorage.setItem("email",email);
    //    localStorage.setItem("password",password);

      


    //    ///if password equal to confirmPassword then submit
    //    if(password == confirmPassword ){
    //     ///get old registered users from localstorage to update 
    //     let user=    JSON.parse(localStorage.getItem("user"));
    //     console.log(user)

    //     ///push new user to old users 
    //     user.push({"username":userName,"email":email,"password":password})
    //     ////set all users in localstorage 
    //     console.log(JSON.stringify(user))
    //     localStorage.setItem("user",JSON.stringify(user));

    //     ///submit the form in case valide       
    //     this.submit();
    //    }



       ///// set IsLoged true in local storage 
       ////after validation on registration 
    //    localStorage.setItem("IsLoged",true)
       ////needed validated... conflict userids
    //    localStorage.setItem("userId",userIdCteatedAutomatic)


//////////////////////////////////////////////////////////////////////////



// //// on submit form event without register user in localstrorage 
        
// document.getElementById("form").onsubmit = function (event) {
//     event.preventDefault();
//     ///cteate userid from 1 to 10 
//     let userIdCteatedAutomatic =20;     //Math.floor((Math.random() * 10) + 1);
//     /// after validation
//     ///select elements
//     let userName = document.getElementById("userName").value
//     let email = document.getElementById("email").value
//     let password = document.getElementById("password").value
//     let confirmPassword = document.getElementById("confirmPassword").value

//         // //get items form local storage
//     //    localStorage.setItem("userName",userName);
//     //    localStorage.setItem("email",email);
//     //    localStorage.setItem("password",password);

      


//        ///if password equal to confirmPassword then submit
//        if(password == confirmPassword ){
//         ///get old registered users from localstorage to update 
//         let user=    JSON.parse(localStorage.getItem("user"));
//         console.log(user)

//         ///push new user to old users 
//         user.push({"username":userName,"email":email,"password":password})
//         ////set all users in localstorage 
//         console.log(JSON.stringify(user))
//         localStorage.setItem("user",JSON.stringify(user));

//         ///submit the form in case valide       
//         this.submit();
//        }



//        ///// set IsLoged true in local storage 
//        ////after validation on registration 
//        localStorage.setItem("IsLoged",true)
//        ////needed validated... conflict userids
//        localStorage.setItem("userId",userIdCteatedAutomatic)

// }






    //  fetch('https://asp-mvc-with-android-66943-default-rtdb.firebaseio.com/.json')
    //     .then((data) => data.json())
    //     .then((data) => {

    //         //   console.log( data)
    //         //   console.log( users)
    //         // data.push(pro);
    //         // console.log(data.push(pro))
    //         console.log(JSON.stringify(data))   
    //         // console.log(data)
    //             return data;
    //     })

//     fetch("test.json")
//             .then((data) => data.json())
//             .then((data) => {


//                 console.log(data)

//             });

//          let ahm=    {
//             "id":0,
//             "username":"userName",
//             "email":"email",
//             "password":"password"
//    } 



//     fetch('test.json', {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify( ahm ),
// }).then(() => {
//     console.log("blog added");
//     console.log( ahm);

//     //   setBody("");
//     //   setAuthor("adam");
//     //   setIsLoading(false);
//     //   history.push("/");
// return response.json();
// });





// //end event

// let user = [
//     { "id": 1, "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", "price": 109.95, "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", "category": "men's clothing", "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", "rating": { "rate": 3.9, "count": 120 } }
// ]


// let user = [{"id":1,"userId":1,"date":"2020-03-02T00:00:00.000Z","products":[{"productId":1,"quantity":4},{"productId":2,"quantity":1},{"productId":3,"quantity":6}],"__v":0},{"id":2,"userId":1,"date":"2020-01-02T00:00:00.000Z","products":[{"productId":2,"quantity":4},{"productId":1,"quantity":10},{"productId":5,"quantity":2}],"__v":0},{"id":3,"userId":2,"date":"2020-03-01T00:00:00.000Z","products":[{"productId":1,"quantity":2},{"productId":9,"quantity":1}],"__v":0},{"id":4,"userId":3,"date":"2020-01-01T00:00:00.000Z","products":[{"productId":1,"quantity":4}],"__v":0},{"id":5,"userId":3,"date":"2020-03-01T00:00:00.000Z","products":[{"productId":7,"quantity":1},{"productId":8,"quantity":1}],"__v":0},{"id":6,"userId":4,"date":"2020-03-01T00:00:00.000Z","products":[{"productId":10,"quantity":2},{"productId":12,"quantity":3}],"__v":0},{"id":7,"userId":8,"date":"2020-03-01T00:00:00.000Z","products":[{"productId":18,"quantity":1}],"__v":0}]

// fetch('https://asp-mvc-with-android-66943-default-rtdb.firebaseio.com/.json', {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(  ),
// }).then(() => {
//     console.log("blog added");
//     console.log( );

//     //   setBody("");
//     //   setAuthor("adam");
//     //   setIsLoading(false);
//     //   history.push("/");
//return response.json();
// });

// let pro = {
//     "id": 0,
//     "username": userName,
//     "email": email,
//     "password": password
// }


// async function getproduct() {


//     let users = await fetch('https://asp-mvc-with-android-66943-default-rtdb.firebaseio.com/.json')
//         .then((data) => data.json())
//         .then((data) => {

//             //   console.log( data)
//             //   console.log( users)
//             // data.push(pro);
//             // console.log(data.push(pro))
//             console.log(JSON.stringify(data))
//             console.log(data)
//                 return data;
//         })
//         user.push(users)
        
        
//     //    console.log(users)
//     //    return users;
// }

// // 
//         getproduct().then((data) => {
//             console.log(data)

//         })
//         // console.log(getproduct())

