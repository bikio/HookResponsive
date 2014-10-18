(function() {
  $(window).scroll(function() {
    var oVal;
    oVal = $(window).scrollTop() / 300;
    return $(".blur").css("opacity", oVal);
  });

}).call(this);
