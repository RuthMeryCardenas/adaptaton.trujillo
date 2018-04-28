const TipsR = (updated) => {

    const tiposT = [ { name: "Plastico", img: "icon-bowling-pins" },
                    { name: "Vidrio", img: "icon-wine" },
                    { name: "RAEE", img: "icon-megaphone" },
                    { name: "Aceite", img: "icon-caution" },
                    { name: "Cartón y Papel", img: "icon-box2" },
                    { name: "Pilas", img: "icon-battery2" }];

                    const parent = $('<div class="container"></div>');
                    const row = $('<div class="row bg_green_ligth"></div>');
                    const divTitle = $('<div class="center-align col s12 recicla"><h5>Tips</h5></div>');
                    const container = $('<div class="center-align col s12 cont_optciones"></div>');
                    const btnReturn = $('<div class="flex"><a class="waves-effect waves-light btn-large actions">Volver</a></div>');

    tiposT.forEach(function(type){
      const divContent = $('<div class="col s6" data-id = "'+ type.name + '"></div>');
      const img = $('<a class=""><i class="'+type.img+'"></i></a>');
      const h5 = $('<h6 class="morado">'+ type.name + '</h6>');

        divContent.append(img);
        divContent.append(h5);
        container.append(divContent);

        divContent.on("click", (e) => {
            e.preventDefault();
            state.material = $(e.currentTarget).data("id").toLowerCase();;
            console.log(state.material);
            state.locations = filterByMaterial(state.material);
            console.log(state.locations);
            state.pagina = 7;
            updated();
        });
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
