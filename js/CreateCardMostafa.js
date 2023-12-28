function cardcreator() {
    const add = fetch('https://fakestoreapi.com/products')
        .then((data) => data.json())
        .then((data) => {
            console.log(data)
            data.forEach(d => {
                createcard(d.image, d.title, d.rating.rate, d.price, d.id, d.category);
            }

            )
        }

        );

    //  card creating function  //
    ///used in FilterPrice
     function createcard(imgsrc, title, rating, price, id, category) {

        const plus = document.querySelector(".addproducts");


        let cardcode = `
                        <div class="card ${category}" onclick="ids(this)" style="width:15rem;display: inline-block;">
                          <i id="heart" class="fa-solid fa-heart fa-2xl" ></i>
                         <br><br>
                         <img id ="cardimg" src=${imgsrc} style="width:100px;height:150px">
                        <div class="card-body">
                            <h4 class="card-title " style="height:180px;" >
                            ${title}
                            </h4>
                            <div id="exp" class="badges bg-warning " >express</div>

                                <div id="str" class="badges bg-success">
                                    ${rating}<i id="star" class="fa-solid fa-star"></i>
                                </div>
                                <br><br>
                                <div id="ex" class="badges bg-success price">$ ${price}</div>
                        </div>
                        </div>`
        //        adding cards                 //

        plus.innerHTML += cardcode;
    }
}

function ids(e) {
    let strin = e.id.substring(4, e.id.ength)
    localStorage.setItem("productId", strin)
   

}

///////onload window
window.addEventListener("load", function () {
    cardcreator();
})
