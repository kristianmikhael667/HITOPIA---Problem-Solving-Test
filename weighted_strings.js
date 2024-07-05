function calculateWeights(str) {
  let weights = new Set();
  let currentChar = str[0];
  let currentWeight = currentChar.charCodeAt(0) - 96;
  let consecutiveCount = 1;

  weights.add(currentWeight);

  for (let i = 1; i < str.length; i++) {
    if (str[i] === currentChar) {
      consecutiveCount++;
      currentWeight += currentChar.charCodeAt(0) - 96;
    } else {
      currentChar = str[i];
      currentWeight = currentChar.charCodeAt(0) - 96;
      consecutiveCount = 1;
    }
    weights.add(currentWeight);
  }

  return weights;
}

function weightedStrings(str, queries) {
  let weights = calculateWeights(str);
  let result = [];

  for (let query of queries) {
    if (weights.has(query)) {
      result.push("Yes");
    } else {
      result.push("No");
    }
  }

  return result;
}

let str = "abbcccd";
let queries = [1, 3, 9, 8];
console.log(weightedStrings(str, queries));
