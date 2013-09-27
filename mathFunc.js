function cosine(num){
  return Math.cos(num);
}
function distance(xa,ya,xb,yb){
  return sqrt(Math.pow(xa-xb,2)+Math.pow(ya-yb,2);
}
function equilateralTriangleArea(side){
  return (Math.pow(side,2)*Math.sqrt(3))/4;
}
function exponent(num,pow){
  return Math.pow(num,pow);
}
function midpoint(xa,ya,xb,yb){
  return "("+(xa+xb)/2+","+(ya+yb)+")";
}
function pythagorean(a,b){
  return Math.pow((Math.pow(a,2))+(Math.pow(b,2)),2);
}
function round(num){
  return Math.round(num);
}
function sine(num){
  return Math.sin(num);
}
function tangent(num){
  return Math.tan(num);
}
function triangleArea(base,height){
  return base*0.5*height;
}
var isOpera=!!window.opera||navigator.userAgent.indexOf(' OPR/')>=0;
var isFirefox=typeof InstallTrigger!=='undefined';
var isSafari=Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor'>0;
var isChrome=!!window.chrome&&!isOpera;
var isIE=/*@cc_on!@*/false||document.documentMode;
if(isChrome||isFirefox){
  const PI=Math.PI;
  const TAU=Math.PI*2;
  const E=Math.E;
}else{
  var PI=Math.PI;
  var TAU=Math.PI*2;
  var E=Math.E;
}
