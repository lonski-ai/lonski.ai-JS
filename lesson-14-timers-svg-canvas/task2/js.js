"use strict";
setInterval (UpdateTime, 1000);
var canvaS = document.getElementById('wrapper');
var context = canvaS.getContext("2d");
var canvaSCenterX = canvaS.offsetWidth / 2; // узнаем центр canvas(обвёртки) по X
var canvaSCenterY = canvaS.offsetHeight / 2; // узнаем центр canvas(обвёртки) по Y
var radius = 120; // радиус (растояние)
var angleValue = 0; // угол
var distanceOfDigits = 30; // расстояние(в градусах) между цифрами на часах
var digitalWatchWidth = 90;
var digitalWatchHeight = 25;
var radiusForDigitalWatch = 70; // радиус (растояние) для электронных часов;

function bigWatch() {
  context.fillStyle = "#FCCA66";
  context.beginPath();
  context.arc(canvaSCenterX,canvaSCenterY,150,0,Math.PI*2, false);
  context.fill();

  for (var i = 1; i <= 12; i++) {
    var smallCircleRadius = 20;
    var smallCircleColor = "#48B382";
    angleValue += distanceOfDigits;
    var angle = angleValue / 180 * Math.PI;
    var smallCircleCX = Math.round(canvaSCenterX + radius * Math.sin(angle));
    var smallCircleCY = Math.round(canvaSCenterY - radius * Math.cos(angle));

    context.beginPath();
    context.fillStyle = smallCircleColor;
    context.arc(smallCircleCX,smallCircleCY,smallCircleRadius,0,Math.PI*2, false);
    context.fill();

    context.fillStyle ='black';
    context.font ="normal normal 20px 'Times New Roman'";
    context.textAlign='center';
    context.textBaseline='middle';
    context.fillText(i,smallCircleCX, smallCircleCY);
  }
}

function digitalWatch() {
  var time = new Date();
  context.globalCompositeOperation = "source-over";
  context.fillStyle = "#FCCA66";
  context.beginPath();
  context.fillRect(canvaSCenterX - digitalWatchWidth/2, canvaSCenterY - radiusForDigitalWatch - digitalWatchHeight/2, 100, 25);
  context.fill();
  context.fillStyle = "black";
  var digitalWatchText = FormatDateTime(time);
  context.fillText(digitalWatchText, canvaSCenterX, canvaSCenterY - radiusForDigitalWatch);
  context.fill();
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

function arrow(angle, Width, Height, color) {
  context.strokeStyle = color;
  context.lineWidth = Width;
  context.lineCap = "round";
  context.beginPath();
  context.moveTo(canvaSCenterX, canvaSCenterY);
  context.lineTo(canvaSCenterX + Height * Math.sin(angle/180*Math.PI), canvaSCenterY - Height * Math.cos(angle/180*Math.PI));
  context.stroke();
}

function UpdateTime() {
  var time = new Date();
  var hoursDeg = 30 * (time.getHours() + (1 / 60) * time.getMinutes());
  var minutesDeg = 6 * (time.getMinutes() + (1 / 60) * time.getSeconds());
  var secondsDeg = 6 * time.getSeconds();
  bigWatch();
  digitalWatch();
  arrow(hoursDeg, 9, 50, "black");
  arrow(minutesDeg, 5, 110, "black");
  arrow(secondsDeg, 2, 135, "red");
}