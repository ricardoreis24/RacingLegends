function getCategorias() {
    var url = "http://ipt-ti2-racinglegends-api.eu-gb.mybluemix.net/api/v1/categories";

    return fetch(url, { headers: { Accept: 'application/json' } })
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

//função que recebe o id de cada categoria para apresentar os seus pilotos
//É CAPAZ DE ESTAR MAL!!!!!!!
function getPilotos(categoriaId) {
    var url = `http://ipt-ti2-racinglegends-api.eu-gb.mybluemix.net/api/v1/categories/${categoriaId}/drivers`;
    return url;

}