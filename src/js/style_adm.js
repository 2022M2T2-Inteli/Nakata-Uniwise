//PÁGINA FICHA DE ABORDAGEM

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


