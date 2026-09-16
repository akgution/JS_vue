// let num = 1;
// while (num <= 5) {
//     console.log(num);
//     num++;
// }

// let userNumber = +prompt("Enter your number");
// while(userNumber < 1 || userNumber>10){
//     userNumber = +prompt("Error. Enter your number");
//     console.log('error')
// }

// let age = +prompt('Enter your age');
// while (Number.isNaN(age) || age < 0 || age >= 100) {
//     age = +prompt('Error. Enter your age');
// }
// console.log(age);

// const correctPin = 1234;
//
// let userPin = +prompt("Enter a valid pin");
// let attempts = 1;
// while (correctPin !== userPin && attempts < 3){
//     userPin = +prompt("Error. Enter a valid pin");
//     attempts++;
// }
// if (userPin === correctPin){
//     console.log("Welcome!");
// }
// else{
//     console.log("No enter");
// }

// const correctPin = 1234;
// let attempts = 1;
// while (attempts <= 3) {
//     let userPin = +prompt('Enter a valid pin');
//     if (userPin === correctPin) {
//         console.log('You entered a valid pin');
//         break;
//     }
//     console.log('error');
//     attempts++;
// }

// let menuChoice;
// do{
//     menuChoice = prompt(`What is your choice? \n
//     1 = переглянути профіль \n
//     2 = налаштування \n
//     3 = статистика \n
//     0 = вийти`);
//     if (menuChoice === '1'){
//         console.log('Відкриваємо профіль')
//     }
//     else if (menuChoice === '2'){
//         console.log('Відкриваємо налаштування')
//     }
//     else if (menuChoice === '3'){
//         console.log('Відкриваємо статистику')
//     }
//     else if (menuChoice === '0'){
//         console.log('Вихід')
//     }
//     else{
//         console.log('error')
//     }
// }while(menuChoice !== '0');

//----------------------------------
// let menuChoice;
// do{
//     menuChoice = prompt(`What is your choice? \n
//     1 = переглянути профіль \n
//     2 = налаштування \n
//     3 = статистика \n
//     0 = вийти`);
//     switch(menuChoice){
//         case '1':
//             console.log('Відкриваємо профіль');
//             break;
//         case '2':
//             console.log('Відкриваємо налаштування');
//             break;
//         case '3':
//             console.log('Відкриваємо статистику');
//             break;
//         case '0':
//             console.log('Вихід');
//             break;
//         default:
//             console.log('error')
//             break;
//
//     }
// }while(menuChoice !== '0');
//-----------------------------------------

// let count = 0;
// let sum = 0;
// while(count < 5) {
//     let grade = +prompt(`Введи оцінку номер ${count + 1}`);
//     if (Number.isInteger(grade) || grade < 1 || grade > 12) {
//         alert("Error. Введи ще раз")
//         continue;
//     }
//     sum += grade;
//     count++;
// }
// console.log(sum);
// console.log(sum/5);

// let questionsNumber = 1, score = 0;
// while (questionsNumber <= 5) {
//     let questions = '', correctAnswer = '';
//     switch (questionsNumber) {
//         case 1:
//             questions = 'Ключове слово для створення змінної'
//             correctAnswer = 'let';
//             break;
//         case 2:
//             questions = 'Оператор and'
//             correctAnswer = '&&';
//             break;
//         case 3:
//             questions = 'Оператор or'
//             correctAnswer = '||';
//             break;
//         case 4:
//             questions = 'Як зупинити цикл?'
//             correctAnswer = 'break'
//             break;
//         case 5:
//             questions = 'Строга рівність позначається ...'
//             correctAnswer = '===';
//             break;
//
//     }
//     let answer = prompt(`Запитання номер ${questionsNumber} із 5 \n
//     ${questions}`)
//     if (answer === ''){
//         alert('не може бути пуста');
//         continue;
//     }
//     if(answer === correctAnswer){
//         alert('вірно')
//         score++;
//     }
//     else{
//         alert('не вірно')
//     }
//     questionsNumber++;
// }
// if (score === 5){
//     alert('ти молодець!')
// }
// else if (score >=3){
//     alert('ok')
// }
// else{
//     alert('треба вчитися')
// }