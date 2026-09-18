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
//Accepted