function consultaCep(){
    $('#carregando').show();
    var cep = $('#cep').val();
    var url = "https://viacep.com.br/ws/"+ cep +"/json/";
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