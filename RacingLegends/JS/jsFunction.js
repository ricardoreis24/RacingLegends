/**
 *
 * @returns {Promise<Array<{ id: string, name: string, description: string }>>}
 */
function getCategorias() {
    var url = "http://ipt-ti2-racinglegends-api.eu-gb.mybluemix.net/api/v1/categories";

    return fetch(url, { headers: { Accept: "application/json" } })
        .then(function (resposta) {
            if (resposta.status === 200) {
                return resposta.json();
            } else {
                return Promise.reject(new Error("Erro ao obter categorias"));
            }
        });

}

//função que recebe o ID de cada categoria para apresentar cada uma das imagens 
function getImagemCat(categoraId) {
    // quando se usa acentos graves(``) em vez de aspas("") utiliza-se ${} para adicionar informação dentro da string
    var url = `http://ipt-ti2-racinglegends-api.eu-gb.mybluemix.net/api/v1/categories/${categoraId}/image`;
    return url;
}


//função para buscar o id do driver
function fetchDrivers(id) {
    var url = "http://ipt-ti2-racinglegends-api.eu-gb.mybluemix.net/api/v1/categories/" + id + "/drivers";
    return (
        fetch(url, { headers: { Accept: "application/json" } })
            .then(function (respostaServidor) {
                // Converter a resposta do servidor em JSON
                return respostaServidor.json();
            })

    );
}

function getImagemPil(pilotoId) {
    // quando se usa acentos graves(``) em vez de aspas("") utiliza-se ${} para adicionar informação dentro da string
    var url = `http://ipt-ti2-racinglegends-api.eu-gb.mybluemix.net/api/v1/drivers/${pilotoId}/image`;
    return url;
}

function fetchDriversDetails(id) {
    var url = "http://ipt-ti2-racinglegends-api.eu-gb.mybluemix.net/api/v1/drivers/" + id;
    return (
        fetch(url, { headers: { Accept: "application/json" } })
            .then(function (respostaServidor) {
                // Converter a resposta do servidor em JSON
                return respostaServidor.json();
            })
        //.then(function(result) {
        //    getDriversDetails(result);
        //})
        //.catch(function(erro) {
        //    console.error(erro);
        //    alert("Lamentamos, mas ocorreu um erro...");
        //})
    );

}