'use strict';
const FormReport = (update) => {
  const parent = $('<div class="container"></div>');
  const row = $('<div class="row bg_green_ligth"></div>');
  const btnReturn = $('<div class="bg_green_ligth1 col s3"><a class="waves-effect waves-light btn-large actions">Volver</a></div>');
  const divTitle = $('<div class="center-align col s6 recicla"><h5>Selecionar la ruta o punto a reportar</h5></div>');
  const btnAdd = $('<div class="bg_green_ligth1 col s3"><a class="waves-effect waves-light btn-large actions">+</a></div>');
  const container = $('<div class="center-align col s12 cont_optciones"></div>');
  const mapa = $('<div id="mapa" class="col s12"></div>');
  const labelRuta = $('<label class="col s2" >Ruta</label>');
  const inputRuta = $('<input name="group1" type="radio" value="Ruta"/>');
  labelRuta.append(inputRuta);
  const labelPoint = $('<label class="col s2" >Punto</label>');
  const inputPoint = $('<input name="group1" type="radio" value="Punto"/>');
  const divInput = $('<div class="col s12"></div>');
  labelPoint.append(inputPoint);
  divInput.append(labelPoint, labelRuta);

  state.locations = state.chasqui.family;

  btnReturn.on("click", (e) => {
    e.preventDefault();
    state.pagina = 1;
    state.material = null;
    state.locations = null;
    updated();
  });

  btnAdd.on("click", (e) => {
    e.preventDefault();
    state.pagina = 4;
    updated();
  });

  parent.append(mapa);
  row.append(btnReturn, divTitle, btnAdd);

  row.append(container);
  parent.append(row);
  // parent.append(divInput);
  parent.append(mapa);
  //
  return parent;

};
