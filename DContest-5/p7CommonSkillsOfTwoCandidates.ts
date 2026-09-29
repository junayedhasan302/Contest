// JUNAYED HASAN
function commonSkills(skills1: string[], skills2: string[]): string[] {
  const skillSet: Set<string> = new Set();
  for (let i = 0; i < skills1.length; i++) {
    skillSet.add(skills1[i].toLowerCase());
  }
  const common: string[] = [];
  for (let i = 0; i < skills2.length; i++) {
    const lowercaseSkill: string = skills2[i].toLowerCase();
    if (skillSet.has(lowercaseSkill)) {
      common.push(lowercaseSkill);
    }
  }
  return [...new Set(common)].sort();
}

console.log(commonSkills(["JS", "React", "Node"], ["react", "css", "js"])); // ["js", "react"]
