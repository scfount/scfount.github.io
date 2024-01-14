function onSubmit(token) {
  document.getElementById("contact").submit();
}

$(document).ready(function () {
  $(".navbar-nav li a").click(function (event) {
    $(".offcanvas").offcanvas('hide');
  });
});
