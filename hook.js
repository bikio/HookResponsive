(function() {
  $(window).scroll(function() {
    var oVal;
    oVal = $(window).scrollTop() / 300;
    return $(".blur").css("opacity", oVal);
  });

}).call(this);

$(document).on("click", "a", function() {
  $('html, body').animate({
    scrollTop: $(this.hash).position().top-90
  }, 1200);
  return false;
});
