angular.module("ChatNoir.directives", [])
.animation('.slide', [function() {
  return {
    // make note that other events (like addClass/removeClass)
    // have different function input parameters
    enter: function(element, doneFn) {
      jQuery(element).fadeIn(1000, doneFn);

      // remember to call doneFn so that angular
      // knows that the animation has concluded
    },

    move: function(element, doneFn) {
      jQuery(element).fadeIn(1000, doneFn);
    },

    leave: function(element, doneFn) {
      jQuery(element).fadeOut(1000, doneFn);
    }
  }
}])

.animation('.colorful', [function() {
  return {
    addClass: function(element, className, doneFn) {
      // do some cool animation and call the doneFn
    },
    removeClass: function(element, className, doneFn) {
      // do some cool animation and call the doneFn
    },
    setClass: function(element, addedClass, removedClass, doneFn) {
      // do some cool animation and call the doneFn
    }
  }
}]);