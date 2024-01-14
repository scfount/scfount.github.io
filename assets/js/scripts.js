function onSubmit(token) {
  document.getElementById("submit-contact-button").submit();
}

$(document).ready(() => {
  $(".navbar-nav li a").click(hideOffcanvasAfterDelay);
});

function hideOffcanvasAfterDelay() {
  setTimeout(() => $(".offcanvas").offcanvas('hide'), 750);
}

function generateUrlAndRedirect(trailerId) {
  // Get the value from the input element
  let inputValue = document.getElementById(trailerId).innerText;

  // Construct the URL with the parameter
  let url = 'index.html?trailer=' + encodeURIComponent(inputValue) + '#contact';

  // Redirect to the generated URL
  window.location.href = url;

}

document.addEventListener('DOMContentLoaded', function() {
  let urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('trailer')) {
    document.getElementById('request-text').value = urlParams.get('trailer');
  }
});