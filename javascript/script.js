//
// Jekyll - Javascript
// Author: @brittanyIRL
//

$( document ).ready(function() {


  // control nav visibility?  //
  // ************************ //

  // $(window).scroll(function() {
  //   if (scroll >= 50) {
  //       $('#logo-image').attr('src', 'img/Acme_Monogram_Colour.png')
  //       $(".important-class").addClass("padding-on-my-header");
  //   }
  //   if (scroll < 50) {
  //       $(".important-class").removeClass("padding-on-my-header");
  //       $('#logo-image').attr('src', 'img/Acme_Colour.png')
  //   }
  // });


  // Materialize Plugins       //
  // ************************ //
  // Initialize collapse button
  $('.button-collapse').sideNav({
      menuWidth: 135, // Default is 300
      edge: 'left', // Choose the horizontal origin
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );
  $('.collapsible').collapsible();
  $('.scrollspy').scrollSpy();

  // fullpage.js for homepage //
  // ************************ //

  // initialize fullpage js
	$('#fullpage').fullpage({
		//Navigation
        navigation: false,
        showActiveTooltip: false,
        slidesNavigation: false,
        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: false,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: true,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: false,

        //Design
        controlArrows: false,
        verticalCentered: true,
        fixedElements: '#slide-out',
        responsiveWidth: 0,
        responsiveHeight: '100vh',
        responsiveSlides: false,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        lazyLoading: true,

        //events
        onLeave: function(index, nextIndex, direction){
        },
        afterLoad: function(anchorLink, index){
        	console.log("afterLoad ", anchorLink, index);
        	showOrHideSideNav(index);
        },
        afterRender: function(){},
        afterResize: function(){},
        afterResponsive: function(isResponsive){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
        },
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
        }
	});
	
  // check if first two home screens are visible, if so - hide nav

  	function showOrHideSideNav(section_index){
  		console.log(section_index);
  		if(section_index <= 2){ // starts at 1 not 0
  			console.log("found gila intro");
  			$("#navigation_image").css("display", "none");
  		} else if (section_index == 4){
  			// would be cool to make it white here...
  			$("#navigation_image").css("display", "none");
  		}
  		else {
  			$("#navigation_image").css("display", "block");
  		}
  	}
  // if($(".intro_splash:visible")){
	 //  	console.log("visible");
	 //  }
	 //  else {
	 //  	console.log("nope");
	 //  }
});