// $(document).ready( function() {
//     habilitarSimTextInput();
// });

// function habilitarSimTextInput(){
//     if (document.getElementById("flexRadioDefault2").checked){
//         $("#fieldsetDisabled").prop("disabled",false);
//     }else{
//         $("#fieldsetDisabled").prop("disabled",true);
//     }
// }


function buttonNewCad(){
    $('#myModal20').modal('show');
}

function fecharModal() {
    $('#myModal20').modal('hide');
}

const tableBody = document.querySelector("#table-body-cadastro");

$.ajax({
    url: "http://127.0.0.1:3081/cadastrousers",
    type: 'GET',
    success: data => {
        data.forEach(element => {
            const tr = document.createElement("tr");
        tr.innerHTML = `
        
        <tr>
                <th scope="row">${element.IDCadastro}</th>
                <td>${element.nomeCad}</td>
                <td>${element.nascimentoCad}</td>
                <td><button onclick="editCadastro(${element.IDCadastro})" class="buttonEdit"><i class="bi bi-pencil-fill"></i></button>
                  <button onclick="deleteCadastro(${element.IDCadastro})" class="buttonDelete"><i class="bi bi-trash-fill"></i></button>
                  <button onclick="viewCadastro(${element.IDCadastro})" class="buttonView"><i class="bi bi-eye-fill"></i></button>
                </td>
        </tr>

        `
            tableBody.appendChild(tr);
        });
    }
});


function salvarAss() {
    
   const nomeCad = document.getElementById("nomeCad").value;
   const chamadoCad  = document.getElementById("chamadoCad").value;
   const docCad  = document.getElementById("docCad").value;
   const rgCad  = document.getElementById("rgCad").value;
   const cpfCad  = document.getElementById("cpfCad").value;
   const nascimentoCad  = document.getElementById("nascimentoCad").value;
   const localCad  = document.getElementById("localCad").value;
   const abrigoCad  = document.getElementById("abrigoCad").value;
   const domPartCad  = document.getElementById("domPartCad").value;
   const ruaVezCad  = document.getElementById("ruaVezCad").value;
   const albVezCad  = document.getElementById("albVezCad").value;
   const dompartvezCad  = document.getElementById("dompartvezCad").value;
   const dompartQual = document.getElementById("dompartQual").value;
   const viveRuaCad  = document.getElementById("viveRuaCad").value;
   const moraCidaCad  = document.getElementById("moraCidaCad").value;
   const viveFamCad  = document.getElementById("viveFamCad").value;
   const parenteCad  = document.getElementById("parenteCad").value;
   const attcomCad  = document.getElementById("attcomCad").value;
   const atendLuCad = document.getElementById("atendLuCad").value;
   const centroCad = document.getElementById("centroCad").value;
   const centrorefCad = document.getElementById("centrorefCad").value;
   const instacolhiCad = document.getElementById("instacolhiCad").value;
   const hospiCad = document.getElementById("hospiCad").value;
   const trabaCad = document.getElementById("trabaCad").value;
   const dinheiroCad = document.getElementById("dinheiroCad").value;
   const dinheiroCad2 = document.getElementById("dinheiroCad2").value;
   const dinheiroCad3 = document.getElementById("dinheiroCad3").value;
   const dinheiroCad4 = document.getElementById("dinheiroCad4").value;
   const dinheiroCad5 = document.getElementById("dinheiroCad5").value;
   const dinheiroCad6 = document.getElementById("dinheiroCad6").value;
   const dinheiroCad7 = document.getElementById("dinheiroCad7").value;
   const benefCad = document.getElementById("benefCad").value;
   const qualBenefCad = document.getElementById("qualBenefCad").value;


    var settings = {
        "url": "http://127.0.0.1:3081/cadastroinsert",
        "method": "POST",
        "timeout": 0,
        "data": {

            "nomeCad": nomeCad,

            "chamadoCad": chamadoCad,

            "docCad": docCad,

            "rgCad": rgCad,

            "cpfCad": cpfCad,

            "nascimentoCad": nascimentoCad,

            "localCad": localCad,

            "abrigoCad": abrigoCad,

            "domPartCad": domPartCad,

            "ruaVezCad": ruaVezCad,

            "albVezCad": albVezCad,

            "dompartvezCad": dompartvezCad,

            "dompartQual": dompartQual,

            "viveRuaCad": viveRuaCad,

            "moraCidaCad": moraCidaCad,

            "viveFamCad": viveFamCad,

            "parenteCad": parenteCad,

            "attcomCad": attcomCad,

            "atendLuCad": atendLuCad,

            "centroCad": centroCad,

            "centrorefCad": centrorefCad,

            "instacolhiCad": instacolhiCad,

            "hospiCad": hospiCad,

            "trabaCad": trabaCad,

            "dinheiroCad": dinheiroCad,

            "dinheiroCad2": dinheiroCad2,

            "dinheiroCad3": dinheiroCad3,

            "dinheiroCad4": dinheiroCad4,

            "dinheiroCad5": dinheiroCad5,

            "dinheiroCad6": dinheiroCad6,

            "dinheiroCad7": dinheiroCad7,

            "benefCad": benefCad,

            "qualBenefCad": qualBenefCad,

        }
      };
      
    $.ajax(settings).done(response => {
        console.log(response)
    });
}


// Deletar Cadastro

function deleteCadastro(id){

    const divdelete = document.createElement("div");
    divdelete.innerHTML = `
        
        <div id="myModal21"class="modal customizar">
            <div class="modal-dialog" role="document">
            <div class="modal-content customize">
                <div class="modal-body">
                <p>Tem certeza que deseja excluir o assistido com id ${id}?</p>
                </div>
                <div class="modal-footer">
                <button onclick="deleteAssistido(${id})" type="button" class="btn btn-primary">Excluir Assistido</button>
                <button onclick="fecharModal21()" type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar Exclusão</button>
                </div>
            </div>
            </div>
        </div>
        `
    
        document.body.appendChild(divdelete);
        $('#myModal21').modal('show');
    
    function fecharModal21() {
        $('#myModal21').modal('hide');
        $('#myModal21').remove();
    }
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


// Visualizar Cadastro Total

function viewCadastro(){
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
                    <button onclick="closemodal()" type="button" class="btn btn-secondary" data-dismiss="modal">Fechar Visualização</button>
                    </div>
                </div>
                </div>
            </div>
            `
            document.body.appendChild(dive);
            $('#myModal23').modal('show');
         });
        }
    });
}

function closemodal() {
    $('#myModal23').modal('hide');
    $('#myModal23').remove();
};


//Update Cadastro

function editCadastro(id){
 
    $.ajax({
        url: "http://127.0.0.1:3081/doacaoselect",
        type: 'GET',
        success: data => {
            data.forEach(element => {
                const editarDo = document.createElement("div");
                editarDo.innerHTML = `
                    <div id="myModa23"class="modal customizar">
                        <div class="modal-dialog" role="document">
                        <div class="modal-content customize">
                            <div class="modal-body">
                            </div>
                            <form>
                                <div class="mb-1">
                                    <label class="form-label"></label>Nome Completo:
                                    <input disabled onfocusout="disableField(1)" class="editInput" type="text" id="inputEdit1" placeholder="${element.nomeCad}" value="${element.nomeCad}" name="nomeCad">
                                </div>
                                <div class="mb-2">
                                    <label class="form-label"></label>Nome Social:
                                    <input disabled onfocusout="disableField(1)" class="editInput" type="text" id="inputEdit1" placeholder="${element.nomeCad}" value="${element.nomeCad}" name="chamadoCad">
                                </div>
                                <div class="mb-3">
                                    <label class="form-label"></label>Possui Documento?
                                    <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"  onclick="habilitarSimTextInput3()" checked>
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        Não
                                    </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" onclick="habilitarSimTextInput3()">
                                        <label class="form-check-label" for="flexRadioDefault2">
                                        Sim, qual?
                                        </label>
                                        <fieldset disabled id="fieldsetDisabled3">
                                            <input type="text" id="textInput" class="form-control" placeholder="RG" id="rgDocCad">
                                            <input type="text" id="textInput" class="form-control" placeholder="CPF" id="cpfDocCad">
                                        </fieldset>
                                    </div>
                                </div>
                                <div class="mb-5">
                                    <label class="form-label"></label>Data Nascimento:
                                    <input  disabled onfocusout="disableField(1)" id="inputEdit1" placeholder="${element.nomeCad}" value="${element.nomeCad}" type="date" class="form-control" id="inputdateCad" name="nascimentoCad">
                                </div>





                                <div class="mb-6">
                                    <div>
                                    <label class="form-label"></label>Rua / Locais:
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" onclick="habilitarSimTextInput4()">
                                        <label class="form-check-label" for="inlineCheckbox1">Marquises e Viadutos</label>
                                        <fieldset disabled id="fieldsetDisabled4">
                                        <input type="text" id="textInput" class="form-control" placeholder="">
                                        </fieldset>
                                    </div>


                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option1" onclick="habilitarSimTextInput5()">
                                        <label class="form-check-label" for="inlineCheckbox1">Frente de prédios privados e públicos</label>
                                        <fieldset disabled id="fieldsetDisabled5">
                                        <input type="text" id="textInput" class="form-control" placeholder="">
                                        </fieldset>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option1" onclick="habilitarSimTextInput6()">
                                        <label class="form-check-label" for="inlineCheckbox1">Parques, praças</label>
                                        <fieldset disabled id="fieldsetDisabled6">
                                        <input type="text" id="textInput" class="form-control" placeholder="">
                                        </fieldset>
                                    </div>

                                    <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox4" value="option1" onclick="habilitarSimTextInput7()">
                                    <label class="form-check-label" for="inlineCheckbox1">Estações de trem, rodoviárias</label>
                                    <fieldset disabled id="fieldsetDisabled7">
                                    <input type="text" id="textInput" class="form-control" placeholder="">
                                    </fieldset>
                                    </div>
                                    <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox5" value="option1" onclick="habilitarSimTextInput8()">
                                    <label class="form-check-label" for="inlineCheckbox1">Margem de rodovias</label>
                                    <fieldset disabled id="fieldsetDisabled8">
                                    <input type="text" id="textInput" class="form-control" placeholder="">
                                    </fieldset>
                                    </div>
                                    <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox6" value="option1" onclick="habilitarSimTextInput9()">
                                    <label class="form-check-label" for="inlineCheckbox1">Construções com áreas internas ocupáveis</label>
                                    <fieldset disabled id="fieldsetDisabled9">
                                    <input type="text" id="textInput" class="form-control" placeholder="">
                                    </fieldset>
                                    </div>
                                    <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox7" value="option1" onclick="habilitarSimTextInput10()">
                                    <label class="form-check-label" for="inlineCheckbox1">Galerias subterrâneas</label>
                                    <fieldset disabled id="fieldsetDisabled10">
                                    <input type="text" id="textInput" class="form-control" placeholder="">
                                    </fieldset>
                                    </div>
                                    <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox8" value="option1" onclick="habilitarSimTextInput11()">
                                    <label class="form-check-label" for="inlineCheckbox1">Casas e prédios abandonados</label>
                                    <fieldset disabled id="fieldsetDisabled11">
                                    <input type="text" id="textInput" class="form-control" placeholder="">
                                    </fieldset>
                                    </div>
                                    <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox9" value="option1" onclick="habilitarSimTextInput12()">
                                    <label class="form-check-label" for="inlineCheckbox1">Outros locais </label>
                                    <fieldset disabled id="fieldsetDisabled12">
                                    <input type="text" id="textInput" class="form-control" placeholder="">
                                    </fieldset>
                                    </div>
                                </div>






                                <br>
                                <div class="mb-7">
                                    <label class="form-label"></label>Frequentou/Frequenta algum albergue, abrigo ou Casa de Passagem?
                                    <input disabled onfocusout="disableField(1)" class="editInput" type="text" id="inputEdit1" placeholder="${element.nomeCad}" value="${element.nomeCad}" id="abrigoCad">
                                </div>
                                <br>
                                <div class="mb-8">
                                    <label class="form-label"></label>Frequentou/Frequenta algum domicílio particular ?<br><p>(Nesse quesito, considere como locais utilizados temporariamente pelo entrevistado para pernoitar, os quais pertencem a outras pessoas)</p>
                                    <input disabled onfocusout="disableField(1)" class="editInput" type="text" id="inputEdit1" placeholder="${element.nomeCad}" value="${element.nomeCad}" id="domPartCad">
                                </div>
                                <div class="mb-9">
                                    <div>
                                    <label class="form-label"></label>Número de dias na semana que a pessoa em situação de rua costuma utilizar os espaços listados:
                                    </div>
                                    <div>
                                    <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox13" value="option1" onclick="habilitarSimTextInput13()">
                                    <label class="form-check-label" for="inlineCheckbox1">Rua</label>
                                    <select class="form-select" aria-label="Default select example" disabled id="fieldsetDisabled13">
                                        <option selected>Selecionar</option>
                                        <option value="1">1 vez</option>
                                        <option value="2">2 vezes</option>
                                        <option value="3">3 vezes</option>
                                        <option value="4">4 vezes</option>
                                        <option value="5">5 vezes</option>
                                    </select>
                                    </div>
                                    </div>
                                    <div>
                                    <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox14" value="option1" onclick="habilitarSimTextInput14()">
                                    <label class="form-check-label" for="inlineCheckbox1">Albergue</label>
                                    <select class="form-select" aria-label="Default select example" disabled id="fieldsetDisabled14">
                                        <option selected>Selecionar</option>
                                        <option value="1">1 vez</option>
                                        <option value="2">2 vezes</option>
                                        <option value="3">3 vezes</option>
                                        <option value="4">4 vezes</option>
                                        <option value="5">5 vezes</option>
                                    </select>
                                    </div>
                                    </div>
                                    <div>
                                    <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox15" value="option1" onclick="habilitarSimTextInput15()">
                                    <label class="form-check-label" for="inlineCheckbox1">Domicílio Particular</label>
                                    <select class="form-select" aria-label="Default select example" disabled id="fieldsetDisabled15">
                                        <option selected>Selecionar</option>
                                        <option value="1">1 vez</option>
                                        <option value="2">2 vezes</option>
                                        <option value="3">3 vezes</option>
                                        <option value="4">4 vezes</option>
                                        <option value="5">5 vezes</option>
                                    </select>
                                    </div>
                                    </div>
                                    <div>
                                    <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox16" value="option1" onclick="habilitarSimTextInput16()">
                                    <label class="form-check-label" for="inlineCheckbox1">Outro, Qual?</label>
                                    <div class="PerguntaX_Cadastro">
                                        <fieldset disabled id="fieldsetDisabled16" class="PerguntaX_Cadastro_1">
                                            <input type="text" id="textInput" class="form-control" placeholder="">
                                        </fieldset>
                                        <br>
                                        <select class="form-select" aria-label="Default select example" disabled id="fieldsetDisabled17">
                                            <option selected>Selecionar</option>
                                            <option value="1">1 vez</option>
                                            <option value="2">2 vezes</option>
                                            <option value="3">3 vezes</option>
                                            <option value="4">4 vezes</option>
                                            <option value="5">5 vezes</option>
                                        </select>
                                    </div>
                                    </div>
                                    </div>
                                </div>

                                <div class="mb-10">
                                    
                                    <label class="form-label"></label>Quanto tempo vive na rua?
                                    <br>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Selecionar</option>
                                        <option value="1">Até seis meses</option>
                                        <option value="2">Entre seis meses e um ano</option>
                                        <option value="3">Entre um e dois anos</option>
                                        <option value="4">Entre dois e cinco anos</option>
                                        <option value="5">Entre cinco e dez anos</option>
                                        <option value="6">Mais de dez anos</option>
                                    </select>
                                </div>
                                <div class="mb-11">
                                    
                                    <div>
                                    <label class="form-label"></label>Quais os principais motivos pelos quais passou a morar na rua, albergue ou outro local?
                                    <br>
                                    </div>
                                    <div class="form-check form-check">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                                        <label class="form-check-label" for="inlineCheckbox1">Perda de moradia</label>
                                    </div>
                                    <div class="form-check form-check">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                                        <label class="form-check-label" for="inlineCheckbox2">Ameaça/ violência</label>
                                    </div>
                                    <div class="form-check form-check">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                                        <label class="form-check-label" for="inlineCheckbox2">Alcoolismo/ drogas</label>
                                    </div>
                                    <div class="form-check form-check">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                                        <label class="form-check-label" for="inlineCheckbox1">Problemas com familiares/ companheiro(a)</label>
                                    </div>
                                    <div class="form-check form-check">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                                        <label class="form-check-label" for="inlineCheckbox2">Desemprego</label>
                                    </div>
                                    <div class="form-check form-check">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                                        <label class="form-check-label" for="inlineCheckbox1">Trabalho</label>
                                    </div>
                                    <div class="form-check form-check">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                                        <label class="form-check-label" for="inlineCheckbox2">Tratamento de saúde</label>
                                    </div>
                                    <div class="form-check form-check">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                                        <label class="form-check-label" for="inlineCheckbox2">Preferência/opção própria</label>
                                    </div>
                                    <div class="form-check form-check">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                                        <label class="form-check-label" for="inlineCheckbox2">Não sabe/não lembra</label>
                                    </div>
                                    <div class="form-check form-check">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                                        <label class="form-check-label" for="inlineCheckbox2">Outro</label>
                                    </div>
                                </div>
                                <div class="mb-12">
                                    <label class="form-label"></label>Há quanto tempo mora nesta cidade?
                                    <br>
                                    <select class="form-select" aria-label="Default select example">
                                    <option selected>Selecionar</option>
                                    <option value="1">Até seis meses</option>
                                    <option value="2">Entre seis meses e um ano</option>
                                    <option value="3">Entre um e dois anos</option>
                                    <option value="4">Entre dois e cinco anos</option>
                                    <option value="5">Entre cinco e dez anos</option>
                                    <option value="6">Mais de dez anos</option>
                                    </select>
                                </div>
                                <div class="mb-13">
                                    <label class="form-label"></label>Vive com sua família na rua?
                                    <br>
                                    <br>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"  onclick="habilitarSimTextInput3()" checked id="familiaCad">
                                        <label class="form-check-label" for="flexRadioDefault1">
                                        Não
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" onclick="habilitarSimTextInput3()" id="familiaCad">
                                        <label class="form-check-label" for="flexRadioDefault2">
                                        Sim
                                        </label>
                                    </div>
                                </div>
                                <div class="mb-14">
                                    <label class="form-label"></label>Tem contato com parente que vive fora da rua?
                                    <br>
                                    <select class="form-select" aria-label="Default select example">
                                    <option selected>Selecionar</option>
                                    <option value="1">Todo dia</option>
                                    <option value="2">Toda semana</option>
                                    <option value="3">Todo mês</option>
                                    <option value="4">Todo ano</option>
                                    <option value="5">Quase Nunca</option>
                                    <option value="6">Nunca</option>
                                    </select>
                                </div>
                                <div class="mb-15">
                                    <label class="form-label"></label>Nos últimos seis meses frequentou ou participou de alguma atividade comunitária?
                                    <br>
                                    <select class="form-select" aria-label="Default select example" id="">
                                    <option selected>Selecionar</option>
                                    <option value="1">Escola</option>
                                    <option value="2">Movimento social</option>
                                    <option value="3">Associação</option>
                                    <option value="4">Cooperativa</option>
                                    <option value="5">Não lembra</option>
                                    <option value="6">Não Respondeu</option>
                                    </select>
                                </div>
                                <div class="mb-16">
                                    <div>
                                    <label class="form-label"></label>Nos últimos seis meses foi atendido em algum dos lugares abaixo?
                                    </div>
                                    <br>
                                    <div>
                                    <div class="form-check form-check">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" id="attCad">
                                        <label class="form-check-label" for="inlineCheckbox1"> Centro de Referência de Assistência Social (CRAS);</label>
                                    </div>
                                    <div class="form-check form-check">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" id="attCad">
                                        <label class="form-check-label" for="inlineCheckbox2">Centro de Referência Especializado da Assistência Social (CREAS);</label>
                                    </div>
                                    <div class="form-check form-check">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" id="attCad">
                                        <label class="form-check-label" for="inlineCheckbox2"> Centro de referência para população em situação de rua;</label>
                                    </div>
                                    <div class="form-check form-check">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" id="attCad">
                                        <label class="form-check-label" for="inlineCheckbox1"> Instituição de acolhimento (albergue/ abrigo/outro);</label>
                                    </div>
                                    <div class="form-check form-check">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" id="attCad">
                                        <label class="form-check-label" for="inlineCheckbox2">Hospital/clínica geral;</label>
                                    </div>
                                    <div class="form-check form-check">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" id="attCad">
                                        <label class="form-check-label" for="inlineCheckbox1">Nenhum.</label>
                                    </div>
                                    </div>
                                </div>
                                <div class="mb-17">
                                    <label class="form-label"></label>Alguma vez teve emprego com carteira de trabalho assinada?
                                    <br>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"  onclick="habilitarSimTextInput3()" checked id="carteiraCad">
                                        <label class="form-check-label" for="flexRadioDefault1">
                                        Não
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" onclick="habilitarSimTextInput3()" id="carteiraCad">
                                        <label class="form-check-label" for="flexRadioDefault2">
                                        Sim
                                        </label>
                                    </div>
                                </div>
                                <div class="mb-18">
                                    <div>
                                    <label class="form-label"></label>O que faz para ganhar dinheiro?
                                    <br>
                                    </div>
                                    <div>
                                    <div class="form-check form-check">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                                    <label class="form-check-label" for="inlineCheckbox1">Construção civil;</label>
                                    </div>
                                    <div class="form-check form-check">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                                    <label class="form-check-label" for="inlineCheckbox2">Serviços gerais/limpeza;</label>
                                    </div>
                                    <div class="form-check form-check">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                                    <label class="form-check-label" for="inlineCheckbox2">Guardador de carro / flanelinha;</label>
                                    </div>
                                    <div class="form-check form-check">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                                    <label class="form-check-label" for="inlineCheckbox1">Pede dinheiro;</label>
                                    </div>
                                    <div class="form-check form-check">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                                    <label class="form-check-label" for="inlineCheckbox2">Carregador / estivador;</label>
                                    </div>
                                    <div class="form-check form-check">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                                    <label class="form-check-label" for="inlineCheckbox1">Catador de material reciclável;</label>
                                    </div>
                                    <div class="form-check form-check">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                                    <label class="form-check-label" for="inlineCheckbox2">Não respondeu;</label>
                                    </div>
                                    <div class="form-check form-check">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox18" value="option1" onclick="habilitarSimTextInput18()">
                                    <label class="form-check-label" for="inlineCheckbox1">Outro, qual?</label>
                                    <fieldset disabled id="fieldsetDisabled18">
                                        <input type="text" id="textInput" class="form-control" placeholder="">
                                    </fieldset>
                                    </div>
                                    </div>
                                </div>
                                <div class="mb-19">
                                    <div>
                                    <label class="form-label"></label>Recebe algum benefício ou está inserido em algum Programa de Renda?
                                    <br>
                                    </div>
                                    <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault19"  onclick="habilitarSimTextInput19()" checked id="benefCad">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        Não
                                    </label>
                                    </div>
                                    <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault19" onclick="habilitarSimTextInput19()" id="benefCad">
                                    <label class="form-check-label" for="flexRadioDefault19">
                                        Sim, qual?
                                    </label>
                                    <fieldset disabled id="fieldsetDisabled19">
                                        <input type="text" id="textInput" class="form-control" placeholder="" id="qualBenefCad">
                                    </fieldset>
                                    </div>
                                </div>
                                </form>
                                <div class="modal-footer">
                                <button onclick="salvarAss()" type="button" class="btn btn-primary">Salvar Cadastro</button>
                                <button onclick="fecharModal()" type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar Cadastro</button>
                                </div>
                        </div>
                        </div>
                    </div>
    `
    document.body.appendChild(editarDo);
    $('#myModa23').modal('show');
            });
        }
    });
};

function fecharVal() {
    $('#myModa23').modal('hide');
    $('#myModa23').remove();
};

function enableField(number){
    document.getElementById("inputEdit" + number).disabled = false;
}

function disableField(number){
    document.getElementById("inputEdit" + number).disabled = true;
}