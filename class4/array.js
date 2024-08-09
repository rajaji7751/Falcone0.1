// Array :

// An array in js is a data structure to store multipule values of any type under a single name, including number


// Create an array:
 
//eralier
// let num1 =100;
// let num2 =200;
// let num3 =300;

//now
// let myArray =[num1,num2,num3];
// console.log(myArray);

// let mixedArray =["Promod","swadhin","Rajesh",25,22,21];
// console.log(mixedArray);

//Accessing element :
// console.log(mixedArray.length);
// console.log(mixedArray[3]);

//in optimized way

//print me the last value of randomArray
// console.log(mixedArray[5]);
// console.log(mixedArray[mixedArray.length - 1]);

//modifying the element :

// mixedArray[0] ="sai";
// console.log(mixedArray);

// mixedArray[3] =19;
// console.log(mixedArray);

//Array method :

//push method :
// The push () method adds one or more element to the end of an array and return the new length of the array.

// let bikes =["PUlsur","z900","RR1000","panigalV4"];
// console.log(bikes);
// console.log(bikes.length);


// bikes.push("Beneli");
// console.log(bikes);



// Pop method :
// The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

// console.log(bikes.pop()); // Triumph
// console.log(bikes.pop()); // Beneli
// console.log(bikes);

// Unshift method :
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

//  bikes.unshift("yamaha");
//  console.log(bikes);

//  / Shift method :
 // The shift() method removes the first element from an array and returns that element. This method changes the length of the array.

//  console.log(bikes.shift());
//  console.log(bikes);
 

 // Slice method :
// The slice() method extracts a part of an array and returns the extracted part in a new array.

// console.log(bikes.slice(1, 3)); // Output : ["Ninja", "KTM"]
// console.log(bikes.slice(0, 4)); // 1st index will include and last index won't include

// Splice method :
// The splice() method adds/removes items to/from an array, and returns the removed item(s).

// console.log(bikes.splice(0,4));  // start: the index at which you need to change the array
// deleteCount : The numbers you want to delete/extracts
// end: the index at which you need to stop changing the array


// console.log(bikes.splice(0, 3));
// console.log(bikes.splice(1, 4));

// Adding element using splice method :
// bikes.splice(1, 0, "Kawasaki","Honda"); // 1: start from index 1,  0: delete no
// console.log(bikes);

// eplace using splice method :
// bikes.splice(1, 2, "Kawasaki", "Honda"); // 1: start from index 1,  2: delete no
// console.log(bikes);

// concat method :
// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but returns a new array.


// let cars = ["Ferrari", "BMW", "Audi", "Porsche", "Range-Rover"];
// let vehicle = bikes.concat(cars);
// console.log(vehicle);

// console.log(Array.isArray(cars)); // to check the type
// // console.log(Array.from("Rajesh")); // to create an array

// Flat array method :
// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

let mixedArray2 = [1, 2, 3, ["a", "b", "c"], [2.5, 5.6, 3.9]];
console.log(mixedArray2);
console.log(mixedArray2.flat(Infinity));

