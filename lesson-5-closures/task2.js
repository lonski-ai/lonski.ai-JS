var classNameArray = [];
var obj = {
  className: 'open menu menu'
};

function deleteClass(obj, cls) {
  classNameArray = obj.className.split(' ');

  for (var i = 0; i < classNameArray.length; i++) {
    if (classNameArray[i] == cls) {
      classNameArray.splice(i, 1);
      i = 0;
    }
  }
  obj.className = classNameArray.join(' ');
  return obj.className;
}

deleteClass(obj, 'menu');
console.log(obj);
