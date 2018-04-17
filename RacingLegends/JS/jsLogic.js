document.addEventListener('DOMContentLoaded', function main() {
    var xhr = new XMLHttpRequest();
    /**
     * @type {Element}
     */

    xhr.open('GET', 'https://ipt-ti2-racinglegends-api.eu-gb.mybluemix.net/api/v1/ui');
    xhr.responseType = 'json';
    xhr.onload = function () {
        if (xhr.status === 200) {

            init();
        } else {
            console.error('Erro', xhr.status);
        }
    };

    xhr.onerror = function () {
        console.error('Erro');
    };

    xhr.send();

    function init() {
        ecraCategorias();
    }
    // Ficheiro da aplicação

    // 2) 
    function mostraCategorias(categorias) {
        for (var i = 0; i < categorias.length; i++) {
            // Criar elementos HTML, colocá-los no body ou noutro lado qualquer.
            var categoria = categorias[i];
            var catGeral = document.getElementById("categorias");
            var catTitulo = document.createElement("h2");
            catTitulo.textContent = categoria.name;
            catGeral.appendChild(catTitulo);

            // apresentar cada descrição de cada categoria
            var catDesc = document.createElement("h2");
            catDesc.textContent = categoria.description;
            catGeral.appendChild(catDesc);

            //apresentar cada fotografia de cada categoria
            var catImagem = document.createElement("img");
            catImagem.setAttribute('src', getImagemCat(categoria.id));
            catGeral.appendChild(catImagem);
        }
    }

    function mostraPilotos() {

    }

    // 3)
    function ecraCategorias() {
        return getCategorias()
            .then(function (categorias) {
                mostraCategorias(categorias);
            })
            .catch(function (erro) {
                console.error(erro);
            });
    }


})
