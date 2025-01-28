// Object Literal

// const person1 = {
//     name: "John Doe",
//     age: 30,
//     hobbies: ["reading", "painting"],
//     adress: {
//         city: "New York",
//         country: "USA"
//     },
//     showInfos: function() {
//         console.log(this.name, this.age, this.hobbies);
        
//     }
// };

// const person2 = {
//     name: "Jane Doe",
//     age: 28,
//     hobbies: ["cooking", "gardening"],
//     adress: {
//         city: "Los Angeles",
//         country: "USA"
//     },
//     showInfos: function() {
//         console.log(this.name, this.age, this.hobbies);
        
//     }
// }
// console.log(person1);
// console.log(person2);

// Yapıcı Fonksiyon 

function Person(name, age, hobbies) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
 
    // this.showInfos = function() {
    //     console.log(this.name, this.age, this.hobbies);
    // }
}
Person.prototype.showInfos = function() {
    console.log(this.name, this.age, this.hobbies);
};

function Employee(name, age, hobbies, salary) {
    // (Person'dan miras aldım.)
    Person.call(this, name, age, hobbies); 
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);

const emp1 = new Employee("Hande", 22, [1, 2], 4000);

console.log(emp1);
emp1.showInfos();

const person1 = new Person("John Doe", 30, ["reading", "painting"]);
const person2 = new Person("Gözde Alıcı", 26, ["tennis", "basketball"]);


// console.log(person1);
// person1.showInfos();
// person2.showInfos();




