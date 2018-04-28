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
