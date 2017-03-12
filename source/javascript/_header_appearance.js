// Toggle header appearance according to scroll position
(function (window, document) {
  var body = document.body;
  var className = 'reduced_header';
  var regex = new RegExp(' ?' + className, 'g');

  window.addEventListener('scroll', toggle_masthead_bg);
  window.addEventListener('resize', toggle_masthead_bg);

  function toggle_masthead_bg (event) {
    if (body.scrollTop > 36) {
      body.className += body.className.match(regex) ? '' : ' ' + className;
    } else {
      body.className = body.className.replace(regex, '');
    }
  }
})(window, document);
