// JUNAYED HASAN
// 2. Compress Consecutive Characters

function compressCharacters(str: string): string {
    let result: string = "";
    for(let i: number = 0; i < str.length; i++){
        let j: number = i;
        while(j < str.length && str[i] === str[j]){
            j++;
        }
        let count: number = j - i;
        result += str[i];
        if(count > 1){
            result += count;
        }
        i = j - 1;
    }
    return result;
}

console.log(compressCharacters("aabbaa")); // "a2b2a2"
console.log(compressCharacters("abca")); // "abca"
console.log(compressCharacters("")); // ""
console.log(compressCharacters("a")); // "a"
console.log(compressCharacters("aa")); // "a2"
//Accepted