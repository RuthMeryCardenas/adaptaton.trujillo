"use strict";

const Item = (item, icon, content) => {
  const li = $('<li></li>');
  const header = $('<div class="collapsible-header"><i class="material-icons">' + icon + '</i>' + item +'</div>');
  const body = $('<div class="collapsible-body"><span>' + content +'</span></div>');

  li.append(header);
  li.append(body);

  return li;
}

const NavbarDesktop = () => {
  const nav = $('<nav></nav>');
  const nav_wrapper = $('<div class="nav-wrapper"></div>');
  const logo = $('<a href="#" class="brand-logo">Logo</a>');
  const menu = $('<a href="#" data-activates="slide-out" class="button-collapse"><i class="material-icons">menu</i></a>');
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

   ul.append(Item("Familiares", "people", "Lorem ipsum dolor sit amet."));
   ul.append(Item("Mi estado", "accessibility", "Lorem ipsum dolor sit amet."));
   ul.append(Item("Alertas", "add_alert", "Lorem ipsum dolor sit amet."));
   container.append(ul);

  return container;
}

const Header = (updated) => {
  const header = $('<div></div>');

   header.append(NavbarDesktop());
   header.append(NavbarMobile());

  return header;
}
