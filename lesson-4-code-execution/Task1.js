function calc(tasksCompleted) {
  var result = 0;

  for (var K in tasksCompleted) {
    if (result < tasksCompleted[K]) {
      result = tasksCompleted[K];
      var name = K;
    }
  }
  return name;
}

module.exports = calc;
