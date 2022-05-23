$("document").ready(function(){
        
    $("#header").load("menu.html", function() {
        $("#btn").on('click', showmenu);
    });
});

function showmenu(){
    nav.classList.toggle('active');
}

//MENU HAMBURGUER
const btn = document.getElementById('btn')

function menu(event){
    if (event.type == 'touchstart') event.preventDefault()
    const btn = document.getElementById('nav');
    nav.classList.toggle('active');
}

btn.addEventListener('click', menu);
btn.addEventListener('touchstart', menu);


function startNumberCounter() {

    //CONTAGEM NUMEROS HOME
    const animation = document.querySelectorAll(".animation-css-home");

    animation.forEach((animationHome) => {
        animationHome.innerText = '0';

        const updateCounter = () => {
            const target = +animationHome.getAttribute('data-target');
            const c = +animationHome.innerText;

            const increment = target / 600;

            if(c < target){
                animationHome.innerText = `${Math.ceil(c + increment)}`;
                setTimeout(updateCounter, 10);
            }else{
                animationHome.innerText = target;
            }
        };
        updateCounter();
    });
}

let counted = false;

document.addEventListener("scroll", function() {
    let lastKnownScrollPosition = window.scrollY;

    if(lastKnownScrollPosition >= 3170 && !counted) {
        console.log(lastKnownScrollPosition);
        startNumberCounter();
        counted = true;
    } 
})

// SCRIPT PAGINA DE DOAÇÃO
// Script Acordeão
var acordeaoDoacao = document.getElementsByClassName("acordeaoDoacao");
var i;
console.log(acordeaoDoacao.length)
for (i = 0; i < acordeaoDoacao.length; i++) {
  acordeaoDoacao[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var painel = this.nextElementSibling;
    if (painel.style.maxHeight) {
      painel.style.maxHeight = null;
    } else {
      painel.style.maxHeight = painel.scrollHeight + "px";
    }
  });
}

// Script Botoes doação
var buttonA = document.getElementById("buttonVinte");
var buttonB = document.getElementById("buttonCinquenta");
var buttonC = document.getElementById("buttonCem");

buttonA.addEventListener("click", function() {
    this.classList.toggle("buttontst2");
    buttonB.classList.remove("buttontst2")
    buttonC.classList.remove("buttontst2")
});
buttonB.addEventListener("click", function() {
    this.classList.toggle("buttontst2");
    buttonA.classList.remove("buttontst2")
    buttonC.classList.remove("buttontst2")
});
buttonC.addEventListener("click", function() {
    this.classList.toggle("buttontst2");
    buttonA.classList.remove("buttontst2")
    buttonB.classList.remove("buttontst2")
});
// Script Copiar doação
var buttonPix = document.getElementById("buttonPix");
var buttonCaixa = document.getElementById("buttonCaixa");
var buttonPaypal = document.getElementById("buttonPaypal");

buttonPix.addEventListener("click", function() {
this.classList.toggle("buttontst2");
this.innerHTML = "Pix Copiado"
setTimeout(function() {
    buttonPix.classList.toggle("buttontst2");
    buttonPix.innerHTML = "Copiar Pix";
}, 1000)
});

buttonCaixa.addEventListener("click", function() {
this.classList.toggle("buttontst2");
this.innerHTML = "Caixa Copiado"
setTimeout(function() {
    buttonCaixa.classList.toggle("buttontst2");
    buttonCaixa.innerHTML = "Copiar Caixa";
}, 1000)
});

buttonPaypal.addEventListener("click", function() {
this.classList.toggle("buttontst2");
this.innerHTML = "Paypal Copiado"
setTimeout(function() {
    buttonPaypal.classList.toggle("buttontst2");
    buttonPaypal.innerHTML = "Copiar Paypal";
}, 1000)
});
// FIM SCRIPT PAGINA DE DOAÇÃO