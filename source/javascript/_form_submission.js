(function () {
  var input_field = document.getElementById('signup_form--email_address');
  var submit_button = document.getElementById('signup_form--submit_button');
  var form_elements = [ input_field, submit_button ];

  var form = document.getElementById('signup_form');
  form.addEventListener('submit', form_handler);

  function form_handler (event) {
    event.preventDefault();

    var form_data = new FormData(form);
    disable_form();

    var request = new XMLHttpRequest();
    request.addEventListener('load', response_handler);
    request.addEventListener('error', error_handler);
    request.addEventListener('loadend', enable_form);

    request.open('post', form.action);
    request.send(form_data);

    function response_handler (event) {
      clear_existing_message();
      if (request.status === 200) {
        success_message();
        clear_form();
      } else {
        error_message();
      }
    }

    function error_handler (event) {
      clear_existing_message();
      error_message();
    }

    function clear_existing_message () {
      var message = document.getElementById('form_response_message');
      if (message) { message.remove(); }
    }

    function success_message () {
      var message = document.createElement('p');
      message.className = 'signup_form--success_message hidden';
      message.id = 'form_response_message';
      message.innerText = '🎉 Got it! We’ve added you to our waiting list.'

      form.insertBefore(message, form.firstChild);
      message.className = message.className.replace(/ ?hidden/, '');
    }

    function error_message () {
      var message = document.createElement('p');
      message.className = 'signup_form--error_message hidden';
      message.id = 'form_response_message';
      message.innerText = '😧 Gosh darnit! Something went wrong. Try again?'

      form.insertBefore(message, form.firstChild);
      message.className = message.className.replace(/ ?hidden/, '');
    }

    function toggle_form (action) {
      for (var i = form_elements.length - 1; i >= 0; i--) {
        if (action === 'disable') {
          form_elements[i].setAttribute('disabled', true);
        } else {
          form_elements[i].removeAttribute('disabled');
        }
      }
    }

    function enable_form () { toggle_form('enable'); }
    function disable_form () { toggle_form('disable'); }

    function clear_form () { input_field.value = ''; }
  }
})();
