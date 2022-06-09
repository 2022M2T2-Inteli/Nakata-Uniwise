//PÁGINA FICHA DE ABORDAGEM

const { response } = require("express");

$(document).ready( function() {
    habilitarSimTextInput();
});

function habilitarSimTextInput(){
    if (document.getElementById("flexRadioDefault2").checked){
        $("#fieldsetDisabled").prop("disabled",false);
    }else{
        $("#fieldsetDisabled").prop("disabled",true);
    }
}

$(document).ready( function() {
    habilitarSimQuandoTextInput();
});

function habilitarSimQuandoTextInput(){
    if (document.getElementById("flexRadioDefault2.0").checked){
        $("#fieldsetDisabled2").prop("disabled",false);
    }else{
        $("#fieldsetDisabled2").prop("disabled",true);
    }
}

function habilitarSimTextInput3(){
    if (document.getElementById("flexRadioDefault3").checked){
        $("#fieldsetDisabled3").prop("disabled",false);
    }else{
        $("#fieldsetDisabled3").prop("disabled",true);
    }
}

function habilitarSimTextInput4(){
    if (document.getElementById("inlineCheckbox1").checked){
        $("#fieldsetDisabled4").prop("disabled",false);
    }else{
        $("#fieldsetDisabled4").prop("disabled",true);
    }
}

function habilitarSimTextInput5(){
    if (document.getElementById("inlineCheckbox2").checked){
        $("#fieldsetDisabled5").prop("disabled",false);
    }else{
        $("#fieldsetDisabled5").prop("disabled",true);
    }
}

function habilitarSimTextInput6(){
    if (document.getElementById("inlineCheckbox3").checked){
        $("#fieldsetDisabled6").prop("disabled",false);
    }else{
        $("#fieldsetDisabled6").prop("disabled",true);
    }
}

function habilitarSimTextInput7(){
    if (document.getElementById("inlineCheckbox4").checked){
        $("#fieldsetDisabled7").prop("disabled",false);
    }else{
        $("#fieldsetDisabled7").prop("disabled",true);
    }
}

function habilitarSimTextInput8(){
    if (document.getElementById("inlineCheckbox5").checked){
        $("#fieldsetDisabled8").prop("disabled",false);
    }else{
        $("#fieldsetDisabled8").prop("disabled",true);
    }
}

function habilitarSimTextInput9(){
    if (document.getElementById("inlineCheckbox6").checked){
        $("#fieldsetDisabled9").prop("disabled",false);
    }else{
        $("#fieldsetDisabled9").prop("disabled",true);
    }
}

function habilitarSimTextInput10(){
    if (document.getElementById("inlineCheckbox7").checked){
        $("#fieldsetDisabled10").prop("disabled",false);
    }else{
        $("#fieldsetDisabled10").prop("disabled",true);
    }
}

function habilitarSimTextInput11(){
    if (document.getElementById("inlineCheckbox8").checked){
        $("#fieldsetDisabled11").prop("disabled",false);
    }else{
        $("#fieldsetDisabled11").prop("disabled",true);
    }
}

function habilitarSimTextInput12(){
    if (document.getElementById("inlineCheckbox9").checked){
        $("#fieldsetDisabled12").prop("disabled",false);
    }else{
        $("#fieldsetDisabled12").prop("disabled",true);
    }
}

function habilitarSimTextInput13(){
    if (document.getElementById("inlineCheckbox13").checked){
        $("#fieldsetDisabled13").prop("disabled",false);
    }else{
        $("#fieldsetDisabled13").prop("disabled",true);
    }
}

function habilitarSimTextInput14(){
    if (document.getElementById("inlineCheckbox14").checked){
        $("#fieldsetDisabled14").prop("disabled",false);
    }else{
        $("#fieldsetDisabled14").prop("disabled",true);
    }
}

function habilitarSimTextInput15(){
    if (document.getElementById("inlineCheckbox15").checked){
        $("#fieldsetDisabled15").prop("disabled",false);
    }else{
        $("#fieldsetDisabled15").prop("disabled",true);
    }
}

function habilitarSimTextInput16(){
    if (document.getElementById("inlineCheckbox16").checked){
        $("#fieldsetDisabled16").prop("disabled",false);
        $("#fieldsetDisabled17").prop("disabled",false);
    }else{
        $("#fieldsetDisabled16").prop("disabled",true);
        $("#fieldsetDisabled17").prop("disabled",true);
    }
}

function habilitarSimTextInput18(){
    if (document.getElementById("inlineCheckbox18").checked){
        $("#fieldsetDisabled18").prop("disabled",false);
    }else{
        $("#fieldsetDisabled18").prop("disabled",true);
    }
}

function habilitarSimTextInput19(){
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








// INSERIR ASSISTIDOS


const tableBodyAssistidos = document.querySelector("#table-body-assistidos");

var settingss = {
    "url":  "http://127.0.0.1:3081/cadastrousers",
    "method": "GET",
    "timeout": 0,
};

$.ajax({
    url:  "http://127.0.0.1:3081/cadastrousers",
    type: 'GET',
    success: data => {
        data.forEach(element => {
            const trr = document.createElement("tr");
        trr.innerHTML = `
        
        <tr>
                <th scope="row">${element.IDCadastro}</th>
                <td>${element.nomeCad}</td>
                <td>${element.nascimentoCad}</td>
                <td><button class="buttonEdit" onclick="editarAssistidos(${element.IDCadastro})"><i class="bi bi-pencil-fill"></i></button>
                  <button class="buttonDelete" onclick="buttonNewAss2(${element.IDCadastro})"><i class="bi bi-trash-fill"></i></button>
                  <button class="buttonUpdate" onclick="buttonNewAss3(${element.IDCadastro})"><i class="bi bi-arrow-up-circle-fill"></i></button>
                </td>
        </tr>

        `
        tableBodyAssistidos.appendChild(trr);
        });
    }
});

function buttonNewAss() {
    $('#myModal').modal('show');
}

function fecharModal() {
    $('#myModal').modal('hide');
}


// VISUALIZAR ASSISTIDOS NA TABELA

function salvarAss() {
    const inputTituloAssistidos = document.querySelector("input[name='titulo']").value;
    const inputDescricaoAssistidos = document.querySelector("input[name='data']").value;

    var settingss = {
        "url": "http://127.0.0.1:3081/cadastroinsert",
        "method": "POST",
        "timeout": 0,
        "data": {

            "nomeCad": inputTituloAssistidos,
            "nascimentoCad": inputDescricaoAssistidos,
            "chamadoCad": inputTituloAssistidos,
            "documentoCad": inputTituloAssistidos,
            "IDLocais": 6,
            "abrigoCad": inputTituloAssistidos,
            "domPartCad": inputTituloAssistidos,
            "familiaCad": inputTituloAssistidos,
            "attCad": inputTituloAssistidos,
            "cttParenteCad": inputTituloAssistidos,
            "carteiraCad": inputTituloAssistidos,
            "benefCad": inputTituloAssistidos,
            "qualBenefCad": inputTituloAssistidos,

            // "IDCadastro"	INTEGER NOT NULL,
            // 	"nomeCad"	TEXT NOT NULL,
            // 	"chamadoCad"	TEXT NOT NULL,
            // 	"documentoCad"	TEXT NOT NULL,
            // 	"rgDocCad"	NUMERIC,
            // 	"cpfDocCad"	NUMERIC,
            // 	"nascimentoCad"	TEXT,
            // 	"IDLocais"	INTEGER NOT NULL,
            // 	"abrigoCad"	TEXT NOT NULL,
            // 	"domPartCad"	TEXT NOT NULL,
            // 	"IDNumRua"	TEXT,
            // 	"tempRuaCad"	TEXT,
            // 	"IDMotivoCad"	TEXT,
            // 	"tempcidCad"	TEXT,
            // 	"familiaCad"	TEXT NOT NULL,
            // 	"cttParenteCad"	TEXT NOT NULL,
            // 	"attCad"	TEXT NOT NULL,
            // 	"IDAtendeCad"	TEXT,
            // 	"carteiraCad"	TEXT NOT NULL,
            // 	"IDDinheiro"	TEXT,
            // 	"benefCad"	TEXT NOT NULL,
            // 	"qualBenefCad"	TEXT NOT NULL,
            // 	"IDMotivoCad"
            // 	"IDNumRua"
            // 	"IDAtendeCad"
            // 	"IDLocais"
            // 	"IDCadastro"
            
        }
      };
      
      $.ajax(settingss).done(response => {
          console.log(response)
      });

      console.log("foi")
}






// DELETE ASSISTIDOS

function buttonNewAss2(id) {

    console.log("foi")
    const div = document.createElement("div");
    div.innerHTML = `
    
    <div id="myModal2"class="modal customizar">
        <div class="modal-dialog" role="document">
        <div class="modal-content customize">
            <div class="modal-body">
            <p>Tem certeza que deseja excluir o assistido com id ${id}?</p>
            </div>
            <div class="modal-footer">
            <button onclick="deleteAssistido(${id})" type="button" class="btn btn-primary">Excluir Assistido</button>
            <button onclick="fecharModal2()" type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar Exclusão</button>
            </div>
        </div>
        </div>
    </div>

    `

    document.body.appendChild(div);

    $('#myModal2').modal('show');
}

function fecharModal2() {
    $('#myModal2').modal('hide');
    $('#myModal2').remove();
}

function deleteAssistido(id){

    var settings = {
        "url": "http://127.0.0.1:3081/cadastrodelete",
        "method": "POST",
        "timeout": 0,
        "data": {
          "IDCadastro": id, 
        }
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
    
}





// UPDATE ASSISTIDOS

function editarAssistidos(id) {
    const divv = document.createElement("div");
    divv.innerHTML = `
    <div id="myModal10"class="modal customizar">
        <div class="modal-dialog" role="document">
        <div class="modal-content customize">
            <div class="modal-body">
            <label for="exampleInputEmail1" class="form-label"></label>Alteração do Nome:
            <input type="text" class="form-control" name="valorNew" id="EditAss">
            </div>
            <div class="modal-footer">
            <button onclick="editAssistidos(${id})" type="button" class="btn btn-primary">Confirmar edição</button>
            <button onclick="fecharVal()" type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar edição</button>
            </div>
        </div>
        </div>
    </div>
    `
    document.body.appendChild(divv);
    $('#myModal10').modal('show');
};
function fecharVal() {
    $('#myModal10').modal('hide');
    $('#myModal10').remove();
};
function editAssistidos(id) {
    var EditarOsAssistidos = document.getElementById('EditAss').value;
    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:3081/cadastroupdate',
        data: {IDCadastro: id, nomeCad: EditarOsAssistidos},
    }).done(function () {
        console.log("aq")
    }).fail(function (msg) {
        //console.log('FAIL');
    }).always(function (msg) {
        //console.log('ALWAYS');
    });
    $('#myModal10').modal('hide');
    $('#myModal10').remove();
};




// VISUALIZAR ASSISTIDOS COM TODOS OS CAMPOS


function buttonNewAss3(id){


    $.ajax({
        url: "http://127.0.0.1:3081/cadastrousers",
        type: 'GET',
        success: data => {
         data.forEach(element => {

            const dive = document.createElement("div");
            dive.innerHTML = `
            <div id="myModal11"class="modal customizar">
                <div class="modal-dialog" role="document">
                <div class="modal-content customize">
                    <div class="modal-body">
                    <label for="exampleInputEmail1" class="form-label"></label>
                    <h3>DADOS DO ASSISTIDO:</h3>
                    <br>
                    <div>
                        <h4>Nome Completo:</h4>
                        <p class="designer">${element.nomeCad}</p>
                    </div>
                    <br>
                    <div>
                        <h4>Data de Nascimento:</h4>
                        <p class="designer">${element.nascimentoCad}</p>
                    </div>
                    
                    </div>
                    <div class="modal-footer">
                    <button onclick="fecharVal()" type="button" class="btn btn-secondary" data-dismiss="modal">Fechar Visualização</button>
                    </div>
                </div>
                </div>
            </div>
            `
            document.body.appendChild(dive);
            $('#myModal11').modal('show');
         });
        }
});
}
function fecharVal() {
    $('#myModal11').modal('hide');
    $('#myModal11').remove();
};
































