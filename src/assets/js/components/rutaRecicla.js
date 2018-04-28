"use strict";

const RutaRecicla = (updated) => {

    const parent = $('<div class=""></div>');
    const mapa = $('<div id="mapa"></div>');
    const detail = $('<div class=""></div>');
    const btnReturn = $('<div class="back flex"><a class="waves-effect waves-light btn-large">Volver</a></div>');


    parent.append(mapa);
    parent.append(detail);
    parent.append(btnReturn);

    btnReturn.on("click", (e) => {
        e.preventDefault();
        state.pagina = state.pagina - 1;
        state.selectedLocation = null;
        updated();
    });

    return parent;

}
