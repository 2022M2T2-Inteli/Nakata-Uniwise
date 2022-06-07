//PÁGINA DE ATENDIMENTOS

$(document).ready( function() {
    habilitarSimTextInputAtendimento();
});

function habilitarSimTextInputAtendimento(){
    if (document.getElementById("flexRadioDefault2").checked){
        $("#fieldsetDisabled").prop("disabled",false);
    }else{
        $("#fieldsetDisabled").prop("disabled",true);
    }
}

$(document).ready( function() {
    habilitarSimQuandoTextInputAtendimento();
});

function habilitarSimQuandoTextInputAtendimento(){
    if (document.getElementById("flexRadioDefault2.0").checked){
        $("#fieldsetDisabled2").prop("disabled",false);
    }else{
        $("#fieldsetDisabled2").prop("disabled",true);
    }
}

function habilitarSimTextInputAtendimento3(){
    if (document.getElementById("flexRadioDefault3").checked){
        $("#fieldsetDisabled3").prop("disabled",false);
    }else{
        $("#fieldsetDisabled3").prop("disabled",true);
    }
}

function habilitarSimTextInputAtendimento4(){
    if (document.getElementById("inlineCheckbox1").checked){
        $("#fieldsetDisabled4").prop("disabled",false);
    }else{
        $("#fieldsetDisabled4").prop("disabled",true);
    }
}

function habilitarSimTextInputAtendimento5(){
    if (document.getElementById("inlineCheckbox2").checked){
        $("#fieldsetDisabled5").prop("disabled",false);
    }else{
        $("#fieldsetDisabled5").prop("disabled",true);
    }
}

function habilitarSimTextInputAtendimento6(){
    if (document.getElementById("inlineCheckbox3").checked){
        $("#fieldsetDisabled6").prop("disabled",false);
    }else{
        $("#fieldsetDisabled6").prop("disabled",true);
    }
}

function habilitarSimTextInputAtendimento7(){
    if (document.getElementById("inlineCheckbox4").checked){
        $("#fieldsetDisabled7").prop("disabled",false);
    }else{
        $("#fieldsetDisabled7").prop("disabled",true);
    }
}

function habilitarSimTextInputAtendimento8(){
    if (document.getElementById("inlineCheckbox5").checked){
        $("#fieldsetDisabled8").prop("disabled",false);
    }else{
        $("#fieldsetDisabled8").prop("disabled",true);
    }
}

function habilitarSimTextInputAtendimento9(){
    if (document.getElementById("inlineCheckbox6").checked){
        $("#fieldsetDisabled9").prop("disabled",false);
    }else{
        $("#fieldsetDisabled9").prop("disabled",true);
    }
}

function habilitarSimTextInputAtendimento10(){
    if (document.getElementById("inlineCheckbox7").checked){
        $("#fieldsetDisabled10").prop("disabled",false);
    }else{
        $("#fieldsetDisabled10").prop("disabled",true);
    }
}

function habilitarSimTextInputAtendimento11(){
    if (document.getElementById("inlineCheckbox8").checked){
        $("#fieldsetDisabled11").prop("disabled",false);
    }else{
        $("#fieldsetDisabled11").prop("disabled",true);
    }
}

function habilitarSimTextInputAtendimento12(){
    if (document.getElementById("inlineCheckbox9").checked){
        $("#fieldsetDisabled12").prop("disabled",false);
    }else{
        $("#fieldsetDisabled12").prop("disabled",true);
    }
}

function habilitarSimTextInputAtendimento13(){
    if (document.getElementById("inlineCheckbox13").checked){
        $("#fieldsetDisabled13").prop("disabled",false);
    }else{
        $("#fieldsetDisabled13").prop("disabled",true);
    }
}

function habilitarSimTextInputAtendimento14(){
    if (document.getElementById("inlineCheckbox14").checked){
        $("#fieldsetDisabled14").prop("disabled",false);
    }else{
        $("#fieldsetDisabled14").prop("disabled",true);
    }
}

function habilitarSimTextInputAtendimento15(){
    if (document.getElementById("inlineCheckbox15").checked){
        $("#fieldsetDisabled15").prop("disabled",false);
    }else{
        $("#fieldsetDisabled15").prop("disabled",true);
    }
}

function habilitarSimTextInputAtendimento16(){
    if (document.getElementById("inlineCheckbox16").checked){
        $("#fieldsetDisabled16").prop("disabled",false);
        $("#fieldsetDisabled17").prop("disabled",false);
    }else{
        $("#fieldsetDisabled16").prop("disabled",true);
        $("#fieldsetDisabled17").prop("disabled",true);
    }
}

function habilitarSimTextInputAtendimento18(){
    if (document.getElementById("inlineCheckbox18").checked){
        $("#fieldsetDisabled18").prop("disabled",false);
    }else{
        $("#fieldsetDisabled18").prop("disabled",true);
    }
}

function habilitarSimTextInputAtendimento19(){
    if (document.getElementById("flexRadioDefault19").checked){
        $("#fieldsetDisabled19").prop("disabled",true);
    }else{
        $("#fieldsetDisabled19").prop("disabled",false);
    }
}


window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    const datatablesSimple = document.getElementById('datatablesSimple');
    if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple);
    }
});








// INSERIR ATENDIMENTOS


const tableBodyAtendimento = document.querySelector("#table-body-atendimento");

var settingsAtendimento = {
    "url":  "http://127.0.0.1:3081/atendimentoselect",
    "method": "GET",
    "timeout": 0,
};

$.ajax({
    url:  "http://127.0.0.1:3081/atendimentoselect",
    type: 'GET',
    success: data => {
        data.forEach(element => {
            const trr = document.createElement("tr");
        trr.innerHTML = `
        
        <tr>
                <th scope="row">${element.IDAtendimento}</th>
                <td>${element.tituloAtendi}</td>
                <td>${element.observacaoAtendi}</td>
                <td>${element.dataAtendi}</td>
                <td>${element.horaAtendi}</td>
                <td><button class="buttonEdit" onclick="editarAtendimento(${element.IDEncaminhamento})"><i class="bi bi-pencil-fill"></i></button>
                  <button class="buttonDelete" onclick="buttonNewAssAtendi2(${element.IDEncaminhamento})"><i class="bi bi-trash-fill"></i></button>
                  <button class="buttonUpdate" onclick="buttonNewAssAtendi3(${element.IDEncaminhamento})"><i class="bi bi-arrow-up-circle-fill"></i></button>
                </td>
        </tr>

        `
        tableBodyAtendimento.appendChild(trr);
        });
    }
});

function buttonNewAssAtendi() {
    $('#myModalAtendi').modal('show');
}

function fecharModalAtendi() {
    $('#myModalAtendi').modal('hide');
}









// VISUALIZAR ATENDIMENTOS NA TABELA

function salvarAss() {
    const inputTituloAtendimento = document.querySelector("input[name='titulo']").value;
    const inputDescricaoAtendimento = document.querySelector("input[name='data']").value;

    var settingsAtendimento = {
        "url": "http://127.0.0.1:3081/atendimentoinsert",
        "method": "POST",
        "timeout": 0,
        "data": {
            "tituloAtendi": inputTituloAtendimento,
            "observacaoAtendi": inputTituloAtendimento,
            "dataAtendi": inputDescricaoAtendimento,
            "horaAtendi": inputDescricaoAtendimento
        }
      };
      
      $.ajax(settingsAtendimento).done(response => {
          console.log(response)
      });

      console.log("foi")
}






// DELETE ATENDIMENTOS

function buttonNewAssAtendi2(id) {

    console.log("foi")
    const deleteAtend = document.createElement("div");
    deleteAtend.innerHTML = `
    
    <div id="myModalAtendi2"class="modal customizar">
        <div class="modal-dialog" role="document">
        <div class="modal-content customize">
            <div class="modal-body">
            <p>Tem certeza que deseja excluir o atendimento com id ${id}?</p>
            </div>
            <div class="modal-footer">
            <button onclick="deleteAtendimento(${id})" type="button" class="btn btn-primary">Excluir Atendimento</button>
            <button onclick="fecharModalAtendi2()" type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar Exclusão</button>
            </div>
        </div>
        </div>
    </div>

    `

    document.body.appendChild(deleteAtend);

    $('#myModalAtendi2').modal('show');
}

function fecharModalAtendi2() {
    $('#myModalAtendi2').modal('hide');
    $('#myModalAtendi2').remove();
}

function deleteAtendimento(id){

    var settingsAtendi = {
        "url": "http://127.0.0.1:3081/atendimentodelete",
        "method": "POST",
        "timeout": 0,
        "data": {
          "IDAtendimento": id, 
        }
      };
      
      $.ajax(settingsAtendi).done(function (response) {
        console.log(response);
      });
    
}





// UPDATE ATENDIMENTOS

function editarAtendimento(id) {
    const updateAtend = document.createElement("div");
    updateAtend.innerHTML = `
    <div id="myModalAtendi10"class="modal customizar">
        <div class="modal-dialog" role="document">
        <div class="modal-content customize">
            <div class="modal-body">
            <div class="mb-1">
            <label for="exampleInputEmail1" class="form-label"></label>Titulo:
            <div id="displaytt">
            <input onfocusout="disableField(5)" class="editInput" type="text" id="inputEditAtendi1" placeholder="" value=""></input>
            <button onclick="enableField(5)" class="buttonEdi"><i class="bi bi-pencil-fill"></i></button>
            </div>
            </div>

            <div class="modal-body">
            <div class="mb-1">
            <label for="exampleInputEmail1" class="form-label"></label>Titulo:
            <div id="displaytt">
            <input onfocusout="disableField(5)" class="editInput" type="text" id="inputEditAtendi2" placeholder="" value=""></input>
            <button onclick="enableField(5)" class="buttonEdi"><i class="bi bi-pencil-fill"></i></button>
            </div>
            </div>

            <div class="modal-body">
            <div class="mb-1">
            <label for="exampleInputEmail1" class="form-label"></label>Titulo:
            <div id="displaytt">
            <input onfocusout="disableField(5)" class="editInput" type="text" id="inputEditAtendi3" placeholder="" value=""></input>
            <button onclick="enableField(5)" class="buttonEdi"><i class="bi bi-pencil-fill"></i></button>
            </div>
            </div>

            <div class="modal-body">
            <div class="mb-1">
            <label for="exampleInputEmail1" class="form-label"></label>Titulo:
            <div id="displaytt">
            <input onfocusout="disableField(5)" class="editInput" type="text" id="inputEditAtendi4" placeholder="" value=""></input>
            <button onclick="enableField(5)" class="buttonEdi"><i class="bi bi-pencil-fill"></i></button>
            </div>
            </div>
            </div>
            <div class="modal-footer">
            <button onclick="editAtendimento(${id})" type="button" class="btn btn-primary">Confirmar edição</button>
            <button onclick="fecharValAtendi()" type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar edição</button>
            </div>
        </div>
        </div>
    </div>
    `
    document.body.appendChild(updateAtend);
    $('#myModalAtendi10').modal('show');
};
function fecharValAtendi() {
    $('#myModalAtendi10').modal('hide');
    $('#myModalAtendi10').remove();
};
function editAtendimento(id) {
    var EditarOsAtendimentos = document.getElementById('inputEditAtendi1').value;
    var newObservacao = document.getElementById('inputEditAtendi2').value
    var newDataAtendi = document.getElementById('inputEditAtendi3').value
    var newHoraAtendi = document.getElementById('inputEditAtendi4').value
    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:3081/cadastroupdate',
        data: {IDAtendimento: id, tituloAtendi: EditarOsAtendimentos, observacaoAtendi: newObservacao, dataAtendi: newDataAtendi, horaAtendi: newHoraAtendi 
        }
    }).done(function () {
        console.log("aq")
    }).fail(function (msg) {
        //console.log('FAIL');
    }).always(function (msg) {
        //console.log('ALWAYS');
    });
    $('#myModalAtendi10').modal('hide');
    $('#myModalAtendi10').remove();
};




// VISUALIZAR ATENDIMENTOS COM TODOS OS CAMPOS


function buttonNewAssAtendi3(id){


    $.ajax({
        url: "http://127.0.0.1:3081/atendimentoselect",
        type: 'GET',
        success: data => {
         data.forEach(element => {

    const dive = document.createElement("div");
    dive.innerHTML = `
    <div id="myModalAtendi11"class="modal customizar">
        <div class="modal-dialog" role="document">
        <div class="modal-content customize">
            <div class="modal-body">
            <label for="exampleInputEmail1" class="form-label"></label>
            <h3>DADOS DO ATENDIMENTO:</h3>
            <br>
            <div>
                <h4>Título Atendimento:</h4>
                <p class="designer">${element.tituloAtendi}</p>
            </div>
            <br>
             <div>
                <h4>Data do Atendimento:</h4>
                <p class="designer">${element.dataAtendi}</p>
            </div>
            
            </div>
            <div class="modal-footer">
            <button onclick="fecharValAtendi()" type="button" class="btn btn-secondary" data-dismiss="modal">Fechar Visualização</button>
            </div>
        </div>
        </div>
    </div>
    `
    document.body.appendChild(dive);
    $('#myModalAtendi11').modal('show');
         });
        }
});
}
function fecharValAtendi() {
    $('#myModalAtendi11').modal('hide');
    $('#myModalAtendi11').remove();
};

