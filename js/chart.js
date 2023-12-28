/////////       print allcards                 //////////////

function FetchCard() {
    ///         feching from api      /////////
    const add = fetch('https://fakestoreapi.com/products')
        .then((data) => data.json())
        .then((data) => {

            data.forEach(Mallproduct => {



                ////////////////  call  createcard       /////////////////////

                createcard(Mallproduct);

            }

            )
        }

        );
}
///////////////      print cards by  filtering them with ids      //////////////////

function FetchCardFilter(cardid,num) {
    ///         feching from api      /////////

    const add = fetch('https://fakestoreapi.com/products')
        .then((data) => data.json())
        .then((data) => {

            data.forEach(Mallproduct => {

                //   filter data with id array  //
            
               if(cardid==Mallproduct.id)
         
                   
                    ////////////////  call  createcard       /////////////////////
                    
                    createcard(Mallproduct,num);

                
            }

            )
        }

        );
}

// /////          card creating function               ///////

function createcard(data,quantity) {

    /////////////         div that append cards on it                     /////////

    const plus = document.querySelector(".addproducts");

    ///////////////       card code inhtml              ///////////////////////

    let cardcode = `
<div onclick="ids(this)" id="card${data.id}" class="card" style="width:15rem;display: inline-block;">
<div class="row">
<i id="plus" class="col-2 fa-solid fa-plus" onclick="plus(this)"></i>
<div id="mount">${quantity}</div>

<i id="minus" class="col-2  fa-solid fa-minus" onclick="minus(this)"></i>
</div>
<br><br>

<img id ="cardimg" src=${data.image} style="width:100px;height:150px">

<div class="card-body">
     <h5 class="card-title" style="height:150px;" >
    ${data.title}
      </h5>
     <div id="exp" class="badges bg-warning " >express</div>

          <div id="str" class="badges bg-success">
           ${data.rating.rate}<i onclick="starcol(this)" id="star" class="fa-solid fa-star"></i>
          </div>
          <br><br>
          <div id="ex" class="badges bg-success">$ ${data.price}</div>
</div>

</div>

`
    //        adding cards                 //

    plus.innerHTML += cardcode;
}

localStorage.setItem("userId",1)

/////      filter data from api carts to take product id         ///
var filt=[];
function FetchCardid() {
    ///         feching from api      /////////
    const add = fetch('https://fakestoreapi.com/carts')
        .then((data) => data.json())
        .then((data) => {
            //               access data                               //
            data.forEach(Mallproduct => {
                //               check user who login                               //
                if (Mallproduct.userId == localStorage.getItem("userId")) {

                    //               access products inside data                               //
                     Mallproduct.products.forEach(arr => {
                        //      make array of ids                //
                        FetchCardFilter( arr.productId,arr.quantity);
                      

                    })
                }
            }
            );


        }

        );
}
FetchCardid()

/////     store element in local storage   /////////
let t = 0;

function ids(e) {
    /////  chech that he not press at icones                 ///////
    if (t == 0) {
        let strin = e.id.substring(4, e.id.length)
        localStorage.setItem("productId", strin)
    }
    t = 0;
}

/////    chinge heart color    ////////
function heartcol(e) {

    if (e.style.color != "red") {
        e.style.color = "red";
    }
    else { e.style.color = "black" }

    t = 1;

}
/////    chinge star color    ////////

function starcol(e) {

    if (e.style.color != "yellow") {
        e.style.color = "yellow";
    }
    else { e.style.color = "black" }

    t = 1;

}

function plus(e) {

    if (e.style.color != "yellow") {
        e.style.color = "yellow";
    }
    else { e.style.color = "black" }

    t = 1;

}
function minus(e) {

    // if () {
    //   ;
    // }
    // else {  }

    // t = 1;

}
