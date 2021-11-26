//## Do the below programs in anonymous function & IIFE

//### Print odd numbers in an array
console.log("a) Print odd numbers in an array in anonymous function & IIFE");
let arrOddEven = [1,2,3,4,5,6,7,8,9,10,11,12];
let printOddNo = (function (inputElm) {
  inputElm.forEach(function(item){
    if(item%2 !== 0){
      console.log(item);
    }
  });
})(arrOddEven);
console.log("");

//###  Convert all the strings to title caps in a string array
let foods=["pizza", "fried rice", "hamburger", "soup", "caesar salad", "hash browns"]
console.log("b) Convert all the strings to title caps in a string array");
console.log("Input", foods);
let titleCase = (function(inputArr){
    // iterate through input array
    let tempArr = []
    inputArr.forEach(function(item) {
       // split each item to create an array
       let eachItem = item.split(" ");
       let tempWord = '';
       for(let i=0; i<eachItem.length; i++) {
        // convert each sub item to title case and store
        tempWord +=  ` ${eachItem[i].charAt(0).toUpperCase() + eachItem[i].slice(1)}`           
       }
        // push completed word to array
       tempArr.push(tempWord.trim())
    });
    return tempArr;
})(foods);
console.log("Output", titleCase);

console.log("");

//###  Sum of all numbers in an array
let sumofArrays = [1,2,3,4,5,6,7,8,9,10,11,12];

let printSumOfArr = (function (inputElm) {
  return inputElm.reduce(function(prev, next){
    return prev + next;
  });
})(sumofArrays);
// let sumOfArr = printSumOfArr(sumofArrays);
console.log("c) Sum of all numbers in an array =", printSumOfArr);
console.log("");

//###  Return all the prime numbers in an array
// all whole positive numbers that r only divisible by itself or 1 is Prime Numbers

let check4Prime = [1,2,3,4,5,6,7,8,9,10,11,12];

let printPrimeNos = (function(inputArr) {
  
  return inputArr.filter(function(inputpoint){

    for (let i = 2; inputpoint > i; i++) {
      if (inputpoint % i == 0) {
        return false;
      }
    }
    return inputpoint > 1;

  })

})(check4Prime);

console.log("d) Return all the prime numbers in an array");
console.log(printPrimeNos);
console.log("");

//###  Return all the palindromes in an array
console.log("Return all the palindromes in an array");
let listPalindrome = ["racecar", "yarn", "madam", "civic", "notebook"]

let checkPalindrome = (function(listPalindrome){
    let isPalindrome = []
    listPalindrome.forEach(function (params){
        let inputWord = params; 
        let reverseWord = params.split("").reverse().join("");
        if(inputWord === reverseWord){
            isPalindrome.push(inputWord)
        }
    })
    return isPalindrome;
})(listPalindrome);

console.log("input", listPalindrome);
console.log("output", checkPalindrome);
console.log(`${checkPalindrome.length} out of ${listPalindrome.length} are Palindromes`);

//###  Return median of two sorted arrays of same size
let medArr1 = [1, 12, 15, 26, 38]
let medArr2 = [2, 13, 17, 30, 45]

let getMedian = (function (arr1, arr2) {
    let mergedArr = arr1.concat(arr2)
    let sortedArr = mergedArr.sort(function(a,b){
        return a-b;
    })
    let val1 = sortedArr[sortedArr.length/2], val2 =sortedArr[sortedArr.length/2-1];
    return (val1 + val2)/2;
})(medArr1, medArr2);

console.log("");
console.log("Median of Two Arrays", getMedian);

//###  Remove duplicates from an array

//###  Rotate an array by k times

//## https://medium.com/@reach2arunprakash/guvi-zen-class-javascript-warm-up-programming-problems-15973c74b87f

//## Do the below programs in arrow functions

//###  Convert all the strings to title caps in a string array
//###  Sum of all numbers in an array
//###  Return all the prime numbers in an array
//###  Return all the palindromes in an array
