// let x = 55;
// let y = 10;

// console.log(x + y); // Output: 65   


// console.log(x - y); // Output: 45
// console.log(x * y); // Output: 550
// console.log(x / y); // Output: 5.5
// console.log(x % y); // Output: 5
// console.log(x ** y); // Output: 3.1622776601683795e+55
// console.log(x++); // Output: 55
// console.log(x); // Output: 56
// console.log(++x); // Output: 57
// console.log(x--); // Output: 57

const student = {
    name: "John",
    age: 20,
    isEnrolled: true,
    courses: ["Math", "Science", "History"],
    address: {
        street: "123 Main St",
        city: "Anytown",
        zipCode: "12345"
    },
    greet: function() {
             console.log(`Hello, my name is ${this.name}`);
    }
}

console.log(student.name); // Output: John
console.log(student.age); // Output: 20
console.log(student.isEnrolled); // Output: true
console.log(student.courses); // Output: ["Math", "Science", "History"]
console.log(student.address.city); // Output: Anytown
student.greet(); // Output: Hello, my name is John