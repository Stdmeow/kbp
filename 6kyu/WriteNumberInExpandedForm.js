function expandedForm(num) {
    const numStr = num.toString();
    const result = [];
    
    for (let i = 0; i < numStr.length; i++) {
      const placeValue = numStr[i] * Math.pow(10, numStr.length - i - 1);
      if (placeValue !== 0) {
        result.push(placeValue);
      }
    }
    
    return result.join(' + ');
  }