"use strict";

const Recicla = (updated) => {

    const tipos = [ { name: "Mamá", img: "icon-bowling-pins" },
                    { name: "Papá", img: "icon-wine" },
                    { name: "Hermana", img: "icon-megaphone" },
                    { name: "Hijx", img: "icon-caution" },
                    { name: "Amigx", img: "icon-box2" }];

    const parent = $('<div class="container"></div>');
    const row = $('<div class="row bg_green_ligth"></div>');
    const btnReturn = $('<div class="bg_green_ligth1 col s3"><a class="waves-effect waves-light btn-large actions">Volver</a></div>');
    const divTitle = $('<div class="center-align col s6 recicla"><h4>Familia</h4></div>');
    const btnAdd = $('<div class="bg_green_ligth1 col s3"><a class="waves-effect waves-light btn-large actions">+</a></div>');
    const container = $('<div class="center-align col s12 cont_optciones"></div>');
    const mapa = $('<div id="mapa" class="col s12"></div>');

    tipos.forEach(function(type){
        const divContent = $('<div class="col s4" data-id = "'+ type.name + '"></div>');
        const img = $('<a class=""><i class="'+ type.img+'"></i></a>');
        const h5 = $('<h6 class="morado">'+ type.name + '</h6>');

        divContent.append(img);
        divContent.append(h5);
        container.append(divContent);

        divContent.on("click", (e) => {
            e.preventDefault();
            state.family = $(e.currentTarget).data("id").toLowerCase();
            state.locations = filterByMaterial(state.family);
            state.pagina = 3;
            updated();
        });
    });

    state.locations = state.chasqui.family;

    btnReturn.on("click", (e) => {
        e.preventDefault();
        state.pagina = 1;
        state.material = null;
        state.locations = null;
        updated();
    });

    btnAdd.on("click", (e) => {
        e.preventDefault();
        state.pagina = 4;
        updated();
    });
    
    parent.append(mapa);
    row.append(btnReturn, divTitle, btnAdd);
    
    row.append(container);
    parent.append(row);
    parent.append(mapa);
    //
    return parent;

};
