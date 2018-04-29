"use strict";

const filterByMaterial = (key) => {
  console.log(key);
  console.log('state.chasqui.family--->', state.chasqui.family.family);
    return state.chasqui.family.family.filter( (item) => {
                console.log('item-->' , item);
                return item.kin.toLowerCase() == key;
            });
}
