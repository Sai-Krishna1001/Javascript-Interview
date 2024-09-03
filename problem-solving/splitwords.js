/**
 * Problem Statement:
 * 
 * Given a string in CamelCase format (a string without spaces where the first letter of each word is capitalized), 
 * write a function called `splitWords` that splits the string into individual words. The function should insert a 
 * space before each uppercase letter (except for the first one) to separate the words, and return the resulting 
 * string with words separated by a single space.
 * 
 * Example:
 * 
 * Input: "SaiKrishnaGedda"
 * Output: "Sai Krishna Gedda"
 * 
 * Explanation:
 * The input string "SaiKrishnaGedda" contains three words: "Sai", "Krishna", and "Gedda". The function should 
 * split these words and insert spaces to return "Sai Krishna Gedda".
 * 
 * Requirements:
 * - The input string will only contain alphabetic characters.
 * - The input string will always start with an uppercase letter.
 * - The function should handle strings with any number of words in CamelCase format.
 */

const str = "SaiKrishnaGedda";

function splitWords(str) {
  // Split the string at each uppercase letter, but retain the uppercase letter as the start of a new word.
  // The regex (?=[A-Z]) is a positive lookahead that matches positions before an uppercase letter.
  let words = str.split(/(?=[A-Z])/).join(" ");
  
  // Return the resulting string with spaces between words
  return words;
}

console.log(splitWords(str)); // Expected output: "Sai Krishna Gedda"
