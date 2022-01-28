var navMain = document.querySelector('.page-header__wrapper-nav');
var navToggle = document.querySelector('.page-header__toggle');
navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('page-header__wrapper-nav--closed')) {
  navMain.classList.remove('page-header__wrapper-nav--closed');
  navMain.classList.add('page-header--opened');
  } else {
    navMain.classList.add('page-header__wrapper-nav--closed');
    navMain.classList.remove('page-header--opened');
  }
});
