'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const defaultCompareFunction = (a, b) => {
      return a.toString() > b.toString()
        ? 1
        : a.toString() < b.toString()
          ? -1
          : 0;
    };

    const comparator =
      typeof compareFunction === 'function'
        ? compareFunction
        : defaultCompareFunction;

    for (let i = 1; i < this.length; i++) {
      const key = this[i];
      let j = i - 1;

      while (j >= 0 && comparator(this[j], key) > 0) {
        this[j + 1] = this[j];
        j--;
      }
      this[j + 1] = key;
    }

    return this;
  };
}

module.exports = applyCustomSort;
