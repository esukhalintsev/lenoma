var navMain = document.querySelector('.top-menu');
var navToggle = document.querySelector('.top-menu__toggle');
var catMenu = document.querySelector('.categories');
var catToggle = document.querySelector('.categories__toggle');

navMain.classList.remove('top-menu--nojs');
navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('top-menu--closed')) {
    navMain.classList.remove('top-menu--closed');
    navMain.classList.add('top-menu--opened');
  } else {
    navMain.classList.add('top-menu--closed');
    navMain.classList.remove('top-menu--opened');
  }
});

catMenu.classList.remove('categories--nojs');
catToggle.addEventListener('click', function () {
  if (catMenu.classList.contains('categories--closed')) {
    catMenu.classList.remove('categories--closed');
    catMenu.classList.add('categories--opened');
  } else {
    catMenu.classList.add('categories--closed');
    catMenu.classList.remove('categories--opened');
  }
});
