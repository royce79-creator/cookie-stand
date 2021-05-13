'use strict'
//global Variables within all objects.
let hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let places = ['Seattle','Tokyo','Dubai','Paris','Lima'];
const seattleList = document.getElementById('seattle-list');
const tokyoList = document.getElementById('tokyo-list');
const dubaiList = document.getElementById('dubai-list');
const parisList = document.getElementById('paris-list');
const limaList = document.getElementById('lima-list');

let seattle = {
  min: 23,
  max: 65,
  dailyTotal: 0,
  averageCookieSaleEachHourArray: [],
  avg: 6.3,
  getCustomerPerHour: function () {
    return Math.ceil(math.random() * (this.max - this.min + 1) + this.min);
  },
  salesDaily: function() {
    for (let i = 0; i < hoursArray.length; i++) {
      let 
      let randomSale = Math.ceil(this.getCustomerPerHour() * this.avg); 
      this.averageCookieSaleEachHourArray.push`${hoursArray[i]}` 
    }
  }
  calcCookiesPerHour: function () {
    let custThisHour = this.getCustomerPerHour();
    let cookiesSoldThisHour = math.ceil(custThisHour * this.avg);
    console.log('I am in the calcCookiesPerHour method custThisHour: ', custThisHour, 'cookiesSoldThisHour', cookiesSoldThisHour);
  },
}; 
// cookiesPerHour: function() {
//   let perHour = [];
//   for (let i = 1; i < hours.length + 1; i++){
//     let cookies = location * this.getRandomNumberCustomers();
//     perHour.push(`Estimated cookies: ${cookies} at ${hours[i]}`);
//   }
//   return perHour;
// };

// let tokyo = {
//   min: 3,
//   max: 24,
//   dailyTotal: 0,
//   averageCookieSaleEachHourArray: [],
//   avg: 6.3
// };

// let dubai = {
//   minCustomers: 11,
//   maxCustomers: 38,
//   averageCookieSale: 3.7
// } 

// let paris = {
//   minCustomers: 20,
//   maxCustomers: 38,
//   averageCookieSale: 2.3
// }

// let lima = {
//   minCustomers: 2,
//   maxCustomers: 16,
//   averageCookieSale: 4.6
// }


//WIP atm will work on it later. 
