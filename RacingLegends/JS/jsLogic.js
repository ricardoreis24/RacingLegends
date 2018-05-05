document.addEventListener("DOMContentLoaded",
    function main() {
        function init() {
            ecraCategorias();
        }

        init();

        // 2)
        /**
         *
         *
         * @param {Array<{ id: string, name: string, description: string }>} categorias
         */
        function mostraCategorias(categorias) {
            for (var i = 0; i < categorias.length; i++) {
                var template = document
                    .querySelector("#categorias-template")
                    .cloneNode(true);
                template.removeAttribute("id");

                var div = document.createElement("div");
                div.setAttribute("class", "card border-dark");
                template.appendChild(div);

                // Criar elementos HTML, colocá-los no body ou noutro lado qualquer.
                var div1 = document.createElement("div");
                div1.setAttribute("class", "card-header bg-dark text-light");
                div.appendChild(div1);

                let categoria = categorias[i];
                var catTitulo = document.createElement("h5");
                catTitulo.setAttribute("class", "m-0");
                catTitulo.textContent = categoria.name;
                div1.appendChild(catTitulo);

                //apresentar cada fotografia de cada categoria
                var catImagem = document.createElement("img");
                catImagem.setAttribute("src", getImagemCat(categoria.id));
                catImagem.setAttribute(
                    "class",
                    "img-fluid card-img w-100 d-block rounded-0"
                );
                catImagem.setAttribute("style", "height: 150px");

                div.appendChild(catImagem);

                // apresentar cada descrição de cada categoria
                var div2 = document.createElement("div");
                div2.setAttribute("class", "card-body");
                div.appendChild(div2);
                var catDesc = document.createElement("p");
                catDesc.setAttribute("class", "card-text");
                catDesc.textContent = categoria.description;
                div2.appendChild(catDesc);

                var div3 = document.createElement("div");
                div3.setAttribute("class", "d-flex card-footer");
                div.appendChild(div3);

                var divBt = document.createElement("button");
                var textoBt = document.createTextNode("Click For More");
                divBt.setAttribute("class", "btn btn-dark btn-sm");
                divBt.setAttribute("type", "button");
                divBt.addEventListener("click",
                    function () {
                        fetchDrivers(categoria.id)
                            .then(function (result) {
                                var modal = document.querySelector("#listaCategorias");
                                modal.classList.add("hidden");
                                mostrarPilotos(result);
                            })
                            .catch(function (erro) {
                                console.error(erro);
                                alert("Lamentamos, mas ocorreu um erro...");
                            });
                    });
                divBt.appendChild(textoBt);
                div3.appendChild(divBt);
                document.getElementById("listaCategorias").appendChild(template);
            }
        }

        //Pilotos

        function mostrarPilotos(arrayDrivers) {
            console.log("pilotos!", arrayDrivers);
            // Mostrar div pilotos

            for (var i = 0; i < arrayDrivers.length; i++) {
                var template = document
                    .querySelector("#categorias-template")
                    .cloneNode(true);
                template.removeAttribute("id");

                var divP = document.createElement("div");
                divP.setAttribute("class", "card border-dark");
                template.appendChild(divP);

                // Criar elementos HTML, colocá-los no body ou noutro lado qualquer.
                var divP1 = document.createElement("div");
                divP1.setAttribute("class", "card-header bg-dark text-light");
                divP.appendChild(divP1);

                let piloto = arrayDrivers[i];
                var pTit = document.createElement("h5");
                pTit.setAttribute("class", "m-0");
                pTit.textContent = piloto.name;
                divP1.appendChild(pTit);

                //apresentar cada fotografia de cada categoria
                var pImagem = document.createElement("img");
                pImagem.setAttribute("src", getImagemPil(piloto.id));
                pImagem.setAttribute(
                    "class",
                    "img-fluid card-img w-100 d-block rounded-0"
                );
                pImagem.setAttribute("style", "height: 350px");

                divP.appendChild(pImagem);

                var divP2 = document.createElement("div");
                divP2.setAttribute("class", "d-flex card-footer");
                divP.appendChild(divP2);

                var divPbt = document.createElement("button");
                var textoPbt = document.createTextNode("Click For More");
                divPbt.setAttribute("class", "btn btn-dark btn-sm");
                divPbt.setAttribute("type", "button");
                divPbt.addEventListener("click",
                    function () {
                        fetchDriversDetails(piloto.id)
                            .then(function (result) {
                                var modal = document.querySelector("#listaPiloto");
                                modal.classList.add("hidden");

                                mostrarDetalhes(result);
                            })
                            .catch(function (erro) {
                                console.error(erro);
                                alert("Lamentamos, mas ocorreu um erro...");
                            });

                        console.log(fetchDriversDetails);
                    });
                divPbt.appendChild(textoPbt);
                divP2.appendChild(divPbt);
                document.getElementById("listaPiloto").appendChild(template);
            }
        }

        function mostrarDetalhes(driver) {
            // debugger;
            let piloto = driver;

            var template1 = document.createElement("div");
            template1.setAttribute("class", "col");

            var divD = document.createElement("div");
            divD.setAttribute("class", "card border-dark");
            template1.appendChild(divD);

            var divD1 = document.createElement("div");
            divD1.setAttribute("class", "card-header bg-dark text-light");
            divD.appendChild(divD1);

            var nomeD = document.createElement("h5");
            nomeD.setAttribute("class", "m-0");
            nomeD.textContent = piloto.name;
            divD1.appendChild(nomeD);

            var divD2 = document.createElement("div");
            divD2.setAttribute("class", "row");
            divD.appendChild(divD2);

            var divD3 = document.createElement("div");
            divD3.setAttribute("class", "col-md-6");
            divD2.appendChild(divD3);

            var imgD = document.createElement("img");
            imgD.setAttribute("src", getImagemPil(piloto.id));
            imgD.setAttribute("style", "width: 450px");
            divD3.appendChild(imgD);

            var divD4 = document.createElement("div");
            divD4.setAttribute("class", "col-md-6");
            divD4.setAttribute("style", 'padding-right: 30px; margin-left: -4.5%');
            divD2.appendChild(divD4);

            if (piloto.nickname == null) {
                piloto.nickname = " Not cool enough for a nickname, sorry :(";
            }

            var br = document.createElement("h5");
            br.textContent = " ";
            divD4.appendChild(br);

            var nick = document.createElement("h5");
            nick.textContent = "Nick: " + piloto.nickname;
            divD4.appendChild(nick);

            if (piloto.death_date == null) {
                piloto.death_date = "JK he's still alive, fam.";
            }

            var date = document.createElement("h5");
            date.textContent = "Born: " + piloto.birth_date + " | Died: " + piloto.death_date;
            divD4.appendChild(date);

            var firstVic = document.createElement("h5");
            firstVic.textContent = "First Victory: " + piloto.records.first_race_win;
            divD4.appendChild(firstVic);

            var racesWon = document.createElement("h5");
            racesWon.textContent = "Races won: " + piloto.records.race_victories;
            divD4.appendChild(racesWon);

            var champWon = document.createElement("h5");
            champWon.textContent = "Championships won: " + piloto.records.championship_victories;
            divD4.appendChild(champWon);
            var br1 = document.createElement("br");
            divD4.appendChild(br1);
            var subt = document.createElement("h5");
            subt.textContent = "Small Description fo yall: ";
            divD4.appendChild(subt);

            var desc = document.createElement("p");
            desc.textContent = piloto.introduction;
            desc.setAttribute("style", 'font-size: 13px; text-align: justify');
            divD4.appendChild(desc);

            var divD5 = document.createElement("div");
            divD5.setAttribute("class", "d-flex card-footer");
            divD.appendChild(divD5);

            var divD6 = document.createElement("div");
            divD6.setAttribute("class", "d-flex card-footer");
            divD.appendChild(divD6);

            var subt2 = document.createElement("h5");
            subt2.textContent = piloto.career[0].title;
            console.log(piloto.career[0].title);
            divD5.appendChild(subt2);

            var bigP = document.createElement("p");
            bigP.textContent = piloto.career[0].text;
            bigP.setAttribute("style", 'text-align: justify');
            divD6.appendChild(bigP);

            var divD7 = document.createElement("div");
            divD7.setAttribute("class", "photo-gallery");
            divD.appendChild(divD7);
            var teste = document.createElement("h5");
            teste.textContent = " Multimédia :)";
            divD7.appendChild(teste);

            imagens(piloto.id, piloto.multimedia.images, piloto.multimedia.videos, divD7);

            document.getElementById("pilotoDet").appendChild(template1);
        }

        function imagens(pilotoId, imgId, ytId, divD7) {
            var count = 0;
            var n = 0;
            imgId.forEach((idImg) => {
                count++;
                var imgg = document.createElement("img");
                imgg.setAttribute("src", "http://ipt-ti2-racinglegends-api.eu-gb.mybluemix.net/api/v1/drivers/" + pilotoId + "/multimedia/images/" + idImg.id + "/image");
                imgg.setAttribute("width", "210px");
                imgg.setAttribute("height", "140px");
                divD7.appendChild(imgg);

                imgg.addEventListener("click",
                    function (evt) {
                        var indexArray = imgId.indexOf(idImg);
                        getVid(ytId, divD7, imgg, indexArray);
                        document.body.scrollTop = document.documentElement.scrollTop = 0;

                    });
            });
        }

        function getVid(ytId, divD7, imgg, indexArray) {

            var video = document.createElement("div");
            video.classList.add("hidden");
            video.setAttribute("class", "container");
            video.remove();
            var vidId = ytId[indexArray].youtube_id;
            document.getElementById("pilotoVideo").appendChild(video);

            if (vidId != null) {
                var videoDiv1 = document.createElement("div");
                videoDiv1.setAttribute("class", "col-md-12");
                var videoDiv2 = document.createElement("div");
                videoDiv2.setAttribute("class", "col-md-12");
                videoDiv2.setAttribute("style", "margin-bottom: 5%");
                video.appendChild(videoDiv1);
                video.appendChild(videoDiv2);
                var showVid = document.createElement("iframe");
                showVid.className = "mbed-responsive-item";
                showVid.setAttribute("src", "https://www.youtube.com/embed/" + vidId);
                showVid.setAttribute("width", "100%");
                showVid.setAttribute("height", "600px");
                showVid.setAttribute("allowFullScreen", "");
                video.classList.remove("hidden");
                videoDiv1.appendChild(showVid);

                var divBTclose = document.createElement("div");
                divBTclose.setAttribute("width", "100%");
                divBTclose.setAttribute("height", "100px");
                var btText = document.createTextNode("Click me to close this YouTube video! ");
                var btDiv = document.createElement("button");
                btDiv.setAttribute("class", "btn btn-dark btn-sm");
                btDiv.setAttribute("style", "width: 100%; height: 100px");
                btDiv.setAttribute("type", "button");
                btDiv.addEventListener("click",
                    function () {
                        video.remove();
                    });
                btDiv.appendChild(btText);
                divBTclose.appendChild(btDiv);
                videoDiv2.appendChild(divBTclose);
            }
        }
        // 3)
        function ecraCategorias() {
            return getCategorias()
                .then(function (batatas) {
                    mostraCategorias(batatas);
                })
                .catch(function (erro) {
                    console.error(erro);
                });
        }
    });