// JUNAYED HASAN
// 3. Find First Unique Characte
function findFirstUniqueChar(s: string): string | number {
    for (let i = 0; i < s.length; i++) {
        let uniqueChar: string = s[i];
        let count: number = 0;
        for (let j = 0; j < s.length; j++) {
            if (s[j] === uniqueChar) {
                count++;
            }
        }
        if (count === 1) {
            return uniqueChar;
        }
    }
    return -1;
}
// console.log(findFirstUniqueChar("aabb"));
// console.log(findFirstUniqueChar("aabbcdeff"));