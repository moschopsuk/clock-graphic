function clock() { 
  var t = moment(),
      a = t.minutes() * 6,
      o = t.hours() % 12 / 12 * 360 + (a / 12);
  $(".hour").css("transform", "rotate(" + o + "deg)");
  $(".minute").css("transform", "rotate(" + a + "deg)");
}

function refreshClock() {
  clock(), setTimeout(refreshClock, 1000)
}

function render(time) {
  webvfx.getImage("video").assignToHTMLImageElement(document.getElementById("image"));
}

function init() {
  refreshClock();

  if (typeof webvfx != 'undefined') {
    webvfx.renderRequested.connect(render);
    webvfx.imageTypeMap = { "video" : webvfx.SourceImageType };
    webvfx.readyRender(true);
  }
}



window.addEventListener("load", init, false);
