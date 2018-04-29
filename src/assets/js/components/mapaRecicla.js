"use strict";

const MapaRecicla = (updated) => {
  const tipos = [ { name: "Mamá", img: "icon-bowling-pins" },
                  { name: "Papá", img: "icon-wine" },
                  { name: "Hermana", img: "icon-megaphone" },
                  { name: "Hijx", img: "icon-caution" },
                  { name: "Amigx", img: "icon-box2" }];

    const parent = $('<div></div>');
    const row = $('<div class="row bg_green_ligth"></div>');
    const mapa = $('<div id="mapa" class="row"></div>');

    const btnReturn = $('<div class = "col s5 push-s3"><a class="waves-effect waves-light btn-large">Volver</a></div>');
    const btnAdd = $('<div class="bg_green_ligth1 col s3"><a class="waves-effect waves-light btn-large actions">+</a></div>');

    tipos.forEach(function(type){
        const divContent = $('<div class="center-align col s4" data-id = "'+ type.name + '"></div>');
        const img = $('<a class="waves-effect waves-light btn"><i class="'+ type.img+'"></i></a>');
        const h5 = $('<h6 class="morado">'+ type.name + '</h6>');

        divContent.append(img);
        divContent.append(h5);
        row.append(divContent);

        divContent.on("click", (e) => {
            e.preventDefault();
            state.family = $(e.currentTarget).data("id").toLowerCase();
            state.locations = filterByMaterial(state.family);
            state.selectedLocation = state.locations[0];
            state.pagina = 3;
            updated();
        });
    });

    parent.append(row);
    parent.append(mapa);

    btnReturn.on("click", (e) => {
        e.preventDefault();
        state.pagina = state.pagina-1;
        state.material = null;
        state.locations = null;
        updated();
    });
    btnAdd.on("click", (e) => {
        e.preventDefault();
        state.pagina = 4;
        updated();
    });

    parent.append(btnReturn, btnAdd);

    return parent;
}
