let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bi-search");

closeBtn.addEventListener("click", ()=>{
sidebar.classList.toggle("open");
menuBtnChange();//calling the function(optional)
});

searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
sidebar.classList.toggle("open");
menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
if(sidebar.classList.contains("open")){
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
}else {
    closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
}
}

var map = L.map('map').setView([0, 0], 1)

L.tittleLayer('https://api.maptiler.com/maps/bright/{z}/{x}/{y}.png?key=HdZFsisrWXnYbxg8tdAh')