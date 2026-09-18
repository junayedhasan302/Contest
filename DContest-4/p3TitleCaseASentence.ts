// JUNAYED HASAN
// 3. Title Case a Sentence

function titleCaseSentence(str: string): string {
    if(str.trim() === ""){
        return "";
    }
    let words: string[] = str.trim().toLowerCase().split(/\s+/);
    let result: string = "";
    for(let i: number = 0; i < words.length; i++){
        result += words[i][0].toUpperCase() + words[i].slice(1);
        if(i < words.length - 1){
            result += " ";
        }
    }
    return result;
}

console.log(titleCaseSentence("hello world")); // "Hello World"
console.log(titleCaseSentence("HELLO WORLD")); // "Hello World"
console.log(titleCaseSentence("hELLo WoRLD")); // "Hello World"
console.log(titleCaseSentence("   hello world   ")); // "Hello World"
console.log(titleCaseSentence("hello    world")); // "Hello World"
console.log(titleCaseSentence("   hello    beautiful    world   ")); // "Hello Beautiful World"
console.log(titleCaseSentence("")); // ""
console.log(titleCaseSentence("     ")); // ""
console.log(titleCaseSentence("a")); // "A"
console.log(titleCaseSentence("A")); // "A"
console.log(titleCaseSentence("hello")); // "Hello"

//Accepted