// JUNAYED HASAN
// 1. Convert Sentence to Camel Case

const convertToCamelCase = (sentence: string): string => {
    const words = sentence.trim().split(/\s+/);
    let result: string = "";
    for (let i = 0; i < words.length; i++) {
        const word: string = words[i].toLowerCase();
        if (i === 0) {
            result += word;
        } else {
            result += word[0].toUpperCase() + word.slice(1);
        }
    }
    return result;
};