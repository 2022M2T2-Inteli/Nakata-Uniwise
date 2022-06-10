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


// funções 


const tableBody = document.querySelector("#table-body-form");

$.ajax({
    url: "http://127.0.0.1:3094/formselect",
    type: 'GET',
    success: data => {
        data.forEach(element => {
            const tr = document.createElement("tr");
        tr.innerHTML = `
        
        <tr>
                <th scope="row">${element.IDform}</th>
                <td>${element.Nome}</td>
                <td>${element.TelefoneEmail}</td>
                <td>${element.IDFuncao}</td>
                <td>
                  <button onclick="deleteAbo(${element.IDform})" class="buttonDelete"><i class="bi bi-trash-fill"></i></button>
                </td>
        </tr>

        `
            console.log(tableBody);
            tableBody.appendChild(tr);
        });
    }
});


function salvarAssAbo() {

    alert("Formulário enviado com sucesso!");

   const Nome = document.getElementById("Nome").value;
   const TelefoneEmail  = document.getElementById("TelefoneEmail").value;
   const IDFuncao  = document.getElementById("IDFuncao").value;

    var settings = {
        "url": "http://127.0.0.1:3094/forminsert",
        "method": "POST",
        "timeout": 0,
        "data": {

            "Nome": Nome,
            "TelefoneEmail": TelefoneEmail,
            "IDFuncao": IDFuncao,
        }
      };
      
    $.ajax(settings).done(response => {
        console.log(response)
    });
}


// Deletar Cadastro

function deleteAbo(id){

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
        "url": "http://127.0.0.1:3094/formdelete",
        "method": "POST",
        "timeout": 0,
        "data": {
          "IDform": id, 
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


