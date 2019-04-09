var body = document.querySelector('body');
var actionKnop = document.querySelector('.action');
var adventureKnop = document.querySelector('.adventure');
var crimeKnop = document.querySelector('.crime');
var dramaKnop = document.querySelector('.drama');
var horrorKnop = document.querySelector('.horror');
var thrillerKnop = document.querySelector('.thriller');


actionKnop.addEventListener('click', function(){
    body.classList.remove
  body.classList.toggle('action');
});

adventureKnop.addEventListener('click', function(){
  body.classList.toggle('adventure');
});

crimeKnop.addEventListener('click', function(){
  body.classList.toggle('crime');
});

dramaKnop.addEventListener('click', function(){
  body.classList.toggle('drama');
});

horrorKnop.addEventListener('click', function(){
  body.classList.toggle('horror');
});

thrillerKnop.addEventListener('click', function(){
  body.classList.toggle('thriller');
});



