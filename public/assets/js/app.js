"use strict";


const root = $(".root");
const render = (root) => {
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');

    switch (state.pagina) {
        case null:
            wrapper.append($('<div class="logo"></div>'));
            wrapper.append(Login(updated));
            break;
        case 1:
            wrapper.append(Header(updated));
            wrapper.append(Recicla(updated));
            break;
        case 2:
            wrapper.append(Header(updated));
            wrapper.append(MapaRecicla(updated));
            break;
        case 3:
            wrapper.append(Header(updated));
            wrapper.append(RutaRecicla(updated));
            break;
        case 4:
            wrapper.append(Header(updated));
            wrapper.append(addNewUser(updated));
            break;
        case 5:
            wrapper.append(Header(updated));
            wrapper.append(FormReport(updated));
            break;
        case 6:
            wrapper.append(Header(updated));
            wrapper.append(Message(updated));
            break;
        case 7:
            wrapper.append(Header(updated));
            wrapper.append(Perfil(updated));
            break;
        case 8:
            wrapper.append(Header(updated));
            wrapper.append(TipDetail(updated));
            break;
    };

    root.append(wrapper);

    if(state.pagina !=  null ){
      $(".button-collapse").sideNav({
        menuWidth: 250
      });
      $('.collapsible').collapsible();
    }

    if(state.pagina == 1 || state.pagina == 2 || state.pagina == 3 || state.pagina == 4 || state.pagina == 5 || state.pagina == 7){
      initMap();
    }
    // if(state.pagina == 5){
    //     var input = document.getElementById("ubicacion");
    //     new google.maps.places.Autocomplete(input);
    //     timepicker();
    // }

}

const updated = function () {
    render(root);
}
const state = {
    pagina: null,
}


$(_ => {
  var config = {
    apiKey: "AIzaSyANNgx5qKtM-KP93_zbvhHhp270mLK5LaU",
    authDomain: "chasquihuayco.firebaseapp.com",
    databaseURL: "https://chasquihuayco.firebaseio.com",
    projectId: "chasquihuayco",
    storageBucket: "chasquihuayco.appspot.com",
    messagingSenderId: "26429072736"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
    database.ref().on("value", function(snap){

        state.chasqui = snap.val();
        console.log(state);

        const root = $(".root");
        render(root);

    });
});

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

"use strict";

const ItemFamiliares = () => {
  const li = $('<li></li>');
  const header = $('<div class="collapsible-header"><i class="material-icons">people</i>Familiares</div>');
  const body = $('<div class="collapsible-body"></div>');
  const ul = $('<ul></ul>');
  const subItem1 = $('<li><a href="#!"><i class="material-icons">location_on</i>Ubicar</a></li>');
  const subItem2 = $('<li><a href="#!"><i class="material-icons">add</i>Agregar</a></li>');

  subItem1.on("click", (e) => {
      e.preventDefault();
      state.pagina = 2;
      updated();
  });

  subItem2.on("click", (e) => {
    e.preventDefault();
    state.pagina = 4;
    updated();
  });

  ul.append(subItem1);
  ul.append(subItem2);
  body.append(ul);

  li.append(header);
  li.append(body);

  return li;
}

const ItemPerfil = () => {
  const li = $('<li></li>');
  const header = $('<div class="collapsible-header"><i class="material-icons">settings</i>Perfil</div>');
  const body = $('<div class="collapsible-body"></div>');
  const ul = $('<ul></ul>');
  const subItem1 = $('<li><a href="#!"><i class="material-icons">security</i>Status</a></li>');

  subItem1.on("click", (e) => {
      e.preventDefault();
      state.pagina = 7;
      updated();
  });

  ul.append(subItem1);
  body.append(ul);

  li.append(header);
  li.append(body);

  return li;
}

const ItemAlert = () => {
  const li = $('<li></li>');
  const header = $('<div class="collapsible-header"><i class="material-icons">add_alert</i>Alertas</div>');
  const body = $('<div class="collapsible-body"></div>');
  const ul = $('<ul></ul>');
  const subItem1 = $('<li><a href="#!"><i class="material-icons">report_problem</i>Reportar</a></li>');

  subItem1.on("click", (e) => {
      e.preventDefault();
      state.pagina = 5;
      updated();
  });

  ul.append(subItem1);
  body.append(ul);

  li.append(header);
  li.append(body);

  return li;
}

const Item = (item, icon, content) => {
  const li = $('<li></li>');
  const header = $('<div class="collapsible-header"><i class="material-icons">' + icon + '</i>' + item +'</div>');
  const body = $('<div class="collapsible-body"><span>' + content +'</span></div>');
  const ul = $('<ul></ul>');
  const subItem1 = $('<li><a href="#!"><i class="material-icons">location_on</i>Ubicacion</a></li>');

  subItem1.on("click", (e) => {
    e.preventDefault();
    state.pagina = 7;
    updated();
  });

  li.append(header);
  li.append(body);

  return li;
}

const NavbarDesktop = () => {
  const nav = $('<nav class="white"></nav>');
  const nav_wrapper = $('<div class="nav-wrapper"></div>');
  const logo = $('<a href="#" class="brand-logo">Logo</a>');
  const menu = $('<a href="#" data-activates="slide-out" class="button-collapse"><i class="material-icons text-black">menu</i></a>');
  const nav_mobile = $('<ul id="nav-mobile" class="right hide-on-med-and-down"></ul>');
  const item1 = $('<li><a href="sass.html">Familiares</a></li>');
  const item2 = $('<li><a href="badges.html">Mi estado</a></li>');
  const item3 = $('<li><a href="collapsible.html">Reportar</a></li>');
  

   nav_mobile.append(item1);
   nav_mobile.append(item2);
   nav_mobile.append(item3);

   nav_wrapper.append(logo);
   nav_wrapper.append(menu);
   nav_wrapper.append(nav_mobile);
   nav.append(nav_wrapper);

  return nav;
}

const NavbarMobile = () => {
  const container = $('<div id="slide-out" class="side-nav"></div>');
  const ul = $('<ul class="collapsible" data-collapsible="accordion"></ul>');
  // const item2 = $(Item("Mi Perfil", "accessibility", "Estado"));
  // const item3 = $(Item("Alertas", "add_alert", "Lorem ipsum dolor sit amet."));

 ul.append(ItemFamiliares);
 ul.append(ItemPerfil);
 ul.append(ItemAlert);
 container.append(ul);

  return container;
}

const Header = (updated) => {
  const header = $('<div></div>');

   header.append(NavbarDesktop());
   header.append(NavbarMobile());

  return header;
}

"use strict";


const Home = (updated) => {

    const parent = $('<div class="center-align fondo"></div>');
    const btnRecicle = $('<div class="recicla"><a class="waves-effect waves-light btn-large actions"><i class="icon-recycle"></i>Ubica a tu familiar</a></div><br>');
    const btnPoint = $('<div class="recicla"><a class="waves-effect waves-light btn-large actions"><i class="icon-map-pin"></i>Reportar</a></div><br>');
    const btnTips = $('<div class="recicla"><a class="waves-effect waves-light btn-large actions"><i class="icon-lightbulb"></i>Mi estado</a></div><br>');

    parent.append(btnRecicle);
    parent.append(btnPoint);
    parent.append(btnTips);

    btnRecicle.on("click", (e) => {
        e.preventDefault();
        state.pagina = 2;
        updated();
    });
    btnPoint.on("click", function (e) {
        e.preventDefault();
        state.pagina = 5;
        updated();
    });
    btnTips.on("click", function (e) {
        e.preventDefault();
        state.pagina = 7;
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
                zoom: 17,
                center: pos
            });

            var image = 'https://user-images.githubusercontent.com/25912796/39406946-51ede3c8-4b84-11e8-949d-0de4cd97d340.png';
            var marker = new google.maps.Marker({
                position: pos,
                map: map,
                title: 'Click to zoom'
                // icon: image
            });

            if(state.pagina == 2 ){
                var markers = state.locations.family.map(function (location) {
                    var contentString = '<div id = "content"><p>'+location.kin+'</p><p> Esta '+location.status+'</p></div>';
                    var infowindow = new google.maps.InfoWindow({
                        content: contentString
                    });
                    if( (location.latitud && location.longitud) == null){
                        return console.log(' No se encontro la ubicación de ' + location.kin);
                    }
                    const newMarker = new google.maps.Marker({
                        position: {lat: location.latitud, lng: location.longitud},
                        map:map,
                        icon: location.avatar
                    })
                    newMarker.addListener("click", function(){
                        infowindow.open(map, newMarker);

                    });

                    return newMarker;
                });
            }

            if (state.pagina == 3) {
                marker.setMap(null);
                calculateAndDisplayRoute(pos, map);
            }
            if (state.pagina == 5){
                map.addListener('center_changed', function() {
                // 3 seconds after the center of the map has changed, pan back to the
                // marker.
                window.setTimeout(function() {
                    map.panTo(marker.getPosition());
                }, 3000);
                });

                marker.addListener('click', function() {
                map.setZoom(8);
                map.setCenter(marker.getPosition());
                });
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

    const btnSignIn = $('<div class="recicla"><a class="waves-effect waves-light red btn-large actions">Ingresar</a></div><br>');

    parent.append(field);
    parent.append(btnSignIn);

    btnSignIn.on("click", (e) => {
        e.preventDefault();
        let user = input.val();

        if (findUser(user).length > 0) {
          state.user = findUser(user)[0];
          state.pagina = 1;
          console.log("Usuario registrado");
        } else {
          console.log("Usuario no registrado");
        }
        updated();
    });

    return parent;

}

"use strict";

const MapaRecicla = (updated) => {
  const tipos = [ { name: "Mamá", img: "icon-bowling-pins" },
                  { name: "Papá", img: "icon-wine" },
                  { name: "Hermana", img: "icon-megaphone" },
                  { name: "Hijx", img: "icon-caution" },
                  { name: "Amigx", img: "icon-box2" }];

    const parent = $('<div></div>');
    const row = $('<div class="row bg_green_ligth"></div>');
    const mapa = $('<div id="mapa" class="row"></div>');

    const btnReturn = $('<div class = "col s5 push-s3"><a class="waves-effect waves-light btn-large">Volver</a></div>');
    const btnAdd = $('<div class="bg_green_ligth1 col s3"><a class="waves-effect waves-light btn-large actions">+</a></div>');

    tipos.forEach(function(type){
        const divContent = $('<div class="center-align col s4" data-id = "'+ type.name + '"></div>');
        const img = $('<a class="waves-effect waves-light btn"><i class="'+ type.img+'"></i></a>');
        const h5 = $('<h6 class="morado">'+ type.name + '</h6>');

        divContent.append(img);
        divContent.append(h5);
        row.append(divContent);

        divContent.on("click", (e) => {
            e.preventDefault();
            state.family = $(e.currentTarget).data("id").toLowerCase();
            state.locations = filterByMaterial(state.family);
            state.selectedLocation = state.locations[0];
            state.pagina = 3;
            updated();
        });
    });

    parent.append(row);
    parent.append(mapa);

    btnReturn.on("click", (e) => {
        e.preventDefault();
        state.pagina = state.pagina-1;
        state.material = null;
        state.locations = null;
        updated();
    });
    btnAdd.on("click", (e) => {
        e.preventDefault();
        state.pagina = 4;
        updated();
    });

    parent.append(btnReturn, btnAdd);

    return parent;
}

const Perfil = (updated) => {
    console.log(state);
    const parent = $('<div class="container"></div>');
    const row = $('<div class="row bg_green_ligth"></div>');
    const divTitle = $('<div class="center-align col s12 recicla"><h5>Perfil</h5></div>');
    const container = $('<div class="center-align col s12 cont_optciones"></div>');
    const btnReturn = $('<div class="flex"><a class="waves-effect waves-light btn-large actions">Volver</a></div>');
    const btnSave = $('<div class="flex"><a class="waves-effect waves-light btn-large actions">Guardar</a></div>');
    const form  = $('<form action="#" class="col s12"></form>)');
    const int_1 = $('<div class="input-field col s10"></div>');
    const int_11 = $('<i  class="material-icons prefix">account_circle</i>');
    const int_12 = $(`<input id="icon_prefix" type="text" class="validate dataMust" value="${state.chasqui.perfil.name}">`);
    const int_13 = $('<label for="icon_prefix" class="active">Nombre</label>');
    int_1.append(int_11,int_12,int_13) ;
    const int_2 =$('<div class="input-field col s10"></div>');
    const int_21=$('<i class="material-icons prefix">account_circle</i>');
    const int_22=$(`<input id="icon_prefix" type="number" class="validate dataMust " value="${state.chasqui.perfil.phone}">`);
    const int_23 =$('<label for="icon_prefix" class="active">Teléfono</label>');
    int_2.append(int_21,int_22,int_23);
    const label_radio = ('<label for="icon_prefix" class="active">Estado</label>');
    form.append(label_radio);
    const mapa = $('<div id="mapa" class="col s12"></div>');


    ['A Salvo', 'Fuera de Peligro', 'Necesito ayuda'].map( item => {
        const p = $('<p></p>');
        const label = $('<label></label>');
        const status = state.chasqui.perfil.status;
        const input = $('<input class="with-gap" name="group1" type="radio" />');
        if (item == state) {
            input.attr("checked", true);
        }
        const span = $(`<span>${item}</span>`);
        label.append(input, span);
        p.append(label);
        form.append(p);
    })

    const divText = $('<div class="input-field col s12"></div>');
    const textA = $(`<textarea id="textarea1" class="materialize-textarea">${state.chasqui.perfil.message}</textarea>`);
    const label = $('<label for="textarea1" class="active">Textarea</label>');
    divText.append(textA, label);

    btnReturn.on("click", (e) => {
        e.preventDefault();
        state.pagina = 1;
        updated();
    })

    btnSave.on("click", (e) => {
        e.preventDefault();

        var database = firebase.database();
        var referencia = database.ref('perfil/');
        

        referencia.set({
            name: int_12.val(),
            phone: int_22.val(),
            message: textA.val(),
        });
    
        state.pagina = 1;
        updated();
    })

    row.append(btnReturn);
    row.append(divTitle);
    row.append(int_1, int_2, form, divText);
    row.append(container);
    parent.append(row);
    parent.append(btnSave);

    return parent;
}


"use strict";

const Recicla = (updated) => {
    const parent = $('<div class="home container"></div>');
    const mapa = $('<div id="mapa" class="col s12"></div>');
    const btnReturn = $('<div class="bg_green_ligth1 col s3"><a class="waves-effect waves-light btn-large grey darken-2 actions"><i class="material-icons">arrow_back</i></a></div>');

    state.locations = state.chasqui.family;

    btnReturn.on("click", (e) => {
        e.preventDefault();
        state.pagina = 1
        state.material = null;
        state.locations = null;
        updated();
    });

    parent.append(mapa);
    parent.append(btnReturn);

    return parent;
};

"use strict";

const RutaRecicla = (updated) => {
  const tipos = [ { name: "Mamá", img: "icon-bowling-pins" },
                  { name: "Papá", img: "icon-wine" },
                  { name: "Hermana", img: "icon-megaphone" },
                  { name: "Hijx", img: "icon-caution" },
                  { name: "Amigx", img: "icon-box2" }];

    const parent = $('<div class=""></div>');
    const row = $('<div class="row bg_green_ligth"></div>');
    const mapa = $('<div id="mapa"></div>');
    const detail = $('<div class=""></div>');
    const btnReturn = $('<div class="back flex"><a class="waves-effect waves-light btn-large">Volver</a></div>');

    tipos.forEach(function(type){
        const divContent = $('<div class="center-align col s4" data-id = "'+ type.name + '"></div>');
        const img = $('<a class="waves-effect waves-light btn"><i class="'+ type.img+'"></i></a>');
        const h5 = $('<h6 class="morado">'+ type.name + '</h6>');

        divContent.append(img);
        divContent.append(h5);
        row.append(divContent);

        divContent.on("click", (e) => {
            e.preventDefault();
            state.family = $(e.currentTarget).data("id").toLowerCase();
            state.locations = filterByMaterial(state.family);
            state.selectedLocation = state.locations[0];
            state.pagina = 3;
            updated();
        });
    });

    parent.append(row);
    parent.append(mapa);
    parent.append(detail);

    btnReturn.on("click", (e) => {
        e.preventDefault();
        state.pagina = state.pagina - 1;
        state.selectedLocation = null;
        updated();
    });
    parent.append(btnReturn);

    return parent;

}

'use strict';

const Message = (update) => {

  const divCont_end = $('<div class="text-center"></div>');
    const row1      = $('<div class="row"></div>');
    const logo      = $('<div class="col s10 center-align"><img src="assets/img/familia.jpg"  alt="Familia Segura" class="img-responsive"></div>');
    const cont_text = $('<div class="col s12"><h4 class="center-align">¡Bien!<br>Tu familiar ahora esta seguro</h4></div>');

    row1.append(logo);
    row1.append(cont_text);
    divCont_end.append(row1) ;

    setTimeout(function(){
      state.pagina = 1;
      update();}, 5000);

  return divCont_end;
}


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
