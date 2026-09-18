// JUNAYED HASAN
// 4. Count Word Frequencies

interface FrequencyType {
    [word: string]: number;
}

function countWordFrequencies(sentence: string): FrequencyType {
    let frequency: FrequencyType = {};
    sentence = sentence.toLowerCase();
    let words: string[] = sentence.split(/[^a-z0-9]+/);
    for(let i: number = 0; i < words.length; i++){
        let word: string = words[i];
        if(word === ""){
            continue;
        }
        if(frequency[word]){
            frequency[word]++;
        }
        else{
            frequency[word] = 1;
        }
    }
    return frequency;
}

// Accepted

console.log(countWordFrequencies("Hello world, hello!")); // {"hello":2,"world":1}
console.log(countWordFrequencies("The quick brown fox jumps over the lazy dog. The")); // {"the":2,"quick":1,"brown":1,"fox":1,"jumps":1,"over":1,"lazy":1,"dog":1}
console.log(countWordFrequencies("Hello")); // {"hello":1}
console.log(countWordFrequencies("HELLO hello HeLLo")); // {"hello":3}
console.log(countWordFrequencies("hello world hello world")); // {"hello":2,"world":2}
console.log(countWordFrequencies("")); // {}
console.log(countWordFrequencies("     ")); // {}
console.log(countWordFrequencies("!!!")); // {}
console.log(countWordFrequencies("hello, hello, hello!")); // {"hello":3}
console.log(countWordFrequencies("cat123 cat123 dog456")); // {"cat123":2,"dog456":1}
console.log(countWordFrequencies("123 123 abc")); // {"123":2,"abc":1}
console.log(countWordFrequencies("Hello, WORLD! hello world.")); // {"hello":2,"world":2}
console.log(countWordFrequencies("one-two-three")); // {"one":1,"two":1,"three":1}
console.log(countWordFrequencies("hello...world!!!hello")); // {"hello":2,"world":1}

