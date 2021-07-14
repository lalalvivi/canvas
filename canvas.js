var x = 100;
var y = 100;
var w = 50;
var h = 55;
var d = 100;
var e = 20;
var radius = 20;
var startAngle = 0;
var anticlockwise = false;
var endAngle = Math.PI + Math.PI / 2;
var q1 = 50;
var q2 = 75;
var q3 = 100;
var q4 = 120;
var b1 = 20;
var b2 = 35;
var b3 = 50;
var b4 = 70;
var b5 = 140;
var b6 = 160;
var scaleAll = 1;
var rotate = 0;
var globalAlpha = 1;
var color = "black";
var colors = [];
var turn = "black";
var linewidth = 1;
var lineCap = "butt";
var lineJoin = "miter";
var shadowBlur = 0;
var shadowColor = "rgba(0, 0, 0, 0)";
var shadowOffsetX = 0;
var shadowOffsetY = 0;
function clearAll() {
  let canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}
function rect() {
  turn = "rect";
  let canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.scale(scaleAll, scaleAll);
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate((rotate * Math.PI) / 180);
    ctx.globalAlpha = globalAlpha;
    var grad = ctx.createLinearGradient(0, 0, 500, 500);
    if (colors.length > 0) {
      grad.addColorStop(0, colors[0]);
      grad.addColorStop(0.5, colors[1]);
      grad.addColorStop(1, colors[2]);
      ctx.fillStyle = grad;
    } else {
      ctx.fillStyle = color;
    }
    ctx.fillRect(x, y, w, h);
    ctx.restore();
    let scale1 = document.getElementById("scale");
    scale1.onchange = function (e) {
      scaleAll = e.target.value;
      console.log(scaleAll);
      rect();
    };
    let rotate1 = document.getElementById("rotate");
    rotate1.onchange = function (e) {
      rotate = e.target.value;
      rect();
    };
    let alpha = document.getElementById("alpha");
    alpha.onchange = function (e) {
      globalAlpha = e.target.value;
      rect();
    };
  }
}
function tangle() {
  turn = "tangle";
  let canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    let ctx = canvas.getContext("2d");
    var a = 50;
    var b = a + 25;
    var c = a - 25;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.scale(scaleAll, scaleAll);
    ctx.rotate((rotate * Math.PI) / 180);
    ctx.globalAlpha = globalAlpha;
    var grad = ctx.createLinearGradient(0, 0, 500, 500);
    if (colors.length > 0) {
      grad.addColorStop(0, colors[0]);
      grad.addColorStop(0.5, colors[1]);
      grad.addColorStop(1, colors[2]);
      ctx.fillStyle = grad;
    } else {
      ctx.fillStyle = color;
    }
    ctx.beginPath();
    ctx.moveTo(a, a);
    ctx.lineTo(b, c);
    ctx.lineTo(c, c);
    ctx.fill();
    let scale1 = document.getElementById("scale");
    scale1.onchange = function (e) {
      scaleAll = e.target.value;
      tangle();
    };
    let rotate1 = document.getElementById("rotate");
    rotate1.onchange = function (e) {
      rotate = e.target.value;
      tangle();
    };
    let alpha = document.getElementById("alpha");
    alpha.onchange = function (e) {
      globalAlpha = e.target.value;
      tangle();
    };
  }
}
function line() {
  turn = "line";
  let canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 800, 800);
    ctx.scale(scaleAll, scaleAll);
    ctx.rotate((rotate * Math.PI) / 180);
    ctx.strokeStyle = color;
    ctx.globalAlpha = globalAlpha;
    ctx.lineWidth = linewidth;
    ctx.lineJoin = lineJoin;
    ctx.lineCap = lineCap;
    ctx.beginPath();
    ctx.lineTo(d, e);
    ctx.lineTo(d, e + 100);
    ctx.stroke();
    let scale1 = document.getElementById("scale");
    scale1.onchange = function (e) {
      scaleAll = e.target.value;
      line();
    };
    let rotate1 = document.getElementById("rotate");
    rotate1.onchange = function (e) {
      rotate = e.target.value;
      line();
    };
    let alpha = document.getElementById("alpha");
    alpha.onchange = function (e) {
      globalAlpha = e.target.value;
      line();
    };
  }
}
function arc() {
  turn = "arc";
  let canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 800, 800);
    ctx.scale(scaleAll, scaleAll);
    ctx.rotate((rotate * Math.PI) / 180);
    ctx.globalAlpha = globalAlpha;
    ctx.lineWidth = linewidth;
    ctx.lineJoin = lineJoin;
    ctx.lineCap = lineCap;
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    ctx.stroke();
    let scale1 = document.getElementById("scale");
    scale1.onchange = function (e) {
      scaleAll = e.target.value;
      arc();
    };
    let rotate1 = document.getElementById("rotate");
    rotate1.onchange = function (e) {
      rotate = e.target.value;
      arc();
    };
    let alpha = document.getElementById("alpha");
    alpha.onchange = function (e) {
      globalAlpha = e.target.value;
      arc();
    };
  }
}
function quadratic() {
  turn = "quadratic";
  let canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 800, 800);
    ctx.scale(scaleAll, scaleAll);
    ctx.rotate((rotate * Math.PI) / 180);
    ctx.globalAlpha = globalAlpha;
    ctx.lineWidth = linewidth;
    ctx.lineJoin = lineJoin;
    ctx.lineCap = lineCap;
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.quadraticCurveTo(q1, q2, q3, q4);
    ctx.stroke();
    let scale1 = document.getElementById("scale");
    scale1.onchange = function (e) {
      scaleAll = e.target.value;
      quadratic();
    };
    let rotate1 = document.getElementById("rotate");
    rotate1.onchange = function (e) {
      rotate = e.target.value;
      quadratic();
    };
    let alpha = document.getElementById("alpha");
    alpha.onchange = function (e) {
      globalAlpha = e.target.value;
      quadratic();
    };
  }
}
function bezier() {
  turn = "bezier";
  let canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 800, 800);
    ctx.scale(scaleAll, scaleAll);
    ctx.rotate((rotate * Math.PI) / 180);
    ctx.globalAlpha = globalAlpha;
    ctx.lineWidth = linewidth;
    ctx.lineCap = lineCap;
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.quadraticCurveTo(b1, b2, b3, b4, b5, b6);
    ctx.stroke();
    let scale1 = document.getElementById("scale");
    scale1.onchange = function (e) {
      scaleAll = e.target.value;
      bezier();
    };
    let rotate1 = document.getElementById("rotate");
    rotate1.onchange = function (e) {
      rotate = e.target.value;
      bezier();
    };
    let alpha = document.getElementById("alpha");
    alpha.onchange = function (e) {
      globalAlpha = e.target.value;
      bezier();
    };
  }
}
function text() {
  turn = "text";
  let canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    let ctx = canvas.getContext("2d");
    let msg = document.getElementById("text");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.scale(scaleAll, scaleAll);
    ctx.rotate((rotate * Math.PI) / 180);
    ctx.globalAlpha = globalAlpha;
    ctx.fillStyle = color;
    ctx.shadowOffsetX = shadowOffsetX;
    ctx.shadowOffsetY = shadowOffsetY;
    ctx.shadowBlur = shadowBlur;
    ctx.shadowColor = shadowColor;
    ctx.font = "48px serif";
    ctx.fillText(msg.value, x, y);
    let scale1 = document.getElementById("scale");
    scale1.onchange = function (e) {
      scaleAll = e.target.value;
      text();
    };
    let rotate1 = document.getElementById("rotate");
    rotate1.onchange = function (e) {
      rotate = e.target.value;
      text();
    };
    let alpha = document.getElementById("alpha");
    alpha.onchange = function (e) {
      globalAlpha = e.target.value;
      text();
    };
  }
}
function img() {
  let canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    let ctx = canvas.getContext("2d");
    let msg = document.getElementById("img");
    ctx.clearRect(0, 0, 800, 800);
    var img = new Image();
    var scaleSlider = document.getElementById("scaleSlider");
    var sliderx = document.getElementById("sliderx");
    var slidery = document.getElementById("slidery");
    var sliderx1 = document.getElementById("sliderx1");
    var slidery1 = document.getElementById("slidery1");
    var scale = 0.5;
    var MINIMUM_SCALE = 0.1;
    var MAXIMUN_SCALE = 3.0;
    var sx = 0;
    var sy = 0;
    var dx = 0;
    var dy = 0;
    function drawImage() {
      var w = canvas.width;
      var h = canvas.height;
      var sw = w * scale;
      var sh = h * scale;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, sx, sy, w, h, dx, dy, sw, sh);
    }
    // function drawScaleText(value) {
    //   var text = parseFloat(value).toFixed(2);
    //   scaleOutput.innerText = text;
    // }
    scaleSlider.onchange = function (e) {
      scale = e.target.value;
      if (scale < MINIMUM_SCALE) {
        scale = MINIMUM_SCALE;
      } else if (scale > MAXIMUN_SCALE) {
        scale = MAXIMUN_SCALE;
      }
      // drawScaleText(scale);
      drawImage();
    };
    sliderx.onchange = function (e) {
      sx = e.target.value;
      drawImage();
    };
    slidery.onchange = function (e) {
      sy = e.target.value;
      drawImage();
    };
    sliderx1.onchange = function (e) {
      dx = e.target.value;
      drawImage();
    };
    slidery1.onchange = function (e) {
      dy = e.target.value;
      drawImage();
    };
    img.src = msg.value;
    img.onload = function (e) {
      drawImage();
      // drawScaleText(scaleSlider.value);
    };
  }
}
function sure() {
  let color1 = document.getElementById("color");
  color = color1.value;
  let color2 = document.getElementById("gladColor");
  if (color2.value) {
    colors = color2.value.split("-");
  }
  linewidth = document.getElementById("lineWidth").value;
  let a1 = document.getElementById("lineCap");
  let indexs = a1.selectedIndex;
  lineCap = a1.options[indexs].value;
  shadowBlur = document.getElementById("shadowBlur").value;
  shadowColor = document.getElementById("shadowColor").value;
  shadowOffsetX = document.getElementById("shadowOffsetX").value;
  shadowOffsetY = document.getElementById("shadowOffsetY").value;
  console.log(shadowBlur);
  switch (turn) {
    case "rect":
      rect();
      break;
    case "tangle":
      tangle();
      break;
    case "line":
      line();
      break;
    case "arc":
      arc();
      break;
    case "quadratic":
      quadratic();
      break;
    case "bezier":
      bezier();
      break;
    case "text":
      text();
      break;
    case "bezier":
      bezier();
      break;
    default:
      break;
  }
}
