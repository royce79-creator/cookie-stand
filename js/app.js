'use strict';
//global Variables within all objects.
// const seattleList = document.getElementById('seattle-list');
let hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const cookieTable = document.querySelector('table');
let allStores = [];
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
  cookieTable.appendChild(tableRow);
};

function time() {
  let table = document.getElementById('sales-table') 
  console.log(table);
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
  table.appendChild(tableHeader);
};
function tableFooter() {
  let foot = document.getElementById('sales-table');
  let totalInfo = document.createElement('tr');
  let dataCell = document.createElement('td'); 
  dataCell.textContent = 'Sold Cookies >';
  // for (let i = 0; i < ;i++) {
  //   //loop over array for each hour,
  //   //Create a new cell, 
  //   for (let j = 0; j < ;j++) {
    //loop over array of stores,
    //find each hour for each store,

  //   }
  // }
  totalInfo.appendChild(dataCell);
  foot.appendChild(totalInfo);
}
console.log(allStores);

time();

new City('Seattle', 23, 65, 6.3);
new City('Tokyo', 3, 24, 1.2);
new City('Dubai', 11, 38, 3.7);
new City('Paris', 20, 38, 2.3);
new City('Lima', 23, 65, 4.6);

tableFooter();
