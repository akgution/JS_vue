let clubs = [
    {id: 1, name: "Книжковий клуб", category: "Мистецтво", price: 150, members: 20, active: true},
    {id: 2, name: "Футбол", category: "Спорт", price: 500, members: 20, active: false},
    {id: 4, name: "Штучний інтелект", category: "ІТ", price: 1600, members: 10, active: true},
    {id: 4, name: "Живопис", category: "Мистецтво", price: 1200, members: 8, active: false},
    {id: 5, name: "Плавання", category: "Спорт", price: 900, members: 20, active: true}
]
let message;
let choice= prompt(
    `Оберіть пункт меню:\n
        1 - Показати всі гуртки\n
        2 - Знайти гурток за ID\n
        3 - Записати учасника\n
        4 - Змінити статус набору\n
        5 - Додати новий гурток\n
        6 - Показати статистику\n
        0 - Вихід`
);
function all(){
    if(clubs.length === 0){
        alert("Каталог порожній")
        return;
    }
    for (club of clubs){
        message = `Id: ${club.id}\n 
        Ім'я: ${club.name}\n
        Категорія: ${club.category}\n
        Ціна: ${club.price}грн\n
        Учасники: ${club.members}\n
        Статус: ${club.active}`
    }
    alert(message)
}
function findId(){
    if(clubs.length === 0){
        alert("Каталог порожній")
        return;
    }
    let enterId = +prompt("Введіть ID гуртка:");
}

