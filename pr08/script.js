// function name(аргументи){
//     код
// }

// function hello(){
//     alert("Hello world!");
// }
//
// hello();
// hello();
// hello();

// function showinfo(name, price = 'Нема в наявності', count){
//     console.log('Магазин у Сані')
//     console.log('Графік роботи: 8:00 - 21:00')
//     console.log(`Товар: ${name}, вартість: ${price}грн`)
//     console.log(`Сума до оплати: ${count * price}`)
// }
// showinfo('Зелений чай', 100, 4);

// function calculateTotal(price, total){
//     let sum = price * total, discount, totalsuma;
//     if(sum >= 5000){
//         discount = 10;
//     }
//     else{
//         discount = 0;
//     }
//     totalsuma = sum *(1-discount);
//     return totalsuma;
//
// }
// let total = calculateTotal(500, 3);
// console.log(total);

// function showinfo(name, price = 'Нема в наявності', count){
//     console.log('Магазин у Сані')
//     console.log('Графік роботи: 8:00 - 21:00')
// }
// function getProductTotal(price, count){
//     return price * count;
// }
// function getDiscountPercent(total){
//     if (total >= 10000){
//         return 15
//     }
//     else if (total >= 5000){
//         return 10;
//     }
//     else if(total >= 2000){
//         return 5;
//     }
//     else{
//         return 0;
//     }
// }
// function getDiscountValue(total, percent){
//     return total * percent/100;
// }
// function getFinalPrice(total, discount){
//     return total - discount;
// }
// let productName = prompt('Введіть назву товару: ')
// let productPrice = prompt('Введіть вартісь товару: ')
// let productCount = prompt('Введіть кількість товару: ')
//
// let productTotal = getProductTotal(productPrice, productCount);
// let discountPercent = getDiscountPercent(productTotal);
// let discountValue = getDiscountValue(productTotal, discountPercent);
// let finalPrice = getFinalPrice(productTotal, discountValue);
// showinfo(productName, productPrice, productCount);
// console.log(`Товар: ${productName}`);
// console.log(`Ціна: ${productPrice}`);
// console.log(`Кількість: ${productCount}`);
// console.log(`Сума: ${productTotal}`);
// console.log(`Знижка: ${discountPercent}`);
// console.log(`Сума знижки: ${discountValue}`);
// console.log(`Фінальна ціна: ${finalPrice}`);
//------------------------------------------------

// function calculatePrice(price, count){
//     return price * count;
// }
// function getTicketDiscount(total){
//     if (total >= 1500){
//         return 15
//     }
//     else if (total >= 1000){
//         return 10;
//     }
//     else if(total >= 500){
//         return 5;
//     }
//     else{
//         return 0;
//     }
// }
// function calculateTicketDiscount(total, percent){
//     return total * percent/100;
// }
// function TicketFinalPrice(total, discount){
//     return total - discount;
// }
// let ticketPrice = prompt("Please enter a valid price");
// let ticketCount = prompt("How many?");
// let allprice = calculatePrice(ticketPrice, ticketCount);
// let discountpr = getTicketDiscount(allprice);
// let discountvalue = calculateTicketDiscount(discountpr);
// let final = TicketFinalPrice(allprice, discountvalue);
// console.log(ticketPrice, ticketCount, allprice, discountpr, discountvalue, final);



