function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;

  if(isNaN(numA) || isNaN(numB)) {
    return 0; // Or throw an error
  }

  return numA + numB;
}

let result1 = addSafe(10, 20); // Returns 30
let result2 = addSafe("10", "20"); // Returns 30
let result3 = addSafe("hello", 20); // Returns 0 (Handles non-numeric string)
let result4 = addSafe(10, "world"); // Returns 0 (Handles non-numeric string) 