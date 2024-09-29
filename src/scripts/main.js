'use strict';
const body = document.querySelector('body');
const sidebar = body.querySelector('.sidebar');
const headerArr = body.querySelector('.header__item-arr');

function toggleCloseClass() {
  if (sidebar) {
    if (window.innerWidth <= 970) {
      sidebar.classList.add('close');
    } else {
      sidebar.classList.remove('close');
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  toggleCloseClass();
  window.addEventListener('resize', toggleCloseClass);
});

headerArr.addEventListener('click', () =>{
  sidebar.classList.toggle('close');
});
