// ? question1: Divide the elements in array1 with elements in array2 respectively and store their results in a new array.

let array1 = [20, 46, 90, 80, 120];
let array2 = [2, 2, 5, 4, 2];

var output = array1.map((array1,i)=>array1/array2[i]);
console.log(output);

// ? Question 2:Multi dimensional Arrays
var arr = [[1, 2, 3],[4, 5, 6],7,8,9,[[10, 11, 12, [13, 4, 112]], 136, 14],];
for(let i = 0; i<arr.length;i++){
    console.log(arr[5][0][0])
    console.log(arr[3]);
    console.log(arr[5][0][3][0])
    console.log(arr[5][1])
    console.log(arr[1][0])
}


// *print out these numbers (10,8,13,136 and 4)from the array provided above using for loop
