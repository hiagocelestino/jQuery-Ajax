function consultaCep(){
    var cep = $('#cep').val();
    var url = "https://viacep.com.br/ws/"+ cep +"/json/";
    console.log(url)
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            dados = "";
           for(let [chave, valor] of Object.entries(response)){
               dados += "<p>" + chave + ": " + valor + "<p/>";

           }
            $('#info').html(dados);
        }
    })
}