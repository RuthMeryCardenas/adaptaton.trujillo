"use strict";
const Input = () => {
    const container = $('<div class="input-field"></div>');
    const icon = $('<i class="material-icons prefix">account_circle</i>');
    const input = $('<input id="icon_prefix" type="text" class="validate">');
    const label = $('<label for="icon_prefix">DNI</label>');

    container.append(icon);
    container.append(input);
    container.append(label);

    return container;
}

const Login = (updated) => {

    const parent = $('<div class="center-align fondo"></div>');
    const field = $('<div class="input-field"></div>');
    const icon = $('<i class="material-icons prefix">account_circle</i>');
    const input = $('<input id="icon_prefix" type="text" class="validate">');
    const label = $('<label for="icon_prefix">DNI</label>');

    field.append(icon);
    field.append(input);
    field.append(label);

    const btnSignIn = $('<div class="recicla"><a class="waves-effect waves-light btn-large actions"><i class="icon-lightbulb"></i>Ingresar</a></div><br>');

    parent.append(field);
    parent.append(btnSignIn);

    btnSignIn.on("click", (e) => {
        e.preventDefault();
        let user = input.val();

        if (findUser(user).length > 0) {
          state.user = findUser(user)[0];
          state.pagina = 1;
          console.log("Usuario registrado");
          console.log(state.user);
        } else {
          console.log("Usuario no registrado");
        }
        updated();
    });

    return parent;

}
