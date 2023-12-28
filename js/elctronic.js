/////////       print allcards                 //////////////

function FetchCard(eve) {
  ///         feching from api      /////////
  const add = fetch(
    "https://noon-45e95-default-rtdb.firebaseio.com/products.json"
  )
    .then((data) => data.json())
    .then((data) => {
      data.forEach((Mallproduct) => {
        ////////////////     filter data with category    /////////////////////
        if (Mallproduct.id == eve) {
          localStorage.setItem("mo", Mallproduct.category);
        }

        ////////////////  call  createcard       /////////////////////

        createcard(Mallproduct);
      });
    });
}

///////////////      print cards by  filtering them with category      //////////////////

function FetchCardFilter(category1) {
  ///         feching from api      /////////
  const add = fetch(
    "https://noon-45e95-default-rtdb.firebaseio.com/products.json"
  )
    .then((data) => data.json())
    .then((data) => {
      data.forEach((Mallproduct) => {
        ////////////////     filter data with category    /////////////////////

        if (category1 == Mallproduct.category || category1 == "alldata") {
          ////////////////  call  createcard       /////////////////////
                                                      
          createcard(Mallproduct);
        }
      });
    });
}

// /////          card creating function               ///////

function createcard(data) {
  /////////////         div that append cards on it                     /////////

  const plus = document.querySelector(".addproducts");

  ///////////////       card code inhtml              ///////////////////////

  let cardcode = `
<div onclick="ids(this)" id="card${data.id}" class="card" style="width:15rem;display: inline-block;">

<i id="heart"  onclick="heartcol(this)" class="fa-solid fa-heart fa-2xl" ></i>

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

`;
  //        adding cards                 //

  plus.innerHTML += cardcode;
}

/////      filter data         ///

function Mcardfilter(e) {
  document.querySelector(".addproducts").innerHTML = "";

  FetchCardFilter(e.textContent);
}
FetchCardFilter("electronics");
/////     store element in local storage   /////////
let t = 0;

function ids(e) {
  /////  chech that he not press at icones                 ///////
  if (t == 0) {
    let strin = e.id.substring(4, e.id.length);
    localStorage.setItem("productId", strin - 1);
    FetchCard(strin - 1);
    window.open("../html/productDetails.html", "_self");
  }
  t = 0;
}

/////    chinge heart color    ////////
function heartcol(e) {
  if (e.style.color != "red") {
    e.style.color = "red";
  } else {
    e.style.color = "black";
  }

  t = 1;
}
/////    chinge star color    ////////

function starcol(e) {
  if (e.style.color != "yellow") {
    e.style.color = "yellow";
  } else {
    e.style.color = "black";
  }

  t = 1;
}
