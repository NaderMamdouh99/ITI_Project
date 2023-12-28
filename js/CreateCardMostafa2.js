


/////////cards  genator //////////////
let GetCategory;
function FetchProduct2() {
    ///         feching from api      /////////
    const add = fetch('https://fakestoreapi.com/products')
    // const add = fetch('https://productsnoon-1a339-default-rtdb.firebaseio.com/.json')
        .then((data) => data.json())
        .then((data) => {
            data.forEach(product => {
                CreateCardM2(product);
                // sam get category
                // if(product.id == 6){
                //     localStorage.setItem("cat",JSON.stringify(data[10].category))

                // }
                 

            })
        });
}
// console.log("out",GetCategory)


// /////  card creating function  ///////
function CreateCardM2(product) {

    const plus = document.querySelector(".addproducts");

    ///////////////       card code inhtml              ///////////////////////
    let cardcode = `
            <div onclick="GetProductIDAndPutLocalStorage(this)" id="card${product.id}" class="card" style="width:15rem;display: inline-block;">

            <i id="heart"  onclick="HeartColor(this)" class="fa-solid fa-heart fa-2xl" ></i>

            <br><br>

            <img id ="cardimg" src=${product.image} style="width:100px;height:150px">

            <div class="card-body">
            <h5 class="card-title" style="height:150px;" >
            ${product.title}
            </h5>
            <div id="exp" class="badges bg-warning " >express</div>

            <div id="str" class="badges bg-success">
                ${product.rating.rate}<i onclick="StarColor(this)" id="star" class="fa-solid fa-star"></i>
            </div>
            <br><br>
            <div id="ex" class="price badges bg-success ">${product.price}</div>
            </div>

            
            </div>

            `
    //     adding cards    //

    plus.innerHTML += cardcode;
}



 

let  trueFalse = 0;
function GetProductIDAndPutLocalStorage(event) {
    if (trueFalse == 0) {
        /////     store element in local storage   /////////
        let strin = event.id.substring(4, event.id.length)
        
        localStorage.setItem("productId", strin-1)//sam
        // GetCategorySam(strin);
        // localStorage.setItem("cat", document.getElementById("category"+id).innerHTML);  //sam
        location.href = "../html/productDetails.html";  //sam
    }
    trueFalse= 0;
}


/////    chinge heart color    ////////
function HeartColor(event) {

    if (event.style.color != "red") {
        event.style.color = "red";
    }
    else { event.style.color = "black" }

    trueFalse= 1;

}


function StarColor(event) {

    if (event.style.color != "yellow") {
        event.style.color = "yellow";
    }
    else { event.style.color = "black" }

    trueFalse = 1;

}

///on widnow load 
window.addEventListener("load",function(){
    ///call this function
    FetchProduct2();
   

})  