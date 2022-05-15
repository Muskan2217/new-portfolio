//scrollspy===========================

// $(document).ready(function () {
//   var x = $("a.nav-link");

//   $(document).scroll(function () {
//     x.each(function () {
//       var container = $(this).attr("href");
//       var containerOffset = $(container).offset().top;
//       var containerHeight = $(container).outerHeight();
//       var containerBottom = containerOffset + containerHeight;
//       var scrollPosition = $(document).scrollTop();

//       if (
//         scrollPosition < containerBottom - 20 &&
//         scrollPosition >= containerOffset - 20
//       ) {
//         $(this).addClass("active");
//       } else {
//         $(this).removeClass("active");
//       }
//     });
//   });
// });

//******************************* */
// window.onscroll function
//******************************* */

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document
      .getElementById("navbar")
      .setAttribute("style", "position: fixed; top:0; left:0; right:0;");
    document.getElementById("navbar").style.boxShadow ="0 5px 20px 0 rgba(0, 0, 0, .5)";
 
  } else {
    document
      .getElementById("navbar")
      .setAttribute("style", "position: static; boxShadow:0; top:-100px");
  }
}

//******************************* */
// hamburger-------------
//******************************* */
