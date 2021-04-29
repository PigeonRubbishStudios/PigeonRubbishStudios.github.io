function update(e)
{
    var x = e.clientX || e.touches[0].clientX
    var y = e.clientY || e.touches[0].clientY
  
    document.documentElement.style.setProperty('--cursorX', x + 'px')
    document.documentElement.style.setProperty('--cursorY', y + 'px')
  }
  
document.addEventListener('mousemove',update)
document.addEventListener('touchmove',update)

function lightToggle()
{
  var bodyElement = document.getElementById("body-id");

  if(bodyElement.className === "off")
    {
      lightOn();
    }
  else
    {
      lightOff();
    } 
}

function lightOn()
{
  var bodyElement = document.getElementById("body-id");
  var powerButton = document.getElementById("power-button");

  addRule("html:before", 
  {
    content: "''",
    display: "none",
    width: "100%",
    height: "100%",
    position: "fixed",
    "z-index": "500",
    "pointer-events": "none",
    background: "radial-gradient(circle 25vmax at var(--cursorX) var(--cursorY), rgba(0,0,0,0) 0%, rgba(0,0,0,.5) 80%, rgba(0,0,0,.95) 100%)"
  });

  powerButton.className = "power-on";

  bodyElement.className = "on";
}

function lightOff()
{
  var bodyElement = document.getElementById("body-id");
  var powerButton = document.getElementById("power-button");

  addRule("html:before", 
  {
    content: "''",
    display: "block",
    width: "100%",
    height: "100%",
    position: "fixed",
    "z-index": "500",
    "pointer-events": "none",
    background: "radial-gradient(circle 25vmax at var(--cursorX) var(--cursorY), rgba(0,0,0,0) 0%, rgba(0,0,0,.5) 80%, rgba(0,0,0,.95) 100%)"
  });

  powerButton.className = "power-off";
  bodyElement.className = "off";
}

var addRule = (function (style) {
  var sheet = document.head.appendChild(style).sheet;
  return function (selector, css) {
      var propText = typeof css === "string" ? css : Object.keys(css).map(function (html) {
          return html + ":" + (html === "content" ? "'" + css[html] + "'" : css[html]);
      }).join(";");
      sheet.insertRule(selector + "{" + propText + "}", sheet.cssRules.length);
  };
})(document.createElement("style"));


if( navigator.userAgent.match(/Android/i)
|| navigator.userAgent.match(/webOS/i)
|| navigator.userAgent.match(/iPhone/i)
|| navigator.userAgent.match(/iPad/i)
|| navigator.userAgent.match(/iPod/i)
|| navigator.userAgent.match(/BlackBerry/i)
|| navigator.userAgent.match(/Windows Phone/i))
{
 lightOn();
 var powerButton = document.getElementById("power-button");
 powerButton.style.display = "none";
}