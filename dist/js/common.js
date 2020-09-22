Number.setAsPositive = function (number) {
  return number < 0 ? number * -1 : number;
};

jQuery.fn.swapElements = function (secondElement) {
  secondElement = jQuery(secondElement)[0];
  var firstElement = this[0],
      firstElement2 = firstElement.cloneNode(true),
      secondElement2 = secondElement.cloneNode(true),
      stack = this;
  firstElement.parentNode.replaceChild(secondElement2, firstElement);
  secondElement.parentNode.replaceChild(firstElement2, secondElement);
  stack[0] = firstElement2;
  return this.pushStack(stack);
};

function scrollContainer(container) {
  if ($(container).data("state") == "is-begin") {
    horizontalScrollToLeft(container);
    $(container).data("state", "is-end");
  } else {
    horizontalScrollToRight(container);
    $(container).data("state", "is-begin");
  }
}

function horizontalScrollToLeft(parentContainer) {
  var currentPosition = $(parentContainer).scrollLeft(),
      newPosition = $("body").width() - $(parentContainer).innerWidth();
  $(parentContainer).css("left", newPosition + "px");
}

function horizontalScrollToRight(parentContainer) {
  var currentPosition = $(parentContainer).scrollLeft(),
      newPosition = Number.setAsPositive($("body").width() - $(parentContainer).innerWidth());
  $(parentContainer).css("left", "0");
}

function mobileState(container, screenResolution, callback) {
  if ($(container).innerWidth() <= screenResolution) {
    callback();
  }
}

function replaceClassAttribute(currentClassList, newClassList, element = undefined) {
  if (element === undefined) {
    $(currentClassList).attr("class", newClassList);
  } else {
    $(element).attr("class", newClassList);
  }
}

function openMobileMenu(flag, mobileMenuContainer, mainContainer, event) {
  if (flag === "is-opened") {
    // close
    $(mobileMenuContainer).find("ul").removeClass("custom-animation");
    $(mobileMenuContainer).addClass("slideOutRight");
    $(mainContainer).addClass("slideInLeft");
    $(mobileMenuContainer).removeClass("slideInRight");
    $(mainContainer).removeClass("slideOutLeft");
    $(event).data("state", "is-closed");
    $(event).find("i").addClass("fa-bars");
    $(event).find("i").removeClass("fa-times");
  } else if (flag === "is-closed") {
    // open
    $(mobileMenuContainer).show();
    $(mobileMenuContainer).find("ul").addClass("custom-animation");
    $(mobileMenuContainer).addClass("slideInRight");
    $(mainContainer).addClass("slideOutLeft");
    $(mobileMenuContainer).removeClass("slideOutRight");
    $(mainContainer).removeClass("slideInLeft");
    $(event).data("state", "is-opened");
    $(event).find("i").addClass("fa-times");
    $(event).find("i").removeClass("fa-bars");
  }
}