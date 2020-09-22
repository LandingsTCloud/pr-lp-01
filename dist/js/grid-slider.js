var slider = {
  sliderContainerId: "#slider",
  slides: [{
    class: ".slider__slide-0",
    state: {
      width: "45%",
      height: "100%",
      top: "0",
      left: "0"
    }
  }, {
    class: ".slider__slide-1",
    state: {
      width: "30%",
      height: "48%",
      top: "0",
      left: "47%"
    }
  }, {
    class: ".slider__slide-2",
    state: {
      width: "21%",
      height: "38%",
      top: "10%",
      left: "79%"
    }
  }, {
    class: ".slider__slide-3",
    state: {
      width: "28%",
      height: "48%",
      top: "52%",
      left: "72%"
    }
  }, {
    class: ".slider__slide-4",
    state: {
      width: "23%",
      height: "48%",
      top: "52%",
      left: "47%"
    }
  }],
  stages: [[1, 4, 2, 0], [2, 1, 4, 0]],
  currentStage: -1
};

function setZeroState() {
  $(slider.slides[0].class).attr("style", "");
  $(slider.slides[1].class).attr("style", "");
  $(slider.slides[2].class).attr("style", "");
  $(slider.slides[3].class).attr("style", "");
  $(slider.slides[4].class).attr("style", "");
}

function setStage(stageNumber) {
  slider.currentStage = stageNumber;
  $(slider.sliderContainerId).data("state", stageNumber);

  if (stageNumber < 0) {
    setZeroState();
  } else {
    var stage = slider.stages[stageNumber]; // first couple of elements

    var firstElement = $(slider.slides[stage[0]].class);
    var secondElement = $(slider.slides[stage[1]].class); // second couple of elements

    var thirdElement = $(slider.slides[stage[2]].class);
    var fourthElement = $(slider.slides[stage[3]].class); // swap 1st couple elements:

    $(firstElement).css(slider.slides[stage[1]].state);
    $(secondElement).css(slider.slides[stage[0]].state); // swap 2nd couple elements:

    $(thirdElement).css(slider.slides[stage[3]].state);
    $(fourthElement).css(slider.slides[stage[2]].state);
  }
}