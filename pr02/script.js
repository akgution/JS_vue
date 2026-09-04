//..= , ,=  == === != !==

// let a,b;
// a = "1"
// b = 1
// console.log(a==b)
// console.log(a===b)

// if(umova){
//     comanda
// }

// let temp = prompt('Enter a temperature number');
// let result;
// if(temp <=0){
//     result = 'holodno'
// }
// else if (temp > 0 && temp <= 10){
//     result = 'norm'
// }
// else if(temp > 10){
//     result = 'zharko'
// }
// alert(result);

// --------------------------------------
// let num = prompt("Enter a number");
// let result;
// if (num % 2 === 0) {
//     result = 'parne'
// }
// else{
//     result = 'neparne';
// }
// alert(result);
//---------------------------------------------

// const login = 'admin';
// const password = '12345';
//
// let userlogin = prompt('Enter userlogin');
// let userpassword = prompt('Enter password');
//
// if (userlogin === login && userpassword === password) {
//     alert('vxid dozvoleno')
// }
// else{
//     alert('login or password failed')
// }

//courier 200
// post 100
// pickup 0

// let cost, deliver = prompt('What type of deliver?');
//
// switch(deliver) {
//     case 'courier':
//         cost = 200;
//         break;
//     case 'post':
//         cost = 100;
//         break;
//     case 'pickup':
//         cost = 0;
//         break;
//     default:
//         cost = 'n/a';
// }
// console.log(cost);
// alert(cost);

// ---------------------------
// let numday, day = prompt("What is the day?");
// switch (day) {
//     case "1":
//         numday = 'Monday';
//         break;
//     case "2":
//         numday = 'Tuesday';
//         break;
//     case "3":
//         numday = 'Wednesday';
//         break;
//     case "4":
//         numday = 'Thursday';
//         break;
//     case "5":
//         numday = 'Friday';
//         break;
//     case "6":
//         numday = 'Saturday';
//         break;
//     case "7":
//         numday = 'Sunday';
//         break;
//     default:
//         numday = 'no date';
//
// }
// console.log(numday);
// alert(numday);
//---------------------------------------------------

// let productname = prompt("Enter product name");
// let productprice = +prompt("Enter product price");
// let productcount = +prompt("Enter product count");
//
// let hascard = confirm("Do you have a card?");
// let deliverytype = prompt("Enter product delivery type: courier, post, pickup");
//
// let totalprice, discount = 0;
//
// totalprice = productprice * productcount;
// if (totalprice > 1000) {
//     discount = 0.05;
// }
// else if (totalprice > 2000) {
//     discount = 0.1;
// }
// if (hascard) {
//     totalprice = totalprice - (totalprice * discount) - (totalprice * 0.1);
// }
// else{
//     totalprice = totalprice - (totalprice * discount);
// }
// switch(deliverytype) {
//     case 'courier':
//         totalprice = totalprice + 200;
//         break;
//     case 'post':
//         totalprice = totalprice + 100;
//         break;
//     case 'pickup':
//         totalprice = totalprice + 0;
//         break;
// }
// alert(totalprice)