var RColor=function(){function h(a){if(a){var c;(c=b)||(c=document.querySelector('meta[name="theme-color"]'),null==c&&(c=document.createElement("meta"),c.name="theme-color",document.head.appendChild(c)));b=c;b.content=a}else b&&(b.parentNode.removeChild(b),b=null)}function f(){if(g){var a=window.getComputedStyle(d);h(a.backgroundColor);window.requestAnimationFrame(f)}else h(d.style.background)}var b=null,d=document.createElement("div");d.setAttribute("style","visibility: hidden; display: none");window.addEventListener("load",
function(){document.body.appendChild(d)});var g=0;return{set debug(a){a?d.setAttribute("style","width: 50px; height: 50px; position: fixed; right: 0; top: 0; visibility: hidden; display:none;"):d.setAttribute("style","visibility: hidden; display: none")},set default(a){d.style.background=""+a;f()},animate:function(a,c){a=a.map(function(a){return"string"==typeof a?{background:a}:a});var b=d.animate(a,c);++g;var e=null;b.onfinish=function(){--g;e&&e()};Object.defineProperty(b,"onfinish",{get:function(){return e},set:function(a){e=a}});
f();return b}}}();

window.addEventListener('load', function() {
  RColor.debug = true;
  var steps = ['#d2afea', '#87b3e6', '#addfee', '#bce3bc', '#e4e29d', '#fbcea0', '#ffa3a3', '#d2afea'];
  var rainbowAnim = RColor.animate(steps, { duration: 49000, iterations: Infinity });
});
