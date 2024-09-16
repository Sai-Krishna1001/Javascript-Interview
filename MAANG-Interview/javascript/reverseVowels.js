function reverseVowels(str) {
  const vowels = 'aeiouAEIOU'; // Set of vowels
  let arr = str.split(''); // Convert string to array for easy manipulation
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right) {
    // Move left pointer until a vowel is found
    if (!vowels.includes(arr[left])) {
      left++;
      continue;
    }
    
    // Move right pointer until a vowel is found
    if (!vowels.includes(arr[right])) {
      right--;
      continue;
    }
    
    // Swap the vowels
    [arr[left], arr[right]] = [arr[right], arr[left]];
    
    // Move both pointers inward
    left++;
    right--;
  }
  
  return arr.join(''); // Convert array back to string
}

const input = "hello world";
const output = reverseVowels(input);
console.log(output); // Output: "hollo werld"
