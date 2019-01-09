// Verify there are equal instances of specified characters in a string

// For example       XO(xoxojjjfjxo) returns true 
// But                  XO(xoo) returns false

function XO(str) {
  // Replace characters with empty strings
  let xCount = str.replace(/x/gi, "").length;
  let oCount = str.replace(/o/gi, "").length;
  // Compare string lengths 
  return oCount == xCount;
}