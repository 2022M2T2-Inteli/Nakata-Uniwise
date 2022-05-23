let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

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


// MARIANA SCRIPT

for (var i = 0; i < 4; i++) {
    $("#programação-eventos")
        .append(`<div class="cards-programação col-12 col-md-5 m-2">
    <div class="texto-card-programação" >
        <h4>Sexta-Feira 03/06/2022</h4>
        <h5>Brecho Aberto</h5>
        <P>descrição do evento</P>
        <p> Abertura a comunidade | Privado</p>
    </div>
</div>`)
};

for (var i = 0; i < 3; i++) {
    $("#programação-eventos-2")
        .append(`<div class="cards-programação col-12 col-md-5 m-2">
    <div class="texto-card-programação" >
        <h4>Quarta-Feira 20/07/2022</h4>
        <h5>Laboratório de comidas típicas</h5>
        <P>descrição do evento</P>
        <p> Abertura a comunidade | Privado</p>
    </div>
</div>`)
};