// Handle nav toggle w/o cluttering window history
(function () {
  var nav_open = document.getElementById('navigation_open');
  var nav_close = document.getElementById('navigation_close');
  var nav = document.getElementById('navigation');

  nav_open.addEventListener('click', open_nav);
  nav.addEventListener('click', close_nav);

  function open_nav (event) {
    event.preventDefault();
    nav.setAttribute('data-expanded', true);
  }

  function close_nav (event) {
    if (event.target.id === nav_close.id) {
      event.preventDefault();
    }
    nav.removeAttribute('data-expanded');
  }
})(window, document);
