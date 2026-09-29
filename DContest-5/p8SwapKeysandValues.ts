// JUNAYED HASAN
function swapKeysAndValues(
    obj: Record<string, string | number>
): Record<string, string> {
    const result: Record<string, string> = {};
    const entries = Object.entries(obj);
    for (let i = 0; i < entries.length; i++) {
        const key = entries[i][0];
        const value = entries[i][1];
        result[String(value)] = key;
    }
    return result;
}

console.log(
    swapKeysAndValues({
        a: "x",
        b: "y"
    })
);
// { x: "a", y: "b" }
console.log(
    swapKeysAndValues({
        a: "x",
        b: "x"
    })
);
// { x: "b" }