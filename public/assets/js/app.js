"use strict";


const root = $(".root");
const render = (root) => {
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');

    switch (state.pagina) {
        case null:
            wrapper.append(Home(updated));
            break;
        case 1:
            wrapper.append(Recicla(updated));
            break;
        case 2:
            wrapper.append(MapaRecicla(updated));
            break;
        case 3:
            wrapper.append(RutaRecicla(updated));
            break;
        case 4:
            wrapper.append(FormAcopio(updated));
            break;
        case 5:
            wrapper.append(SuccesAcopio(updated));
            break;
        case 6:
            wrapper.append(TipsR(updated));
            break;
        case 7:
            wrapper.append(TipDetail(updated));
            break;
    };

    root.append(wrapper);

    if(state.pagina == 2 || state.pagina == 3 ){
        initMap();
    }
    if(state.pagina == 4){
        var input = document.getElementById("ubicacion");
        new google.maps.places.Autocomplete(input);
        timepicker();
    }

}

const updated = function () {
    render(root);
}
const state = {
    pagina: null,
}


$(_ => {
  var config = {
    apiKey: "AIzaSyD046Ozxa4rsgWa1uTUC5lkIYJsOB6nW3c",
    authDomain: "wallie-6af03.firebaseapp.com",
    databaseURL: "https://wallie-6af03.firebaseio.com",
    projectId: "wallie-6af03",
    storageBucket: "wallie-6af03.appspot.com",
    messagingSenderId: "846422299759"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
    database.ref().on("value", function(snap){

        state.wallie = snap.val();
        console.log(state.wallie);

        const root = $(".root");
        render(root);

    });
});

"use strict";

const TipDetail = (updated) => {

    const parent = $('<div class="container"></div>');
    const row = $('<div class="row"></div>');
    const divTitle = $('<div class="center-align col s12"></div>');
    const mjsTitle=$('<h4>'+ state.material+'</h4>');
    const container = $('<div class="center-align col s12"></div>');
    const btnReturn = $('<div><a class="waves-effect waves-light btn-large actions">Volver</a></div>');
    divTitle.append(mjsTitle);

    state.locations[0].tips.map(function (tip) {

        container.append(detalle(tip));
    });


    btnReturn.on("click", (e) => {
        e.preventDefault();
        state.pagina = null;
        state.material = null;
        state.locations = null;
        updated();
    })

    row.append(divTitle);
    row.append(container);
    parent.append(row);
    parent.append(btnReturn);

    return parent;
}

const detalle = (tip) => {
    const contImg = $('<div class="center-align col s12"><img src="assets/img/' + tip.titulo+ '" alt="logo" class="img-responsive"></div>');

    return contImg;
}

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

"use strict";


const Home = (updated) => {

    const parent = $('<div class="center-align fondo"></div>');
    const btnRecicle = $('<div class="recicla"><a class="waves-effect waves-light btn-large actions"><i class="icon-recycle"></i>Recicla</a></div><br>');
    const btnPoint = $('<div class="recicla"><a class="waves-effect waves-light btn-large actions"><i class="icon-map-pin"></i>Cargar Nuevo Punto</a></div><br>');
    const btnTips = $('<div class="recicla"><a class="waves-effect waves-light btn-large actions"><i class="icon-lightbulb"></i>Tips</a></div><br>');

    parent.append(btnRecicle);
    parent.append(btnPoint);
    parent.append(btnTips);

    btnRecicle.on("click", (e) => {
        e.preventDefault();
        state.pagina = 1;
        updated();
    });
    btnPoint.on("click", function (e) {
        e.preventDefault();
        state.pagina = 4;
        updated();
    });
    btnTips.on("click", function (e) {
        e.preventDefault();
        state.pagina = 6;
        updated();
    });

    return parent;

}

'use strict';

function initMap () {

    var uluru = { lat: -25.363, lng: 131.044 };
    var map = new google.maps.Map(document.getElementById("mapa"), {
        zoom: 16,
        center: uluru
    });

    let pos;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            const map = new google.maps.Map(document.getElementById("mapa"), {
                zoom: 12,
                center: pos
            });

            var marker = new google.maps.Marker({
                position: pos,
                map: map
            });


            if(state.pagina == 2){
                var markers = state.locations[0].lugares_acopio.map(function (location) {
                    var contentString = '<div id = "content"><p>'+location.name+'</p><p>'+location.direccion+'</p><p>'+location.horario+'</p></div>';
                    var infowindow = new google.maps.InfoWindow({
                        content: contentString
                    });

                    const newMarker = new google.maps.Marker({
                        position: {lat: location.latitud, lng: location.longitud},
                        map:map
                    })
                    newMarker.addListener("click", function(){
                        infowindow.open(map, newMarker);

                    });

                    return newMarker;
                });


            }else {
                marker.setMap(null);
                calculateAndDisplayRoute(pos, map);

            }

        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, map, map.getCenter());
    }


}

function handleLocationError(browserHasGeolocation, map, pos) {
    map.setPosition(pos);
    map.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
}

function calculateAndDisplayRoute(pos, map) {

     const directionsDisplay = new google.maps.DirectionsRenderer;
     const directionsService = new google.maps.DirectionsService;
    directionsDisplay.setMap(map);
    directionsService.route({
        origin: pos,
        destination: { lat: state.selectedLocation.latitud, lng: state.selectedLocation.longitud },
        travelMode: 'DRIVING'
    }, function (response, status) {
        if (status == 'OK') {
            directionsDisplay.setDirections(response);
            const distancia = ((response.routes[0].legs[0].distance.text));
            // $('#km').text(distancia);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}

"use strict";


const locationDetail = (location, updated) => {

    const parent = $('<div class="cont_detail" data-lugar = ""></div>');
    const name = $('<div class="name_acopio"><i class="icon-feather "></i><span class="">'+ location.name + '</span></div>');
    const cont_icon =$('<div class="ruta_acopio"><i class="icon-map"></i></div>');
    const icon = $('<span class ="ruta">Trazar ruta</span>');
    cont_icon.append(icon);


    parent.append(name);
    parent.append(cont_icon);

    icon.on("click", (e) => {
        e.preventDefault();
        state.selectedLocation = location;
        state.pagina = 3;
        updated();
    });

    return parent;
}

"use strict";

const MapaRecicla = (updated) => {

    const parent = $('<div class="row"><h4>'+ state.material+'</h4></div>');
    const mapa = $('<div id="mapa" class="col s12"></div>');
    const detail = $('<div class="col s12"></div>');
    const btnReturn = $('<div class = "col s5 push-s3"><a class="waves-effect waves-light btn-large">Volver</a></div>');

    parent.append(mapa);

    btnReturn.on("click", (e) => {
        e.preventDefault();
        state.pagina = state.pagina-1;
        state.material = null;
        state.locations = null;
        updated();
    });

    state.locations[0].lugares_acopio.map(function (location) {
        detail.append(locationDetail(location, updated));
    });

    parent.append(detail);
    parent.append(btnReturn);

    return parent;

}

"use strict";

const Recicla = (updated) => {

    const tipos = [ { name: "Plastico", img: "icon-bowling-pins" },
                    { name: "Vidrio", img: "icon-wine" },
                    { name: "RAEE", img: "icon-megaphone" },
                    { name: "Aceite", img: "icon-caution" },
                    { name: "Cartón y Papel", img: "icon-box2" },
                    { name: "Pilas", img: "icon-battery2" }];

    const parent = $('<div class="container"></div>');
    const row = $('<div class="row bg_green_ligth"></div>');
    const divTitle = $('<div class="center-align col s12 recicla"><h4>Recicla</h4></div>');
    const container = $('<div class="center-align col s12 cont_optciones"></div>');
    const btnReturn = $('<div class="bg_green_ligth1 flex"><a class="waves-effect waves-light btn-large actions">Volver</a></div>');

    tipos.forEach(function(type){
        const divContent = $('<div class="col s6" data-id = "'+ type.name + '"></div>');
        const img = $('<a class=""><i class="'+ type.img+'"></i></a>');
        const h5 = $('<h6 class="morado">'+ type.name + '</h6>');

        divContent.append(img);
        divContent.append(h5);
        container.append(divContent);

        divContent.on("click", (e) => {
            e.preventDefault();
            state.material = $(e.currentTarget).data("id").toLowerCase();
            state.locations = filterByMaterial(state.material);
            console.log(state.locations);
            state.pagina = 2;
            updated();
        });
    });
    btnReturn.on("click", (e) => {
        e.preventDefault();
        state.pagina = null;
        state.material = null;
        state.locations = null;
        updated();
    });

    row.append(divTitle);
    row.append(container);
    parent.append(row);
    parent.append(btnReturn);


    return parent;

};

"use strict";

const RutaRecicla = (updated) => {

    const parent = $('<div class=""></div>');
    const mapa = $('<div id="mapa"></div>');
    const detail = $('<div class=""></div>');
    const btnReturn = $('<div class="back flex"><a class="waves-effect waves-light btn-large">Volver</a></div>');


    parent.append(mapa);
    parent.append(detail);
    parent.append(btnReturn);

    btnReturn.on("click", (e) => {
        e.preventDefault();
        state.pagina = state.pagina - 1;
        state.selectedLocation = null;
        updated();
    });

    return parent;

}

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

const TipsR = (updated) => {

    const tiposT = [ { name: "Plastico", img: "icon-bowling-pins" },
                    { name: "Vidrio", img: "icon-wine" },
                    { name: "RAEE", img: "icon-megaphone" },
                    { name: "Aceite", img: "icon-caution" },
                    { name: "Cartón y Papel", img: "icon-box2" },
                    { name: "Pilas", img: "icon-battery2" }];

                    const parent = $('<div class="container"></div>');
                    const row = $('<div class="row bg_green_ligth"></div>');
                    const divTitle = $('<div class="center-align col s12 recicla"><h5>Tips</h5></div>');
                    const container = $('<div class="center-align col s12 cont_optciones"></div>');
                    const btnReturn = $('<div class="flex"><a class="waves-effect waves-light btn-large actions">Volver</a></div>');

    tiposT.forEach(function(type){
      const divContent = $('<div class="col s6" data-id = "'+ type.name + '"></div>');
      const img = $('<a class=""><i class="'+type.img+'"></i></a>');
      const h5 = $('<h6 class="morado">'+ type.name + '</h6>');

        divContent.append(img);
        divContent.append(h5);
        container.append(divContent);

        divContent.on("click", (e) => {
            e.preventDefault();
            state.material = $(e.currentTarget).data("id").toLowerCase();;
            console.log(state.material);
            state.locations = filterByMaterial(state.material);
            console.log(state.locations);
            state.pagina = 7;
            updated();
        });
    });


    btnReturn.on("click", (e) => {
        e.preventDefault();
        state.pagina = null;
        state.material = null;
        state.locations = null;
        updated();
    })

    row.append(divTitle);
    row.append(container);
    parent.append(row);
    parent.append(btnReturn);

    return parent;
}


"use strict";

const filterByMaterial = (key) => {
  console.log(state.wallie.wallie);
    return state.wallie.wallie.filter( (item) => {
                return item.tipos.toLowerCase() == key;
            });
}
