'use strict'
//global Variables within all objects.
// const seattleList = document.getElementById('seattle-list');
let hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const mainContainer = document.getElementById('container');
const cookieTable = document.querySelector('table');
allCityCookies = [];
function City(name, min, max, avg) {
  this.cityName = name;
  this.minCustomers = min;
  this.maxCustomers = max;
  this.avgCookies = avg;
  this.hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
  this.cookieTotalDaily = 0; 
  this.cookiesPerHourArray = [];
  this.randomCustomers = function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  };
  this.calcCookiesPerHour = function() {
    let cookiesPerHour = 0;
    for (let i = 0; this.hours.length; i++) {
      cookiesPerHour = Math.round(this.randomCustomers() * this.avgCookies);
      this.cookiesPerHourArray.push(cookiesPerHour);
      this.cookieTotalDaily += cookiesPerHour;
    }
  }
};
this.render = function() {
  this.calcCookiesPerHour();
  let tableRow = document.createElement('tr');
  let tableData = document.createElement('td');
  tableData.textContent = this.cityName;
  tableRow.appendChild(tableData);
  for (let i =0; i < this.cookiesPerHourArray.length; i++) {
    hoursArray[i]
  tbody.appendChild(tr);
  tbody.appendChild(td);
}







// function opHours() {
//   let thead = document.createElement('thead');
//   let tr = document.createElement('tr');
// }
// City.prototype.render = function () {
//   let tr = document.createElement('tr');
//   let td = document.createElement('td');
//   td.textContent = this.City
//   for (let i = 0; i < hoursArray.length; i++) {
// }
//   function renderAll() {
//   tr = document.createElement('tr'); 
//   for (let i = 0; i < hoursArray.length; i++){
//   let td = document.createElement('td');
//   td.textContent = `${hoursArray[i]}`;
//   tr.appendChild(td);
//   }
//   cookieTable.appendChild(tr);
//   }
// };
let seattle = new City('Seattle', 23, 65, 6.3);
let tokyo = new City('Tokyo', 3, 24, 1.2);
let dubai = new City('Dubai', 11, 38, 3.7);  
let paris = new City('Paris', 20, 38, 2.3);
let lima = new City('Lima', 23, 65, 4.6);
