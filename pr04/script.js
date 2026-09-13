// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }

// for(let i = 1; i <= 10; i+=2){
//     console.log(i);
// }

// for(let i = 20; i > 0; i--){
//     console.log(i);
// }

// let count = 0;
// for(let i = 1; i <= 10; i++){
//     count += i
// }
// console.log(count);

// let sum = 0;
// for(let i = 1; i <= 50; i++){
//     if(i%2 === 0){
//         sum += i
//     }
// }
// console.log(sum);

//---------------------------------------------1
// for(let i = 1; i <=100; i++){
//     if(i%3 === 0 && i%5 === 0){
//         console.log(i);
//     }
// }
//---------------------------------------------------

// for(let i = 1; i <= 100; i++){
//     if(i>25 && i % 4 === 0 && i%6 === 0){
//         console.log(i)
//         break
//     }
// }

// for(let i = 1; i<=30; i++){
//     if(i%5 === 0){
//         continue;
//     }
//     console.log(i);
// }

// let student = +prompt("How many students are?");
// let sum = 0, goodgrade = 0, badgrade = 0, maxgrade = 1, mingrade = 12;
// for (let i = 1; i <= student; i++) {
//     let grade = prompt("Enter grade student number:" + i);
//     if (!(grade>=1 && grade<=12)){
//         alert("Error")
//         i--;
//         continue;
//     }
//     sum += grade;
//     if(i >= 7){
//         goodgrade++
//     }
//     else{
//         badgrade++
//     }
//     if(grade > maxgrade){
//         maxgrade = grade;
//     }
//     if(grade < mingrade){
//         mingrade = grade;
//     }
//
// }
// console.log(sum)
// console.log(goodgrade)
// console.log(badgrade)
// console.log(maxgrade)
// console.log(mingrade)

//---------------------------------2
let student = +prompt("How many students are?");
let avarage = 0, sum = 0, bestgrade = 0, middlegrade = 0, badgrade = 0, maxgrade = 0, mingrade = 100;
for (let i = 1; i<student; i++) {
    let grade = prompt("Enter grade student number:" + i);
    if (!(grade>=0 && grade<=100)){
        alert("Error")
        i--;
        continue;
    }
    sum += grade;
    avarage = sum / student;
    if (grade >= 90 && grade<=100){
        bestgrade++
    }
    if (grade >=60 && grade<=89){
        middlegrade++
    }
    else{
        badgrade++
    }
    if (grade > maxgrade){
        maxgrade = grade;
    }
    if (grade < mingrade){
        mingrade = grade
    }
    if(grade === 100){
        continue;
    }
    console.log(student);

}
console.log(avarage, bestgrade, middlegrade, badgrade, mingrade, maxgrade);