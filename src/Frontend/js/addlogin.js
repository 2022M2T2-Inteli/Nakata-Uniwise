$("document").ready(function(){
        
    $("#header").load("menu.html", function() {
        $("#btn").on('click', showmenu);
    });

    $('#teste').on('submit', function(e) {
        // console.log("oi");
        e.preventDefault();
        e.stopPropagation();
    });
    
});

function buttonNewLogin() {
    $('#myModal').modal('show');
}

function fecharModal() {
    $('#myModal').modal('hide');
}

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


// funções 


const tableBody = document.querySelector("#table-body-login");

$.ajax({
    url: "http://127.0.0.1:3094/addloginselect",
    type: 'GET',
    success: data => {
        data.forEach(element => {
            const tr = document.createElement("tr");
        tr.innerHTML = `
        
        <tr>
                <th scope="row">${element.IDlogin}</th>
                <td>${element.nome}</td>
                <td>${element.email}</td>
                <td>
                <button onclick="deleteForm(${element.IDlogin})" class="buttonDelete"><i class="bi bi-trash-fill"></i></button>
                </td>
        </tr>

        `
            tableBody.appendChild(tr);
        });

    }
});




function salvarAss() {

    $('#myModal').modal('hide');

    Swal.fire(
        'Cadastrado!',
        'Login cadastrado',
        'success'
    )

   const Nome = document.getElementById("nome").value;
   const email  = document.getElementById("email").value;
   const senha  = document.getElementById("senha").value;

    var settings = {
        "url": "http://127.0.0.1:3094/logininsert",
        "method": "POST",
        "timeout": 0,
        "data": {

            "nome": Nome,
            "email": email,
            "senha": senha,
        }
      };
      
    $.ajax(settings).done(response => {
        console.log(response)
        // alert("foi");
    });
}


// Deletar Cadastro

function deleteForm(id){

    const divdelete = document.createElement("div");
    divdelete.innerHTML = `
        
        <div id="myModal`+ id +`" class="modal customizar">
            <div class="modal-dialog" role="document">
            <div class="modal-content customize">
                <div class="modal-body">
                <p>Tem certeza que deseja excluir o formulario com id `+ id +`?</p>
                </div>
                <div class="modal-footer">
                <button onclick="deleteAssistido(${id})" type="button" class="btn btn-primary">Excluir Assistido</button>
                <button onclick="fecharModal(${id})" type="button" class="btn btn-secondary">Cancelar Exclusão</button>
                </div>
            </div>
            </div>
        </div>
        `
    
        document.body.appendChild(divdelete);
        $('#myModal'+ id).modal('show');
}

function fecharModal(id){
    $('#myModal' + id).modal('hide');
    $('#myModal' + id).remove();
}

function deleteAssistido(id){
    
    var settings = {
        "url": "http://127.0.0.1:3094/logindelete",
        "method": "POST",
        "timeout": 0,
        "data": {
          "IDlogin": id, 
        }
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
    
}


function searchFilter() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("inputSearchID");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
}
