$(function () {
    $("#tabela_cep").hide();
})

function consultarCep() {
    var confirma_dados = parseInt(document.getElementById("cep_info").value);
    if (!confirma_dados || confirma_dados == "") {
        alert("Por favor, preencha os dados corretamente!");
    } else {
        var cep = document.getElementById("cep_info").value;
        var url = "https://viacep.com.br/ws/" + cep.toString() + "/json/";
        $.ajax({
            url: url,
            type: "GET",
            success: function (response) {
                $("#cep").html(response.cep);
                $("#logradouro").html(response.logradouro);
                $("#complemento").html(response.complemento);
                $("#bairro").html(response.bairro);
                $("#localidade").html(response.localidade);
                $("#uf").html(response.uf);
                $("#ibge").html(response.ibge);
                $("#gia").html(response.gia);
                $("#ddd").html(response.ddd);
                $("#siafi").html(response.siafi);
                $("#tabela_cep").show();
            }
        })
    }
}