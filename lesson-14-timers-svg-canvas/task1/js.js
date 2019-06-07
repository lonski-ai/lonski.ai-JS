"use strict";
setInterval(UpdateTime, 1000);
var svg = document.getElementById("wrapper");
var widthOfSvg = 300; //ширина svg,
var heightOfSvg = 300; //высота svg
var bigCircleCX = 150; //сх большого круга
var bigCircleCY = 150; //су большого круга
var bigCircleRadius = 150; //r большого круга
var radiusForDigitalWatch = 70; // радиус (растояние) для электронных часов;
var radius = 120; // радиус (растояние)
var angleValue = 0; // угол
var distanceOfDigits = 30; // расстояние(в градусах) между цифрами на часах
var time = new Date();
var hoursDeg = 30 * (time.getHours() + (1 / 60) * time.getMinutes());
var minutesDeg = 6 * (time.getMinutes() + (1 / 60) * time.getSeconds());
var secondsDeg = 6 * time.getSeconds();
svg.style.width = widthOfSvg;
svg.style.height = heightOfSvg;

var bigCircleForWatch = document.createElementNS('http://www.w3.org/2000/svg', "circle");
bigCircleForWatch.setAttribute("cx", bigCircleCX);
bigCircleForWatch.setAttribute("cy", bigCircleCY);
bigCircleForWatch.setAttribute("r", bigCircleRadius);
bigCircleForWatch.setAttribute("fill", '#FCCA66');
svg.appendChild(bigCircleForWatch);

var svgCenterX = svg.getBoundingClientRect().left + svg.getBoundingClientRect().width / 2;
var svgCenterY = svg.getBoundingClientRect().top + svg.getBoundingClientRect().height / 2;
for (var i = 1; i <= 12; i++) {
  var svgChildElem = document.createElementNS('http://www.w3.org/2000/svg', "circle");
  var svgChildElemText = document.createElementNS('http://www.w3.org/2000/svg', "text");


  angleValue += distanceOfDigits;
  var angle = angleValue / 180 * Math.PI;

  var smallCircleCX = Math.round(svgCenterX + radius * Math.sin(angle) - svg.getBoundingClientRect().left);
  var smallCircleCY = Math.round(svgCenterY - radius * Math.cos(angle) - svg.getBoundingClientRect().top);

  svgChildElem.setAttribute("cx", smallCircleCX);
  svgChildElem.setAttribute("cy", smallCircleCY);
  svgChildElem.setAttribute("r", 20);
  svgChildElem.setAttribute("fill", '#48B382');
  svgChildElem = svg.appendChild(svgChildElem);

  svgChildElemText.innerHTML = i;
  svgChildElemText.setAttribute("x", smallCircleCX);
  svgChildElemText.setAttribute("y", smallCircleCY);
  svgChildElemText.setAttribute("text-anchor", "middle");
  svgChildElemText.setAttribute("dominant-baseline", "central");
  svgChildElemText.style.fontSize = 20;
  svgChildElemText = svg.appendChild(svgChildElemText);
}

var digitalWatch = document.createElementNS('http://www.w3.org/2000/svg', "rect");
svg.appendChild(digitalWatch);
digitalWatch.setAttribute("x", (svgCenterX - digitalWatch.getBoundingClientRect().width / 2) - svg.getBoundingClientRect().left);
digitalWatch.setAttribute("y", (svgCenterY - radiusForDigitalWatch) - svg.getBoundingClientRect().left);
digitalWatch.setAttribute("fill", "none");
var digitalWatchText = document.createElementNS('http://www.w3.org/2000/svg', "text");
digitalWatchText.setAttribute("x", (svgCenterX - digitalWatch.getBoundingClientRect().width / 2) - svg.getBoundingClientRect().left);
digitalWatchText.setAttribute("y", (svgCenterY - radiusForDigitalWatch) - svg.getBoundingClientRect().top);
digitalWatchText.setAttribute("text-anchor", "middle");
digitalWatchText.setAttribute("dominant-baseline", "central");
digitalWatchText.style.fontSize = 25;
digitalWatchText = svg.appendChild(digitalWatchText);

var arrowHours = my(50, 9, "black");
svg.appendChild(arrowHours);
var arrowMinuts = my(110, 5, "black");
svg.appendChild(arrowMinuts);
var arrowSeconds = my(135, 2, "red");
svg.appendChild(arrowSeconds);
function my(Height, Width, Color) {
  var arrow = document.createElementNS('http://www.w3.org/2000/svg', "line");
  arrow.setAttribute("x1", svgCenterX - svg.getBoundingClientRect().left);
  arrow.setAttribute("y1", svgCenterY - Height - svg.getBoundingClientRect().top);
  arrow.setAttribute("x2", svgCenterX - svg.getBoundingClientRect().left);
  arrow.setAttribute("y2", svgCenterY);
  arrow.setAttribute("stroke", Color);
  arrow.setAttribute("stroke-width", Width);
  arrow.setAttribute("stroke-linecap", "round");
  return arrow;

}

arrowHours.style.transformOrigin = "center 150px";
arrowMinuts.style.transformOrigin = "center 150px";
arrowSeconds.style.transformOrigin = "center 150px";

function UpdateTime() {
  var time = new Date();
  digitalWatchText.innerHTML = FormatDateTime(time);
  secondsDeg += 6;
  arrowSeconds.style.transform = "rotate(" + secondsDeg + "deg)";
  minutesDeg += 6 * (1 / 60);
  arrowMinuts.style.transform = "rotate(" + minutesDeg + "deg)";
  hoursDeg += 6 * (1 / 360);
  arrowHours.style.transform = "rotate(" + hoursDeg + "deg)";
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