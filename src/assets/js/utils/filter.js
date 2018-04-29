"use strict";

const store = {
  usuarios: [
    {
       dni: "48080711",
       nombre: "Ruth Mery Cardenas Perez",
       celular: "931458353",
     },
     {
        dni: "47306063",
        nombre: "Maricarmen Rojas Tinco",
        celular: "966352547",
      },
    ],

}

const filterByMaterial = (key) => {
  console.log(state.wallie.wallie);
    return state.wallie.wallie.filter(item => {
                return item.tipos.toLowerCase() == key;
            });
}

const findUser = (dni) => {
    return store.usuarios.filter(user => {
                return user.dni == dni;
            });
}
