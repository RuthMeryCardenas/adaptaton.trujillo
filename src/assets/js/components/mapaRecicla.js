"use strict";

const MapaRecicla = (updated) => {
  const tipos = [ { name: "Mamá", img: "person_pin", color: "green" },
                  { name: "Papá", img: "person_pin", color: "green" },
                  { name: "Hermana", img: "person_pin", color: "green" },
                  { name: "Hijx", img: "person_pin", color: "green"},
                  { name: "Amigx", img: "person_pin", color: "green" }];

    const parent = $('<div class="familiares"></div>');
    const row = $('<div class="familia row"></div>');
    const mapa = $('<div id="mapa" class="row"></div>');

    const btnReturn = $('<div class="white col s3"><a class="waves-effect waves-light btn-large grey darken-2"><i class="material-icons">arrow_back</i></a></div>');
    const btnAdd = $('<div class="col s3"><a class="waves-effect waves-light btn-large grey darken-2">+</a></div>');

    tipos.forEach(function(type){
        const divContent = $('<div class="center-align col s4" data-id = "'+ type.name + '"></div>');
        const img = $('<a class="options waves-effect waves-light btn red"><i class="material-icons">'+ type.img+'</i></a>');
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
        state.pagina = state.pagina - 1;
        state.material = null;
        state.locations = null;
        updated();
    });
    btnAdd.on("click", (e) => {
        e.preventDefault();
        state.pagina = 4;
        updated();
    });

    parent.append(btnReturn);

    return parent;
}
