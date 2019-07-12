'use strict';
(function() {
  var images = document.getElementsByTagName('img');
  var imagesWrap = document.getElementById('wrap');
  var draggedImg;
  var clickInImgX;
  var clickInImgY;
  var initOffsetX;

  document.onmousedown = dragStart;
  document.onmouseup = dragEnd;
  window.onload = function() {
    for (var i = 0; i < images.length; i++) {
      images[i].setAttribute('data-init-offset-x', i * images[i].offsetWidth);
    }
  };

  function dragStart(e) {
    e = e || window.e;
    e.preventDefault();
    if (e.target.tagName !== 'IMG') return;
    for (var i = 0; i < images.length; i++) {
      images[i].style.zIndex = '';
    }
    draggedImg = e.target;
    draggedImg.style.zIndex = 1;
    clickInImgX = e.pageX - draggedImg.offsetLeft - imagesWrap.offsetLeft;
    clickInImgY = e.pageY - draggedImg.offsetTop - imagesWrap.offsetTop;
    initOffsetX = draggedImg.getAttribute('data-init-offset-x');
    document.onmousemove = dragMove;
  }

  function dragMove(e) {
    draggedImg.style.left = e.pageX - clickInImgX - imagesWrap.offsetLeft - initOffsetX + 'px';
    draggedImg.style.top = e.pageY - clickInImgY - imagesWrap.offsetTop + 'px';
    draggedImg.style.cursor = 'move';
  }

  function dragEnd(e) {
    if (draggedImg) {
      draggedImg.style.cursor = '';
    }
    draggedImg = null;
    document.onmousemove = null;
  }
}());
