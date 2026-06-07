let scoure = "33abc"

// console.log( typeof scoure) // string
// console.log(typeof(scoure)) // string

let valeInNumber = Number(scoure) // this will convert the string to a number, but since "33abc" is not a valid number, it will return NaN (Not a Number)
console.log(valeInNumber) // NaN
console.log(typeof valeInNumber) // number (NaN is of type number)

// let isLoggedIn = Boolean(scoure) // this will convert the string to a boolean, and since "33abc" is a non-empty string, it will return true
console.log(isLoggedIn) // true
console.log(typeof isLoggedIn) // boolean
let = 33
let stingNumber = String(scoure) // this will convert the number to a string
console.log(stingNumber) // "33"
console.log(typeof stingNumber) // string 
// //  "33"=> 33
// "33abc" => NaN
// "abc" => NaN
// " " => 0
// "" => 0
// null => 0
// undefined => NaN
// true => 1
// false => 0
// "0" => 0
// "1" => 1
// "0.5" => 0.5
// to convert a number to a string we can use the String() function
// to convert a boolean to a string we can use the String() function
// to convert a string to a boolean we can use the Boolean() function
// to convert a number to a boolean we can use the Boolean() function
// to convert a boolean to a number we can use the Number() function
// to convert a string to a number we can use the Number() function