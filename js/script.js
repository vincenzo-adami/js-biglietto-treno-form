// inizializzazioni varibili contenuto DOM
const formElement = document.getElementById('ticket-form');
console.dir(formElement)

const distanceElement = document.getElementById('distance');
const ageElement = document.getElementById('age');
const priceSectionElement = document.getElementById('price-section');
const tDistanceElement = document.getElementById('t-distance')
const tAgeElement = document.getElementById('t-age')
const tPriceElement = document.getElementById('t-price');

// inizializzazione costante prezzo al km
const priceKm = 0.21;

// evento click sul pulsante
formElement.addEventListener('submit', function (event) {
  // blocco il comportamento di default del submit
  event.preventDefault()

  // inizializzazione varibili contente il value dell'input
  let distance = parseFloat(distanceElement.value);
  let age = ageElement.value;

  // inizializzaione prezzo finale biglieto
  let finalPrice = distance * priceKm;


  // verifico la possibilità di sconto e nel caso l'applico
  if (age === 'minorenne') {
    finalPrice = finalPrice * 0.8;
  }
  else if (age === 'over65') {
    finalPrice = finalPrice * 0.6;
  }

  // rendo visibile la section#price-section e aggiungo il valore al p#price

  priceSectionElement.classList.remove('d-none');
  tDistanceElement.innerHTML = (distance + 'km')
  tAgeElement.innerHTML = age;
  tPriceElement.innerHTML = '€' + finalPrice.toFixed(2);
})