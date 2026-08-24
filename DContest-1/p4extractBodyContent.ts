// JUNAYED HASAN

function extractBodyContent(htmlString: string): string {
  return htmlString.split("<body>")[1].split("</body>")[0];
}


// Test Case 1
const htmlString1: string = `<!DOCTYPE html>
<html>
<body>
<p>Hello world!</p>
<div>
<span>Nested content.</span>
</div>
</body>
</html>`;


// Test Case 1
const htmlString2: string = `<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Welcome!</h1>
    <p>This is my new React app.</p>
  </body>
</html>`;

console.log(extractBodyContent(htmlString1));
console.log(extractBodyContent(htmlString2));