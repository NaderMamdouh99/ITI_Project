add = fetch("https://fakestoreapi.com/products")
  .then((data) => data.json())
  .then((d) => {
    d.filter((item) => item.category === "women's clothing").forEach((item) => {
      // console.log(item);
      createcard(item.image, item.title, item.rating.rate, item.price, item.id);
    });
  });

function createcard(imgsrc, title, rating, price, id) {
  const plus = document.querySelector(".addproducts");

  let cardcode = `
<div onclick="ids(this)" id="card${id}" class="card" style="width:15rem;display: inline-block;">

<i id="heart"  onclick="heartcol(this)" class="fa-solid fa-heart fa-2xl" ></i>

<br><br>

<img id ="cardimg" src=${imgsrc} style="width:100px;height:150px">

<div class="card-body">
     <h5 class="card-title" style="height:150px;" >
    ${title}
      </h5>
     <div id="exp" class="badges bg-warning " >express</div>

          <div id="str" class="badges bg-success">
           ${rating}<i onclick="sta(this)" id="star" class="fa-solid fa-star"></i>
          </div>
          <br><br>
          <div id="ex" class="badges bg-success">$ ${price}</div>
</div>

</div>
`;
  //        adding cards                 //

  plus.innerHTML += cardcode;
}

let t = 0;
function ids(e) {
  if (t == 0) {
    /////     store element in local storage   /////////
    let strin = e.id.substring(4, e.id.length);
    localStorage.setItem("productId", strin - 1);
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
function sta(e) {
  if (e.style.color != "yellow") {
    e.style.color = "yellow";
  } else {
    e.style.color = "black";
  }

  t = 1;
}
