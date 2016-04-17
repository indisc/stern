// $(document).ready(function () {
//         $('ul.nav > li').click(function (e) {
//             e.preventDefault();
//             $('ul.nav > li ').removeClass('active');
//             $(this).addClass('active');                
//         });            
//     });


$(function(){
  var current_page_URL = location.href;
  $( "a" ).each(function() {
     if ($(this).attr("href") !== "#") {
       var target_URL = $(this).prop("href");
       if (target_URL == current_page_URL) {
          $('nav a').parents('li, ul').removeClass('active');
          $(this).parent('li').addClass('active');
          return false;
       }
     }
  });
});