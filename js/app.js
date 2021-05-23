'use strict';
// Event Handler first step: window to DOM. 
let cookieForm = document.getElementById('cookie-form');
//global Variables within all objects.
let hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// get the element from the DOM  that has an ID of container - this will be my foothold
const myContatiner = document.getElementById('container');
const cookieTable = document.querySelector('table');
const cookieBody = document.getElementById('sales-table');
const cookieHead = document.getElementById('table-head');
//Made into Global variable to append to the footer. Look at the tables below. 
let footerNew = document.querySelector('footer');
let tfoot = document.createElement('tfoot');
let allStores = [];
let totalsArray = [];
console.log(cookieTable);
function City(name, min, max, avg) {
  this.cityName = name;
  this.minCustomers = min;
  this.maxCustomers = max;
  this.avgCookies = avg;
  this.cookieTotalDaily = 0;
  this.cookiesPerHourArray = [];
  allStores.push(this);
  this.render();
}
City.prototype.randomCustomers = function () {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
};

City.prototype.calcCookiesPerHour = function () {
  let cookiesPerHour = 0;
  for (let i = 0; i < hoursArray.length; i++) {
    cookiesPerHour = Math.round(this.randomCustomers() * this.avgCookies);
    this.cookiesPerHourArray.push(cookiesPerHour);
    this.cookieTotalDaily += cookiesPerHour;
  }
}

City.prototype.render = function () {
  this.calcCookiesPerHour();
  let tableRow = document.createElement('tr');
  let tableData = document.createElement('td');
  tableData.textContent = this.cityName;
  tableRow.appendChild(tableData);
  for (let i = 0; i < this.cookiesPerHourArray.length; i++) {
    let tableData = document.createElement('td');
    tableData.textContent = this.cookiesPerHourArray[i];
    tableRow.appendChild(tableData);
  }
  tableData = document.createElement('td');
  tableData.textContent = this.cookieTotalDaily;
  tableRow.appendChild(tableData);
  cookieBody.appendChild(tableRow);
};

function time() {
  let tableHeader = document.createElement('tr');
  let emptyHead = document.createElement('td');
  emptyHead.textContent = ' ';
  tableHeader.appendChild(emptyHead);
  for (let i = 0; i < hoursArray.length; i++) {
    let tableData = document.createElement('td');
    tableData.textContent = hoursArray[i];
    tableHeader.appendChild(tableData);
  }
  let total = document.createElement('td');
  total.textContent = 'Total Cookie Sales';
  tableHeader.appendChild(total);
  cookieHead.appendChild(tableHeader);
};
function tableFooter() {
  let tr = document.createElement('tr');
  let dataCell = document.createElement('td');
  dataCell.textContent = 'Sold Cookies >';
  tr.appendChild(dataCell);

  let grandTotal = 0;
  for (let i = 0; i < hoursArray.length; i++) {
    let columnTotal = 0;
    let dataCell = document.createElement('td');
    for (let j = 0; j < allStores.length; j++) {
      columnTotal += allStores[j].cookiesPerHourArray[i];
    }
    dataCell.textContent = columnTotal;
    grandTotal += columnTotal;
    tr.appendChild(dataCell);
  }
  dataCell = document.createElement('td');
  dataCell.textContent = grandTotal;
  tr.appendChild(dataCell);
  //   //loop over array for each hour,
  //   //Create a new cell, 
  // for (let j = 0; j < ;j++) {
  //   //loop over array of stores,
  //   //find each hour for each store,

  // totalInfo.appendChild(dataCell);
  tfoot.appendChild(tr);
  cookieTable.appendChild(tfoot);
  console.log(allStores);
}
function handleSubmit(event) {
  event.preventDefault();

  console.log('example here');
  let storeName = event.target.storename.value;
  let storeMinimum = +event.target.storeminimum.value;
  let storeMaximum = +event.target.storemaximum.value;
  let storeAverage = parseInt(+event.target.storeaverage.value);

  new City(storeName, storeMinimum, storeMaximum, storeAverage);
  // let newStore = [storeName, storeMinimum, storeMaximum, storeAverage];
  tfoot.innerHTML = '';
  tableFooter();
}



time();

new City('Seattle', 23, 65, 6.3);
new City('Tokyo', 3, 24, 1.2);
new City('Dubai', 11, 38, 3.7);
new City('Paris', 20, 38, 2.3);
new City('Lima', 2, 16, 4.6);

tableFooter();
cookieForm.addEventListener('submit', handleSubmit)
