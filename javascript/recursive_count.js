function recursiveCount(num = 0) {

  // if num is more or equal 10, return
  if (num >= 10) {
    return;
  }

  // print num with every recursion
  console.log(num);

  // call recursive function
  recursiveCount(++num);
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution
