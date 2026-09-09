// JUNAYED HASAN
// 1. Reverse Each Word

function reverseEachWord(str: string): string {
    let revStr:string = str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
    return revStr;
}



// function reverseEachWord(str: string): string {
//     const words = str.split(' ');
//     let result = '';
//     for (let word of words) {
//         let i = word.length;
//         let reversed = '';
//         while (i--) {
//             reversed += word[i];
//         }
//         result += reversed + ' ';
//     }
//     return result.trim();
// }

console.log(reverseEachWord("Hello World"));
// console.log(reverseEachWord("Hello"));
