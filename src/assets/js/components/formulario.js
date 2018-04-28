'use strict';
const FormAcopio = (update) => {

  const cont_form =$('<section class="cont"></section>');
  const row_1 =$('<div class="row"></div>');
  const form  =$('<form class="col s10 form_new push-s1"></div>');
  const row_2 =$('<div class="row"></div>');
        row_1.append(form);
        form.append(row_2);
  const int_1 =$('<div class="input-field col s10"></div>');
  const int_11=$('<i class="material-icons prefix">account_circle</i>');
  const int_12=$('<input id="icon_prefix" type="text" class="validate dataMust">');
  const int_13 =$('<label for="icon_prefix">Nombre</label>');
  int_1.append(int_11,int_12,int_13) ;
  const int_2 =$('<div class="input-field col s10">'+
        '<i class="material-icons prefix">phone</i>'+
        '<input id="icon_telephone" type="number"  maxlength="999999999"  class="validate">'+
        '<label for="icon_telephone">Celular</label>'+
        '</div>');
  const int_3 =$('<div class="input-field col s10">'+
          '  <i class="material-icons prefix">drafts</i>'+
          '  <input id="email" type="email" class="validate">'+
          '  <label for="email" data-error="wrong" data-success="right">Email</label>'+
        '</div>');
  const int_4 =$('<div class="input-field col s10"></div>');
  const int_41 =$('<i class="material-icons prefix">location_city</i>');
  const int_42 = $('<input id="ubicacion" type="text" placeholder = "" class="validate dataMust">');
  const int_43 =$('<label for="ubicacion">Ubicación</label>');
  int_4.append(int_41,int_42,int_43);

  const int_5 =$('<div class="col s10"><h6>Horario de Recepción</h6></div>'+
        '<div class="col s12">'+
        '<p class="inline"><input type="checkbox" class="filled-in dataMust" id="dia1"/><label for="dia1">L</label></p>'+
        '<p class="inline"><input type="checkbox" class="filled-in" id="dia2" /><label for="dia2">M</label></p>'+
        '<p class="inline"><input type="checkbox" class="filled-in" id="dia3" /><label for="dia3">Mi</label></p>'+
        '<p class="inline"><input type="checkbox" class="filled-in" id="dia4"/><label for="dia4">J</label></p>'+
        '</div>');
const int_6 =$('<div class="col s10">'+
        '<p class="inline"><input type="checkbox" class="filled-in" id="dia5" /><label for="dia5">V</label></p>'+
        '<p class="inline"><input type="checkbox" class="filled-in" id="dia6" /><label for="dia6">S</label></p>'+
        '<p class="inline"><input type="checkbox" class="filled-in" id="dia7" /><label for="dia7">D</label></p>'+
        '</div>');
const int_7 =$('<div class="input-field col s5">'+
          '  <i class="material-icons prefix">event</i>'+
          '  <input type="text" class="timepicker dataMust">'+
          '  <label for="icon_event" class="active">Inicio</label>'+
        '</div>');
const int_8 =$('<div class="input-field col s5">'+
          '  <i class="material-icons prefix">event</i>'+
          '  <input type="text" class="timepicker dataMust">'+
          '  <label for="icon_event" class="active">Fin</label>'+
        '</div>');
const int_9 =$('<div class="col s10"><h6>Materiales</h6></div>');
const int_s1 =$('<div class="col s5">'+
                '<p><input type="checkbox" class="filled-in dataMust" id="in1"/><label for="in1">Plástico</label></p>'+
                '<p><input type="checkbox" class="filled-in" id="in2" /><label for="in2">Ropa</label></p>'+
                '<p><input type="checkbox" class="filled-in" id="in3" /><label for="in3">Vidrio</label></p>'+
              '</div>');
const int_s2 =$('<div class="col s5">'+
                  '<p><input type="checkbox" class="filled-in" id="in4"/><label for="in4">Pilas</label></p>'+
                  '<p><input type="checkbox" class="filled-in" id="in5"/><label for="in5">Aceite</label></p>'+
                  '<p><input type="checkbox" class="filled-in" id="in6" /><label for="in6">Papel y Carton</label></p>'+
                '</div>');
const int_s3 =$('<div class="input-field col s12">'+
            '<textarea id="textarea1" class="materialize-textarea" data-length="120"></textarea>'+
            '<label for="textarea1">Observación</label>'+
         '</div>');
 row_2.append(int_1,int_2,int_3,int_4,int_5,int_6,int_7,int_8,int_9,int_s1,int_s2,int_s3);

  const btn_send =$('<button class="btn waves-effect waves-light" type="submit" name="action">Enviar<i class="material-icons right">send</i></button>');
  const btnReturn = $('<div class=""><a class="waves-effect waves-light btn-large actions">Volver</a></div>');

  form.append(btn_send);
  row_1.append(btnReturn);

  cont_form.append(row_1);


  btn_send.on('click', (e) =>{
    e.preventDefault();
     state.pagina = 5;
     update();
  });

  btnReturn.on("click", (e) => {
    e.preventDefault();
    state.pagina = null;

    updated();
  });


  return cont_form;
};
function timepicker () {
    $('.timepicker').pickatime({
    default: 'now', // Set default time: 'now', '1:30AM', '16:30'
    fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
    twelvehour: false, // Use AM/PM or 24-hour format
    donetext: 'OK', // text for done-button
    cleartext: 'Clear', // text for clear-button
    canceltext: 'Cancel', // Text for cancel-button
    autoclose: false, // automatic close timepicker
    ampmclickable: true, // make AM PM clickable
    aftershow: function(){} //Function for after opening timepicker
  });
};
