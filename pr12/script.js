// function isHighScore(score){
//     return score >= 10;
// }
// scores = [12, 5, 4, 11, 10, 9]
//
// let highScore = scores.filter(isHighScore)
// console.log(highScore)

// scores = [12, 5, 4, 11, 10, 9]
// let highScore = scores.filter(score => score >= 10)
// console.log(highScore)


// let courses = [
//     {id: 1, title: "HTML", description: "HTML", price: 300, active: false},
//     {id: 2, title: "CSS", description: "HTML", price: 200, active: true},
//     {id: 3, title: "JavaScript", description: "JS", price: 500, active: false},
//     {id: 4, title: "Vue", description: "Vue+JS", price: 600, active: true},
// ]
// let idCourse = +prompt("What is the course id?");
// let found = courses.find(course => course.id === idCourse);
// if (found !== undefined) {
//     console.log(found.title);
// }
// else{
//     console.log("Course not found");
// }
// let activeCourse = courses.filter(course => course.active === true);
// console.log(activeCourse);
//
// let titleCourse = courses.map(course => course.title);
// let priceCourse = courses.map(course => course.price * 0.9);
// console.log(titleCourse);
// console.log(priceCourse);
// let JSsearch  = courses.filter(course => course.description.includes('JS'))
// console.log(JSsearch);

// let books = [
//     {id: 1, title: 'HTML for begginers', author: "Oleksandra the Serious", years: 2026, avaible: true},
//     {id: 2, title: 'CSS for begginers', author: "Oleksandra Happy", years: 2025, avaible: true},
//     {id: 3, title: 'JS for begginers', author: "Oleksandra Angry", years: 2025, avaible: false},
//     {id: 4, title: 'JS + VUE for begginers', author: "Oleksandra responsible", years: 2023, avaible: true}
// ]
// let year = +prompt("Year: ")
// let existingBooks = books.filter(book => book.years === year)
// console.log(existingBooks)
// let bookTitle = books.map(book => book.title)
// console.log(bookTitle)
// let search = books.filter(book => book.title.includes('the begginers'))
// console.log(search)

// let price = [500, 2000, 700]
// console.log(price.sort((a, b) => a - b))

// let books = [
//     {id: 1, title: 'HTML for begginers', author: "Oleksandra the Serious", years: 2026, avaible: true},
//     {id: 2, title: 'CSS for begginers', author: "Oleksandra Happy", years: 2025, avaible: true},
//     {id: 3, title: 'JS for begginers', author: "Oleksandra Angry", years: 2025, avaible: false},
//     {id: 4, title: 'JS + VUE for begginers', author: "Oleksandra responsible", years: 2023, avaible: true}
// ]
// // let lowerupper = [...books].sort((a, b) => a.year - b.year);
// // console.log(lowerupper);
// let existingBook = books
//     .filter(book => book.avaible === true)
//     .sort((a, b) => a.years - b.years)
//     .map(book => `${book.title} - ${book.author}`)
// console.log(existingBook);

