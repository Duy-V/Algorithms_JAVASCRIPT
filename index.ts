function findProduct(...arr: number[]): number[] {
    const result: number[] = Array(arr.length).fill(1);
  
    let left = 1;
    for (let i = 0; i < arr.length; i++) {
      result[i] *= left;
      left *= arr[i];
    }
  
    let right = 1;
    for (let i = arr.length - 1; i >= 0; i--) {
      result[i] *= right;
      right *= arr[i];
    }
  
    return result;
  }
  
  // Test Cases
  console.log(findProduct(1, 2, 3, 4)); // [24, 12, 8, 6]
  console.log(findProduct(2, 5, 9, 3, 6)); // [810, 324, 180, 540, 270]
  
  function findFirstUnique(array: number[]): number {
    for (let i = 0; i < array.length; i++) {
      let isUnique = true;
  
      for (let j = 0; j < array.length; j++) {
        if (i === j) continue;
  
        if (array[i] === array[j]) {
          isUnique = false;
          break;
        }
      }
  
      if (isUnique) {
        return array[i];
      }
    }
  
    return -1;
  }
  
  // Test Cases
  console.log(findFirstUnique([1, 2, 3, 2, 1, 4, 5, 4])); // 3
  console.log(findFirstUnique([1, 2, 3, 4, 4, 3, 2, 1])); // -1
  
  function findSecondMaximum(...arr: number[]): number {
    if (arr.length < 2) {
      return -1;
    }
  
    let firstMax: number | null = null;
    let secondMax: number | null = null;
  
    for (const num of arr) {
      if (firstMax === null || num > firstMax) {
        secondMax = firstMax;
        firstMax = num;
      } else if ((secondMax === null || num > secondMax) && num !== firstMax) {
        secondMax = num;
      }
    }
  
    return secondMax === null ? -1 : secondMax;
  }
  
  // Test Cases
  console.log(findSecondMaximum(2, 2, 2, 2)); // 6
  console.log(findSecondMaximum(2, 3, 3, 3, 3)); // 2
  function reverseArray(s: string[]): string[] {
    let left = 0;
    let right = s.length - 1;
  
    while (left < s.length) {
      const temp = s[left];
      s[left] = s[right];
      s[right] = temp;
      left++;
      right--;
    }
  
    return s;
  }
  
  // Test Case
  const input = ["h", "e", "l", "l", "o"];
  console.log(reverseArray(input)); // ["o", "l", "l", "e", "h"]
  
  
  
  function reverseWords(s: string): string {
      const words = s.split(' ');
      console.log(words)
      const reversedWords = words.map(word => reverseWord(word));
      return reversedWords.join(' ');
    }
    
    function reverseWord(word: string): string {
      let left = 0;
      let right = word.length - 1;
      const chars = word.split('');
    
      while (left < right) {
        const temp = chars[left];
        chars[left] = chars[right];
        chars[right] = temp;
    
        left++;
        right--;
      }
    
      return chars.join('');
    }
    
    // Test Case
  //   const input = "Let's take LeetCode contest";
    console.log(reverseWords("Let's take LeetCode contest")); // "s'teL ekat edoCteeL tsetnoc"
    