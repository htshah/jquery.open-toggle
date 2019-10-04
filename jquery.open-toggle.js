/**
 * jQuery open-toggle
 * A very lightweight jQuery plugin to toggle open state
 * via toggling '.open' or other user-defined class
 *
 * Licensed under the MIT license.
 * Copyright 2019 Het Shah
 * https://github.com/htshah
 */
(function($) {
  $.fn.openToggle = function(className) {
    className = className || "open";
    var wasClicked = false,
      that = this;

    that.click(function(e) {
      wasClicked = true;
      var ele = $(this);
      that.not(ele).removeClass(className);

      if (ele.is("." + className + ".no-self-toggle")) {
        return;
      }

      ele.toggleClass(className);
    });

    $(document).click(function(e) {
      e.stopPropagation();
      if (!wasClicked) {
        that.removeClass(className);
      }
      wasClicked = false;
    });
  };
})(window.jQuery || window.Zepto);
