// let book = {
//     title: "Кобзар",
//     author: 'Тарас Шевченко',
//     year: 1840,
//     price: 500,
//     isAvaialble: true
// }
// console.log(book);
// console.log(book.title);

// let books = [
//     {
//         id: 1,
//         title: "Кобзар",
//         author: 'Тарас Шевченко',
//         year: 1840,
//         price: 500,
//         isAvaialble: true
//     },
//     {
//         id: 2,
//         title: "Лісова пісня",
//         author: 'Леся Українка',
//         year: 1918,
//         price: 600,
//         isAvaialble: true
//     },
//     {
//         id: 3,
//         title: "Тигролови",
//         author: 'Іван Багряний',
//         year: 1944,
//         price: 450,
//         isAvaialble: false
//     },
//     {
//         id: 4,
//         title: "Місто",
//         author: "Валер'ян Підмогильний",
//         year: 1928,
//         price: 550,
//         isAvaialble: true
//     }
]
// console.log(books);
// console.log(books.length);
// console.log(books[1].author);

// for (let book of books) {
//     console.log(`book: ${book.id} - ${book.title}`);
// }
// books.forEach(function(book) {
//     console.log(`book: ${book.author}, ${book.isAvaialble}`);
// })

// let isAvaibleCount = 0;
// let totalPrice = 0;
//
// for (let book of books) {
//     if(book.isAvaialble === true) {
//         isAvaibleCount++;
//         totalPrice += book.price;
//     }
// }
// console.log(isAvaibleCount);
// console.log(totalPrice);
//
// books[1].price = 750;
// console.log(books);
//
// books.push({
//     id: 5,
//     title: "Захар Беркут",
//     author: 'Іван Франко',
//     year: 1882,
//     price: 500,
//     isAvaialble: false
// })
// console.log(books);
//
// let enterId = +prompt('Enter ID');
// let bookFound = null;
// for (let book of books) {
//     if (book.id === enterId) {
//         bookFound = book;
//         break;
//     }
// }
// if (bookFound !== null) {
//     let status = "Немає у наявності";
//     if (bookFound.isAvaialble === true) {
//         status = "У наявності";
//     }
//     alert(`Книга ${bookFound.title}. Ціна ${bookFound.price}грн. ${status}`)
//
// }else{
//     alert("Книгу не знайдено")
// }

