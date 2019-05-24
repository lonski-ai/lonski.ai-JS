var arr = [];

arr.push({tag: 'label', labelText: 'Разработчики:'});
arr.push({tag: 'input', type: 'text'});
arr.push({tag: 'label', labelText: 'Название сайта:'});
arr.push({tag: 'input', type: 'text'});
arr.push({tag: 'label', labelText: 'URL сайта:'});
arr.push({tag: 'input', type: 'url'});
arr.push({tag: 'label', labelText: 'Дата запуска сайта:'});
arr.push({tag: 'input', type: 'date'});
arr.push({tag: 'label', labelText: 'Посетителей в сутки:'});
arr.push({tag: 'input', type: 'text', name: 'persons'});
arr.push({tag: 'label', labelText: 'E-mail для связи:'});
arr.push({tag: 'input', type: 'email'});
arr.push({tag: 'label', labelText: 'Рубрика каталога:'});
arr.push({tag: 'select', option: {"здоровье": true, "домашний уют": true, "бытовая техника": true}});
arr.push({tag: 'label', labelText: 'Размещение:'});
arr.push({tag: 'input', type: 'radio', radioLabel: {"бесплатное": true, "платное": true, "VIP": true}});
arr.push({tag: 'label', labelText: 'Разрешить отзывы:'});
arr.push({tag: 'input', type: 'checkbox'});
arr.push({tag: 'label', labelText: 'Описание сайта:'});
arr.push({tag: 'textarea'})
arr.push({tag: 'input', type: 'submit',})

myFunc(arr);

function myFunc(arr) {
  var frm = document.forms.formForSite;
  for (var i = 0; i < arr.length; i++) {
    switch (arr[i].tag) {

      case "label":
        var tag = document.createElement('label');
        var tagValue = document.createTextNode(arr[i].labelText);
        tag.appendChild(tagValue);
        tag.style.display = 'inline-block';
        tag.style.width = '200px';
        frm.appendChild(tag);
        break;

      case "input":
        if (arr[i].type == 'text') {

          var tag = document.createElement('input');
          tag.type = 'text';
          tag.style.width = '453px';
          frm.appendChild(tag);
          frm.appendChild(document.createElement('br'));
          if (arr[i].name == 'persons') {
            tag.style.width = '131px';
          }
        } else if (arr[i].type == 'url') {
          var tag = document.createElement('input');
          tag.type = 'url';
          tag.style.width = '300px';
          frm.appendChild(tag);
          frm.appendChild(document.createElement('br'));
        } else if (arr[i].type == 'date') {
          var tag = document.createElement('input');
          tag.type = 'date';
          tag.style.width = '130px';
          frm.appendChild(tag);
          frm.appendChild(document.createElement('br'));
        } else if (arr[i].type == 'email') {
          var tag = document.createElement('input');
          tag.type = 'email';
          tag.style.width = '200px';
          frm.appendChild(tag);
          frm.appendChild(document.createElement('br'));
        } else if (arr[i].type == 'radio') {
          var keys = Object.keys(arr[i].radioLabel);
          keys.forEach(function (val, i, arr) {
            var tag = document.createElement('input');
            tag.type = 'radio';
            var radioLabel = document.createElement('label');
            var radioLabelText = document.createTextNode(val);
            radioLabel.appendChild(radioLabelText);
            tag.setAttribute('name', 'rddioGroup');
            frm.appendChild(tag);
            frm.appendChild(radioLabel);
          });
          frm.appendChild(document.createElement('br'));
        } else if (arr[i].type == 'checkbox') {
          var tag = document.createElement('input');
          tag.type = 'checkbox';
          frm.appendChild(tag);
          frm.appendChild(document.createElement('br'));
        } else if (arr[i].type == 'submit') {
          var tag = document.createElement('input');
          tag.type = 'submit';
          tag.value = 'Опубликовать';
          frm.appendChild(tag);
          frm.appendChild(document.createElement('br'));
        }

        break;

      case "select":

        var keys = Object.keys(arr[i].option);
        var parentTag = document.createElement('select');
        keys.forEach(function (val, i, arr) {
          var tag = document.createElement('option');
          var tagText = document.createTextNode(val);
          tag.appendChild(tagText);
          parentTag.appendChild(tag);
          frm.appendChild(parentTag);

          if (i == arr.length - 1) {
            tag.setAttribute('selected', true);
          }
        });
        parentTag.style.width = '204px';
        frm.appendChild(document.createElement('br'));

        break;

      case "textarea":
        frm.appendChild(document.createElement('br'));
        var tag = document.createElement('textarea');
        tag.style.width = '608px';
        tag.style.height = '50px';
        frm.appendChild(tag);
        frm.appendChild(document.createElement('br'));
        break;
    }
  }
}
