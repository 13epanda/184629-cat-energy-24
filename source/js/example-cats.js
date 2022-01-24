const range = document.querySelector('#condition');
const catBefore = document.querySelector('.example__cat--before');
const catAfter= document.querySelector('.example__cat--after');


range.addEventListener('input', function(e) {
  const value = e.target.value;
  catBefore.style.width = (100 - value) + '%';
  catAfter.style.width = value + '%';
})
