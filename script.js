let FeatureProducts = [

  {
    name: "Wooden Train1",
    price: 24.99,
    image: "train.jpg",
    description: "Handcrafted birch train with wheels."
  },
  {
    name: "Wooden Train2",
    price: 24.99,
    image: "train.jpg",
    description: "Handcrafted birch train with wheels."
  },

  {
    name: "Wooden Train3",
    price: 24.99,
    image: "train.jpg",
    description: "Handcrafted birch train with wheels."
  },
  {
    name: "Wooden Train4",
    price: 24.99,
    image: "train.jpg",
    description: "Handcrafted birch train with wheels."
  },
  {
    name: "Wooden Train5",
    price: 24.99,
    image: "train.jpg",
    description: "Handcrafted birch train with wheels."
  },
  {
    name: "Wooden Train6",
    price: 24.99,
    image: "train.jpg",
    description: "Handcrafted birch train with wheels."
  },
  {
    name: "Wooden Train7",
    price: 24.99,
    image: "train.jpg",
    description: "Handcrafted birch train with wheels."
  },
  {
    name: "Wooden Train8",
    price: 24.99,
    image: "train.jpg",
    description: "Handcrafted birch train with wheels."
  }



]

const form = document.getElementById("form");
const result = document.getElementById("result");
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

function search() {
  let s = document.getElementById("sr").value;
  //if s contains "about", "contact", "home", or "shop", go to the page
  /*
  if (s=="about" || s == "contact" ||s=="home" ||  s=="shop" ){
    var pg=  "https://junetoycompfinal.glitch.me/"  + s + ".html" ;
    
    window.location.href=pg;
  }
    //otherwise, tell the user that the page does not exist.
  else{
  
    alert("404 This Page Doesn't Exist");
  
  }
  */
}









//feature items========================================================================
const grid = document.getElementById('featuredproducts') // container for all product cards

// Fail-safe: exit if the roster container is missing


// ----- Function to render the roster -----

//loads the content to the page
document.addEventListener("DOMContentLoaded", () => {

  //if the grid does not exist, an error is displayed to the console
  if (!grid) {
    console.error("Could not find #featuedproducts in the DOM.");
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
        
        
            <div class="col-md-3 mb-4">
                <div class="card">
                  
                  <img src="${p.image}" class="card-img-top" alt="${p.name}" />
                 
                 <div class="card-body">
                    <h5 class="card-title"> ${p.name} </h5>
                    
                    <p class="card-text">
                      ${p.price}
                    </p>
                    
                    
                    
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    
                   <button class="btn-warning" onClick="seeMore('${p.name}-${p.price}')">More Info</button>
               
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

//function is called from the button to display the player's information
function seeMore(productID) {
  // Find the player from your array using the ID
  const product = FeatureProducts.find(p => `${p.name}-${p.price}` === productID);

  if (!product) {
    console.error("Product not found!");
    return;
  }

  // Populate the modal with player data
  //document.getElementById("title").textContent = `${player.firstname} ${player.lastname}`;

  // Show the Bootstrap modal
  //const modal = new bootstrap.Modal(document.getElementById("modal"));
  //modal.show();
}





