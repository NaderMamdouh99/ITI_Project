




$(document).ready(function() {
    ///// input event /// 
    $('#pricenum').on('input', function() {////pricenum id for input element 
        ////get input value 
      var filterValue = $(this).val();
      console.log(filterValue);
        /// iterate for each givent element and make a function on it 
      $('.card').each(function() {
        ///get descendants for each element احفاد
        var productPrice = $(this).find('.price').text();
            //conver string to float
            let floatPrice = parseFloat(productPrice)
            let floatInput = parseFloat(filterValue);
            console.log(floatInput)
            ////check if card price < input price or not 
        if (floatPrice <= floatInput) {
          $(this).show();
        }else if(isNaN(floatInput)){
          $(this).show();
        }
         else {
          $(this).hide();
        }
      });
    });
  });
   


























//////////////////////////
 // if(Number.parseInt(l, 10) > Number.parseInt(h, 10)){
        //  if(Number.parseFloat(integerPrice) < Number.parseFloat(integerInput)){
        // if (+title <=  +filterValue) {
            // console.log("this",this)

            // console.log(Number.parseFloat(title) < Number.parseFloat(filterValue))
            // console.log(Number(title) > Number(filterValue))

////////////////////////

//filter price 

// get data from input price 
// document.getElementById("pricenum").oninput = function(){
//     document.getElementById("pricenum").defaultValue =0;
//     // console.log(this.value)
//     // console.log(typeof this.value)
//     // console.log(document.getElementById("pricenum").defaultValue )
//     // console.log(typeof document.getElementById("pricenum").defaultValue )
//     // if(document.getElementById("pricenum").value === ""){
//     //     console.log("freee")
//     // }


//     if(this.value > 0){
//         // FetchProduct2();
//         FetchProductToPrice(this.value )
//     }else{
    
//     }
// }


// function FetchProductToPrice(MaxPrice) {
//     ///         feching from api      /////////
//     const add = fetch('https://fakestoreapi.com/products')
//         .then((data) => data.json())
//         .then((data) => {
           
//             data.forEach(product => {
//                 // document.getElementById("product-list").innerHTML ="";

//                 if(product.price <= MaxPrice){
//                 CreateCardM2(product);
//             }
//             })
//         });
// }



/////////////////



// // ...

// ////function to fetch products 
// function FetchProductsForPrice(maxPrice) {
//     ///fetch data products from fake api
//     fetch("https://fakestoreapi.com/products")
//         .then((response) => {
//             return response.json();
//         })
//         .then((Poducts) => {
//             console.log(Poducts)
//             for (OneProduct of Poducts) {
//                 CreateCardM2(OneProduct); //call fun that adds item in main div
//                 // createcard(item.image,item.title, item.rating.rate, item.price, item.id);
//             }
//             //filter data by price 
//             filterByPrice(maxPrice); // pass parameter as a maximum price
//         })///end fetch data
// }



// //function to filter data by price
// function filterByPrice(maxPrice) {
//     $('.card').hide(); // hide all

//     ///show elements that equal to or less than 
//     $('.card').filter(function() {
//         var price = parseFloat($(this).find('.price').text().replace('$', ''));
//         console.log(price);
//         console.log(price <= maxPrice);
//         return price <= maxPrice;
//     }).show();
// }

// // ...

// // $(document).ready(function() {
// //     $('#searchButton').on('input', function() {
// //       var filterValue = $(this).val().toLowerCase();
// //       $('.card').each(function() {
// //         var title = $(this).find('.card-title').text().toLowerCase();

        
// //         if (title.indexOf(filterValue) > -1) {
// //           $(this).show();
// //         } else {
// //           $(this).hide();
// //         }
// //       });
// //     });
// //   });
   
