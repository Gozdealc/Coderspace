//Js Giriş;

// console.log('Merhaba js');

//Değişkenler

// var a = 10; //Number
// var b = 3.4;
// var c = 'javascript'; //String

// console.log(typeof a);

// var firstNumber = 10;
// var secondNumber = '20';
// console.log(firstNumber + secondNumber);

// Hoisting !!
// var firstNumber;
// console.log(firstNumber);
// firstNumber = 10;

// deneme();
// function deneme() {
//     console.log("a fonksiyonu");  
// }

// JavaScript'te bir değişken oluşturduğunuzda, bu değişken iki tür veriden birini depolayabilir:
// ilkel değer veya referans değeri. Değer bir number , string , boolean , undefined , NULL(diğer tüm dillerde referanstır,js hariç)
// veya symbol ise, bu ilkel bir değerdir.
// Başka bir şeyse (yani typeof object ise), bu bir referans değeridir.

// UNDEFİNED - TANIMSIZ
// NULL - DEĞER YOK

// var isNull = null;
// console.log(isNull);
// console.log(typeof isNull); 

// OBJECT - NESNE !!

// var user = {
//     name: 'John Doe',
//     age: 30,
//     city: 'New York',
//     surnames: {
//         name1 : 'John Doe',
//         name2 : 'Doe John'
//     },
//     favoritecolors: ["çilek", "kivi"]
// }

// console.log(typeof user);


// ARRAY

// var fruits = ["elma", "armut", "erik"];

// console.log(fruits);
// console.log(typeof fruits);
// console.log(fruits[1]);
// console.log(fruits.length);

// FONKSİYON

// function hello() {
//     console.log("Merhaba");
// }
// hello();
// console.log(typeof hello);
// console.log(hello);

// --------------------------------------

// var a = 10;
// var b = a;

// console.log("1- ", a, b);
// a = 20;
// console.log("2- ", a, b);

// ------------------------------------

// var a = [10];
// var b = a;

// console.log("1 - ", a, b);
// a = [20];

// console.log("2 - ", a, b);
// console.log("3 - ", a * b);


// -------------------------------------

// var a = [10,20,30,40,50,60]
// var b = a;

// console.log("1 - ", a, b);

// a[0] = 60;
// a.push(70);

// console.log("2 - ", a, b);


// -------------Scope (kapsam)-------------

//  var a = 10; >> Global Scope

// function scope() {
//      var b = 20;  >> Function Scope
//      console.log("Fuction Variable : ", b);
// }

// scope();
//     if(true) {
//         let c = 30;  >> Block Scope
//     }
//     {
//         let d = 40; >> Block Scope
//     }
// console.log(a,b,c,d);

// Tip Dönüşümleri

// var a = 5;
// console.log(a, typeof a);

// a = String(a);
// console.log(a, typeof a);
// -------------------------------------------

// var a = "5";
// console.log(a, typeof a);

// a = Number(a);
// console.log(a, typeof a);

// -----------------------------------------------

//  var a = "deneme";
//  console.log(a, typeof a);

// a = Number(a);
// console.log(a, typeof a);

// -------------------OPERATORLER-----------------------
// Atama Operatörü (=)
// var a = 10;

// Aritmetik Operatörler (+,-,*,/)
// Mod Alma
// console.log(10 % 5);

// Math Operatoru
// let sonuc;

// sonuc = Math.round(3.4);
// sonuc = Math.floor(3.4);
// 0-100 arasında random tam sayı üretmek ;
// sonuc = Math.floor(Math.random() * 100); 

// console.log(sonuc);


// ------------ String Metodları ----------------

// let value;
// const firstName = "Gözde";
// const lastName = "Alıcı";
// const age = 20;
// const department = "frontend";

// value = firstName + " " + lastName;
// value +=  " " + lastName;
// value = firstName.length;
// value = lastName.toLowerCase();
// value = firstName.toUpperCase();
// value = firstName[0];
// value = "İsim: " + firstName + " " + "\nSoyisim: " + lastName + " " + "\nDepartman:" + " " + department;

// Template Literals;

// value = `İsim: ${firstName}
// Soyisim: ${lastName}
// Departman: ${department}`;

// console.log(value);

// -----------------Array Metodları -----------------

// const numbers = [10, 5, 30, 40, 50];
// const langs = ["Phyton", "Javascript", "C++"];

// value = numbers.length;
// value = numbers[0];
// value = numbers.push(55);
// value = numbers.pop(); Dizinin sonundan eleman çıkarır.
// value = numbers.shift(); Dizinin başından eleman çıkarır.
// value = numbers.reverse(); Diziyi ters çevirir.
// Küçükten büyüğe sıralama
// value = numbers.sort(function(a, b) {
//     return a - b;
// });
// console.log(value);


// --------------- OBJECT --------------

// const student = {
//     fullName: "Gözde Alıcı",
//     age: 26,
//     adress: {
//         city: "Istanbul",
//         country: "Turkey"
//     },
//     langs: ["English", "Turkish"],
//     work: function() {
//         console.log("Çalışıyor...."); 
// },
// };
// value = student;
// value = student.fullName;
// value = student.adress.city;
// value = student.work();
// console.log(value);

// ----- Karşılaştırma Operatörleri ------
//  a = 10;
//  b = 20;
//  c = "10";
//  d = 10;

//  value = a ==c ;
//  value = a === c;  Eğer değer ve tip eşitse true döner.
//  value = a > b;
//  value = a < b;
//  value = a >= b;
//  value = a <= b;

// && And operatörü
// value = a == d && b == c;

// || Or operatörü
// value = a == d || b == c;


// ------------ Koşullar --------------------
//     let x = 10;
//     let y = 20;

//     if (x > y) {
//         value = `${x} büyüktür ${y}`;
//     } else if (a == b) {
//         value = `${x} eşittir ${y}`;
//     } else {
//         value = `${x} küçüktür ${y}`;
//     }
//  console.log(value);
 

// const islem = 4;

// switch (islem) {
//     case 1:
//         value = "İşlem1"
//         break;
//     case 2:
//         value = "İşlem2"
//         break;
//     case 3:
//         value = "İşlem3"
//         break;
//     case 4:
//         value = "İşlem4"
//         break;
//     default:
//         value = "Geçersiz İşlem"
//         break;
// }


// ------------- Döngüler ------------

// for (let i = 0; i < 10; i++) {
//     if (i == 3) {
//         break;
//     }
//     console.log(i);
// }

// const langs = ["Phyton", "Javascript", "C++"];

// for(let i = 0; i < langs.length; i++) {
//     console.log(langs[i]);
// }

// ------------- Functions ---------------

// function merhaba() {
//     console.log("Merhaba");  
// }

// merhaba();

// function merhaba() {
//     return "Merhaba";  
// }
//  console.log(merhaba());

// function user(name,age) {
//     console.log(`İsim: ${name} Yaş: ${age}`); 
// }

// user("Gözde", 26);

// function user(name = "Bilgi Yok", age = "Bilgi Yok") {
//       console.log(`İsim: ${name} Yaş: ${age}`); 
//     }
    
//     user("Gözde",);

// ------- Arrow Function -------

// const square = (x) => {
//     return x * x;
// }
//return kullanmadan yazabilirim,kısayol ;
// const square = (x) => x * x ;

// ---------- Do-While Döngüsü ----------
let i = 0;

// while (i < 10) {
//     console.log(i);
//     i++;  
// }

// while (i < 10) {
//     if (i == 5) {
//         i++;
//         continue; // continue döngüdeki itereasyonu atlar ve yeni bir dönüşüm gerçekleşir.
//     }
//     console.log(i);
//     i++;
// }

// do {
//     console.log(i);
//     i++;   
// } while (i < 10);


// For Each Döngüsü

// const langs = ["Phyton", "Javascript", "C++"];

// langs.forEach(function (lang,i) {
//     console.log(lang,i);
// });

// ----------- Map Döngüsü --------------

// const langs = ["Phyton", "Javascript", "C++"];
// langs.map(function (lang,i) {
//     console.log(lang,i);
    
// });

