// Object :

// A collection of properties, where each property is defined as a key-value pair.
// Each property has a key and a value.
// The value can be a string, number, boolean, array, object, or function.



//Traditional method

// let student = {
//     name: "Rajesh",
//     age: 22,
//     city: "Rourkela",
//     marks: [80, 90, 70],
//     isMarried: false,
//     address: { po: "RRL", pin: 759126 },
//   };
//   console.log(student);

  // Constructor :

let newStudent = new Object();
newStudent.name = "Rajesh ji";
newStudent.age = 22;
newStudent.city = "Rourkela";
newStudent.marks = [80, 90, 70];
newStudent.isMarried = false;
newStudent.address = { po: "RRL", pin: 759126 };

console.log(newStudent);


// Accessing object :

// myarray[0]
console.log(newStudent.name); // dot notation
console.log(newStudent["isMarried"]);
console.log(newStudent.city);
console.log(newStudent.age);
console.log(newStudent.marks);
console.log(newStudent.isMarried);
 // bracket notation



