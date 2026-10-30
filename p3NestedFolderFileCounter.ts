// Junayed Hasan

type FileItem = {
  name: string;
  type: "file";
};

type FolderItem = {
  name: string;
  type: "folder";
  children: FileSystemItem[];
};

type FileSystemItem = FileItem | FolderItem;

function countFilesInFolder(structure: FileSystemItem[]): number {
  let totalFiles: number = 0;

  for (const item of structure) {
    if (item.type === "file") {
      totalFiles++;
    } else {
      totalFiles += countFilesInFolder(item.children);
    }
  }

  return totalFiles;
}

// Test Case 1: Files and one nested folder
const structure1: FileSystemItem[] = [
  { name: "document.txt", type: "file" },
  {
    name: "images",
    type: "folder",
    children: [
      { name: "photo1.jpg", type: "file" },
      { name: "photo2.png", type: "file" },
    ],
  },
  { name: "report.pdf", type: "file" },
];

console.log(countFilesInFolder(structure1)); // Expected: 4

// Test Case 2: Multiple nested folders
const structure2: FileSystemItem[] = [
  {
    name: "src",
    type: "folder",
    children: [
      { name: "index.js", type: "file" },
      {
        name: "components",
        type: "folder",
        children: [
          { name: "Button.js", type: "file" },
          { name: "Header.js", type: "file" },
        ],
      },
    ],
  },
  { name: "package.json", type: "file" },
  {
    name: "empty_folder",
    type: "folder",
    children: [],
  },
];

console.log(countFilesInFolder(structure2)); // Expected: 4

// Test Case 3: Empty structure
console.log(countFilesInFolder([])); // Expected: 0

// Test Case 4: Only files
console.log(
  countFilesInFolder([
    { name: "a.txt", type: "file" },
    { name: "b.txt", type: "file" },
    { name: "c.txt", type: "file" },
  ]),
); // Expected: 3

// Test Case 5: Empty folder
console.log(
  countFilesInFolder([{ name: "empty", type: "folder", children: [] }]),
); // Expected: 0
