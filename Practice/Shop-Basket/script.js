$(document).ready(function () {
  $("Button").on("click", function (e) {
    $(this)
      .closest("li")
      .find("img")
      .clone()
      .addClass("zoom")
      .appendTo("header");
    setTimeout(function () {
      $(".small").remove();
    }, 5000);
  });
});
