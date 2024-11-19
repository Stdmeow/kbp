function solve(str) {
    let maxSum = 0;
    let currentSum = 0;
    
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      
      if (!'aeiou'.includes(char)) {
        currentSum += char.charCodeAt(0) - 96;
      } else {
        maxSum = Math.max(maxSum, currentSum);
        currentSum = 0;
      }
    }
    
    maxSum = Math.max(maxSum, currentSum);
    
    return maxSum;
  }