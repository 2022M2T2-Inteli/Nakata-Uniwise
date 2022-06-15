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
                <td><button onclick="editCadastro2(${element.IDCadastro})" class="buttonEdit"><i class="bi bi-pencil-fill"></i></button>
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
        
        <div id="myModal`+ id +`" class="modal customizar">
            <div class="modal-dialog" role="document">
            <div class="modal-content customize">
                <div class="modal-body">
                <p>Tem certeza que deseja excluir o assistido com id `+ id +`?</p>
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

function viewCadastro(id){
    $.ajax({
        url: "http://127.0.0.1:3081/cadastrousers",
        type: 'GET',
        success: data => {
         data.forEach(element => {

            const dive = document.createElement("div");
            dive.innerHTML = `
            <div id="myModal`+ id +`" class="modal customizar">
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
                        <h4>Nome Social:</h4>
                        <p class="designer">${element.chamadoCad}</p>
                    </div>
                    <br>
                    <div>
                        <h4>Possui Documentos:</h4>
                        <p class="designer">${element.docCad}</p>
                    </div>
                    <br>
                    <div>
                        <h4>RG:</h4>
                        <p class="designer">${element.rgCad}</p>
                    </div>
                    <br>
                    <div>
                        <h4>CPF:</h4>
                        <p class="designer">${element.cpfCad}</p>
                    </div>
                    <br>
                    <div>
                        <h4>Data de Nascimento:</h4>
                        <p class="designer">${element.nascimentoCad}</p>
                    </div>
                    <br>
                    <div>
                        <h4>Rua / Locais:</h4>
                        <p class="designer">${element.localCad}</p>
                    </div>
                    <br>
                    <div>
                        <h4>Frequentou/Frequenta algum albergue, abrigo ou Casa de Passagem?</h4>
                        <p class="designer">${element.abrigoCad}</p>
                    </div>
                    <br>
                    <div>
                        <h4>Frequentou/Frequenta algum domicílio particular ?</h4>
                        <p class="designer">${element.domPartCad}</p>
                    </div>
                    <br>
                    <div>
                        <h4>Número de dias na semana que a pessoa em situação de rua costuma utilizar os espaços listados:</h4>
                        <h6>Rua</h6>
                        <p class="designer">${element.ruaVezCad}</p>
                    </div>
                    <br>
                    <div>
                        <h6>Albergue</h6>
                        <p class="designer">${element.albVezCad}</p>
                    </div>
                    <br>
                    <div>
                        <h6>Domicílio Particular</h6>
                        <p class="designer">${element.dompartvezCad}</p>
                    </div>
                    <br>
                    <div>
                        <h6>Outro, Qual?</h6>
                        <p class="designer">${element.dompartQual}</p>
                    </div>
                    <br>
                    <div>
                        <h4>Quanto tempo vive na rua?</h4>
                        <p class="designer">${element.viveRuaCad}</p>
                    </div>
                    <br>
                    <div>
                        <h4>Há quanto tempo mora nesta cidade?</h4>
                        <p class="designer">${element.moraCidaCad}</p>
                    </div>
                    <br>
                    <div>
                        <h4>Vive com sua família na rua?</h4>
                        <p class="designer">${element.viveFamCad}</p>
                    </div>
                    <br>
                    <div>
                        <h4>Tem contato com parente que vive fora da rua?</h4>
                        <p class="designer">${element.parenteCad}</p>
                    </div>
                    <br>
                    <div>
                        <h4>Nos últimos seis meses frequentou ou participou de alguma atividade comunitária?</h4>
                        <p class="designer">${element.attcomCad}</p>
                    </div>
                    <br>
                    <div>
                        <h4>Nos últimos seis meses foi atendido em algum dos lugares abaixo?</h4>
                        <h6>Centro de Referência de Assistência Social (CRAS);</h6>
                        <p class="designer">${element.atendLuCad}</p>
                    </div>
                    <br>
                    <div>
                        <h6>Centro de Referência Especializado da Assistência Social (CREAS);</h6>
                        <p class="designer">${element.centroCad}</p>
                    </div>
                    <br>
                    <div>
                        <h6> Centro de referência para população em situação de rua;</h6>
                        <p class="designer">${element.centrorefCad}</p>
                    </div>
                    <br>
                    <div>
                        <h6>Instituição de acolhimento (albergue/ abrigo/outro);</h6>
                        <p class="designer">${element.instacolhiCad}</p>
                    </div>
                    <br>
                    <div>
                        <h6>Hospital/clínica geral;</h6>
                        <p class="designer">${element.hospiCad}</p>
                    </div>
                    <br>
                    <div>
                        <h4>Alguma vez teve emprego com carteira de trabalho assinada?</h4>
                        <p class="designer">${element.trabaCad}</p>
                    </div>
                    <br>
                    <div>
                        <h4>O que faz para ganhar dinheiro?</h4>
                        <h6>Construção civil;</h6>
                        <p class="designer">${element.dinheiroCad}</p>
                    </div>
                    <br>
                    <div>
                        <h6>Serviços gerais/limpeza;</h6>
                        <p class="designer">${element.dinheiroCad2}</p>
                    </div>
                    <br>
                    <div>
                        <h6>Guardador de carro / flanelinha;</h6>
                        <p class="designer">${element.dinheiroCad3}</p>
                    </div>
                    <br>
                    <div>
                        <h6>Pede dinheiro;</h6>
                        <p class="designer">${element.dinheiroCad4}</p>
                    </div>
                    <br>
                    <div>
                        <h6>Carregador / estivador;</h6>
                        <p class="designer">${element.dinheiroCad5}</p>
                    </div>
                    <br>
                    <div>
                        <h6>Catador de material reciclável;</h6>
                        <p class="designer">${element.dinheiroCad6}</p>
                    </div>
                    <br>
                    <div>
                        <h6>Outro, qual?</h6>
                        <p class="designer">${element.dinheiroCad7}</p>
                    </div>
                    <br>
                    <div>
                        <h4>Recebe algum benefício ou está inserido em algum Programa de Renda?</h4>
                        <p class="designer">${element.benefCad}</p>
                    </div>
                    <br>
                    <div>
                        <h4>Sim, qual?</h4>
                        <p class="designer">${element.qualBenefCad}</p>
                    </div>

                    
                    </div>
                    <div class="modal-footer">
                    <button onclick="closemodal(${id})" type="button" class="btn btn-secondary" data-dismiss="modal">Fechar Visualização</button>
                    </div>
                </div>
                </div>
            </div>
            `

            if (element.IDCadastro == id){
                document.body.appendChild(dive);
                $('#myModal' + id).modal('show');
            }
         });
        }
    });
}

function closemodal(id) {
    $('#myModal' + id).modal('hide');
    $('#myModal' + id).remove();
};


//Update Cadastro

function editCadastro2(id){
    $.ajax({
        url: "http://127.0.0.1:3081/cadastrousers",
        type: 'GET',
        success: data => {
            data.forEach(element => {
                const editarDo = `
                <div id="myModal`+id+`"class="modal customizar">
                <div class="modal-dialog" role="document">
                <div class="modal-content customize">
                    <div class="modal-body">
                    <label for="exampleInputEmail1" class="form-label"></label>
                    <h3>DADOS DO ASSISTIDO:</h3>
                    <br>
                    <div>
                        <h4>Nome Completo:</h4>
                        <input disabled onfocusout="disablitaredit(1)" class="form-control" type="text" id="inputcad1" placeholder="${element.nomeCad}" value="${element.nomeCad}">
                        <button onclick="edit(1)" class="buttonEdit"><i class="bi bi-pencil-fill"></i></button>
                    </div>
                    <br>
                    <div>
                        <h4>Nome Social:</h4>
                        <input disabled onfocusout="disablitaredit(2)" class="form-control" type="text" id="inputcad2" placeholder="${element.chamadoCad}" value="${element.chamadoCad}">
                        <button onclick="edit(2)" class="buttonEdit"><i class="bi bi-pencil-fill"></i></button>
                    </div>
                    <br>
                    <div>
                        <h4>Possui Documentos:</h4>
                        <input disabled onfocusout="disablitaredit(3)" class="form-control" type="text" id="inputcad3" placeholder="${element.docCad}" value="${element.docCad}">
                        <button onclick="edit(3)" class="buttonEdit"><i class="bi bi-pencil-fill"></i></button>
                    </div>
                    <br>
                    <div>
                        <h4>RG:</h4>
                        <input disabled onfocusout="disablitaredit(4)" class="form-control" type="text" id="inputcad4" placeholder="${element.rgCad}" value="${element.rgCad}">
                        <button onclick="edit(4)" class="buttonEdit"><i class="bi bi-pencil-fill"></i></button>
                    </div>
                    <br>
                    <div>
                        <h4>CPF:</h4>
                        <input disabled onfocusout="disablitaredit(5)" class="form-control" type="text" id="inputcad5" placeholder="${element.cpfCad}" value="${element.cpfCad}">
                        <button onclick="edit(5)" class="buttonEdit"><i class="bi bi-pencil-fill"></i></button>
                    </div>
                    <br>
                    <div>
                        <h4>Data de Nascimento:</h4>
                        <input disabled onfocusout="disablitaredit(6)" class="form-control" type="text" id="inputcad6" placeholder="${element.nascimentoCad}" value="${element.nascimentoCad}">
                        <button onclick="edit(6)" class="buttonEdit"><i class="bi bi-pencil-fill"></i></button>
                    </div>
                    <br>
                    <div>
                        <h4>Rua / Locais:</h4>
                        <input disabled onfocusout="disablitaredit(7)" class="form-control" type="text" id="inputcad7" placeholder="${element.localCad}" value="${element.localCad}">
                        <button onclick="edit(7)" class="buttonEdit"><i class="bi bi-pencil-fill"></i></button>
                    </div>
                    <br>
                    <div>
                        <h4>Frequentou/Frequenta algum albergue, abrigo ou Casa de Passagem?</h4>
                        <input disabled onfocusout="disablitaredit(8)" class="form-control" type="text" id="inputcad8" placeholder="${element.abrigoCad}" value="${element.abrigoCad}">
                        <button onclick="edit(8)" class="buttonEdit"><i class="bi bi-pencil-fill"></i></button>
                    </div>
                    <br>
                    <div>
                        <h4>Frequentou/Frequenta algum domicílio particular ?</h4>
                        <input disabled onfocusout="disablitaredit(9)" class="form-control" type="text" id="inputcad9" placeholder="${element.domPartCad}" value="${element.domPartCad}">
                        <button onclick="edit(9)" class="buttonEdit"><i class="bi bi-pencil-fill"></i></button>
                    </div>
                    <br>
                    <div>
                        <h4>Número de dias na semana que a pessoa em situação de rua costuma utilizar os espaços listados:</h4>
                        <h6>Rua</h6>
                        <input disabled onfocusout="disablitaredit(10)" class="form-control" type="text" id="inputcad10" placeholder="${element.ruaVezCad}" value="${element.ruaVezCad}">
                        <button onclick="edit(10)" class="buttonEdit"><i class="bi bi-pencil-fill"></i></button>
                       
                    </div>
                    <br>
                    <div>
                        <h6>Albergue</h6>
                        <input disabled onfocusout="disablitaredit(11)" class="form-control" type="text" id="inputcad11" placeholder="${element.albVezCad}" value="${element.albVezCad}">
                        <button onclick="edit(11)" class="buttonEdit"><i class="bi bi-pencil-fill"></i></button>
                    </div>
                    <br>
                    <div>
                        <h6>Domicílio Particular</h6>
                        <input disabled onfocusout="disablitaredit(12)" class="form-control" type="text" id="inputcad12" placeholder="${element.dompartvezCad}" value="${element.dompartvezCad}">
                        <button onclick="edit(12)" class="buttonEdit"><i class="bi bi-pencil-fill"></i></button>
                    </div>
                    <br>
                    <div>
                        <h6>Outro, Qual?</h6>
                        <input disabled onfocusout="disablitaredit(13)" class="form-control" type="text" id="inputcad13" placeholder="${element.dompartQual}" value="${element.dompartQual}">
                        <button onclick="edit(13)" class="buttonEdit"><i class="bi bi-pencil-fill"></i></button>
                    </div>
                    <br>
                    <div>
                        <h4>Quanto tempo vive na rua?</h4>
                        <input disabled onfocusout="disablitaredit(14)" class="form-control" type="text" id="inputcad14" placeholder="${element.viveRuaCad}" value="${element.viveRuaCad}">
                        <button onclick="edit(14)" class="buttonEdit"><i class="bi bi-pencil-fill"></i></button>
                    </div>
                    <br>
                    <div>
                        <h4>Há quanto tempo mora nesta cidade?</h4>
                        <input disabled onfocusout="disablitaredit(15)" class="form-control" type="text" id="inputcad15" placeholder="${element.moraCidaCad}" value="${element.moraCidaCad}">
                        <button onclick="edit(15)" class="buttonEdit"><i class="bi bi-pencil-fill"></i></button>
                    </div>
                    <br>
                    <div>
                        <h4>Vive com sua família na rua?</h4>
                        <input disabled onfocusout="disablitaredit(16)" class="form-control" type="text" id="inputcad16" placeholder="${element.viveFamCad}" value="${element.viveFamCad}">
                        <button onclick="edit(16)" class="buttonEdit"><i class="bi bi-pencil-fill"></i></button>
                    </div>
                    <br>
                    <div>
                        <h4>Tem contato com parente que vive fora da rua?</h4>
                        <input disabled onfocusout="disablitaredit(17)" class="form-control" type="text" id="inputcad17" placeholder="${element.parenteCad}" value="${element.parenteCad}">
                        <button onclick="edit(17)" class="buttonEdit"><i class="bi bi-pencil-fill"></i></button>
                    </div>
                    <br>
                    <div>
                        <h4>Nos últimos seis meses frequentou ou participou de alguma atividade comunitária?</h4>
                        <input disabled onfocusout="disablitaredit(18)" class="form-control" type="text" id="inputcad18" placeholder="${element.attcomCad}" value="${element.attcomCad}">
                        <button onclick="edit(18)" class="buttonEdit"><i class="bi bi-pencil-fill"></i></button>
                    </div>
                    <br>
                    <div>
                        <h4>Nos últimos seis meses foi atendido em algum dos lugares abaixo?</h4>
                        <h6>Centro de Referência de Assistência Social (CRAS);</h6>
                        <input disabled onfocusout="disablitaredit(19)" class="form-control" type="text" id="inputcad19" placeholder="${element.atendLuCad}" value="${element.atendLuCad}">
                        <button onclick="edit(19)" class="buttonEdit"><i class="bi bi-pencil-fill"></i></button>
                    </div>
                    <br>
                    <div>
                        <h6>Centro de Referência Especializado da Assistência Social (CREAS);</h6>
                        <input disabled onfocusout="disablitaredit(20)" class="form-control" type="text" id="inputcad20" placeholder="${element.centroCad}" value="${element.centroCad}">
                        <button onclick="edit(20)" class="buttonEdit"><i class="bi bi-pencil-fill"></i></button>
                    </div>
                    <br>
                    <div>
                        <h6> Centro de referência para população em situação de rua;</h6>
                        <input disabled onfocusout="disablitaredit(21)" class="form-control" type="text" id="inputcad21" placeholder="${element.centrorefCad}" value="${element.centrorefCad}">
                        <button onclick="edit(21)" class="buttonEdit"><i class="bi bi-pencil-fill"></i></button>
                    </div>
                    <br>
                    <div>
                        <h6>Instituição de acolhimento (albergue/ abrigo/outro);</h6>
                        <input disabled onfocusout="disablitaredit(22)" class="form-control" type="text" id="inputcad22" placeholder="${element.instacolhiCad}" value="${element.instacolhiCad}">
                        <button onclick="edit(22)" class="buttonEdit"><i class="bi bi-pencil-fill"></i></button>
                    </div>
                    <br>
                    <div>
                        <h6>Hospital/clínica geral;</h6>
                        <input disabled onfocusout="disablitaredit(23)" class="form-control" type="text" id="inputcad23" placeholder="${element.hospiCad}" value="${element.hospiCad}">
                        <button onclick="edit(23)" class="buttonEdit"><i class="bi bi-pencil-fill"></i></button>
                    </div>
                    <br>
                    <div>
                        <h4>Alguma vez teve emprego com carteira de trabalho assinada?</h4>
                        <input disabled onfocusout="disablitaredit(24)" class="form-control" type="text" id="inputcad24" placeholder="${element.trabaCad}" value="${element.trabaCad}">
                        <button onclick="edit(25)" class="buttonEdit"><i class="bi bi-pencil-fill"></i></button>
                    </div>
                    <br>
                    <div>
                        <h4>O que faz para ganhar dinheiro?</h4>
                        <h6>Construção civil;</h6>
                        <input disabled onfocusout="disablitaredit(25)" class="form-control" type="text" id="inputcad25" placeholder="${element.dinheiroCad}" value="${element.dinheiroCad}">
                        <button onclick="edit(25)" class="buttonEdit"><i class="bi bi-pencil-fill"></i></button>
                    </div>
                    <br>
                    <div>
                        <h6>Serviços gerais/limpeza;</h6>
                        <input disabled onfocusout="disablitaredit(26)" class="form-control" type="text" id="inputcad26" placeholder="${element.dinheiroCad2}" value="${element.dinheiroCad2}">
                        <button onclick="edit(26)" class="buttonEdit"><i class="bi bi-pencil-fill"></i></button>
                    </div>
                    <br>
                    <div>
                        <h6>Guardador de carro / flanelinha;</h6>
                        <input disabled onfocusout="disablitaredit(27)" class="form-control" type="text" id="inputcad27" placeholder="${element.dinheiroCad3}" value="${element.dinheiroCad3}">
                        <button onclick="edit(27)" class="buttonEdit"><i class="bi bi-pencil-fill"></i></button>
                    </div>
                    <br>
                    <div>
                        <h6>Pede dinheiro;</h6>
                        <input disabled onfocusout="disablitaredit(28)" class="form-control" type="text" id="inputcad28" placeholder="${element.dinheiroCad4}" value="${element.dinheiroCad4}">
                        <button onclick="edit(28)" class="buttonEdit"><i class="bi bi-pencil-fill"></i></button>
                    </div>
                    <br>
                    <div>
                        <h6>Carregador / estivador;</h6>
                        <input disabled onfocusout="disablitaredit(29)" class="form-control" type="text" id="inputcad29" placeholder="${element.dinheiroCad5}" value="${element.dinheiroCad5}">
                        <button onclick="edit(29)" class="buttonEdit"><i class="bi bi-pencil-fill"></i></button>
                    </div>
                    <br>
                    <div>
                        <h6>Catador de material reciclável;</h6>
                        <input disabled onfocusout="disablitaredit(30)" class="form-control" type="text" id="inputcad30" placeholder="${element.dinheiroCad6}" value="${element.dinheiroCad6}">
                        <button onclick="edit(30)" class="buttonEdit"><i class="bi bi-pencil-fill"></i></button>
                    </div>
                    <br>
                    <div>
                        <h6>Outro, qual?</h6>
                        <input disabled onfocusout="disablitaredit(31)" class="form-control" type="text" id="inputcad31" placeholder="${element.dinheiroCad7}" value="${element.dinheiroCad7}">
                        <button onclick="edit(31)" class="buttonEdit"><i class="bi bi-pencil-fill"></i></button>
                    </div>
                    <br>
                    <div>
                        <h4>Recebe algum benefício ou está inserido em algum Programa de Renda?</h4>
                        <input disabled onfocusout="disablitaredit(32)" class="form-control" type="text" id="inputcad32" placeholder="${element.benefCad}" value="${element.benefCad}">
                        <button onclick="edit(32)" class="buttonEdit"><i class="bi bi-pencil-fill"></i></button>
                    </div>
                    <br>
                    <div>
                        <h4>Sim, qual?</h4>
                        <input disabled onfocusout="disablitaredit(33)" class="form-control" type="text" id="inputcad33" placeholder="${element.qualBenefCad}" value="${element.qualBenefCad}">
                        <button onclick="edit(33)" class="buttonEdit"><i class="bi bi-pencil-fill"></i></button>
                    </div>

                    
                    </div>
                    <div class="modal-footer">
                    <button onclick="saveEditCad(${id})" type="button" class="btn btn-primary">Salvar Cadastro</button>
                    <button onclick="closemodal2(${id})" type="button" class="btn btn-secondary" data-dismiss="modal">Descartar Alterações</button>
                    </div>
                </div>
                </div>
            </div>
            `
                // console.log(editarDo);

                if (element.IDCadastro == id){
                    // console.log("entrou");
                    document.getElementById("modalCadastro").innerHTML = editarDo;
                    $('#myModal' + id).modal('show');
                }
      
            });
        }
    });
};

function closemodal2(id) {
    $('#myModal' + id).modal('hide');
    $('#myModal' + id).remove();
};

function edit(number){
    document.getElementById("inputcad" + number).disabled = false;
}

function disablitaredit(number){
    document.getElementById("inputcad" + number).disabled = true;
}

function saveEditCad(id){

    var inputcad1 = document.getElementById('inputcad1').value;
    var inputcad2 = document.getElementById('inputcad2').value;
    var inputcad3 = document.getElementById('inputcad3').value;
    var inputcad4 = document.getElementById('inputcad4').value;
    var inputcad5 = document.getElementById('inputcad5').value;
    var inputcad6 = document.getElementById('inputcad6').value;
    var inputcad7 = document.getElementById('inputcad7').value;
    var inputcad8 = document.getElementById('inputcad8').value;
    var inputcad9 = document.getElementById('inputcad9').value;
    var inputcad10 = document.getElementById('inputcad10').value;
    var inputcad11 = document.getElementById('inputcad11').value;
    var inputcad12 = document.getElementById('inputcad12').value;
    var inputcad13 = document.getElementById('inputcad13').value;
    var inputcad14 = document.getElementById('inputcad14').value;
    var inputcad15 = document.getElementById('inputcad15').value;
    var inputcad16 = document.getElementById('inputcad16').value;
    var inputcad17 = document.getElementById('inputcad17').value;
    var inputcad18 = document.getElementById('inputcad18').value;
    var inputcad19 = document.getElementById('inputcad19').value;
    var inputcad20 = document.getElementById('inputcad20').value;
    var inputcad21 = document.getElementById('inputcad21').value;
    var inputcad22 = document.getElementById('inputcad22').value;
    var inputcad23 = document.getElementById('inputcad23').value;
    var inputcad24 = document.getElementById('inputcad24').value;
    var inputcad25 = document.getElementById('inputcad25').value;
    var inputcad26 = document.getElementById('inputcad26').value;
    var inputcad27 = document.getElementById('inputcad27').value;
    var inputcad28 = document.getElementById('inputcad28').value;
    var inputcad29 = document.getElementById('inputcad29').value;
    var inputcad30 = document.getElementById('inputcad30').value;
    var inputcad31 = document.getElementById('inputcad31').value;
    var inputcad32 = document.getElementById('inputcad32').value;
    var inputcad33 = document.getElementById('inputcad33').value;

    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:3081/cadastroupdate',
        data: {IDCadastro: id, nomeCad: inputcad1, chamadoCad: inputcad2, docCad: inputcad3, rgCad: inputcad4, cpfCad: inputcad5, nascimentoCad: inputcad6, localCad: inputcad7, abrigoCad: inputcad8, domPartCad: inputcad9, ruaVezCad: inputcad10, albVezCad: inputcad11, dompartvezCad: inputcad12,  dompartQual: inputcad13, viveRuaCad: inputcad14, moraCidaCad: inputcad15, viveFamCad: inputcad16, parenteCad: inputcad17, attcomCad: inputcad18, atendLuCad:inputcad19, centroCad: inputcad20, centrorefCad: inputcad21, instacolhiCad: inputcad22, hospiCad: inputcad23, trabaCad: inputcad24, dinheiroCad: inputcad25, dinheiroCad2: inputcad26, dinheiroCad3: inputcad27, dinheiroCad4: inputcad28,  dinheiroCad5: inputcad29, dinheiroCad6: inputcad30, dinheiroCad7: inputcad31, benefCad: inputcad32, qualBenefCad: inputcad33},
    }).done(function () {
        // console.log("aq")
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