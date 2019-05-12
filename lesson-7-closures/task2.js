function interviewQuestion(prof) {
  var question = '';
  return function (name) {
    if (prof == 'designer') {
      return question = name + ' can you please explain what UX design is?';
    }
    else if (prof == 'teacher') {

      return question = 'What subject do you teach' + name + '?';
    }
    else {
      return question = 'Hello ' + name + ', what do you do?';
    }
  }
}

console.log(interviewQuestion('designer')('John'));