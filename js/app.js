'use strict'
//global Variables within all objects.
let hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let places = ['Seattle','Tokyo','Dubai','Paris','Lima'];

const seattleList = document.getElementById('seattle-list');
let seattle = {
  min: 23,
  max: 65,
  dailyTotal: 0,
  averageCookieSaleEachHourArray: [],
  avg: 6.3,
  getCustomerPerHour: function() {
    return Math.ceil(Math.random() * (this.max - this.min + 1) + this.min);
  },
  salesDaily: function() {
    for (let i = 0; i < hoursArray.length; i++) {
      let randomSale = Math.ceil(this.getCustomerPerHour() * this.avg); 
      this.averageCookieSaleEachHourArray.push(`${hoursArray[i]}: ${randomSale}`);
      this.dailyTotal += randomSale;
      let li = document.createElement('li');
      li.textContent = `(${this.averageCookieSaleEachHourArray[i]}) - cookies sold.`;
      seattleList.appendChild(li);
    }
    let totalList = document.createElement('li');
    totalList.textContent = `Daily Total: (${this.dailyTotal}) - cookies sold`;
    seattleList.appendChild(totalList);
  }
}; 
seattle.salesDaily();
console.log(seattle);
const tokyoList = document.getElementById('tokyo-list');
let tokyo = {
  min: 3,
  max: 24,
  dailyTotal: 0,
  averageCookieSaleEachHourArray: [],
  avg: 1.2,
  getCustomerPerHour: function() {
    return Math.ceil(Math.random() * (this.max - this.min + 1) + this.min);
  },
  salesDaily: function() {
    for (let i = 0; i < hoursArray.length; i++) {
      let randomSale = Math.ceil(this.getCustomerPerHour() * this.avg); 
      this.averageCookieSaleEachHourArray.push(`${hoursArray[i]}: ${randomSale}`);
      this.dailyTotal += randomSale;
      let li = document.createElement('li');
      li.textContent = `(${this.averageCookieSaleEachHourArray[i]}) - cookies sold.`;
      tokyoList.appendChild(li);
    }
    let totalList = document.createElement('li');
    totalList.textContent = `Daily Total: (${this.dailyTotal}) - cookies sold`;
    tokyoList.appendChild(totalList);
  }
}; 
tokyo.salesDaily();
  // calcCookiesPerHour: function() {
  //   let custThisHour = this.getCustomerPerHour();
  //   let cookiesSoldThisHour = math.ceil(custThisHour * this.avg);
  //   console.log('I am in the calcCookiesPerHour method custThisHour: ', custThisHour, 'cookiesSoldThisHour', cookiesSoldThisHour);
const dubaiList = document.getElementById('dubai-list');
let dubai = {
  min: 11,
  max: 38,
  dailyTotal: 0,
  averageCookieSaleEachHourArray: [],
  avg: 3.7,
  getCustomerPerHour: function() {
    return Math.ceil(Math.random() * (this.max - this.min + 1) + this.min);
  },
  salesDaily: function() {
    for (let i = 0; i < hoursArray.length; i++) {
      let randomSale = Math.ceil(this.getCustomerPerHour() * this.avg); 
      this.averageCookieSaleEachHourArray.push(`${hoursArray[i]}: ${randomSale}`);
      this.dailyTotal += randomSale;
      let li = document.createElement('li');
      li.textContent = `(${this.averageCookieSaleEachHourArray[i]}) - cookies sold.`;
      dubaiList.appendChild(li);
    }
    let totalList = document.createElement('li');
    totalList.textContent = `Daily Total: (${this.dailyTotal}) - cookies sold`;
    dubaiList.appendChild(totalList);
  }
}; 
dubai.salesDaily();

const parisList = document.getElementById('paris-list');
let paris = {
  min: 20,
  max: 38,
  dailyTotal: 0,
  averageCookieSaleEachHourArray: [],
  avg: 2.3,
  getCustomerPerHour: function() {
    return Math.ceil(Math.random() * (this.max - this.min + 1) + this.min);
  },
  salesDaily: function() {
    for (let i = 0; i < hoursArray.length; i++) {
      let randomSale = Math.ceil(this.getCustomerPerHour() * this.avg); 
      this.averageCookieSaleEachHourArray.push(`${hoursArray[i]}: ${randomSale}`);
      this.dailyTotal += randomSale;
      let li = document.createElement('li');
      li.textContent = `(${this.averageCookieSaleEachHourArray[i]}) - cookies sold.`;
      parisList.appendChild(li);
    }
    let totalList = document.createElement('li');
    totalList.textContent = `Daily Total: (${this.dailyTotal}) - cookies sold`;
    parisList.appendChild(totalList);
  }
}; 
paris.salesDaily();

const limaList = document.getElementById('lima-list');
let lima = {
  min: 23,
  max: 65,
  dailyTotal: 0,
  averageCookieSaleEachHourArray: [],
  avg: 4.6,
  getCustomerPerHour: function() {
    return Math.ceil(Math.random() * (this.max - this.min + 1) + this.min);
  },
  salesDaily: function() {
    for (let i = 0; i < hoursArray.length; i++) {
      let randomSale = Math.ceil(this.getCustomerPerHour() * this.avg); 
      this.averageCookieSaleEachHourArray.push(`${hoursArray[i]}: ${randomSale}`);
      this.dailyTotal += randomSale;
      let li = document.createElement('li');
      li.textContent = `(${this.averageCookieSaleEachHourArray[i]}) - cookies sold.`;
      limaList.appendChild(li);
    }
    let totalList = document.createElement('li');
    totalList.textContent = `Daily Total: (${this.dailyTotal}) - cookies sold`;
    limaList.appendChild(totalList);
  }
}; 
lima.salesDaily();
//New changes
