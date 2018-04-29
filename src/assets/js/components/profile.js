const Perfil = (updated) => {
    console.log(state);
    const parent = $('<div class="container"></div>');
    const row = $('<div class="row bg_green_ligth"></div>');
    const divTitle = $('<div class="center-align col s12 recicla"><h5>Perfil</h5></div>');
    const container = $('<div class="center-align col s12 cont_optciones"></div>');
    const btnReturn = $('<div class="col s3"><a class="waves-effect waves-light btn-large actions">Volver</a></div>');
    const btnSave = $('<div class="flex"><a class="waves-effect waves-light btn-large actions">Guardar</a></div>');
    const form  = $('<form action="#" class="col s12"></form>)');
    const int_1 = $('<div class="input-field col s10"></div>');
    const int_11 = $('<i  class="material-icons prefix">account_circle</i>');
    const int_12 = $(`<input id="icon_prefix" type="text" class="validate dataMust" value="${state.chasqui.perfil.name}">`);
    const int_13 = $('<label for="icon_prefix" class="active">Nombre</label>');
    int_1.append(int_11,int_12,int_13) ;
    const int_2 =$('<div class="input-field col s10"></div>');
    const int_21=$('<i class="material-icons prefix">account_circle</i>');
    const int_22=$(`<input id="icon_prefix" type="number" class="validate dataMust " value="${state.chasqui.perfil.phone}">`);
    const int_23 =$('<label for="icon_prefix" class="active">Teléfono</label>');
    int_2.append(int_21,int_22,int_23);
    const label_radio = ('<label for="icon_prefix" class="active">Estado</label>');
    form.append(label_radio);
    const mapa = $('<div id="mapa" class="col s12"></div>');


    ['A Salvo', 'Fuera de Peligro', 'Necesito ayuda'].map( item => {
        const p = $('<p></p>');
        const label = $('<label></label>');
        const status = state.chasqui.perfil.status;
        const input = $('<input class="with-gap test" name="group1" type="radio" />');
        if (item == state) {
            input.attr("checked", true);
        }
        const span = $(`<span>${item}</span>`);
        label.append(input, span);
        p.append(label);
        form.append(p);
    })

    const divText = $('<div class="input-field col s12"></div>');
    const textA = $(`<textarea id="textarea1" class="materialize-textarea">${state.chasqui.perfil.message}</textarea>`);
    const label = $('<label for="textarea1" class="active">Textarea</label>');
    divText.append(textA, label);

    btnReturn.on("click", (e) => {
        e.preventDefault();
        state.pagina = 1;
        updated();
    })

    btnSave.on("click", (e) => {
        e.preventDefault();

        var database = firebase.database();
        var referencia = database.ref('perfil/');
        

        referencia.set({
            name: int_12.val(),
            phone: int_22.val(),
            message: textA.val(),
        });
    
        state.pagina = 1;
        updated();
    })

    row.append(btnReturn);
    row.append(divTitle);
    row.append(int_1, int_2, form, divText);
    row.append(container);
    parent.append(row);
    parent.append(btnSave);

    return parent;
}

