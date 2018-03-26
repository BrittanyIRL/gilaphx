//
// Jekyll - Javascript
// Author: @brittanyIRL
// Using:  fullpage.js: https://github.com/alvarotrigo/fullPage.js#fullpagejs //


$( document ).ready(function() {
  // any links with the class disabled_link are disabled
  $(".disabled_link").prop("disabled", true);
  $(".disabled_link").removeAttr('href');

  // Materialize Plugins : Navigation      //
  // ************************ //
  // Initialize collapse button
  $('.button-collapse').sideNav({
      menuWidth: 135, // Default is 300
      edge: 'left', // Choose the horizontal origin
      draggable: true, // Choose whether you can drag to open on touch screens
      closeOnClick: true
    }
  );
  // allow for hover open and exit close of sidenav, extending materializecss
  $("#navigation_image").mouseover(function(){
    $('.button-collapse').trigger('click');
  });
  $("#slide-out").mouseleave(function(){
     $('#sidenav-overlay').trigger('click');
  });
  $('.collapsible').collapsible();


  // legend captions on hover or click so everyone can see this
  // $(".legend_caption").hide(); // initially, they should all be hidden
  // $(".masonry_item").hover(function(){
  //   showHideLegendCaption(this);
  // });
  // $(".masonry_item").on('click', function(){
  //    showHideLegendCaption(this);
  // });
  // function showHideLegendCaption(the_legend){
  //   $(".legend_caption").hide();
  //   $(the_legend).find(".legend_caption").show();
  // }




//   $('.masonry_grid').masonry({
//   // options
//   itemSelector: '.masonry_item',
//   columnWidth: 100,
//   percentPosition: true
// });

});

// control nav visibility in home page //
// ********************************** //
const showOrHideSideNav = (section_index, expose_index = 2) => {
  if(section_index <= expose_index){ // starts at 1 not 0
    $("#navigation_image").fadeOut("slow").css("display", "none");
  }
  else {
    $("#navigation_image").fadeIn("slow").css("display", "block");
  }
}
