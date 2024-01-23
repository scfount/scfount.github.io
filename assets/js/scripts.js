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

document.addEventListener('DOMContentLoaded', function () {
  let urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('trailer')) {
    document.getElementById('request-text').value = urlParams.get('trailer');
  }
});

const form = document.getElementById("form");
const contactForm = document.getElementById("contact-form");
const submitButton = document.getElementById("submit-button");

form.addEventListener("submit", function (e) {
  const formData = new FormData(form);
  e.preventDefault();
  let object = {};
  formData.forEach((value, key) => {
    object[key] = value;
  });
  let json = JSON.stringify(object);
  submitButton.innerHTML = "<loading-component />";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: json
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        form.innerHTML = "<success-message />";
        result.style.display = "none";
        window.loa
      } else {
        console.log(response);
        form.innerHTML = "<failure-message />";
        result.innerHTML = json.message;
      }
    })
    .catch((error) => {
      console.log(error);
      form.innerHTML = "<failure-message />";
    })
    .then(function () {
      window.location.href = "#contact";
      setTimeout(() => {
        // window.location.reload();
      }, 5000);
    });
});

function hideNavOnSmallScreen() {
  let navPhone = document.getElementById('nav-phone');
  let navEmail = document.getElementById('nav-email');

  // Check if the window width is less than a certain value (e.g., 600 pixels)
  if (window.innerWidth < 992) {
    // If the screen size is small, hide the element
    navPhone.style.display = 'none';
    navEmail.style.display = 'none';
  } else {
    // If the screen size is not small, show the element
    navPhone.style.display = 'block';
    navEmail.style.display = 'block';
  }
}

// Call the function on page load and when the window is resized
window.onload = hideNavOnSmallScreen;
window.onresize = hideNavOnSmallScreen;