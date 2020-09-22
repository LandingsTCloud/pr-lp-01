$("button#reviews-controls__button-left").click(function (e) {
  // calling horizontal left scrolling of target DOM element
  scrollContainer($(this).data("target"));
});
$("button#reviews-controls__button-right").click(function (e) {
  // calling horizontal left scrolling of target DOM element
  scrollContainer($(this).data("target"));
});
$("button#blog-controls__button-left").click(function (e) {
  // calling horizontal left scrolling of target DOM element
  scrollContainer($(this).data("target"));
});
$("button#blog-controls__button-right").click(function (e) {
  // calling horizontal left scrolling of target DOM element
  scrollContainer($(this).data("target"));
});
$("button#slider__button-right").click(function (e) {
  const stageCount = 1;
  var currentStage = $($(this).data("target")).data("state");

  if (currentStage < stageCount) {
    setStage(currentStage + 1);
  } else {
    setStage(-1);
  }
});
$("button#slider__button-left").click(function (e) {
  const stageCount = 1;
  var currentStage = $($(this).data("target")).data("state");

  if (currentStage > -1) {
    setStage(currentStage - 1);
  } else {
    setStage(stageCount);
  }
});

function mobileEvents() {
  mobileState($("body"), 1152, function () {
    replaceClassAttribute(".change-to-12", "col-md-12");
  });
  mobileState($("body"), 1024, function () {
    replaceClassAttribute(".change-to-12", "col-md-12");
  });
  mobileState($("body"), 768, function () {
    replaceClassAttribute(".change-to-12", "col-md-12");
    replaceClassAttribute(".change-to-6", "col-md-6");
    replaceClassAttribute(".change-to-0", "col-md-0");
  });
}

$(window).resize(function (e) {
  mobileEvents();
});
$(document).ready(function (e) {
  mobileEvents();
  mobileState($("body"), 768, function () {
    $("#footer-copyright-box").swapElements("#footer-subscribe-form");
  });
});
$("button#hamburger-button").click(function (e) {
  openMobileMenu($(this).data("state"), $(this).data("target"), $("#main-container"), $(this));
});