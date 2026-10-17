// JUNAYED HASAN

function toQueryString(params: Record<string, string | number>): string {
  const entries: [string, string | number][] = Object.entries(params);
  let result: string = "";

  for (let i: number = 0; i < entries.length; i++) {
    const key: string = encodeURIComponent(entries[i][0]);
    const value: string = encodeURIComponent(String(entries[i][1]));

    if (i > 0) {
      result += "&";
    }

    result += key + "=" + value;
  }

  return result;
}





// ACCEPTED
console.log(toQueryString({ search: "hello world", page: 1 }));
// search=hello%20world&page=1

console.log(toQueryString({ sort: "asc", limit: 10 }));
// sort=asc&limit=10

console.log(toQueryString({}));
// ""

console.log(toQueryString({ "first name": "Junayed Hasan" }));
// first%20name=Junayed%20Hasan
