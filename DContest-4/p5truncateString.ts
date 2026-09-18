// JUNAYED HASAN
// 5. Truncate String with Ellipsis

function truncateString(str: string, maxLength: number): string {
    if(str.length <= maxLength){
        return str;
    }
    if(maxLength <= 3){
        return "...";
    }
    return str.slice(0, maxLength - 3) + "...";
}

// Accepted

console.log(truncateString("Hello world, this is a long string", 10)); // "Hello w..."
console.log(truncateString("Short text", 15)); // "Short text"
console.log(truncateString("Hello", 5)); // "Hello"
console.log(truncateString("Hello", 4)); // "H..."
console.log(truncateString("Hello", 3)); // "..."
console.log(truncateString("Hello", 2)); // "..."
console.log(truncateString("Hello", 1)); // "..."
console.log(truncateString("Hello", 0)); // "..."
console.log(truncateString("", 5)); // ""
console.log(truncateString("", 0)); // ""
console.log(truncateString("a", 1)); // "a"
console.log(truncateString("Hello World", 8)); // "Hello..."
console.log(truncateString("Hello World", 9)); // "Hello W..."
console.log(truncateString("Hello World", 10)); // "Hello Wo..."
console.log(truncateString("Hello World", 11)); // "Hello World"
console.log(truncateString("abcdefghijklmnopqrstuvwxyz", 10)); // "abcdefg..."

