
function newEnca() {
    $('#exampleModal').modal('show');
}

function fecharModal() {
    $('#exampleModal').modal('hide');
}

const encaminhamento = document.querySelector("#tabela-encaminhamento");
$.ajax({
    url: "http://127.0.0.1:3081/encaminhamentoselect",
    type: 'GET',
    success: data => {
        data.forEach(element => {
            const encam = document.createElement("tr");
            encam.innerHTML = `
            <tr>
                <th scope="row">${element.IDEncaminhamento}</th>
                <td>${element.servEnca}</td>
                <td>${element.dataEnca}</td>
                <td>${element.obsEnca}</td>
                <td><button onclick="editEnca(${element.IDEncaminhamento})" class="buttonEdit"><i class="bi bi-pencil-fill"></i></button>
                  <button onclick="deleteEnca(${element.IDEncaminhamento})" class="buttonDelete"><i class="bi bi-trash-fill"></i></button>
                  <button onclick="viewEnca(${element.IDEncaminhamento})" class="buttonView"><i class="bi bi-eye-fill"></i></button>
                </td>
        </tr>
            ` 
            encaminhamento.appendChild(encam);
        });
    }
});

function saveEnca() {
    const inputServ = document.querySelector("input[name='servEnca']").value;
    const inputData = document.querySelector("input[name='dataEnca']").value;
    const inputobs = document.querySelector("input[name='obsEnca']").value;


    var settings = {
        "url":"http://127.0.0.1:3081/encaminhamentoinsert",
        "method": "POST",
        "timeout": 0,
        "data": {
            "servEnca": inputServ,
            "dataEnca": inputData,
            "obsEnca": inputobs,
        }
    };

    $.ajax(settings);
    $('#exampleModal').modal('hide');
}

function deleteEnca(id) {
    const encamin = document.createElement("div")
    encamin.innerHTML = `
    <div id="myModal4"class="modal customizar">
        <div class="modal-dialog" role="document">
        <div class="modal-content customize">
            <div class="modal-body">
            <p>Tem certeza que deseja excluir o encaminhamento ${id}?</p>
            </div>
            <div class="modal-footer">
            <button onclick="deleteEnc(${id})" type="button" class="btn btn-primary">Confirmar exclusão</button>
            <button onclick="fecharModall()" type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar exclusão</button>
            </div>
        </div>
        </div>
    </div>
    `
    document.body.appendChild(encamin);
    $('#myModal4').modal('show');
}

function fecharModall() {
    $('#myModal4').modal('hide');
    $('#myModal4').remove();
};

function deleteEnc(id) {
    $.ajax({
        type: 'POST',
        url: "http://127.0.0.1:3081/encaminhamentodelete",
        data: {IdEncaminhamento: id},
    })
    $('#myModal4').modal('hide');
    $('#myModal4').remove();
}

function editEnca(id) {
    const Encaedit = document.createElement("div");
    Encaedit.innerHTML = `
    <div id="myModal45"class="modal customizar">
        <div class="modal-dialog" role="document">
        <div class="modal-content customize">
            <div class="modal-body">
            <label for="exampleInputEmail1" class="form-label"></label>Alteração de Observação:
            <input type="text" class="form-control" name="valorNew" id="obsEnca">
            </div>
            <div class="modal-footer">
            <button onclick="editEnca2(${id})" type="button" class="btn btn-primary">Confirmar edição</button>
            <button onclick="fecharEnca()" type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar edição</button>
            </div>
        </div>
        </div>
    </div>
    `
    document.body.appendChild(Encaedit);
    $('#myModal45').modal('show');
};

function fecharEnca() {
    $('#myModal45').modal('hide');
    $('#myModal45').remove();
};

function editEnca2(id) {
    var gh = document.getElementById('obsEnca').value;
    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:3081/encaminhamentoupdate',
        data: {IdEncaminhamento: id, obsEnca: gh},
    }).done(function () {
        console.log("aq")
    }).fail(function (msg) {
        //console.log('FAIL');
    }).always(function (msg) {
        //console.log('ALWAYS');
    });
    
    $('#myModal45').modal('hide');
    $('#myModal45').remove();
};