"use strict";


const locationDetail = (location, updated) => {

    const parent = $('<div class="cont_detail" data-lugar = ""></div>');
    const name = $('<div class="name_acopio"><i class="icon-feather "></i><span class="">'+ location.name + '</span></div>');
    const cont_icon =$('<div class="ruta_acopio"><i class="icon-map"></i></div>');
    const icon = $('<span class ="ruta">Trazar ruta</span>');
    cont_icon.append(icon);


    parent.append(name);
    parent.append(cont_icon);

    icon.on("click", (e) => {
        e.preventDefault();
        state.selectedLocation = location;
        state.pagina = 3;
        updated();
    });

    return parent;
}
