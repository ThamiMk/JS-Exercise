let arr1 = [2,5,12,20,30];
let arr2 = [[1,5,4,4], [4,20,15,7], [7,9,1,10]];


//Remove a number from the end of an array
arr1.pop();
// Add a number to array 1
arr1.push(40);
//Removes first number from array
arr1.shift();
//adds number to begginig of array 
arr1.unshift(1);

console.log(arr1); 
console.log(arr1.length); // number of items

// using Index to find 20 // Note index starts with 0
console.log(arr2[1][1]);
