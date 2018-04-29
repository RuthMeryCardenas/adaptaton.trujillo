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
            wrapper.append(addNewUser(updated));
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

    if(state.pagina == 1 ||state.pagina == 2 || state.pagina == 3 ){
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
