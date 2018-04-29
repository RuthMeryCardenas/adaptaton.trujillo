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