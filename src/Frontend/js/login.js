

function login(){
    console.log("hi2");

    var e_mail = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    $.ajax({
        url: "http://127.0.0.1:3094/loginselect",
        type: 'POST',
        data:{email: e_mail, senha: password},
        // data:{email: "giovanna.torres@sou.inteli.edu.br", senha: "123456Teste#"},
        success: data => {
            console.log(data);
            if(data) {
                console.log("Identificou");
                window.location.replace("../páginas_Adm/UserAssistidos.html");
            }
            else{
                alert("Dados incorretos!");
            }
        }
    });
}