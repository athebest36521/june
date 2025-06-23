//all the lists=======================================
//products
let FeatureProducts = [

  {
    name: "Wooden Train",
    price: "$30.99",
    image: "Little Bird Toy Co Site Photos-20250605T224935Z-1-001/imgs/train1.jpg",
    description: "Handcrafted birch train with wheels."
  },
  {
    name: "Car",
    price: "$20.99",
    image: "Little Bird Toy Co Site Photos-20250605T224935Z-1-001/imgs/car1.jpg",
    description: "Handcrafted birch car with wheels."
  },

  {
    name: "Boat",
    price: "$40.99",
    image: "Little Bird Toy Co Site Photos-20250605T224935Z-1-001/imgs/boat1.jpg",
    description: "Handcrafted birch boat with rudders."
  },
  {
    name: "Plane",
    price: "$50.99",
    image: "Little Bird Toy Co Site Photos-20250605T224935Z-1-001/imgs/plane1.jpg",
    description: "Handcrafted birch plane with wings."
  },
  {
    name: "Blocks",
    price: "$60.99",
    image: "Little Bird Toy Co Site Photos-20250605T224935Z-1-001/imgs/block1.jpg",
    description: "Handcrafted birch blocks for anytime use."
  }
]




//reviews
let reviews = [
  {
    name: "Samantha S.",
    image: "Little Bird Toy Co Site Photos-20250605T224935Z-1-001/imgs/5star.webp",
    review: "Beautiful craftsmanship!",
    rating: 5
  },
  {
    name: "Martha G.",
    image: "Little Bird Toy Co Site Photos-20250605T224935Z-1-001/imgs/5star.webp",
    review: "Beautiful craftsmanship!",
    rating: 5
  },
  {
    name: "Andrew T.",
    image: "Little Bird Toy Co Site Photos-20250605T224935Z-1-001/imgs/5star.webp",
    review: "Beautiful craftsmanship!",
    rating: 5
  },
  {
    name: "Samuel G.",
    image: "Little Bird Toy Co Site Photos-20250605T224935Z-1-001/imgs/5star.webp",
    review: "Beautiful craftsmanship!",
    rating: 5
  }


]

let TopItems = [
  {
    name: "Car",
    price: "$5.99",
    image: "Little Bird Toy Co Site Photos-20250605T224935Z-1-001/imgs/car1.jpg",
    description: "Handcrafted birch car with wheels."
  },
  {
    name: "Plane",
    price: '$10.99',
    image: "Little Bird Toy Co Site Photos-20250605T224935Z-1-001/imgs/plane1.jpg",
    description: "Handcrafted birch plane with wheels and wings."
  },
  {
    name: "Boat",
    price: '$20.99',
    image: "Little Bird Toy Co Site Photos-20250605T224935Z-1-001/imgs/boat1.jpg",
    description: "Handcrafted birch boat with mast, boom, and sail."
  },
  {
    name: "Blocks",
    price: '$25.99',
    image: "Little Bird Toy Co Site Photos-20250605T224935Z-1-001/imgs/block1.jpg",
    description: "Handcrafted birch blocks for playtime anytime!"
  }


]



let specialDeals = [
  {
    name: "Car",
    price: "$5.99",
    image: "Little Bird Toy Co Site Photos-20250605T224935Z-1-001/imgs/car1.jpg",
    description: "Handcrafted birch car with wheels."
  },
  {
    name: "Plane",
    price: '$10.99',
    image: "Little Bird Toy Co Site Photos-20250605T224935Z-1-001/imgs/plane1.jpg",
    description: "Handcrafted birch plane with wheels and wings."
  },
  {
    name: "Boat",
    price: '$20.99',
    image: "Little Bird Toy Co Site Photos-20250605T224935Z-1-001/imgs/boat1.jpg",
    description: "Handcrafted birch boat with mast, boom, and sail."
  },
  {
    name: "Blocks",
    price: '$25.99',
    image: "Little Bird Toy Co Site Photos-20250605T224935Z-1-001/imgs/block1.jpg",
    description: "Handcrafted birch blocks for playtime anytime!"
  }
]


// const form = document.getElementById("form");
// const result = document.getElementById("result");
/*
form.addEventListener("submit", function (e) {
  const formData = new FormData(form);
  e.preventDefault();
  var object = {};
  formData.forEach((value, key) => {
    object[key] = value;
  });
  var json = JSON.stringify(object);
  result.innerHTML = "Please wait...";
 
  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = json.message;
        result.classList.remove("text-gray-500");
        result.classList.add("text-green-500");
      } else {
        console.log(response);
        result.innerHTML = json.message;
        result.classList.remove("text-gray-500");
        result.classList.add("text-red-500");
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 5000);
    });
});
 
*/


// function search() {
//   let s = document.getElementById("sr").value;
//   //if s contains "about", "contact", "home", or "shop", go to the page
//   /*
//   if (s=="about" || s == "contact" ||s=="home" ||  s=="shop" ){
//     var pg=  "https://junetoycompfinal.glitch.me/"  + s + ".html" ;

//     window.location.href=pg;
//   }
//     //otherwise, tell the user that the page does not exist.
//   else{

//     alert("404 This Page Doesn't Exist");

//   }
//   */
// }









//feature items========================================================================
let grid = document.getElementById('featuredproducts') // container for all product cards

// Fail-safe: exit if the roster container is missing


// ----- Function to render the roster -----

//loads the content to the page
document.addEventListener("DOMContentLoaded", () => {

  //if the grid does not exist, an error is displayed to the console
  if (!grid) {
    console.error("Could not find #featuredproducts in the DOM.");
    return;
  }

  grid.innerHTML = ""; // clear current roster

  //iterates the cards from the players list and adds it to the page
  FeatureProducts.forEach((p) => {
    const col = document.createElement("div");
    //col.className = "col-6 col-sm-5"; // responsive grid: 2 per row on mobile, 5 per row on desktop
    col.className = "col-12 col-sm-6 col-md-4 col-lg-3";

    // Inject card HTML using Bootstrap classes
    //content of the card
    col.innerHTML = `
        
        
            <div class="col-md-8 mb-4">
                <div class="card">
                  
                  <img src="${p.image}" class="card-img-top" alt="${p.name}" />
                 
                 <div class="card-body">
                    <h5 class="card-title"> ${p.name} </h5>
                    
                    <p class="card-text">
                      ${p.price}
                    </p>
                    
                    
                    
                    <button class="btn btn-primary" onClick="seeMore('${p.name}-${p.price}', 'topItems')">More Info</button>
               
               <div id='${p.name}-${p.price}' style="display:none">
               
              
               <p class="card-text">
                     ${p.description}
                    </p>
               
               </div>   
                    
                  </div>
                </div>
              </div>    
           `

    // Add the card to the grid
    grid.appendChild(col)
  })
}

);


//Top items========================================================================
let grid2 = document.getElementById('topItems')
document.addEventListener("DOMContentLoaded", () => {
  if (!grid2) {
    console.error("Could not find #topItems in the DOM.");
    return;
  }

  grid2.innerHTML = ""


  TopItems.forEach((p) => {
    const col = document.createElement("div");

    col.className = "col-12 col-sm-6 col-md-4 col-lg-3";

    // Inject card HTML using Bootstrap classes
    //content of the card
    col.innerHTML = `
        
        
            <div class="col-md-8 mb-4">
                <div class="card">
                  
                  <img src="${p.image}" class="card-img-top" alt="${p.name}" />
                 
                 <div class="card-body">
                    <h5 class="card-title"> ${p.name} </h5>
                    
                    <p class="card-text">
                      ${p.price}
                    </p>
                   <button class="btn btn-primary" onClick="featureProducts"('${p.name}-${p.price}', 'topItems')">More Info</button>
               
               <div id='${p.name}-${p.price}' style="display:none">
               
              
               <p class="card-text">
                     ${p.description}
                    </p>
               
               </div>   
                    
                  </div>
                </div>
              </div> `


    grid2.appendChild(col)
  })
});





//function is called from the button to display the player's information
function seeMore(productID, array) {
  // Find the player from your array using the ID
  let product;
  if (array == "featureProducts") {
    product = FeatureProducts.find(p => `${p.name}-${p.price}` === productID);
  }
  else if (array == "topItems") {
    product = TopItems.find(p => `${p.name}-${p.price}` === productID);
  }
  else if (array == "specialDeals") {
    product = specialDeals.find(p => `${p.name}-${p.price}` === productID);
  }

  if (!product) {
    console.error("Product not found!");
    return;
  }

  // Populate the modal with player data
  document.getElementById("title").textContent = `${product.name} ${product.price}`;
  document.getElementById("description").textContent = `${product.description}`;

  // Show the Bootstrap modal
  const modal = new bootstrap.Modal(document.getElementById("modal"));
  modal.show();
}






//populate reviews
const array = document.getElementById('allreviews') // container for all product cards

// Fail-safe: exit if the roster container is missing


// ----- Function to render the roster -----

//loads the content to the page
document.addEventListener("DOMContentLoaded", () => {

  //if the grid does not exist, an error is displayed to the console
  if (!array) {
    console.error("Could not find #reviews in the DOM.");
    return;
  }

  array.innerHTML = ""; // clear current roster

  //iterates the cards from the players list and adds it to the page
  reviews.forEach((p) => {
    const col = document.createElement("div");
    //col.className = "col-6 col-sm-5"; // responsive grid: 2 per row on mobile, 5 per row on desktop
    col.className = "col-12 col-sm-6 col-md-4 col-lg-3";

    // Inject card HTML using Bootstrap classes
    //content of the card
    col.innerHTML = `
        
        
             
        
        
            <div class="col-md-8 mb-4">
                <div class="card">
               
                <img src="${p.image}" class="card-img-top" alt="${p.review}">
               
                 <div class="card-body">
                    <h5 class="card-title" >
                    ${p.name}
                    </h5>
                    
                    <p class="card-text">
                      ${p.review}
                    </p>
                    
                    
                    
                    <button class="btn btn-primary" onClick="moreReviews"('${p.name}-${p.price}', 'topItems')">More Info</button>
                    
                   
               <div id='${p.review}-${p.rating}' style="display:none">
               
              
               <p class="card-text">
                     ${p.rating}
                    </p>
               
               </div>   
                    
                  </div>
                </div>
              </div>
      
           
           `

    // Add the card to the grid
    array.appendChild(col)
  })
}

);






//function is called from the button to display the player's information
function morereviews(reviewID) {
  // Find the player from your array using the ID
  const review = reviews.find(p => `${p.review}-${p.rating}` === reviewID);

  if (!review) {
    console.error("Review not found!");
    return;
  }

  document.getElementById("title").textContent = `${review.name} ${review.rating}`;
  document.getElementById("description").textContent = `${review.review}`;

  // Show the Bootstrap modal
  const modal = new bootstrap.Modal(document.getElementById("modal"));
  modal.show();


}
//
let grid3 = document.getElementById("special-deals")
document.addEventListener("DOMContentLoaded", () => {

  //if the grid does not exist, an error is displayed to the console
  if (!grid3) {
    console.error("Could not find #special deals in the DOM.");
    return;
  }

  grid3.innerHTML = ""; // clear current roster

  //iterates the cards from the list and adds it to the page
  specialDeals.forEach((p) => {
    const col = document.createElement("div");
    col.className = "col-12 col-sm-6 col-md-4 col-lg-3";

    // Inject card HTML using Bootstrap classes
    //content of the card
    col.innerHTML = `
        
        
             
        
        
            <div class="col-md-8 mb-4">
                <div class="card">
               
                <img src="${p.image}" class="card-img-top" alt="${p.review}">
               
                 <div class="card-body">
                    <h5 class="card-title" >
                    ${p.name} - ${p.price}
                    </h5>
                  
                    
                    
                    
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    
                   <button class="btn-warning" onClick="seeMore('${p.name}-${p.price}', 'specialDeals')">More Info</button>
               
               <div id='${p.name}-${p.price}' style="display:none">
              
               
               </div>   
                    
                  </div>
                </div>
              </div>
      
           
           `

    // Add the card to the grid
    grid3.appendChild(col)
  })
}
);