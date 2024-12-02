// Write a program to check if a string is a valid palindrome ignoring non-alphanumeric characters.

function isPalindrome(s) {
    const filtered = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversed = filtered.split("").reverse().join("");
    return filtered === reversed;
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("race a car")); // Output: false
