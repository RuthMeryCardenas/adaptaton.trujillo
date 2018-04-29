"use strict";


const Home = (updated) => {

    const parent = $('<div class="center-align fondo"></div>');
    const btnRecicle = $('<div class="recicla"><a class="waves-effect waves-light btn-large actions"><i class="icon-recycle"></i>Ubica a tu familiar</a></div><br>');
    const btnPoint = $('<div class="recicla"><a class="waves-effect waves-light btn-large actions"><i class="icon-map-pin"></i>Reportar</a></div><br>');
    const btnTips = $('<div class="recicla"><a class="waves-effect waves-light btn-large actions"><i class="icon-lightbulb"></i>Mi estado</a></div><br>');

    parent.append(btnRecicle);
    parent.append(btnPoint);
    parent.append(btnTips);

    btnRecicle.on("click", (e) => {
        e.preventDefault();
        state.pagina = 2;
        updated();
    });
    btnPoint.on("click", function (e) {
        e.preventDefault();
        state.pagina = 5;
        updated();
    });
    btnTips.on("click", function (e) {
        e.preventDefault();
        state.pagina = 7;
        updated();
    });

    return parent;

}
