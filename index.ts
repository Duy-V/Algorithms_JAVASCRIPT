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
    

    function reverseLetters(s: string): string {
        let left = 0;
        let right = s.length - 1;
        const chars = s.split('');
      
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
      
        return chars.join('');
      }
      
      function isLetter(char: string): boolean {
        return /^[a-zA-Z]$/.test(char);
      }
      
      // Test Cases
      console.log(reverseLetters("ab-cd")); // "dc-ba"
      console.log(reverseLetters("a-bC-dEf-ghIj")); // "j-Ih-gfE-dCba"
      console.log(reverseLetters("Test1ng-Leet=code-Q!")); // "Qedo1ct-eeLg=ntse-T!"
    
      
    
      function moveZeros(nums: number[]): number[] {
        let nonZeroIdx = 0;
      
        for (let i = 0; i < nums.length; i++) {
          if (nums[i] !== 0) {
            nums[nonZeroIdx] = nums[i];
            nonZeroIdx++;
          }
        }
      
        for (let i = nonZeroIdx; i < nums.length; i++) {
          nums[i] = 0;
        }
      
        return nums;
      }
      
      // Test Cases
      console.log(moveZeros([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]
      console.log(moveZeros([0])); // [0]
    
      
    
      function isPalindrome(s: string): boolean {
        let left = 0;
        let right = s.length - 1;
      
        while (left < right) {
          while (left < right && !isAlphanumeric(s[left])) {
            left++;
          }
      
          while (left < right && !isAlphanumeric(s[right])) {
            right--;
          }
      
          if (left < right && s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
          }
      
          left++;
          right--;
        }
      
        return true;
      }
      
      function isAlphanumeric(char: string): boolean {
        return /^[a-zA-Z0-9]$/.test(char);
      }
      
      // Test Cases
      console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
      console.log(isPalindrome("race a car")); // false
    
      
    
      function removeDuplicates(nums: number[]): number {
        if (nums.length === 0) {
          return 0;
        }
      
        let uniqueIdx = 0;
      
        for (let i = 1; i < nums.length; i++) {
          if (nums[i] !== nums[uniqueIdx]) {
            uniqueIdx++;
            nums[uniqueIdx] = nums[i];
          }
        }
      
        return uniqueIdx + 1;
      }
      
      // Test Cases
      console.log(removeDuplicates([1, 1, 2])); // 2
      console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5