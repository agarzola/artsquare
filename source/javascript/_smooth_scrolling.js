// Initialize smooth scrolling to page anchors
(function (window, document) {
  smoothScroll.init({
    selector: '[data-scroll]',
    offset: function () {
      if (Modernizr.mq('(min-width: 960px)')) {
        return 55;
      } else {
        return 43;
      }
    }
  });
})(window, document);
