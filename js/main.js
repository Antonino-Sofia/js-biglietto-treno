// TICKET GEN
const generateTicket = document.getElementById("generate-ticket");
//KM
const kmUserElement = document.getElementById("km-user");
//AGE
const ageUserElement = document.getElementById("age-user");
//INFO
const kmInfoElement = document.getElementById("km-info");
const ageInfoElement = document.getElementById("age-info");
const priceInfoElement = document.getElementById("price-info");
const discountInfoElement = document.getElementById("discount-info");

console.log(kmInfoElement);
console.log(ageInfoElement);
console.log(priceInfoElement);

generateTicket.addEventListener("submit", function (e) {
  e.preventDefault();

  // INFO DEFAULT
  const ticketPriceKm = 0.21;
  const discountUnder = 20;
  const discounOver = 40;
  //INPUT
  const kmUser = parseFloat(kmUserElement.value);
  const ageUser = parseInt(ageUserElement.value);
  let ticketPrice = ticketPriceKm * kmUser;

  //SCONTO
  let discount = 0;

  if (ageUser < 18) {
    discount = (ticketPrice * discountUnder) / 100;
  } else if (ageUser >= 65) {
    discount = (ticketPrice * discounOver) / 100;
  }

  ticketPrice = ticketPrice - discount;
  console.log(ticketPrice);

  const ticketPriceFormatted = ticketPrice.toFixed(2);
  console.log(`Il prezzo del biglietto è ${ticketPriceFormatted}€`);

  //OUTPUT
  kmInfoElement.innerText = kmUser;
  ageInfoElement.innerText = ageUser;
  priceInfoElement.innerText = ticketPriceFormatted;
  discountInfoElement.innerText = `Sconto applicato: ${discount}`;
});
