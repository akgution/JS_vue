// alert("Hello");
// const name = "ksu"
// let age = 16;
// const isStudent  = true;
//
// console.log(isStudent);

//+-
// * / % **

// let num1 = prompt("Enter a number");
// let num2 = prompt("Enter a number");
//
// console.log(Number(num1) + Number(num2));
// console.log((num1-0) + (num2-0));
//
// let num3 = 133
// console.log(typeof String(num3));

let productName = prompt("Enter your product name");
let productPrice = + prompt("Enter your product price");
let productCount = + prompt("Enter your product count");
let delivery  = + prompt("Enter your delivery price");
let discount = + prompt("Enter a discount percentage (%)");
let personalMoney = + prompt("Enter your budget");

let totalPrice = productPrice + productCount + delivery;
let finalPrice = totalPrice - (totalPrice * discount / 100);
let moneyleft = personalMoney - finalPrice;

console.log(`Product Name: ${productName} na sumu: ${finalPrice}, discount: ${discount}%`);
console.log(`Personal Money: ${personalMoney}, money left: ${moneyleft}`);
alert("Product is: " + productName + "\n" + "Start price:" + totalPrice + "\n" + "discount:" + discount + "%\n" + "Final price:" + finalPrice + "\n" + "Personal money" + personalMoney + "\n" + "Money left" + moneyleft);