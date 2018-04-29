"use strict";

const Recicla = (updated) => {
    const parent = $('<div class="home container"></div>');
    const mapa = $('<div id="mapa" class="col s12"></div>');
    const btnReturn = $('<div class="white col s3"><a class="waves-effect waves-light btn-large red"><i class="material-icons">arrow_back</i></a></div>');

    state.locations = state.chasqui.family;

    btnReturn.on("click", (e) => {
        e.preventDefault();
        state.pagina = state.pagina - 1;
        state.material = null;
        state.locations = null;
        updated();
    });

    parent.append(mapa);
    parent.append(btnReturn);

    return parent;
};
