exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);

  },

  sum: function(arr) {
    let total = 0;
    for(var i = 0; i < arr.length; i++) {
      total = total + arr[i]
    }
    return total;
  },

  remove: function(arr, item) {
    function removeTwos(item) {
      return item !== 2;
    }
    return arr.filter(removeTwos);
  },

  removeWithoutCopy: function(arr, item) {

  },

  append: function(arr, item) {

  },

  truncate: function(arr) {

  },

  prepend: function(arr, item) {

  },

  curtail: function(arr) {

  },

  concat: function(arr1, arr2) {

  },

  insert: function(arr, item, index) {

  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
