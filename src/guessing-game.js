class GuessingGame {
  constructor() {
    this.min = 0;
    this.max = 0;
    this.binarySearchResult = 0;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.binarySearchResult = Math.ceil((this.min + this.max) / 2);
    return this.binarySearchResult;
  }

  lower() {
    this.max = this.binarySearchResult;
  }

  greater() {
    this.min = this.binarySearchResult;
  }
}

module.exports = GuessingGame;
