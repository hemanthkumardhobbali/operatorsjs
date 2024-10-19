var x = 10;
var y = 5;
var result = (x + y) * 2 - 5;
console.log(result)

// o/p=25

var age = 20;
var message = (age >= 18 && age < 60) ? "Adult" : "Not an adult";
console.log(message)

// o/p=Adult


var x = 5;
var y = "5";
var comparison = (x == y) && (x !== y);
console.log(comparison)

// o/p=true


var price = 100;
var discount = 0.1;
var totalPrice = (price * (1 - discount)) > 50 ? "Expensive" : "Cheap";
console.log(totalPrice)

// o/p=Expensive

var a = 7;
var b = 14;
var condition = (a < b) || (a === b);
console.log(condition)

// o/p=true

var num = 4;
var result1= (num % 2 === 0) && typeof num === "number";
console.log(result1)

// o/p=true

var str = "Hello";
var isLong = (str.length > 5) ? true : false;
console.log(isLong)

// o/p=false

var x = 15;
var y = 5;
var result2 = x >= y ? x + y : x - y;
console.log(result2)

// o/p=20

var a = true;
var b = false;
var result3= a && b ? "Both true" : "One or both false";
console.log(result3)

// o/p=One or both false

var val = 50;
var result4= (val > 20) && (val < 100) ? "Within range" : "Out of range";
console.log(result4)

// o/p=Within range

var x = 12;
var y = 8;
var result5 = x > y ? (x + y) * 2 : (x - y) / 2;
console.log(result5)

// o/p=40

var temperature = 30;
var weather = temperature > 25 ? (temperature < 40 ? "Hot" : "Very Hot") : "Cool";
console.log(weather)

// o/p=Hot

var age = 16;
var category = (age >= 18) ? "Adult" : (age > 12) ? "Teen" : "Child";
console.log(category)

// o/p=Teen

var x = 5;
var y = 10;
var z = 15;
var result6 = (x + y > z) && (z % y === 0);
console.log(result6)

// 0/p=false

var isAdmin = true;
var isLoggedIn = false;
var message1 = isAdmin && isLoggedIn ? "Access granted" : "Access denied";
console.log(message1)

// o/p=Access denied



