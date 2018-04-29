"use strict";

const Recicla = (updated) => {
    const parent = $('<div class="home container"></div>');
    const mapa = $('<div id="mapa" class="col s12"></div>');
    const btnReturn = $('<div class="bg_green_ligth1 col s3"><a class="waves-effect waves-light btn-large grey darken-2 actions"><i class="material-icons">arrow_back</i></a></div>');

    state.locations = state.chasqui.family;

    btnReturn.on("click", (e) => {
        e.preventDefault();
        state.pagina = 1
        state.material = null;
        state.locations = null;
        updated();
    });

    parent.append(mapa);
    parent.append(btnReturn);

    return parent;
};
