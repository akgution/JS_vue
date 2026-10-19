// let price = [12, 3, 45, 78, 9];
// const prices = [120, 23, 45, 60, 55];
// console.log(prices[2]);
//
// prices[1] = 30
// console.log(prices);
//
// console.log(prices.length);

// let suma = 0;
// for(let i = 0; i < price.length; i++){
//     suma += price[i];
//     if (price[i] % 2 === 0){
//         console.log(price[i]);
//     }
// }
// console.log(suma);

// function countlimit(price, limit){
//     let count = 0;
//     for(let i = 0; i < price.length; i++){
//         if(price[i] > limit){
//             count++;
//         }
//     }
//     return count;
// }
//
// let price = [50, 45, 30, 100, 55]
// let limit = 50;
// console.log(countlimit(price, limit));

//-------------------------------------1
// function average(number) {
//     if (number.length === 0) {
//         return 0;
//     }
//     let sum = 0;
//     for (let i = 0; i < number.length; i++) {
//         sum += number[i];
//     }
//     return sum / number.length;
// }
//
// let price = [50, 45, 30, 100, 55];
// console.log(average(price));
// -----------------------------------------------
// function Finalsum() {
//     let count = +prompt("How many numbers?");
//     let numbers = [];
//     for (let i = 0; i < count; i++) {
//         numbers[i] = +prompt(`Input a number ${i + 1}: `);
//     }
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     console.log(`Vvedeni chusla: ${numbers}`);
//     console.log(`Sum: ${sum}`);
//     return sum;
// }
// Finalsum()
//----------------------------------------------------------