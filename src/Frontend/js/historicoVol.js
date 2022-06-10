function newHisVol() {
    $('#exampleModal').modal('show');
}

function fecharModal() {
    $('#exampleModal').modal('hide');
}

const histvoluntarios = document.querySelector("#table-historico-voluntarios");

$.ajax({
    url: "http://127.0.0.1:3081/historicovoluntariosselect",
    type: 'GET',
    success: data => {
        data.forEach(element => {
            const histvol = document.createElement("tr");
        histvol.innerHTML = `
        
        <tr>
                <th scope="row">${element.IDHistorico}</th>
                <td>${element.tituloHisVol}</td>
                <td>${element.dataHisVol}</td>
                <td>${element.duracaoHisVol}</td>
                <td>${element.IDPerfil}</td>
                <td><button onclick="edithistoricovol(${element.IDHistorico})" class="buttonEdit"><i class="bi bi-pencil-fill"></i></button>
                  <button onclick="deletehistoricovol(${element.IDHistorico})" class="buttonDelete"><i class="bi bi-trash-fill"></i></button>
                  <button onclick="viewhistoricovol(${element.IDHistorico})" class="buttonView"><i class="bi bi-eye-fill"></i></button>
                </td>
        </tr>

        `
        histvoluntarios.appendChild(histvol);
        });
    }
});

function saveHisVol() {
    const inputTitulo = document.querySelector("input[name='tituloHisVol']").value;
    const inputData = document.querySelector("input[name='dataHisVol']").value;
    const inputDuracao = document.querySelector("input[name='duracaoHisVol']").value;


    var settings = {
        "url": "http://127.0.0.1:3081/historicovoluntariosinsert",
        "method": "POST",
        "timeout": 0,
        "data": {
            "tituloHisVol": inputTitulo,
            "dataHisVol": inputData,
            "duracaoHisVol": inputDuracao,

        }
      };
      
      $.ajax(settings);
}

function deletehistoricovol(id) {
    const hisvol = document.createElement("div");
    hisvol.innerHTML = `
    <div id="myModal4"class="modal customizar">
        <div class="modal-dialog" role="document">
        <div class="modal-content customize">
            <div class="modal-body">
            <p>Tem certeza que deseja excluir o histórico ${id}?</p>
            </div>
            <div class="modal-footer">
            <button onclick="deletehisvol(${id})" type="button" class="btn btn-primary">Confirmar exclusão</button>
            <button onclick="fecharModall()" type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar exclusão</button>
            </div>
        </div>
        </div>
    </div>
    `
    document.body.appendChild(hisvol);
    $('#myModal4').modal('show');
};

function fecharModall() {
    $('#myModal4').modal('hide');
    $('#myModal4').remove();
};

function deletehisvol(id) {
        $.ajax({
            type: 'POST',
            url: "http://127.0.0.1:3081/historicovoluntariosdelete",
            data: {IDHistoricoVol: id},
        })
    }

function edithistoricovol (id) {
    const divv = document.createElement("div");
    divv.innerHTML = `
    <div id="myModal9"class="modal customizar">
        <div class="modal-dialog" role="document">
        <div class="modal-content customize">
            <div class="modal-body">
            <label for="exampleInputEmail1" class="form-label"></label>Novo Titulo:
            <input type="text" class="form-control" name="valorNew" id="edittt">
            </div>
            <div class="modal-footer">
            <button onclick="editVal(${id})" type="button" class="btn btn-primary">Confirmar edição</button>
            <button onclick="fecharVal()" type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar edição</button>
            </div>
        </div>
        </div>
    </div>
    `
    document.body.appendChild(divv);
    $('#myModal9').modal('show');
};

function fecharVal() {
    $('#myModal9').modal('hide');
    $('#myModal9').remove();
};

function editVal(id) {
    var yr = document.getElementById('edittt').value;
    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:3081/historicovoluntariosupdate',
        data: {IDHistoricoVol: id, tituloHisVol: yr},
    }).done(function () {
        console.log("aq")
    }).fail(function (msg) {
        //console.log('FAIL');
    }).always(function (msg) {
        //console.log('ALWAYS');
    });
    
    $('#myModal9').modal('hide');
    $('#myModal9').remove();
};