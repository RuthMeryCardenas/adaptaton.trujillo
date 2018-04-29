"use strict";

const RutaRecicla = (updated) => {
  const tipos = [ { name: "Mamá", img: "icon-bowling-pins" },
                  { name: "Papá", img: "icon-wine" },
                  { name: "Hermana", img: "icon-megaphone" },
                  { name: "Hijx", img: "icon-caution" },
                  { name: "Amigx", img: "icon-box2" }];

    const parent = $('<div class=""></div>');
    const row = $('<div class="row bg_green_ligth"></div>');
    const mapa = $('<div id="mapa"></div>');
    const detail = $('<div class=""></div>');
    const btnReturn = $('<div class="back flex"><a class="waves-effect waves-light btn-large">Volver</a></div>');

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
    parent.append(detail);

    btnReturn.on("click", (e) => {
        e.preventDefault();
        state.pagina = state.pagina - 1;
        state.selectedLocation = null;
        updated();
    });
    parent.append(btnReturn);

    return parent;

}
