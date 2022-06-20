// const { tileLayer } = require("leaflet");

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
// MAPA

var revirarIcon = L.icon({
    iconUrl: 'leaf-green.png',
    // shadowUrl: 'leaf-shadow.png',

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
// var map = L.map('map').setView([0, 0], 1)
var map = L.map('map').setView([-23.578811057501508, -46.565881116593985], 30);

L.tileLayer('https://api.maptiler.com/maps/bright/{z}/{x}/{y}.png?key=HdZFsisrWXnYbxg8tdAh', {attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',}).addTo(map);

const REVIRAR = L.marker([-23.578811057501508, -46.565881116593985], {icon: revirarIcon}).addTo(map).bindPopup("<b>Projeto REVIRAR<br/>Rua Nhengaibas, 356 - Água Rasa.");
// L.marker([51.5, -0.09], {icon: greenIcon}).addTo(map);
