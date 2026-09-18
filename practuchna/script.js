let event = +prompt(`Choose number of event:\n
1 - cinema(150)\n
2 - theatre(220)\n
3 - concert(350)`);
while (!Number.isInteger(event) || event < 1 || event > 3) {
    event = +prompt('Error. Choose again');
}
let baseprice;
switch (event) {
    case 1:
        baseprice = 150;
        break;
    case 2:
        baseprice = 220;
        break;
    case 3:
        baseprice = 350;
        break;
}
let day = +prompt(`Choose number of day:\n
1 - weekday\n
2 - weekend(+15%)`);
while(!Number.isInteger(day) || day < 1 || day > 2) {
    day = +prompt('Error. Choose again')
}
if (day === 2) {
    baseprice = baseprice * 1.15;
}
let count = +prompt('How many tickets?');
while (!Number.isInteger(count) || count <= 0) {
    count = +prompt('Error. Enter a valid number of tickets');
}
let processedTickets = 0,
freeTickets = 0,
discountTickets = 0,
fullpriceTickets = 0,
totalPrice    = 0,
price = baseprice;
for (let i = 1; i <= count; i++) {
    let age = +prompt(`Tiket №${i}. Enter age(-1 = cancel):`)
    if (age === -1) {
        alert('Canceled');
        break;
    }
    while(!Number.isInteger(age) || age <= 0 || age > 100) {
        age = +prompt('Error. Enter again')
    }
    if (age === -1) {
        alert('Canceled');
        break;
    }
    if (age >= 0 && age <=5){
        freeTickets++;
        processedTickets++;
    }
    else if (age <= 12){
        price = price * 0.5;
        discountTickets++;
        processedTickets++;
    }
    else if (age <= 17){
        price = price * 0.8;
        discountTickets++;
        processedTickets++;
    }
    else if (age <= 25){
        let student = confirm('Do you have a student ticket?');
        if (student === true) {
            price = price * 0.9;
            discountTickets++;
        }
        else{
            fullpriceTickets++;
        }
        processedTickets++;
    }
    else if(age <= 59){
        fullpriceTickets++;
        processedTickets++;
    }
    else{
        price = price * 0.75;
        discountTickets++;
        processedTickets++;
    }
    totalPrice += price;
}
if (totalPrice > 1000) {
    totalPrice = totalPrice * 0.95;
}
alert(`Processed tickets: ${processedTickets}\n
Free Tickets: ${freeTickets}\n
Discount Tickets: ${discountTickets}\n
Full price Tickets: ${fullpriceTickets}\n
Total Price: ${totalPrice}\n`
);