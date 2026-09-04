// JUNAYED HASAN
// 4. Find Longest Word
function findLongestWord(sentence: string): string {
    let longestWord = "";
    let currentWord = "";
    for (let i = 0; i < sentence.length; i++) {
        let ch = sentence[i];
        if ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9')) {
            currentWord += ch;
        }
        else {
            if (currentWord.length > longestWord.length) {
                longestWord = currentWord;
            }
            currentWord = "";
        }
    }
    if (currentWord.length > longestWord.length) {
        longestWord = currentWord;
    }
    return longestWord;
}