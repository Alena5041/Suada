var elem = document.getElementById("burger");
var menu = document.getElementById("menu");
  elem.addEventListener("click", function(){
    if (menu.style.display === "none") {
       menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  });
