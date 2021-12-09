// ! find        -
// ! findIndex   -

// let data = ["Andrey", "Amantur", "Aisha", "Aigerim"]
// let name = data.find((item, index, array) => {
//     return item === "Aigerim";
// })
// console.log(name);

// let index = data.findIndex((item) => {
//     return item === "Aisha"
// })
// console.log(index);


// let users = [
//     {
//         name: "Adilet",
//         id: 21343,
//     },
//     {
//         name: "Azat",
//         id: 12221,
//     },
//     {
//         name: "Tariel",
//         id: 3334,
//     },
//     {
//         name: "Raul",
//         id: 54323,
//     },
// ];

// let firstUser = users.find((item) => {
//     return item.id === 12221;
// })
// console.log(firstUser);


// let lastUser = users.findIndex((item) => {
//     return item.id === 21343;
// })
// console.log(lastUser);





// let xUsers = data.find((item) => {
//     return item.email === "Esther_Ratke@shayna.biz"
// })

// console.log(xUsers);


// let newArr = data.filter((item) => {
//     return item.id > 430
// })
// console.log(newArr);

// let word = "JavaScript";
// console.log(word.slice(0, 4));



// Дан массив ['sam','luck','james'].
// Нужно перебрать массив так, чтобы первые буквы имен были большими.
// Пример вывода:
// ['Sam','Luck','James']
// let names = ["sam", "luck", "james"]

// let newNames = names.map((item) => {
//     return item[0].toUpperCase() + item.slice(1)
// })
// console.log(newNames);


// let arr = ["Есть", "жизнь", "на", "Марсе"]
// let newArr = arr.map((item) => {
//     return item.length
// })
// console.log(newArr);



// function reverseNum(arg1) {
//     return parseInt(arg1.toString().split("").reverse().join(""))
// }

// let newNum = reverseNum(12345);
// console.log(newNum);

// Напишите функцию, которая будет принимать строку и проверять является ли
// она палиндромом. Пробелы и регистр учитывать не нужно.
// > Палиндро́м, пе́ревертень — число, буквосочетание, слово или текст, одинаково
// читающееся в обоих направлениях. Например, число 101; слова "кок", "топот",
// "комок" и т.д.

function palindrome(word) {
    let secondWord = word.split("").reverse().join("")
    if (word === secondWord) {
        console.log("Да это палиндром")
    } else {
        console.log("Нет это не палиндром")
    }
}

palindrome("аргентина манит негра")