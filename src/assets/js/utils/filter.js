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
  console.log('state.chasqui.family--->', state.chasqui.family.family);
    return state.chasqui.family.family.filter(item => {
                console.log('item-->' , item);
                return item.kin.toLowerCase() == key;
            });
}

const findUser = (dni) => {
    return store.usuarios.filter(user => {
                return user.dni == dni;
            });
}
