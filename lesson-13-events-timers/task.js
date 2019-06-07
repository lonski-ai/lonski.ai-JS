"use strict"

setInterval(UpdateTime, 1000);

var wrap = document.getElementById('wrapper');
var wrapCenterX = wrap.offsetLeft + wrap.offsetWidth / 2;
var wrapCenterY = wrap.offsetTop + wrap.offsetHeight / 2;
var digitalWatch = document.createElement("div");
var radius = 120;
var radiusForDigitalWatch = 70;
var angleValue = 0;
var distanceOfDigits = 30;
var time = new Date();
var hoursHand = document.createElement("div");
var minutesHand = document.createElement("div");
var secondsHand = document.createElement("div");
var hoursDeg = 30 * (time.getHours() + (1 / 60) * time.getMinutes());
var minutesDeg = 6 * (time.getMinutes() + (1 / 60) * time.getSeconds());
var secondsDeg = 6 * time.getSeconds();


for (var i = 1; i <= 12; i++) {
  var wrapChildElem = document.createElement("div");
  var angle;
  var wrapChildElemCenterX;
  var wrapChildElemCenterY;

  angleValue += distanceOfDigits;
  angle = angleValue / 180 * Math.PI;

  wrap.appendChild(wrapChildElem);
  wrapChildElem.setAttribute('class', 'childElem');
  wrapChildElem.innerHTML = i;

  wrapChildElemCenterX = wrapCenterX + radius * Math.sin(angle);
  wrapChildElemCenterY = wrapCenterY - radius * Math.cos(angle);

  wrapChildElem.style.left = Math.round(wrapChildElemCenterX - wrapChildElem.offsetWidth /2) + "px";
  wrapChildElem.style.top = Math.round(wrapChildElemCenterY - wrapChildElem.offsetHeight / 2) + "px";
}

wrap.appendChild(digitalWatch);
wrap.appendChild(hoursHand);
wrap.appendChild(minutesHand);
wrap.appendChild(secondsHand);

digitalWatch.setAttribute('class', "digitalWatch");hoursHand.setAttribute('class', "hoursHand");
minutesHand.setAttribute('class', "minutesHand");
secondsHand.setAttribute('class', "secondsHand");

digitalWatch.style.left = wrapCenterX - digitalWatch.offsetWidth / 2 + "px";
digitalWatch.style.top = wrapCenterY - radiusForDigitalWatch + "px";

hoursHand.style.top = wrapCenterY - hoursHand.offsetHeight + 10 + "px";
hoursHand.style.left = wrapCenterX - hoursHand.offsetWidth / 2 + "px";

minutesHand.style.top = wrapCenterY - minutesHand.offsetHeight + 10 + "px";
minutesHand.style.left = wrapCenterX - minutesHand.offsetWidth / 2 + "px";

secondsHand.style.top = wrapCenterY - secondsHand.offsetHeight + 10 + "px";
secondsHand.style.left = wrapCenterX - secondsHand.offsetWidth / 2 + "px";

hoursHand.style.transformOrigin = "center 50px";
minutesHand.style.transformOrigin = "center 110px";
secondsHand.style.transformOrigin = "center 135px";

function UpdateTime() {
  var time = new Date();
  digitalWatch.innerHTML = FormatDateTime(time);
  secondsDeg += 6;
  secondsHand.style.transform = "rotate(" + secondsDeg + "deg)";
  minutesDeg += 6 * (1/60)
  minutesHand.style.transform = "rotate(" + minutesDeg + "deg)";
  hoursDeg += 6 * (1/360);
  hoursHand.style.transform = "rotate(" + hoursDeg + "deg)";
}

function FormatDateTime(DT) {
  var Hours = DT.getHours();
  var Minutes = DT.getMinutes();
  var Seconds = DT.getSeconds();
  return Str0L(Hours, 2) + ':' + Str0L(Minutes, 2) + ':' + Str0L(Seconds, 2);
}

function Str0L(Val, Len) {
  var StrVal = Val.toString();
  while (StrVal.length < Len)
    StrVal = '0' + StrVal;
  return StrVal;
}

