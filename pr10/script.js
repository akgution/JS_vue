// names = ['Ivan', 'Mark', 'Miroslava', 'Oleksandra', 'Emiliia']
// console.log(names);
// console.log(names[-1]);
// console.log(names.length);
//
// names2 = [];
// names2.push('Vlada')
// names2.push('Miroslava')
//
// names2.pop()
// names2.unshift('Miroslava', 'Miroslava')
//
// names2.shift()
// names.slice(1, 4)
// console.log(names);
// console.log(names2);

// names = ['Ivan', 'Mark', 'Miroslava', 'Oleksandra', 'Emiliia']
//
// let deleted = names.splice(2, 1);
// names.splice(1, 0, 'Bohdan');
// names.splice(0, 1, 'Maria', 'Ksu');
//
// console.log(deleted);
// console.log(names);

// function register(name){
//     if(name.trim().length === 0){
//         alert("Please enter a name");
//         return;
//     }
//     let duplicate = false;
//     for(let i=1; i < names.length; i++){
//         if(names[i] === name){
//             duplicate = true;
//         }
//     }
//     if(duplicate){
//         alert('Take name vzhe e')
//         return;
//     }
//     names.push(name);
//     alert(`Your name is ${name}`);
// }
// function deleted(name){
//     let index = -1;
//     for(let i=1; i < names.length; i++){
//         if(names[i] === name){
//             index = i;
//             break;
//         }
//     }
//     if(index === -1){
//         alert(`Takogo nema`)
//     }
//     else{
//         names.splice(index, 1);
//         alert(`Uchasnuk ${name} vudaleno`);
//     }
// }
// function count(){
//     alert(`Count ${names.length}`);
// }
//
// names = ['Ivan', 'Mark', 'Miroslava', 'Oleksandra', 'Emiliia']
// register('Mykyta');
// register('Ivan');
// register('         ');
// deleted('Ivan');
// deleted('Mykyta');
// count();

// names = ['Ivan', 'Mark', 'Miroslava', 'Oleksandra', 'Emiliia']
// for(let i = 0; i < names.length; i++) {
//     console.log(names[i])
// }

// for (let name of names){
//     console.log(name)
// }
//-------------------------------------------------------
// names = ['Ivan', 'Mark', 'Miroslava', 'Oleksandra', 'Emiliia']
// names.push("Vlada");
// names.unshift("Alisa");
// names.splice(2, 1, "Myroslava");
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }
// for(name of names){
//     console.log(name);
// }
// names.forEach(function (name) {
//     console.log(`${name} - ${name.length}`);
// });
//------------------------------------------------------------
let prices = [120, 250, 180, 300, 150, 400];
let total = 0;
let count = 0;
// --------------------------- 1
// for(let i = 0; i < prices.length; i++){
//     total += prices[i];
// }
// for(let j = 0; j < total; j++){
//     if(prices[j] >= 200){
//         count++;
//     }
// }
//------------------------------------
//---------------------------------- 2
// for (let price of prices) {
//     total += price;
// }
// for (let price of prices) {
//     if (price >= 200) {
//         count++;
//     }
// }
//-------------------------------------
let average = total / prices.length;
console.log(`Average: ${average}`);
console.log(`200+: ${count}`);
console.log(`sum: ${total}`);