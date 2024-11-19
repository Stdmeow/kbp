function removeEveryOther(arr) {
    return arr.filter((_, index) => index % 2 === 0);
  }
  
  const result = removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]);
  console.log(result);