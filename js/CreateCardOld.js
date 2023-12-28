



////////////////////////////// 
///function to fetch products 
function FetchProducts() {
    ///fetch data products from fake api
    fetch("https://fakestoreapi.com/products")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
            for (item of data) {
                CreateCard(item); //call fun that adds item in main div

            }
        })///end fetch data

}


////crate function to create card 
function CreateCard(product) {
    ///create elements
    let electronicDiv = document.createElement("div");
    electronicDiv.setAttribute("class", "col-lg-4 col-md-6 ");
    ////add category as a class to the element
    ///filter element by category
    let category;
    if (product.category !== "men's clothing" && product.category !== "women's clothing") {
        category = product.category;
    }
    /// add class category to electronicdiv
    electronicDiv.classList.add( category);
    // console.log(electronicDiv.getAttribute("class"))
    console.log(electronicDiv.getAttribute("class"));


    let productItemDiv = document.createElement("div");
    productItemDiv.setAttribute("class", "product-item bg-primary my-1    ");

    let productItemContentDiv = document.createElement("div");
    productItemContentDiv.setAttribute("class", " product-content text-center py-3 mb-auto");

    let productNameH = document.createElement("h3");
    productNameH.setAttribute("class", "d-block text-uppercase fw-bold ");
    productNameH.innerHTML = product.title;


    let priceP = document.createElement("p");
    priceP.setAttribute("class", "d-block ");
    priceP.innerHTML = product.price;

    let productImg = document.createElement("img");
    productImg.setAttribute("class", "img-fluid d-block mx-auto")

    productImg.setAttribute("src", product.image)
    // productImg.setAttribute("width", "300px")
    // productImg.setAttribute("height", "300px");
    productImg.style.width = "200px"
    productImg.style.height = "200px"

    productImg.innerHTML = `<img class="img-fluid d-block mx-auto" src=`+ product.image +` width="200px" height="200px" >`


    /////append children inside main div 
    productItemContentDiv.appendChild(productNameH);
    productItemContentDiv.appendChild(priceP);
    productItemDiv.appendChild(productImg);
    productItemDiv.appendChild(productItemContentDiv);
    electronicDiv.appendChild(productItemDiv);
    document.getElementById("product-list").appendChild(electronicDiv);

}//end createCard function




//// begin:: Mostafa fetch products form api //////   Mostafa  //////////////////////////////////////
///////function to fetech data from api 
function FetchProductMostafa() {

    //         fetch with fake api and create numbers of cards           //
    const add = fetch('https://fakestoreapi.com/products')
        .then((data) => data.json())
        .then((d) => {
            d.forEach(d => {
                createcard(d.image, d.category, d.description, d.rating.rate, d.price);
            }

            )
        });
}


//  card creating function                           //
function CreateCardMostafa(imgsrc, title, paragarph, rating, price) {
    const plus = document.querySelector(".addproducts");
    let cardcode = `
                                    <div class="card" style="width:15rem;display: inline-block;">

                                    <i id="heart" class="fa-solid fa-heart fa-2xl" ></i>

                                    <br><br>

                                    <img id ="cardimg" src=${imgsrc} style="width:100px;height:150px">

                                    <div class="card-body">
                                    <h4 class="card-title" style="height:50px" >
                                    ${title}
                                    </h4>
                                    <p class="card-text par" style="height:150px; padding:10px;">
                                    ${paragarph}
                                    </p>

                                    <div id="exp" class="badges bg-warning " >express</div>

                                    <div id="str" class="badges bg-success">
                                    ${rating}<i id="star" class="fa-solid fa-star"></i>
                                    </div>
                                    <br><br>
                                    <div id="ex" class="badges bg-success " >$ ${price}</div>
                                    </div>

                                    </div>

                                    `
    //        adding cards                 //
    plus.innerHTML += cardcode;

} //end create card mostaf


////do thes something when window load
window.addEventListener("load",function(){

  
    /////calling SwapLoginAccount when window load
    // SwapLoginAccount();
    /// calling FtechProducts when window load
    ///call this fucntion if use this code (using appendchild by Ahmed) 
    //// if use appendchild by mostafa donot this function
    // FetchProducts(); 
    ///calling GetUserCartOrders to show cartOrders
    // GetUserCartOrders();

})

