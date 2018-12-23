

// skroll bar
window.onscroll = function() {varfu(), klass()};
let varfu = function myFunction() {
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let scrolled = (winScroll / height) * 200;
  document.getElementById("myBar").style.strokeDashoffset = scrolled + "";


}
let klass = function () {
  if(window.pageYOffset>500){
    document.getElementById('top').style.right="5%";
  }
  else{
     document.getElementById('top').style.right="-50%";
  }
 }
 $('#top').click(function () {
  $("html, body").animate({
    scrollTop: 0
  }, 400);
    return false;
});














  