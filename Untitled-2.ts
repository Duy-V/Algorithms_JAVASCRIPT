// idea: sorting the array, then compare the numbers around the number u want to find
function findProduct(...arr: number[]): number[] {
  const result: number[] = []; //space: O(n), time: o(n)
  for (let i = 0; i < arr.length; i++) {
    let total = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        total *= arr[j];
      }
    }
    result.push(total);
  }
  return result;
}
console.log(findProduct(1, 2, 3, 4)); // [24, 12, 8, 6]
console.log(findProduct(2, 5, 9, 3, 6)); // [810, 324, 180, 540, 270]
console.log(findProduct(4, 2, 1, 5, 0)); //

function findFirstUnique(array: number[]): number {
  array.sort(function (a, b) {
    return a - b;
  });
  console.log(array);

  for (let i = 0; i < array.length; i++) {
    //(time space: O(n))
    let isUnique = true; // (space complexity: O(1))
    if (array[i] !== array[i + 1] && array[i] !== array[i - 1]) {
      return array[i];
    }
  }

  return -1;
}

// time complexity: O(n^2)
// space complexity: O(1)
// O(n^2)
// Test Cases
console.log(findFirstUnique([1, 2, 3, 2, 1, 4, 5, 4])); // 3
console.log(findFirstUnique([1, 2, 3, 4, 4, 3, 2, 1])); // -1

// create 2 loop: compare the number with another numbers in the same array
function findFirstUnique1(array: number[]): number {
  for (let i = 0; i < array.length; i++) {
    let unique = true;
    for (let j = 0; j < array.length; j++) {
      if (i === j) continue;
      if (array[j] === array[i]) {
        unique = false;
        break;
      }
    }
    if (unique) {
      return array[i];
    }
  }
  return -1;
}

// time complexity: O(n^2)
// space complexity: O(1)
// O(n^2)
// Test Cases
console.log(findFirstUnique1([1, 2, 3, 2, 1, 4, 5, 4])); // 3
console.log(findFirstUnique1([1, 2, 3, 4, 4, 3, 2, 1])); // -1

function findSecondMaximum(...arr: number[]): number {
  if (arr.length < 2) {
    return -1;
  }
  let firstMax: number | null = null;
  let secondMax: number | null = null;
  for (const num of arr) {
    if (firstMax === null || firstMax < num) {
      secondMax = firstMax;
      firstMax = num;
    } else if ((secondMax === null || secondMax < num) && num < firstMax) {
      secondMax = num;
    }
  }
  return secondMax === null ? -1 : secondMax;
}
// time complexity: O(n)
// space complexity: O(1)
// O(n)
// Test Cases
console.log(findSecondMaximum(9, 2, 3, 6, 1)); // 6
console.log(findSecondMaximum(4, 2, 1, 5, 0)); // 2
console.log(findSecondMaximum(4, 4, 4, 4, 4, 4)); // -1
// another method is that: sorting the array and taking the item with second index

function reverseArray(s: string[]): string[] {
  let left = 0; // space complexity: O(1)
  let right = s.length - 1; // space complexity: O(1

  while (left < right) {
    // time complexity: O(n)
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }

  return s;
}
// time complexity: O(n)
// space complexity: O(1)
// O(n)

// Test Case
const input = ["h", "e", "l", "l", "o"];
console.log(reverseArray(input)); // ["o", "l", "l", "e", "h"]

function reverseWords(s: string): string {
  const words = s.split(" "); //O(n) time and O(n) space
  const reversedWords = words.map((word) => reverseWord(word));
  //  map: time complexity:  O(n * f) == O(n * 5/2*O(w));
  //map:  space complexity: O(n)
  return reversedWords.join(" "); // O(n) time and O(n) space
}

function reverseWord(word: string): string {
  let left = 0; //space complexity: O(1)
  let right = word.length - 1; //space complexity: O(1)
  const chars = word.split(""); //O(w) time and O(w) space

  while (left < right) {
    //O(w/2) time
    const temp = chars[left]; //space complexity: O(1)
    chars[left] = chars[right]; //space complexity: O(1)
    chars[right] = temp; //space complexity: O(1)

    left++;
    right--;
  }

  return chars.join(""); // O(w) time and O(w) space

  //space: 5*O(1) + 2* O(w)
  //time: 5/2*O(w)
}

// time complexity: O(n)
// space complexity: O(n)
// O(n)

// Test Case
//   const input = "Let's take LeetCode contest";
// console.log(reverseWords("Let's take LeetCode contest")); // "s'teL ekat edoCteeL tsetnoc"

///---------------------------------------------------------
function reverseLetters(s: string): string {
  let left = 0; //space complexity: O(1)
  let right = s.length - 1; //space complexity: O(1)
  const chars = s.split(""); //O(w) time and O(w) space

  while (left < right) {
    while (left < right && !isLetter(chars[left])) {
      left++;
    }

    while (left < right && !isLetter(chars[right])) {
      right--;
    }

    if (left < right) {
      const temp = chars[left];
      chars[left] = chars[right];
      chars[right] = temp;

      left++;
      right--;
    }
  }

  return chars.join("");
}

function isLetter(char: string): boolean {
  return /^[a-zA-Z]$/.test(char);
}
// time complexity: O(n)
// space complexity: O(n)
// O(n)

// Test Cases
console.log(reverseLetters("ab-cd")); // "dc-ba"
console.log(reverseLetters("a-bC-dEf-ghIj")); // "j-Ih-gfE-dCba"
console.log(reverseLetters("Test1ng-Leet=code-Q!")); // "Qedo1ct-eeLg=ntse-T!"

//-----------------------------------------------------------------------
// interating each of item in array and checking each item whethere the item is odd num or not
function removeEven(arr: number[]): number[] {
  const oddArr: number[] = [];
  for (const num of arr) {
    if (num % 2 !== 0) {
      oddArr.push(num);
    }
  }
  return oddArr;
}

// console.log(removeEven([1, 2, 4, 5, 10, 6, 3])); // [1,3,5]

//Merge Two Sorted Arrays
// idea: concat two sorted array, then sort them
function mergeArrays(arr1, arr2) {
  const newArr = arr1.concat(arr2);
  console.log(newArr);
  // the loop for sorting
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr.length; j++) {
      if (newArr[j + 1] < newArr[j]) {
        let temp = newArr[j];
        newArr[j] = newArr[j + 1];
        newArr[j + 1] = temp;
      }
    }
  }
  return newArr;
}
// console.log(mergeArrays([1, 3, 10, 20], [2, 6, 7, 8])); // [1,2,3,4,5,6,7,8]

function findSum(arr: number[], value: number): number[] {
  const sumArr: number[] = [];
  for (let i = 0; i < arr.length; i) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === value) {
        sumArr.push(arr[i]);
        sumArr.push(arr[j]);
        return sumArr;
      }
    }
  }
  return [];
}
// console.log(findSum([1, 2, 3, 4, 5], 20));

//Find Minimum Value in Array
//idea: sorting the array, then take the first element
function findMinimum(arr: number[]): number {
  arr.sort(function (a, b) {
    return a - b;
  });
  return arr[0];
}

console.log(findMinimum([1, 2, 3, 4, 5]));

// function rightRotate(arr: number[],n: number): number[]{
//     const newArr: number[] = []

//     return newArr;
//   }



function reArrange(arr: number[]): number[] {
  const arr1: number[] = [];
  const arr2: number[] = [];
  // Filter out all negative values and sort them in ascending order
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr1.push(arr[i]);
    }
  }
  // Filter out all non-negative values and sort them in ascending order
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arr2.push(arr[i]);
    }
  }
  // Combine the two arrays and return the result
  return arr1.concat(arr2);
}
const output = reArrange([10, -1, 20, 4, 5, -9, -6]);
console.log(output); // [-1,-9,-6,10,20,4,5]

function maxMinForm(arr: number[]): number[] {
  // Sort the input array in descending order
  const sortedArr: number[] = arr.sort((a, b) => b - a);
  const result: number[] = [];

  let left = 0;
  let right = arr.length - 1;
  for (let i = 0; i < sortedArr.length; i++) {
    if (left < right) {
      result.push(arr[left]);
      result.push(arr[right]);
      left++;
      right--;
    }
  }
  if (sortedArr.length % 2 === 1) {
    result.push(sortedArr[(sortedArr.length + 1) / 2 - 1]);
  }

  return result;
}

// Usage example:
const inputArr: number[] = [1, 2, 3, 4, 5];
const outputArr: number[] = maxMinForm(inputArr);
console.log(outputArr); // Output: [5, 1, 4, 2, 3]



function findMaxSumSubArray(arr: number[]): number {
  let maxSum: number = arr[0]; 
  let currentSum: number = arr[0]; 
  for(let i = 0; i < arr.length; i++) {
currentSum = Math.max(arr[i], currentSum+ arr[i]);
maxSum = Math.max(maxSum,currentSum)
  }

  return maxSum;
}


console.log(findMaxSumSubArray([ -4,2, -5, 1, 2, 3, 6, -5, 1])); // Output: 6 (subarray [4, -1, 2, 1])



  








//idea: reverse the array, cut array into two part
//one from index 0  to index n, and another part is from index n+1 to arr.length-1
//contine reverse the first part.
function rightRotate1(arr: number[], n: number): number[] {
  // Get the actual number of positions to rotate (modulus with array length)
  n = n % arr.length;
  const newArr: number[] = arr.reverse();
const firstArr: number[] = newArr.slice(0,n).reverse();
const secondArr: number[] = newArr.slice(n, arr.length)
console.log(firstArr, secondArr); 


  // Reverse the entire array
 return firstArr.concat(secondArr);
}

// Test Case
const arr = [1, 2, 3, 4, 5];
const n = 3;
console.log(rightRotate1(arr, n));
console.log(rightRotate1([-3, 0, 2, -5, 7], 9)); // [3, 4, 5, 1, 2]
// [3, 4, 5, 1, 2]
 