// utility-belt.js
// ===============

// Blurred div background - http://jsfiddle.net/nallenscott/WtQjY/41/
$(function () {
  if (typeof html2canvas == 'function') {
    html2canvas($("body"), {
      onrendered: function (canvas) {
        $(".blur").append(canvas);
        $("canvas").attr("id", "canvas");
        stackBlurCanvasRGB(
          'canvas',
          0,
          0,
          $("canvas").width(),
          $("canvas").height(),
          20);
      }
    });
  }
  vv = setTimeout(function () {
    $("header").show();
    clearTimeout(vv);
  }, 200);
});

$(window).scroll(function () {
  $("canvas").css(
    "-webkit-transform",
    "translatey(-" + $(window).scrollTop() + "px)");
});

window.onresize = function () {
  $("canvas").width($(window).width());
};

$(document).bind('touchmove', function () {
  $("canvas").css(
    "-webkit-transform",
    "translatey(-" + $(window).scrollTop() + "px)");
});

$(document).bind('touchend', function () {
  $("canvas").css(
    "-webkit-transform",
    "translatey(-" + $(window).scrollTop() + "px)");
});
