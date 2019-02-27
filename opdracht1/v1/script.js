var knoproze = document.querySelector('fieldset > input[name="roze"]');
var knopzwart = document.querySelector('fieldset > input[name="zwart"]');

var main = document.querySelector('main');
var zwartefoto = document.querySelector('[name="zwartefoto"]');

knopzwart.addEventListener('click', function(){
  main.classList.toggle('zwart');
});

knoproze.addEventListener('click', function(){
  main.classList.toggle('roze');
});
