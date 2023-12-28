

///////////// these function used for header part 

////function get numbers of cart orders for each user 
function GetUserCartOrders() {
    //check if user signed or loged
    if (localStorage.getItem("IsLoged") == "true") {
        ////number  of cart orders 
        let cartOrders = 0;// counter 
        ///get loged userid form local storage
        let userId = localStorage.getItem("userId");
        fetch("https://fakestoreapi.com/carts")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                for (item of data) {
                    ///check if users in fakeapi have userid equal loged userid or not
                    ////or filter or get loged userid form api  to get numbers of addedProdcuts to cart
                    if (item.userId == userId) {
                        ///may be have added product in difference time 
                        cartOrders += item.products.length;
                        console.log(cartOrders);
                    }

                }
                document.getElementById("ordersAddedToCart").innerHTML = cartOrders;
                console.log("aaaaaaaaaa")

            })///end fetch data
        ///select element to show cart orders 

    }//end if 


} // end function GetUserCartOrders


////function to swap between login button and myaccount button 
function SwapLoginAccount() {
    let logingCase = localStorage.getItem("IsLoged");
    ////in case (user loged)
    if (logingCase == "true") {
        document.getElementById("loginLink").hidden = true;
        document.getElementById("myAccountButton").hidden = false;
        document.getElementById("userNameShow").innerHTML = localStorage.getItem("userName");
    }
    ////in case (user un loged)
    else if (!logingCase) {
        document.getElementById("loginLink").hidden = false;
        document.getElementById("myAccountButton").hidden = true;
    }
}



///// end:: Mostafa//////////////////////////////////////////////////////////////////////////
////do thes something when window load
window.addEventListener("load",function(){

 
    /////calling SwapLoginAccount when window load
    SwapLoginAccount();
    /// calling FtechProducts when window load
    ///call this fucntion if use this code (using appendchild by Ahmed) 
    //// if use appendchild by mostafa donot this function
    // FetchProducts(); 
    ///calling GetUserCartOrders to show cartOrders
    GetUserCartOrders();

})
 




//// on click on sign out link => sign out and reload to main page
document.getElementById("signOutLink").onclick = function () {
    localStorage.setItem("IsLoged", false)
}

