function enough(cap, on, wait) {
    const availableSpace = cap - on;
    if (availableSpace >= wait) {
      return 0;
    } else {
      return wait - availableSpace;
    }
  }