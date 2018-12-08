

// skroll bar
window.onscroll = function() {varfu()};
let varfu = function myFunction() {
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var scrolled = (winScroll / height) * 200;
  forHeigt(scrolled);
  forWidht(scrolled);
  document.getElementById("myBar").style.strokeDashoffset = scrolled + "";
  function forHeigt(scrolled) {
    scrolledD = scrolled / 2;
    document.getElementById("forH").style.height = scrolledD + "%";
  }
  function forWidht() {
    forHeigt(scrolled);
    scrolledD = scrolled / 2;
    document.getElementById("forW").style.width = scrolledD + "%";
  }
  
}











  