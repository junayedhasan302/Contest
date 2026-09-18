// JUNAYED HASAN
// 1. Anagram Checker

function isAnagram(s1: string, s2: string): boolean {
    let frequency: number[] = Array(26).fill(0);
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    for(let i: number = 0; i < s1.length; i++){
        if(s1[i] >= "a" && s1[i] <= "z"){
            let index: number = s1.charCodeAt(i) - "a".charCodeAt(0);
            frequency[index]++;
        }
    }
    for(let i: number = 0; i < s2.length; i++){
        if(s2[i] >= "a" && s2[i] <= "z"){
            let index: number = s2.charCodeAt(i) - "a".charCodeAt(0);
            frequency[index]--;
        }
    }
    for(let i: number = 0; i < 26; i++){
        if(frequency[i] !== 0){
            return false;
        }
    }
    return true;
}


console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
console.log(isAnagram("Hello", "hello")); // true
console.log(isAnagram("HELLO", "hello")); // true
console.log(isAnagram("Listen", "Silent")); // true
console.log(isAnagram("A decimal point", "I'm a dot in place")); // true
console.log(isAnagram("The eyes", "They see")); // true
console.log(isAnagram("Dormitory", "Dirty room")); // true
console.log(isAnagram("hello world", "world hello")); // true
console.log(isAnagram("hello world", "hello")); // false
console.log(isAnagram("hello", "hello world")); // false
console.log(isAnagram("", "")); // true
console.log(isAnagram("a", "a")); // true
console.log(isAnagram("a", "b")); // false
console.log(isAnagram("a", "")); // false
console.log(isAnagram("aaabbb", "bbbaaa")); // true
console.log(isAnagram("aaabbb", "aabbbb")); // false
console.log(isAnagram("abc123", "321cba")); // true
console.log(isAnagram("hello123", "123hello")); // true
console.log(isAnagram("!!!", "???")); // true
console.log(isAnagram("12345", "67890")); // true
console.log(isAnagram("abc!", "!cba")); // true
console.log(isAnagram("a-b-c", "cba")); // true
console.log(isAnagram("apple", "appel")); // true
console.log(isAnagram("apple", "apples")); // false

//Accepted