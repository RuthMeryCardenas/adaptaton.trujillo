'use strict';

const addNewUser = (update) => {

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
  const int_2 =$('<div class="input-field col s10"></div>');
  const int_21=$('<i class="material-icons prefix">account_circle</i>');
  const int_22=$('<input id="icon_prefix" type="number" class="validate dataMust">');
  const int_23 =$('<label for="icon_prefix">Teléfono</label>');
  int_2.append(int_21,int_22,int_23) ;

const int_9 =$('<div class="col s10"><h6>Parentesco</h6></div>');
const int_s1 =$('<div class="col s5"></div>');
const int_s11 = $('<p><input name="1" type="radio" class="filled-in  id="in1"/><label for="in1">Mamá</label></p>');
const int_s12 = $('<p><input name="1" type="radio" class="filled-in" id="in2"/><label for="in2">Papá</label></p>');
const int_s13 = $('<p><input name="1" type="radio" class="filled-in" id="in3"/><label for="in3">Hermax</label></p>');
const int_s14 = $('<p><input name="1" type="radio" class="filled-in" id="in4"/><label for="in4">Amigx</label></p>');

int_s1.append(int_s11, int_s12, int_s13, int_s14);
 row_2.append(int_1,int_2,int_9,int_s1);

  const btn_send =$('<button class="btn waves-effect waves-light" type="submit" name="action">Enviar<i class="material-icons right">send</i></button>');
  const btnReturn = $('<div class=""><a class="waves-effect waves-light btn-large actions">Volver</a></div>');

  form.append(btn_send);
  row_1.append(btnReturn);

  cont_form.append(row_1);
  const uid =  state.locations.family.length;

  btn_send.on('click', (e) =>{
    e.preventDefault();
    var database = firebase.database();
    var referencia = database.ref('family/family/'+ uid);
    referencia.set({
        id: uid + 1,
        name: int_12.val(),
        phone: int_22.val(),
        kin: 'Amiga'
    });

    state.pagina = 6;
    update();
  });

  btnReturn.on("click", (e) => {
    e.preventDefault();
    state.pagina = 2;

    updated();
  });


  return cont_form;
};