"use strict";

const MapaRecicla = (updated) => {

    const parent = $('<div class="row"><h4>'+ state.material+'</h4></div>');
    const mapa = $('<div id="mapa" class="col s12"></div>');
    const detail = $('<div class="col s12"></div>');
    const btnReturn = $('<div class = "col s5 push-s3"><a class="waves-effect waves-light btn-large">Volver</a></div>');

    parent.append(mapa);

    btnReturn.on("click", (e) => {
        e.preventDefault();
        state.pagina = state.pagina-1;
        state.material = null;
        state.locations = null;
        updated();
    });

    state.locations[0].lugares_acopio.map(function (location) {
        detail.append(locationDetail(location, updated));
    });

    parent.append(detail);
    parent.append(btnReturn);

    return parent;

}
