"use strict";

const Recicla = (updated) => {

    const tipos = [ { name: "", img: "icon-bowling-pins" },
                    { name: "", img: "icon-wine" },
                    { name: "", img: "icon-megaphone" },
                    { name: "", img: "icon-caution" },
                    { name: "", img: "icon-box2" },
                    { name: "", img: "icon-battery2" }];

    const parent = $('<div class="container"></div>');
    const row = $('<div class="row bg_green_ligth"></div>');
    const divTitle = $('<div class="center-align col s12 recicla"><h4>Familia</h4></div>');
    const container = $('<div class="center-align col s12 cont_optciones"></div>');
    const btnReturn = $('<div class="bg_green_ligth1 flex"><a class="waves-effect waves-light btn-large actions">Volver</a></div>');

    console.log(state);
    tipos.forEach(function(type){
        const divContent = $('<div class="col s6" data-id = "'+ type.name + '"></div>');
        const img = $('<a class=""><i class="'+ type.img+'"></i></a>');
        const h5 = $('<h6 class="morado">'+ type.name + '</h6>');

        divContent.append(img);
        divContent.append(h5);
        container.append(divContent);

        divContent.on("click", (e) => {
            e.preventDefault();
            state.family = $(e.currentTarget).data("id").toLowerCase();
            console.log('select-->' +state.family);
            state.locations = filterByMaterial(state.family);
            console.log(state.locations);
            state.pagina = 2;
            updated();
        });
    });
    btnReturn.on("click", (e) => {
        e.preventDefault();
        state.pagina = null;
        state.material = null;
        state.locations = null;
        updated();
    });

    row.append(divTitle);
    row.append(container);
    parent.append(row);
    parent.append(btnReturn);


    return parent;

};
