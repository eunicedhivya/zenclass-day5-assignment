//## https://medium.com/@reach2arunprakash/guvi-zen-class-javascript-warm-up-programming-problems-15973c74b87f

//  Write a function called “addFive”.
// Given a number, “addFive” returns 5 added to that number.
var num = 10;
function addFive(no) { 
  return no + 5
}
var result = addFive(num)

console.log("1. add five to given number");
console.log(addFive(5));
console.log(addFive(0));
console.log(addFive(-5));

// Write a function called “getOpposite”.
// Given a number, return its opposite
var num = 5;
function getOpposite(num) {
  if(Number.isInteger(num)){
    if(num !== 0){
      return num * -1;
    }else{
      return 0
    }
  }else{
    return -1;
  }
}
var result = getOpposite(num)

console.log("");
console.log("2. Get opposite of given number");
console.log(getOpposite(5));
console.log(getOpposite(0));
console.log(getOpposite(-5));
console.log(getOpposite("5a"));
console.log(getOpposite(5.5));


// Fill in your code that takes an number minutes and converts it to seconds.

var min = 5;
function toSeconds(min) {
  return min * 60;
}
var secs = toSeconds(min)

console.log("");
console.log("3. Minutes to Seconds");
console.log("5mins =>", toSeconds(5)+"sec")
console.log("3mins =>", toSeconds(3)+"sec")
console.log("2mins =>", toSeconds(2)+"sec")

// Create a function that takes a string and returns it as an integer.

var mystr = "5";
function toInteger(mystr) {
    return parseInt(mystr)
}
var myint = toInteger(mystr)

console.log("");
console.log("4. String to Integer");
console.log('toInteger("6") =>', toInteger("6"))
console.log('toInteger("1000") =>', toInteger("1000"))
console.log('toInteger("12") =>', toInteger("12"))

// Create a function that takes a number as an argument, increments the number by +1 and returns the result.
var myint = 0;
function nextNumber(myint) {
    return ++myint;
}
var myNextint = nextNumber(myint)

console.log("");
console.log("5. Increment by 1");
console.log('nextNumber(0) =>', nextNumber(0))
console.log('nextNumber(9) =>', nextNumber(9))
console.log('nextNumber(-3) =>', nextNumber(-3))

// Create a function that takes an array and returns the first element.

var arr = [1, 2, 3];
function getFirstElement(arr) {
    return arr[0];
}

console.log("");
console.log("6. takes an array and returns the first element.");
console.log('getFirstElement([1,2,3]) =>', getFirstElement([1,2,3]))
console.log('getFirstElement([80,5,100]) =>', getFirstElement([80,5,100]))
console.log('getFirstElement([-500, 0, 50]) =>', getFirstElement([-500, 0, 50]))


// Convert Hours into Seconds

function hourToSeconds(hr) {
    // hr x (mins in hr x secs in a min)
    return hr * (60 * 60)
}

console.log("");
console.log("7. hour To Seconds");
console.log('hourToSeconds(2) =>', hourToSeconds(2))
console.log('hourToSeconds(10) =>', hourToSeconds(10))
console.log('hourToSeconds(24) =>', hourToSeconds(24))

// perimeter of a rectangle

// formula p = 2(w + L)

function findPerimeter(num1,num2) {
    return 2 * (num1 + num2)
}

console.log("");
console.log("8. perimeter of a rectangle");
console.log('findPerimeter(6, 7) =>', findPerimeter(6, 7))
console.log('findPerimeter(20, 10) =>', findPerimeter(20, 10))
console.log('findPerimeter(2, 9) =>', findPerimeter(2, 9))

// Less Than 100?
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

function lessThan100(num1,num2) {
    let sum = num1 + num2;
    if(sum > 100){
        return false;
    }else{
        return true;
    }
}

console.log("");
console.log("9. Sum Less Than 100?");
console.log('lessThan100(22, 15) =>', lessThan100(22, 15))
console.log('lessThan100(83, 34) =>', lessThan100(83, 34))

function remainder(num1,num2) {
    return num1 % num2;
}

console.log("");
console.log("10. Return the remainder of two values?");
console.log('remainder(1, 3) =>', remainder(1, 3))
console.log('remainder(3, 4) =>', remainder(3, 4))
console.log('remainder(-9, 45) =>', remainder(-9, 45))
console.log('remainder(5, 5) =>', remainder(5, 5))


// MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

var turkeyLeg = 2, horseLeg = 4 , pigsLeg = 4;

function CountAnimals(tur,horse,pigs) {
    return (tur*turkeyLeg) + (horse * horseLeg) + (pigs * pigsLeg);
}

console.log("");
console.log("11. Count total no of legs of farm animals");
console.log('CountAnimals(2, 3, 5) =>', CountAnimals(2, 3, 5))
console.log('CountAnimals(1, 2, 3) =>', CountAnimals(1, 2, 3))
console.log('CountAnimals(5, 2, 8) =>', CountAnimals(5, 2, 8))


// Frames Per Second
// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

function frames(num1,num2) {
    let frames = num1;
    let sec = num2;
    return frames * (sec * 60)
}

console.log("");
console.log("12. Frames Per Second");
console.log('frames(1, 1) =>', frames(1, 1))
console.log('frames(10, 1) =>', frames(10, 1))
console.log('frames(10, 25) =>', frames(10, 25))

// Check if an Integer is Divisible By Five
// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

function divisibleByFive(num1) {
    if(num1 % 5 === 0){
        return true;
    }else{
        return false;
    }
}

console.log("");
console.log("13. Check if an Integer is Divisible By Five");
console.log('divisibleByFive(5) =>', divisibleByFive(5))
console.log('divisibleByFive(-55) =>', divisibleByFive(-55))
console.log('divisibleByFive(37) =>', divisibleByFive(37))

// Write a function called “isEven”.
// Given a number, “isEven” returns whether it is even.

function isEven(num){
 if(Number.isInteger(num)){
    if(num % 2 === 0){
        return true;
    }else{
        return false;
    }
 }else{
    return -1;
 }
}

console.log("");
console.log("14.  Given a number, “isEven” returns whether it is even.");
console.log('isEven(12) =>', isEven(12))
console.log('isEven(0) =>', isEven(0))
console.log('isEven(11) =>', isEven(11))
console.log('isEven(11h) =>', isEven("11h"))

// Write a function called “areBothOdd”.
// Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.
function areBothOdd(num1, num2){
 // your code here
 if((num1 % 2 !== 0) && (num2 % 2 !== 0)){
     return true;
 }else{
     return false;
 }
}


console.log("");
console.log("15.  Write a function called “areBothOdd”.");
console.log('areBothOdd(1, 3) =>', areBothOdd(1, 3))
console.log('areBothOdd(1, 4) =>', areBothOdd(1, 4))
console.log('areBothOdd(2, 3) =>', areBothOdd(2, 3))
console.log('areBothOdd(0, 0) =>', areBothOdd(0, 0))

// Write a function called “getFullName”.
// Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.

function getFullName(firstName, lastName){
 // your code here
 if((firstName !== "") && (lastName !== "")){
    return `${firstName} ${lastName}`;
 }else{
    return firstName + lastName;
 }
}

console.log("");
console.log("16.  get full name");
console.log('getFullName("GUVI", "GEEK") =>', getFullName("GUVI", "GEEK"))
console.log('getFullName("GUVI", ) =>', getFullName("GUVI", ""))
console.log('getFullName("" , "GEEK") =>', getFullName("" , "GEEK"))
console.log('getFullName("" , "") =>', getFullName("" , ""))


// Write a function called “getLengthOfWord”.
// Given a word, “getLengthOfWord” returns the length of the given word.

function getLengthOfWord(word1){
 // your code here
 if(word1 !== undefined) {
    if(!Number.isInteger(word1)){
        return word1.length;
    }else{
        return -1;
    }
 }else{
     return -1;
 }
}

console.log("");
console.log("17.  get length of word");
console.log('getLengthOfWord(“GUVI”) =>', getLengthOfWord("GUVI"))
console.log('getLengthOfWord(“”) =>', getLengthOfWord(""))
console.log('getLengthOfWord() =>', getLengthOfWord())
console.log('getLengthOfWord(9) =>', getLengthOfWord(9))
console.log("");


// Create a function to calculate the distance between two points defined by their x, y coordinates
function getDistance(x1, y1, x2, y2){
    var distance1 = (x1-x2) ** 2;
    var distance2=(y1-y2) ** 2;
    return distance1 + distance2;
}

console.log("18. Calculate the distance between two points defined by their x, y coordinates");
console.log("distance =", getDistance(100, 100, 400, 300));
console.log("");


// Write a function called “getNthElement”.
// Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’.

function getNthElement(array,n){
    return array[n]
}

console.log("19. getNthElement", getNthElement([1, 3, 5], 1))
console.log("");

// Write a function called “getLastElement”.
// Given an array, “getLastElement” returns the last element of the given array. If the given array has a length of 0, it should return ‘-1’.

function getLastElement(array){
 return array[array.length-1]
}

console.log("20. getLastElement", getLastElement([1, 2, 3, 4]));
console.log("");


// Write a function called “getProperty”.
// Given an object and a key, “getProperty” returns the value of the property at the given key. If there is no property at the given key, it should return undefined.

var obj = {
 mykey: "value"
};
function getProperty(obj, key) {
 return obj[key];
}

console.log("21. getProperty");
console.log("getProperty(obj,'mykey')", getProperty(obj,'mykey'));
console.log("getProperty(obj, 'dummykey')", getProperty(obj, 'dummykey'));
console.log("");


// Write a function called “addProperty”.
// Given an object and a key, “addProperty” adds a new property on the given object with a value of true.

var obj2 = {
}
function addProperty(obj, key) {
    obj[key] = true;
    return obj;
}

console.log("22. addProperty");
console.log("addProperty(obj, mykey)", addProperty(obj2, "mykey"));
console.log("");


// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
var pos_neg_arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = function countPositivesSumNegatives(arr) {
    let countPos = 0, countNeg = 0, retArr = [];
    arr.forEach(function(params) {
        if(Math.sign(params) === -1){
            countNeg += params;
        }else{
            countPos += params;
        }
    });
    retArr.push(countPos);
    retArr.push(countNeg);

    return retArr;
}
console.log("23. Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.");
console.log(ar2(pos_neg_arr));
console.log("");


// Create a function that receives an array of numbers and returns an array containing only the positive numbers

function getPositives(ar){
    let retArr = [];
    ar.forEach(function(params) {
        if(Math.sign(params) !== -1){
             retArr.push(params); ;
        }
    });

    return retArr;
}

console.log("24. Create a function that receives an array of numbers and returns an array containing only the positive numbers");
var pos_neg_arr2 = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
console.log(getPositives(pos_neg_arr2));
console.log("");

// Find the maximum number in an array of numbers
function findMax(ar){
 ar.sort(function(a, b) {
     return a-b
 })
 return ar[ar.length-1]
}
var maxValArr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
console.log("25. Find the maximum number in an array of numbers");
console.log("Max", findMax(maxValArr));
console.log("");

// Reverse a string
function reverseString(s){
   return s.split("").reverse().join("");
}
console.log("26. Reverse a string");
console.log(reverseString("JavaScript"));
console.log("");