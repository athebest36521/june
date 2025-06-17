function search(){
    let s= document.getElementById("sr").value;
    //if s contains "about", "contact", "home", or "shop", go to the page
    if (s=="about" || s == "contact" ||s=="home" ||  s=="shop"){
      var pg=  "hhttp://127.0.0.1:5500/"  + s + ".html" ;
      window.location.href=pg;
    }
      //otherwise, tell the user that the page does not exist.
    else{
    
      alert("404 This Page Doesn't Exist");
    
    }
  }