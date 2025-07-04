//1. object constructor:

// function Person(first,last,age,eyeecolor) {
//     this.firstName = first;
//     this.lastname = last;
//     this.age = age;
//     this.eyeecolor = eyeecolor;
// }

// const myfather = new Person("John","Doe","35","blue");
// const myMother = new Person("Sally","Rally","30","grren");
// const myBrother = new Person("David","Doe","20","blue");
// console.log(myMother);
// console.log(myfather);
// console.log(myBrother)

//2. prototype

// let Person ={
//     greet : function () {
//         console.log("Hello!")
//     }
// };
// let student = Object.create(Person);// student inherits from person
// student.greet();

// 3. Constructor Function and Prototypes

// function Person(name){
//     this.name = name;
// }
// Person.prototype.sayHello = function() {
//     console.log(`hello,my name is ${this.name}`);
// };
// let john = new Person("john");
// let alice = new Person("Alice");

// john.sayHello();
// alice.sayHello();