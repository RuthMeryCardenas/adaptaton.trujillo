"use strict";

const filterByMaterial = (key) => {
  console.log(state.wallie.wallie);
    return state.wallie.wallie.filter( (item) => {
                return item.tipos.toLowerCase() == key;
            });
}
