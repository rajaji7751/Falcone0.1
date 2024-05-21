// Array :

// An array in js is a data structure to store multipule values of any type under a single name, including number


// Create an array:
 
//eralier
let num1 =100;
let num2 =200;
let num3 =300;

//now
let myArray =[num1,num2,num3];
console.log(myArray);

let mixedArray =["Promod","swadhin","Rajesh",25,22,21];
console.log(mixedArray);

//Accessing element :
console.log(mixedArray.length);
console.log(mixedArray[3]);

//in optimized way

//print me the last value of randomArray
console.log(mixedArray[5]);
console.log(mixedArray[mixedArray.length - 1]);

//modifying the element :

mixedArray[0] ="sai";
console.log(mixedArray);

mixedArray[3] =19;
console.log(mixedArray);

//Array method :

//push method :
// The push () method adds one or more element to the end of an array and return the new length of the array.

let bikes =["PUlsur","z900","RR1000","panigalV4"];
console.log(bikes);
console.log(bikes.length);


bikes.push("Beneli");
console.log(bikes);



// Pop method :
// The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

console.log(bikes.pop()); // Triumph
console.log(bikes.pop()); // Beneli
console.log(bikes);