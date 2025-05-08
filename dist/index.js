"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function formatString(input, toUpper) {
    if (toUpper === true) {
        return input.toUpperCase();
    }
    else if (toUpper === false) {
        return input.toLowerCase();
    }
    else {
        return input.toUpperCase();
    }
}
console.log(formatString("Hello"));
console.log(formatString("Hello", true));
console.log(formatString("Hello", false));
function filterByRating(items) {
    const filteredItem = items.filter((item) => item.rating >= 4);
    return filteredItem;
}
const result = filterByRating([
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
]);
console.log(result);
function concatenateArrays(...array) {
    return [].concat(...array);
}
console.log(concatenateArrays(["a", "b"], ["c"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));
class Vehicle {
    constructor(make, year) {
        this._make = make;
        this._year = year;
    }
    getInfo() {
        console.log(`Make: ${this._make}, year: ${this._year}`);
    }
}
class Car extends Vehicle {
    constructor(make, year, model) {
        super(make, year);
        this._model = model;
    }
    getModel() {
        console.log(`Model: ${this._model}`);
    }
}
const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();
myCar.getModel();
function processValue(value) {
    if (typeof value === "string") {
        return value.length;
    }
    else if (typeof value === "number") {
        return value * 2;
    }
    return 0;
}
console.log(processValue("Hello"));
console.log(processValue(10));
function getMostExpensiveProduct(products) {
    if (!products.length) {
        return null;
    }
    const hightPrice = products.sort((a, b) => b.price - a.price);
    const product = hightPrice[0];
    return product;
}
const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
];
console.log(getMostExpensiveProduct(products));
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
function getDayType(day) {
    if (day === Day.Saturday || day === Day.Sunday) {
        return "Weekend";
    }
    else {
        return "Weekday";
    }
}
console.log(getDayType(Day.Monday));
console.log(getDayType(Day.Saturday));
function squareAsync(n) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (n < 0) {
                    reject(new Error("Negative number not allowed"));
                }
                else {
                    resolve(n * n);
                }
            }, 1000);
        });
    });
}
squareAsync(4).then(console.log).catch(console.error);
