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

// INFO DEFAULT
const ticketPriceKm = 0.21;
const discountUnder = 20;
const discounOver = 40;
//INPUT
const kmUser = parseFloat(kmUserElement.value);
const ageUser = parseInt(ageUserElement.value);
let ticketPrice = ticketPriceKm * kmUser;
