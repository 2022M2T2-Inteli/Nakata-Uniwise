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

// PAGINA Doação

function buttonNewAss() {
    $('#myModal').modal('show');
}

function fecharModal() {
    $('#myModal').modal('hide');
}

const tableBodyy = document.querySelector("#table-body-toalha");

$.ajax({
    url: "http://127.0.0.1:3081/selecttoalha",
    type: 'GET',
    success: data => {
        data.forEach(element => {
            const tr = document.createElement("tr");
        tr.innerHTML = `
        
        <tr>
                <th scope="row">${element.IDToalha}</th>
                <td>${element.nomeToalha}</td>
                <td>${element.numeroToalha}</td>
                <td><button onclick="editDoacao(${element.IDToalha})" class="buttonEdit"><i class="bi bi-pencil-fill"></i></button>
                  <button onclick="deleteDoacao(${element.IDToalha})" class="buttonDelete"><i class="bi bi-trash-fill"></i></button>
                </td>
        </tr>

        `
        tableBodyy.appendChild(tr);
        });
    }
});

function salvarAss() {
    const inputTitulo = document.querySelector("input[name='nomeToalha']").value;
    const inputDescricao = document.querySelector("input[name='numeroToalha']").value;


    var settings = {
        "url": "http://127.0.0.1:3081/toalhainsert",
        "method": "POST",
        "timeout": 0,
        "data": {
            "nomeToalha": inputTitulo,
            "numeroToalha": inputDescricao,
        }
      };
      
      $.ajax(settings);
}

function deleteDoacao(id) {
    const div = document.createElement("div");
    div.innerHTML = `
    <div id="myModal`+ id +`"class="modal customizar">
        <div class="modal-dialog" role="document">
        <div class="modal-content customize">
            <div class="modal-body">
            <p>Tem certeza que deseja excluir a toalha com ID ${id}?</p>
            </div>
            <div class="modal-footer">
            <button onclick="deletedoc(${id})" type="button" class="btn btn-primary">Confirmar exclusão</button>
            <button onclick="fecharModall(${id})" type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar exclusão</button>
            </div>
        </div>
        </div>
    </div>
    `
    document.body.appendChild(div);
    $('#myModal' + id).modal('show');
};

function fecharModall(id) {
    $('#myModal' + id).modal('hide');
    $('#myModal' + id).remove();
};

function deletedoc(id) {
        $.ajax({
            type: 'POST',
            url: "http://127.0.0.1:3081/toalhadelete",
            data: {IDToalha: id},
        })
}

function enableField(number){
    console.log("logostoso")
    document.getElementById("inputEdit" + number).disabled = false;
}

function disableField(number){
    document.getElementById("inputEdit" + number).disabled = true;
}

function teste(){
    console.log("log")
}

function editDoacao(id) {
    $.ajax({
        url: "http://127.0.0.1:3081/selecttoalha",
        type: 'GET',
        success: data => {
            data.forEach(element => {
                const editarDo = `
                    <div id="myModal`+id+`"class="modal customizar">
                        <div class="modal-dialog" role="document">
                        <div class="modal-content customize">
                            <div class="modal-body">
                            <div class="mb-1" id="teste23">
                            <label for="exampleInputEmail1" class="form-label"></label>Titulo:
                            <div id="displaytt">
                            <input disabled onfocusout="disableField(1)" class="form-control" type="text" id="inputEdit1" placeholder="${element.nomeToalha}" value="${element.nomeToalha}"></input>
                            <button onclick="enableField(1)" class="buttonEdi"><i class="bi bi-pencil-fill"></i></button>
                            </div>
                            </div>
                            <div class="mb-2">
                            <label for="exampleInputEmail1" class="form-label"></label>Descrição:
                            <div id="displaytt">
                            <input disabled onfocusout="disableField(2)" class="form-control" type="text" id="inputEdit2" placeholder="${element.numeroToalha}" value="${element.numeroToalha}"></input>
                            <button onclick="enableField(2)" class="buttonEdi"><i class="bi bi-pencil-fill"></i></button>
                            </div>
                            </div>
                            </div>
                            <div class="modal-footer">
                            <button onclick="editVal(${id})" type="button" class="btn btn-primary">Confirmar edição</button>
                            <button onclick="fecharVal(${id})" type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar edição</button>
                            </div>
                        </div>
                        </div>
                    </div>
    `
    if(element.IDToalha == id){
        console.log("oi")
        document.getElementById("modal").innerHTML = editarDo;
        $('#myModal' + id).modal('show');
    }
            });
        }
    });
};

function fecharVal(id) {
    $('#myModal' + id).modal('hide');
    $('#myModal' + id).remove();
};

function editVal(id) {
    var edit1 = document.getElementById('inputEdit1').value;
    var edit2 = document.getElementById('inputEdit2').value;

    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:3081/toalhaupdate',
        data: {IDToalha: id, nomeToalha: edit1, numeroToalha: edit2},
    }).done(function () {
        console.log("aq")
    }).fail(function (msg) {
        //console.log('FAIL');
    }).always(function (msg) {
        //console.log('ALWAYS');
    });
    
    $('#myModal' + id).modal('hide');
    $('#myModal' + id).remove();
};

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