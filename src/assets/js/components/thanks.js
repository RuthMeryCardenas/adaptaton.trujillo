'use strict';
const SuccesAcopio = (update) => {

  const divCont_end = $('<div class="text-center"></div>');
    const row1      =$('<div class="row"></div>');
    const logo      =$('<div class="col s10 center-align"><img src="assets/img/gracias.png"  alt="check" class="img-responsive"></div>');
    const cont_text =$('<div class="col s12"><h4 class="center-align">¡Bien!<br>Gracias por ser parte del movimiento</h4></div>');

    row1.append(logo);
    row1.append(cont_text);
    divCont_end.append(row1) ;

    setTimeout(function(){
       state.pagina=null;
       update();}, 5000);

    return divCont_end;
}
