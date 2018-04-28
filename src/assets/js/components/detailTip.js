"use strict";

const TipDetail = (updated) => {

    const parent = $('<div class="container"></div>');
    const row = $('<div class="row"></div>');
    const divTitle = $('<div class="center-align col s12"></div>');
    const mjsTitle=$('<h4>'+ state.material+'</h4>');
    const container = $('<div class="center-align col s12"></div>');
    const btnReturn = $('<div><a class="waves-effect waves-light btn-large actions">Volver</a></div>');
    divTitle.append(mjsTitle);

    state.locations[0].tips.map(function (tip) {

        container.append(detalle(tip));
    });


    btnReturn.on("click", (e) => {
        e.preventDefault();
        state.pagina = null;
        state.material = null;
        state.locations = null;
        updated();
    })

    row.append(divTitle);
    row.append(container);
    parent.append(row);
    parent.append(btnReturn);

    return parent;
}

const detalle = (tip) => {
    const contImg = $('<div class="center-align col s12"><img src="assets/img/' + tip.titulo+ '" alt="logo" class="img-responsive"></div>');

    return contImg;
}
