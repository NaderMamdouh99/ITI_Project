


    ////post users from api into localstorage
    fetch("/js/Users.json")
    .then((data)=>data.json())
    .then((data)=>{
        console.log(data)
        localStorage.setItem( "Users",JSON.stringify(data))
        
    })

    //  ///post Products from api into localstorage
    //  fetch("JosnFilesProducts/Products.json")
    //  .then((data)=>data.json())
    //  .then((data)=>{
    //      console.log(data)
    //      localStorage.setItem( "Products",JSON.stringify(data))
         
    //  })


    // ///post Carts from api into localstorage
    // fetch("JosnFilesProducts/Carts.json")
    // .then((data)=>data.json())
    // .then((data)=>{
    //     console.log(data)
    //     localStorage.setItem( "Carts",JSON.stringify(data))
        
    // })

 