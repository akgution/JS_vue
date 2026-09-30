let age = +prompt("Enter your age")
let day = +prompt(`Choose a day\n
1 - weekday\n
2 - weekend`)
while (age <= 0 || age >100) {
    age = +prompt("Error. Enter your age")
}
while (day !== 1 && day !== 2) {
    day = +prompt("Error. Choose a day");
}
let price;
switch (day) {
    case 1:
        price = 200;
        break;
    case 2:
        price = 250;
        break;
}
let discountedprice, finalprice;
if (age <= 7 && age > 0){
    discountedprice = 0;
}
else if (age >= 8 && age <= 17){
    discountedprice = price * 0.5;
}
else if (age >= 18 && age <= 59){
    discountedprice = price;
}
else if (age>=60){
    discountedprice = price * 0.6;
}
finalprice = discountedprice;
alert(finalprice);