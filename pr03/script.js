// let age = prompt('Enter your age');
// let register = confirm('Are you registred?');
// if (register === true && age >= 18){
//     alert("Dostup dozvoleno")
// }
// else {
//     alert("Dostup zaboroneno")
// }

// let acsesslevel = prompt("What is your acsess level?");
// if (acsesslevel === 'teacher' || acsesslevel === 'admin') {
//     alert("Welcome");
// }
// else {
//     alert("declined");
// }

// let register = confirm("Do you register?");
// if (register) {
//     let age = prompt('How old are you');
//     if (age >= 18) {
//         alert('Dostup dozvoleno');
//     }
//     else{
//         alert('Dostup vidhuleno');
//     }
// }
// else{
//     alert('Dostup vidhuleno');
// }

// let grade = +prompt('Enter your grade');
// if (grade >= 90) {
//     alert('vidminno');
// }
// else if (grade >= 70){
//     alert('dobre');
// }
// else if (grade >= 60){
//     alert('zadovilno');
// }
// else{
//     alert('nezadovilno');
// }

// let role = prompt("What is your role?");
// let sub, block;
// if (role === "teacher") {
//     block = confirm('Is you account blocked?')
//     if (!block) {
//         alert('Welcome Teacher')
//     } else {
//         alert('Access denied')
//     }
// }
// else if (role === "student") {
//     block = confirm("Is your account blocked")
//     if (!block) {
//         sub = confirm("Do you have sub ?")
//         if (sub) {
//             alert("Welcome student")
//         }
//         else {
//             alert("Demo version")
//             }
//         }
//     else {
//         alert("Access denied")
//     }
// }
// else {
//     alert("Access denied")
// }

// const sale = 'sale';
// const discount = 0.1;
// let sum = 0;
// let name = prompt("Enter product name")
// let count = prompt("Enter product number")
// let price = prompt("Enter product price")
// sum = count * price
// let access = confirm("Are you registered?")
// if (access === true && sum >= 1000 && (prompt("Enter promocode") === sale || confirm("Do you have a vip status?"))) {
//     alert("You have a discount: " + (sum - (sum * discount)))}
// else {
//     alert("Your total price: " + sum)
// }
