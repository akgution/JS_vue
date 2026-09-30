let numberStudent = +prompt("Enter number of students");
let sum = 0,  average = 0, higher7 = 0 ,
    lower7 = 0, maxgrade = 0;
for (let i = 1; i <= numberStudent; i++) {
    let studentsgrade = +prompt(`Enter students grade ${i}`);
    sum += studentsgrade;
    average = sum / numberStudent;
    if (studentsgrade >= 7){
        higher7++;
    }
    if (studentsgrade < 7){
        lower7++;
    }
    if(maxgrade < studentsgrade){
        maxgrade = studentsgrade;
    }
}
alert(`Сума: ${sum}\n
Середня: ${average}\n
Оцінок 7 і вище: ${higher7}\n
Оцінок нижче 7: ${lower7}\n
Найбільша оцінка: ${maxgrade}\n`)