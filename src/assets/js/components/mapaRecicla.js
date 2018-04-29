"use strict";

const MapaRecicla = (updated) => {

    const parent = $('<div class="row"><h4> Buscando a '+ state.family+'</h4></div>');
    const mapa = $('<div id="mapa" class="col s12"></div>');
    const detail = $('<div class="col s12"></div>');
    const btnReturn = $('<div class = "col s5 push-s3"><a class="waves-effect waves-light btn-large">Volver</a></div>');

    parent.append(mapa);
    state.selectedLocation = state.locations[0];
    console.log( state.selectedLocation);
    btnReturn.on("click", (e) => {
        e.preventDefault();
        state.pagina = state.pagina-1;
        state.material = null;
        state.locations = null;
        updated();
    });

    parent.append(detail);
    parent.append(btnReturn);

    return parent;
}
