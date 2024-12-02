function reverseVowels(s) {
    const vowels = "aeiouAEIOU";
    const strArr = s.split("");
    let left = 0, right = s.length - 1;

    while (left < right) {
        if (!vowels.includes(strArr[left])) {
            left++;
        } else if (!vowels.includes(strArr[right])) {
            right--;
        } else {
            [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
            left++;
            right--;
        }
    }

    return strArr.join("");
}

// Example usage:
console.log(reverseVowels("hello")); // Output: "holle"
console.log(reverseVowels("leetcode")); // Output: "leotcede"
