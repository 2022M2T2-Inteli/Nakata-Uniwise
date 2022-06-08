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

// PARCEIROS ADM DANIEL

for (var i = 0; i < 8; i++) {
    $("#listas-cards-adminstrativo")
        .append(`
        <div class="cards-administrativo texto-card-administrativo col-12 col-md-5 m-2">
            <div>
                <h5 class="texto-ajuda ajuda">Nome do parceiro</h5>
            </div>
            <h5>[Nome do responsável]</h5>
            <p>email: exemplo@exemplo.com.br</p>
            <p>telefone: (11) 1111-1111</p>
            <p>mensagem: "Olá, como posso ajudar hoje?"</p>
        </div>
        `)
};

// VOLUNTARIOS ADM DANIEL
for (var i = 0; i < 8; i++) {
    $("#listas-cards-adminstrativo")
        .append(`
        <div class="cards-administrativo texto-card-administrativo col-12 col-md-5 m-2">
            <div>
                <h5 class="texto-ajuda ajuda">Bazar</h5>
            </div>
            <h5>[Nome do voluntário]</h5>
            <p>email: exemplo@exemplo.com.br</p>
            <p>telefone: (11) 1111-1111</p>
            <p>mensagem: "Olá, gostaria de ajudar com o bazar."</p>
        </div>
        `)
};

//teste//

// Getting all necessary elements from DOM.
const elements = {
    monthToReceiveValueBoxes: document.querySelectorAll(".to-receive-values-box"),
    visibilityControlButtons: document.querySelectorAll("#visibility-control-btn"),
}
// Instancing the resfreshVisibleBoxes function.
function refreshVisibleBoxes() {
    // Getting all month to receive boxes elements and setting its display property according to their classes.
    elements.monthToReceiveValueBoxes.forEach(box => {
        if(box.classList.contains("active")) {
            box.children[1].style.display = "flex";
        } else {
            box.children[1].style.display = "none";
        }
    })
}
// Getting all visibility control buttons.
elements.visibilityControlButtons.forEach(button => {
    // Adding a click event listener to all buttons.
    button.addEventListener("click", function() {
        // Controlling the "active" class in the target month to receive box element.
        if(button.parentNode.parentNode.classList.contains("active")) {
            button.parentNode.parentNode.classList.remove("active")
            button.parentNode.children[1].src = "../icons/arrow-down-circle.svg";
        } else {
            button.parentNode.parentNode.classList.add("active");
            button.parentNode.children[1].src = "../icons/arrow-up-circle.svg";
        }
        // Refreshing the visible boxes.
        refreshVisibleBoxes();
    })
})

// PAGINA Doação

function buttonNewAss() {
    $('#myModal').modal('show');
}

function fecharModal() {
    $('#myModal').modal('hide');
}

const tableBodyy = document.querySelector("#table-body-doacao");

$.ajax({
    url: "http://127.0.0.1:3081/doacaoselect",
    type: 'GET',
    success: data => {
        data.forEach(element => {
            const tr = document.createElement("tr");
        tr.innerHTML = `
        
        <tr>
                <th scope="row">${element.IDDoacao}</th>
                <td>${element.tituloDoacao}</td>
                <td>${element.dataDoacao}</td>
                <td>${element.horarioDoacao}</td>
                <td>${element.valorDoacao}</td>
                <td><button onclick="editDoacao(${element.IDDoacao})" class="buttonEdit"><i class="bi bi-pencil-fill"></i></button>
                  <button onclick="deleteDoacao(${element.IDDoacao})" class="buttonDelete"><i class="bi bi-trash-fill"></i></button>
                  <button onclick="viewDoacao(${element.IDDoacao})" class="buttonView"><i class="bi bi-eye-fill"></i></button>
                </td>
        </tr>

        `
        tableBodyy.appendChild(tr);
        });
    }
});

function salvarAss() {
    const inputTitulo = document.querySelector("input[name='titulo']").value;
    const inputDescricao = document.querySelector("input[name='descricao']").value;
    const inputData = document.querySelector("input[name='data']").value;
    const inputHora = document.querySelector("input[name='horario']").value;
    const inputValor = document.querySelector("input[name='valor']").value;
    const inputCompro = document.querySelector("input[name='compro']").value;


    var settings = {
        "url": "http://127.0.0.1:3081/doacaoinsert",
        "method": "POST",
        "timeout": 0,
        "data": {
            "tituloDoacao": inputTitulo,
            "descricaoDoacao": inputDescricao,
            "dataDoacao": inputData,
            "horarioDoacao": inputHora,
            "valorDoacao": inputValor,
            "comproDoacao": inputCompro,

        }
      };
      
      $.ajax(settings);
}

function deleteDoacao(id) {
    const div = document.createElement("div");
    div.innerHTML = `
    <div id="myModal4"class="modal customizar">
        <div class="modal-dialog" role="document">
        <div class="modal-content customize">
            <div class="modal-body">
            <p>Tem certeza que deseja excluir a doação ${id}?</p>
            </div>
            <div class="modal-footer">
            <button onclick="deletedoc(${id})" type="button" class="btn btn-primary">Confirmar exclusão</button>
            <button onclick="fecharModall()" type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar exclusão</button>
            </div>
        </div>
        </div>
    </div>
    `
    document.body.appendChild(div);
    $('#myModal4').modal('show');
};

function fecharModall() {
    $('#myModal4').modal('hide');
    $('#myModal4').remove();
};

function deletedoc(id) {
        $.ajax({
            type: 'POST',
            url: "http://127.0.0.1:3081/doacaodelete",
            data: {IDDoacao: id},
        })
}

function enableField(number){
    document.getElementById("inputEdit" + number).disabled = false;
}

function disableField(number){
    document.getElementById("inputEdit" + number).disabled = true;
}

function editDoacao(id) {
    $.ajax({
        url: "http://127.0.0.1:3081/doacaoselect",
        type: 'GET',
        success: data => {
            data.forEach(element => {
                const editarDo = document.createElement("div");
                editarDo.innerHTML = `
                    <div id="myModa67"class="modal customizar">
                        <div class="modal-dialog" role="document">
                        <div class="modal-content customize">
                            <div class="modal-body">
                            <div class="mb-1" id="teste23">
                            <label for="exampleInputEmail1" class="form-label"></label>Titulo:
                            <div id="displaytt">
                            <input disabled onfocusout="disableField(1)" class="editInput" type="text" id="inputEdit1" placeholder="${element.tituloDoacao}" value="${element.tituloDoacao}"></input>
                            <button onclick="enableField(1)" class="buttonEdi"><i class="bi bi-pencil-fill"></i></button>
                            </div>
                            </div>
                            <div class="mb-2">
                            <label for="exampleInputEmail1" class="form-label"></label>Descrição:
                            <div id="displaytt">
                            <input disabled onfocusout="disableField(2)" class="editInput" type="text" id="inputEdit2" placeholder="${element.descricaoDoacao}" value="${element.descricaoDoacao}"></input>
                            <button onclick="enableField(2)" class="buttonEdi"><i class="bi bi-pencil-fill"></i></button>
                            </div>
                            </div>
                            <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label"></label>Valor:
                            <div id="displaytt">
                            <input disabled onfocusout="disableField(3)" class="editInput" type="text" id="inputEdit3" placeholder="${element.valorDoacao}" value="${element.valorDoacao}"></input>
                            <button onclick="enableField(3)" class="buttonEdi"><i class="bi bi-pencil-fill"></i></button>
                            </div>
                            </div>
                            <div class="mb-4">
                            <label for="exampleInputEmail1" class="form-label"></label>Data:
                            <div id="displaytt">
                            <input disabled onfocusout="disableField(4)" class="editInput" type="text" id="inputEdit4" placeholder="${element.dataDoacao}" value="${element.dataDoacao}"></input>
                            <button onclick="enableField(4)" class="buttonEdi"><i class="bi bi-pencil-fill"></i></button>
                            </div>
                            </div>
                            <div class="mb-4">
                            <label for="exampleInputEmail1" class="form-label"></label>Horário:
                            <div id="displaytt">
                            <input disabled onfocusout="disableField(5)" class="editInput" type="text" id="inputEdit5" placeholder="${element.horarioDoacao}" value="${element.horarioDoacao}"></input>
                            <button onclick="enableField(5)" class="buttonEdi"><i class="bi bi-pencil-fill"></i></button>
                            </div>
                            </div>
                            <div class="mb-6">
                            <label for="exampleInputEmail1" class="form-label"></label>Comprovante:
                            <div id="displaytt">
                            <input disabled onfocusout="disableField(6)" class="editInput" type="text" id="inputEdit6" placeholder="${element.comproDoacao}" value="${element.comproDoacao}"></input>
                            <button onclick="enableField(6)" class="buttonEdi"><i class="bi bi-pencil-fill"></i></button>
                            </div>
                            </div>
                            </div>
                            <div class="modal-footer">
                            <button onclick="editVal(${id})" type="button" class="btn btn-primary">Confirmar edição</button>
                            <button onclick="fecharVal()" type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar edição</button>
                            </div>
                        </div>
                        </div>
                    </div>
    `
    document.body.appendChild(editarDo);
    $('#myModa67').modal('show');
            });
        }
    });
};

function fecharVal() {
    $('#myModa67').modal('hide');
    $('#myModa67').remove();
};

function editVal(id) {
    var edit1 = document.getElementById('inputEdit1').value;
    var edit2 = document.getElementById('inputEdit2').value;
    var edit3 = document.getElementById('inputEdit3').value;
    var edit4 = document.getElementById('inputEdit4').value;
    var edit5 = document.getElementById('inputEdit5').value;
    var edit6 = document.getElementById('inputEdit6').value;

    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:3081/doacaoupdate',
        data: {IDDoacao: id, tituloDoacao: edit1, descricaoDoacao: edit2, valorDoacao: edit3, dataDoacao: edit4, horarioDoacao: edit5, comproDoacao: edit6},
    }).done(function () {
        console.log("aq")
    }).fail(function (msg) {
        //console.log('FAIL');
    }).always(function (msg) {
        //console.log('ALWAYS');
    });
    
    $('#myModa67').modal('hide');
    $('#myModa67').remove();
};

// TESTE

function viewDoacao(id) {
    $.ajax({
        url: "http://127.0.0.1:3081/doacaoselect",
        type: 'GET',
        success: data => {
            data.forEach(element => {
                const divvv = document.createElement("div");
    divvv.innerHTML = `
    <div id="myModa22"class="modal customizar">
        <div class="modal-dialog" role="document">
        <div class="modal-content customize">
            <div class="modal-body">
            <div class="mb-1">
            <label for="exampleInputEmail1" class="form-label"></label>Titulo:
            <p class="textAA">${element.tituloDoacao}</p>
          </div>
          <div class="mb-2">
            <label for="exampleInputEmail1" class="form-label"></label>Descrição:
            <p class="textAA">${element.descricaoDoacao}</p>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"></label>Valor:
            <p class="textAA">${element.valorDoacao}</p>
          </div>
          <div class="mb-4">
            <label for="exampleInputEmail1" class="form-label"></label>Data:
            <p class="textAA">${element.dataDoacao}</p>
          </div>
          <div class="mb-4">
            <label for="exampleInputEmail1" class="form-label"></label>Horário:
            <p class="textAA">${element.horarioDoacao}</p>
          </div>
          <div class="mb-6">
            <label for="exampleInputEmail1" class="form-label"></label>Comprovante:
            <p class="textAA">${element.comproDoacao}</p>
          </div>
            </div>
            <div class="modal-footer">
            <button onclick="fecharform()" type="button" class="btn btn-secondary" data-dismiss="modal">Fechar formulário</button>
            </div>
        </div>
        </div>
    </div>
    `
    document.body.appendChild(divvv);
    $('#myModa22').modal('show');
            });
        }
    });
};

function fecharform() {
    $('#myModa22').modal('hide');
    $('#myModa22').remove();
};