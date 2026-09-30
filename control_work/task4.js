const maxplace = 7;
let validcars = 0, electrocars = 0,
    sum = 0, biggestprice = 0, totalprice = 0;
for(let i = 1; i <= maxplace; i++) {
    let hours = +prompt('For how many hours do you want to leave your car?')
    if (hours === 0) {
        break;
    }
    if (hours < 0 || hours > 12) {
        continue;
    }
    let type = +prompt(`What type of your car?\n
    1 - regular car\n
    2 - electric car\n`), price;
    switch (type) {
        case 1:
            price = 40;
            break;
        case 2:
            price = 30;
            electrocars++;
            break;
    }
    if (type !== 1 && type !== 2) {
        continue;
    }
    if (hours >= 5){
        totalprice = price * 0.8
    }
    validcars++;
    sum += totalprice;
    if (biggestprice < totalprice) {
        biggestprice = totalprice;
    }
}
alert(`Valid cars: ${validcars}\n
Electro cars: ${electrocars}\n
Total sum: ${sum}\n
Biggest price: ${biggestprice}`);
