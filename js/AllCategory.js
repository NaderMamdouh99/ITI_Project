var allFilte = 1;
var menFilte = 0;
var womfilter = 0;
var JewelFilte = 0;
var ElectcsFilte = 0;
var smallthann = 0;
var largthann = 0;

//================fetch with fake api and create numbers of cards===================//
add = fetch("https://fakestoreapi.com/products")
  .then((data) => data.json())
  .then((d) => {
    d.forEach((item) => {
      createcard(item.image, item.title, item.rating.rate, item.price, item.id);
    });
  });

function createcard(imgsrc, title, rating, price, id) {
  const plus = document.querySelector(".ALLaddproducts");

  let cardcode = `
<div onclick="iddds(this)" id="card${id}" class="card" style="width:15rem;display: inline-block;">

<i id="heart"  onclick="hheeartcol(this)" class="fa-solid fa-heart fa-2xl" ></i>

<br><br>

<img id ="cardimg" src=${imgsrc} style="width:100px;height:150px">

<div class="card-body">
     <h5 class="card-title" style="height:150px;" >
    ${title}
      </h5>
     <div id="exp" class="badges bg-warning " >express</div>

          <div id="str" class="badges bg-success">
           ${rating}<i onclick="sssta(this)" id="star" class="fa-solid fa-star"></i>
          </div>
          <br><br>
          <div id="ex" class="price badges bg-success">${price}</div>
</div>

</div>
`;
  //        adding cards                 //

  plus.innerHTML += cardcode;
}
///// ======================= function to filter ==================  ///////////
//============All Product===================
function AllFilter() {
  if (allFilte != 1) {
    allFilte = 1;
    menFilte = 0;
    womfilter = 0;
    JewelFilte = 0;
    ElectcsFilte = 0;
    smallthann = 0;
    largthann = 0;
    document.querySelector(".ALLaddproducts").innerHTML = "";
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((d) => {
        d.forEach((item) => {
          // console.log(item);
          createcard(
            item.image,
            item.title,
            item.rating.rate,
            item.price,
            item.id
          );
        });
      });

    function createcard(imgsrc, title, rating, price, id) {
      const plus = document.querySelector(".ALLaddproducts");

      let cardcode = `
  <div onclick="iddds(this)" id="card${id}" class="card" style="width:15rem;display: inline-block;">
  
  <i id="heart"  onclick="hheeartcol(this)" class="fa-solid fa-heart fa-2xl" ></i>
  
  <br><br>
  
  <img id ="cardimg" src=${imgsrc} style="width:100px;height:150px">
  
  <div class="card-body">
       <h5 class="card-title" style="height:150px;" >
      ${title}
        </h5>
       <div id="exp" class="badges bg-warning " >express</div>
  
            <div id="str" class="badges bg-success">
             ${rating}<i onclick="sssta(this)" id="star" class="fa-solid fa-star"></i>
            </div>
            <br><br>
            <div id="ex" class="price badges bg-success">${price}</div>
  </div>
  
  </div>
  `;
      //        adding cards                 //

      plus.innerHTML += cardcode;
    }
  }
}
//===========Men Product====================
function menFilter() {
  if (menFilte != 1) {
    allFilte = 0;
    menFilte = 1;
    womfilter = 0;
    JewelFilte = 0;
    ElectcsFilte = 0;
    smallthann = 0;
    largthann = 0;
    document.querySelector(".ALLaddproducts").innerHTML = "";
    add = fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((d) => {
        d.filter((item) => item.category === "men's clothing").forEach(
          (item) => {
            // console.log(item);
            createcard(
              item.image,
              item.title,
              item.rating.rate,
              item.price,
              item.id
            );
          }
        );
      });

    function createcard(imgsrc, title, rating, price, id) {
      const plus = document.querySelector(".ALLaddproducts");

      let cardcode = `
<div onclick="iddds(this)" id="card${id}" class="card" style="width:15rem;display: inline-block;">

<i id="heart"  onclick="hheeartcol(this)" class="fa-solid fa-heart fa-2xl" ></i>

<br><br>

<img id ="cardimg" src=${imgsrc} style="width:100px;height:150px">

<div class="card-body">
     <h5 class="card-title" style="height:150px;" >
    ${title}
      </h5>
     <div id="exp" class="badges bg-warning " >express</div>

          <div id="str" class="badges bg-success">
           ${rating}<i onclick="sssta(this)" id="star" class="fa-solid fa-star"></i>
          </div>
          <br><br>
          <div id="ex" class="price badges bg-success">${price}</div>
</div>

</div>
`;
      //        adding cards                 //

      plus.innerHTML += cardcode;
    }
  }
}
//===========Jewelery Product====================

function JeweleryFilter() {
  if (JewelFilte != 1) {
    allFilte = 0;
    menFilte = 0;
    womfilter = 0;
    JewelFilte = 1;
    ElectcsFilte = 0;
    smallthann = 0;
    largthann = 0;
    document.querySelector(".ALLaddproducts").innerHTML = "";
    add = fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((d) => {
        d.filter((item) => item.category === "jewelery").forEach((item) => {
          // console.log(item);
          createcard(
            item.image,
            item.title,
            item.rating.rate,
            item.price,
            item.id
          );
        });
      });

    function createcard(imgsrc, title, rating, price, id) {
      const plus = document.querySelector(".ALLaddproducts");

      let cardcode = `
<div onclick="iddds(this)" id="card${id}" class="card" style="width:15rem;display: inline-block;">

<i id="heart"  onclick="hheeartcol(this)" class="fa-solid fa-heart fa-2xl" ></i>

<br><br>

<img id ="cardimg" src=${imgsrc} style="width:100px;height:150px">

<div class="card-body">
   <h5 class="card-title" style="height:150px;" >
  ${title}
    </h5>
   <div id="exp" class="badges bg-warning " >express</div>

        <div id="str" class="badges bg-success">
         ${rating}<i onclick="sssta(this)" id="star" class="fa-solid fa-star"></i>
        </div>
        <br><br>
        <div id="ex" class="price badges bg-success">${price}</div>
</div>

</div>
`;
      //        adding cards                 //

      plus.innerHTML += cardcode;
    }
  }
}
//===========Women Product====================

function womenFilter() {
  if (womfilter != 1) {
    allFilte = 0;
    menFilte = 0;
    womfilter = 1;
    JewelFilte = 0;
    ElectcsFilte = 0;
    smallthann = 0;
    largthann = 0;
    document.querySelector(".ALLaddproducts").innerHTML = "";
    add = fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((d) => {
        d.filter((item) => item.category === "women's clothing").forEach(
          (item) => {
            // console.log(item);
            createcard(
              item.image,
              item.title,
              item.rating.rate,
              item.price,
              item.id
            );
          }
        );
      });

    function createcard(imgsrc, title, rating, price, id) {
      const plus = document.querySelector(".ALLaddproducts");

      let cardcode = `
<div onclick="iddds(this)" id="card${id}" class="card" style="width:15rem;display: inline-block;">

<i id="heart"  onclick="hheeartcol(this)" class="fa-solid fa-heart fa-2xl" ></i>

<br><br>

<img id ="cardimg" src=${imgsrc} style="width:100px;height:150px">

<div class="card-body">
 <h5 class="card-title" style="height:150px;" >
${title}
  </h5>
 <div id="exp" class="badges bg-warning " >express</div>

      <div id="str" class="badges bg-success">
       ${rating}<i onclick="sssta(this)" id="star" class="fa-solid fa-star"></i>
      </div>
      <br><br>
      <div id="ex" class="price badges bg-success">${price}</div>
</div>

</div>
`;
      //        adding cards                 //

      plus.innerHTML += cardcode;
    }
  }
}
//===========Electronics Product====================

function ElectronicsFilter() {
  if (womfilter != 1) {
    allFilte = 0;
    menFilte = 0;
    womfilter = 0;
    JewelFilte = 0;
    ElectcsFilte = 1;
    smallthann = 0;
    largthann = 0;
    document.querySelector(".ALLaddproducts").innerHTML = "";
    add = fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((d) => {
        d.filter((item) => item.category === "electronics").forEach((item) => {
          // console.log(item);
          createcard(
            item.image,
            item.title,
            item.rating.rate,
            item.price,
            item.id
          );
        });
      });

    function createcard(imgsrc, title, rating, price, id) {
      const plus = document.querySelector(".ALLaddproducts");

      let cardcode = `
<div onclick="iddds(this)" id="card${id}" class="card" style="width:15rem;display: inline-block;">

<i id="heart"  onclick="hheeartcol(this)" class="fa-solid fa-heart fa-2xl" ></i>

<br><br>

<img id ="cardimg" src=${imgsrc} style="width:100px;height:150px">

<div class="card-body">
 <h5 class="card-title" style="height:150px;" >
${title}
  </h5>
 <div id="exp" class="badges bg-warning " >express</div>

      <div id="str" class="badges bg-success">
       ${rating}<i onclick="sssta(this)" id="star" class="fa-solid fa-star"></i>
      </div>
      <br><br>
      <div id="ex" class="price badges bg-success">${price}</div>
</div>

</div>
`;
      //        adding cards                 //

      plus.innerHTML += cardcode;
    }
  }
}
//===========Smaller Than $100 Filter====================

function smallThan() {
  if (smallthann != 1) {
    allFilte = 0;
    menFilte = 0;
    womfilter = 0;
    JewelFilte = 0;
    ElectcsFilte = 0;
    smallthann = 1;
    largthann = 0;
    document.querySelector(".ALLaddproducts").innerHTML = "";
    add = fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((d) => {
        d.filter((item) => item.price < 100).forEach((item) => {
          // console.log(item);
          createcard(
            item.image,
            item.title,
            item.rating.rate,
            item.price,
            item.id
          );
        });
      });

    function createcard(imgsrc, title, rating, price, id) {
      const plus = document.querySelector(".ALLaddproducts");

      let cardcode = `
<div onclick="iddds(this)" id="card${id}" class="card" style="width:15rem;display: inline-block;">

<i id="heart"  onclick="hheeartcol(this)" class="fa-solid fa-heart fa-2xl" ></i>

<br><br>

<img id ="cardimg" src=${imgsrc} style="width:100px;height:150px">

<div class="card-body">
 <h5 class="card-title" style="height:150px;" >
${title}
  </h5>
 <div id="exp" class="badges bg-warning " >express</div>

      <div id="str" class="badges bg-success">
       ${rating}<i onclick="sssta(this)" id="star" class="fa-solid fa-star"></i>
      </div>
      <br><br>
      <div id="ex" class="price badges bg-success">${price}</div>
</div>

</div>
`;
      //        adding cards                 //

      plus.innerHTML += cardcode;
    }
  }
}
//===========larg Than $100 Filter====================

function largThan() {
  if (largthann != 1) {
    allFilte = 0;
    menFilte = 0;
    womfilter = 0;
    JewelFilte = 0;
    ElectcsFilte = 0;
    smallthann = 0;
    largthann = 1;
    document.querySelector(".ALLaddproducts").innerHTML = "";
    add = fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((d) => {
        d.filter((item) => item.price > 100).forEach((item) => {
          // console.log(item);
          createcard(
            item.image,
            item.title,
            item.rating.rate,
            item.price,
            item.id
          );
        });
      });

    function createcard(imgsrc, title, rating, price, id) {
      const plus = document.querySelector(".ALLaddproducts");

      let cardcode = `
<div onclick="iddds(this)" id="card${id}" class="card" style="width:15rem;display: inline-block;">

<i id="heart"  onclick="hheeartcol(this)" class="fa-solid fa-heart fa-2xl" ></i>

<br><br>

<img id ="cardimg" src=${imgsrc} style="width:100px;height:150px">

<div class="card-body">
 <h5 class="card-title" style="height:150px;" >
${title}
  </h5>
 <div id="exp" class="badges bg-warning " >express</div>

      <div id="str" class="badges bg-success">
       ${rating}<i onclick="sssta(this)" id="star" class="fa-solid fa-star"></i>
      </div>
      <br><br>
      <div id="ex" class="price badges bg-success">${price}</div>
</div>

</div>
`;
      //        adding cards                 //

      plus.innerHTML += cardcode;
    }
  }
}

///////////////////////////////////////// Add id to local storge /////////////////////////////
let t = 0;

function iddds(e) {
  if (t == 0) {
    /////     store element in local storage   /////////
    let strin = e.id.substring(4, e.id.length);
    localStorage.setItem("productId", strin - 1);
    window.open("../html/productDetails.html", "_self");
  }
  t = 0;
}

/////    chinge heart color    ////////
function hheeartcol(e) {
  if (e.style.color != "red") {
    e.style.color = "red";
  } else {
    e.style.color = "black";
  }

  t = 1;
}
/////    chinge Star color    ////////
function sssta(e) {
  if (e.style.color != "yellow") {
    e.style.color = "yellow";
  } else {
    e.style.color = "black";
  }

  t = 1;
}

////===================== Input Search With Price =============
$(document).ready(function () {
  ///// input event ///
  $("#pricenum").on("input", function () {
    ////pricenum id for input element
    ////get input value
    var filterValue = $(this).val();
    /// iterate for each givent element and make a function on it
    $(".card").each(function () {
      ///get descendants for each element احفاد
      var productPrice = $(this).find(".price").text();
      //conver string to float
      let floatPrice = parseFloat(productPrice);
      let floatInput = parseFloat(filterValue);
      ////check if card price < input price or not
      if (floatPrice <= floatInput) {
        $(this).show();
      } else if (isNaN(floatInput)) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });
});
