// Local Storage
// Local storage, tarayıcıda veri saklamak için kullanılan bir API'dir.
// Local storage'a veri eklemek için setItem() kullanılır.
// Local storage'tan veri almak için getItem() kullanılır.
// Local storage'tan veri silmek için removeItem() kullanılır.
// Local storage'tan tüm verileri silmek için clear() kullanılır.
// Veri saklamak için sadece string veri tipi kullanılabilir.
// JSON.stringify() ve JSON.parse() metotları kullanılır.

// let userName = "gözde";

// localStorage.setItem("name", userName);

// let age = 25;
// localStorage.setItem("yas", age);
// let yas = localStorage.getItem("age");
// console.log(age);

// let user = {
//     name: "Gözde",
//     age: 25,
//     city: "bursa",
//     lang: ["en", "tr"]
// }

// localStorage.setItem("user", JSON.stringify(user));

// let retrievedUser = JSON.parse(localStorage.getItem("user"));

// console.log(retrievedUser);

// let users = [
//     {name: "Gözde", age: 25},
//     {name: "Ayşe", age: 30},
//     {name: "Fatma", age: 28}
// ]

// localStorage.setItem("users", JSON.stringify(users));  

// let userDetails = JSON.parse(localStorage.getItem("users"));

// userDetails.map((user) => {
//     document.write(`<p>${user.name} - ${user.age}</p>`)
// });

// let filteredUsers = userDetails.filter((user) => user.age < 26);

// filteredUsers.map((user) => {
//     document.write(`<p>${user.name} - ${user.age}</p>`)
// });

const numbers = [45,50,87,96,10];
const langs = ["en", "de"]

// const result = numbers.reduce((toplam, nnumber) => {
//     return toplam + nnumber;
// }, 0);


// spread operator
// const result = [...numbers, ...langs]
// console.log(result);

// Detstructring Assignment

let user = {
    name: "gözde",
    age: 26,
    city: "Bursa"
}

let {name, ...geriKalanlar} = user;
console.log(name,geriKalanlar);


