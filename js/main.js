function consultaCep(){
    let cep = $('#cep').val();
    let regexCepFul = /^[0-9]{2}.[0-9]{3}-[0-9]{3}$/;
    let regexCep = /^[0-9]{5}-[0-9]{3}$/;
    let regexNum = /^[0-9]{8}$/;

    if(regexCepFul.test(cep)){
        cep = cep.replace('.','').replace('-','');
    }else if(regexCep.test(cep)){
        cep = cep.replace('-', '');
    }else if(!regexNum.test(cep)){
        alert("CEP Inválido!");
        return
    }else if(cep.length!=8){
        alert("CEP Inválido!");
        return
    }

    $('#carregando').show();
    let url = "https://viacep.com.br/ws/"+ cep +"/json/";
    console.log(url)
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            dados = "";
           for(let [chave, valor] of Object.entries(response)){
               dados += "<tr><td>" + chave + "</td><td>" + valor + "</td><tr/>";
           }
            $('#body-table').html(dados);
            $('#carregando').hide();
        }
    });
};