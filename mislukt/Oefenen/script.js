console.log("Hello world!");



// Om te beginnen gaan we de URL opslaan van de JSON die we willen ophalen in een variabele.Voeg het volgende toe onderaan uw JavaScript - code:
  var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json'


// Om een ​​aanvraag te maken, moeten we een nieuw instantie van het aanvraagobject van de XMLHttpRequestconstructor maken met behulp van het newtrefwoord. Voeg het volgende toe onder je laatste regel:
var request = new XMLHttpRequest();

// Nu moeten we een nieuw verzoek openen met behulp van de open()methode. Voeg de volgende regel toe:
request.open('GET', requestURL);

request.responseType = 'json';
request.send();


request.onload = function() {
  var superHeroes = request.response;
  populateHeader(superHeroes);
  showHeroes(superHeroes);
}
