// CLASS
// Classlar ES6 ile birlikte gelmiştir.Classlar bir blueprinttir. Classlar ile objeler oluşturulur.


// class Employee {
//     constructor(name, age, department) {
//         this.name = name;
//         this.age = age;
//         this.department = department;
//     }
    
//     showInfos() {
//         console.log(`Employee Name: ${this.name}, Age: ${this.age}, Department: ${this.department}`);
//     }
// }

// const emp1 = new Employee("mustafa", 25, "sales");
// emp1.showInfos();

// Static Methods
// Nesne üzerinden değil, sınıf üzerinden çağrılır.

// class Matematik {
//     cube(x) {
//         console.log(x * x * x);
//     }
//     static cube2(x) {
//         console.log(x * x * x);
//     }
// }

// const math = new Matematik();
// math.cube2(3); Hata verir.
// math.cube(3); Doğru kullanım

// Matematik.cube2(3);  Doğru kullanım

// Math.random();  Statik bir methoddur, Nesne üzerinden değil sınıf üzerinden çağrılır.

// Inheritance (Kalıtım)
// Bir sınıfın özelliklerini başka bir sınıfa aktarmak için kullanılır.

class Person {
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    
    showInfos() {
        console.log(`Person Name: ${this.name}, Age: ${this.age}, Hobbies: ${this.hobbies}`);
    }
}

class Employee extends Person {
    constructor(name, age, hobbies, department, salary) {
        super(name, age, hobbies, []); // Person sınıfından özellikleri aldım
        this.department = department;
        this.salary = salary;
    }
}

const emp1 = new Employee("mustafa", 25, "tennis", "sales", 5000);
console.log(emp1);

emp1.showInfos();

