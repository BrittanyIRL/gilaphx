//
// Jekyll - Javascript
// Author: @brittanyIRL
//

$( document ).ready(function() {

  $(".disabled_link").prop("disabled", true);
  $(".disabled_link").removeAttr('href');


  // legend captions on hover or click so everyone can see this
  $(".legend_caption").hide(); // initially, they should all be hidden
  $(".masonry_item").hover(function(){
    showHideLegendCaption(this);
  });
  $(".masonry_item").on('click', function(){
     showHideLegendCaption(this);
  });
  function showHideLegendCaption(the_legend){
    $(".legend_caption").hide();
    $(the_legend).find(".legend_caption").show();
  }



  // Materialize Plugins       //
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
  $('.scrollspy').scrollSpy();
  $('.parallax').parallax();


  $('.masonry_grid').masonry({
  // options
  itemSelector: '.masonry_item',
  columnWidth: 100,
  percentPosition: true
});

  // fullpage.js for homepage //
  // ************************ //
  // thank you: https://github.com/alvarotrigo/fullPage.js#fullpagejs //

  // initialize fullpage js
	$('#fullpage_main').fullpage({
		//Navigation
        navigation: false,
        showActiveTooltip: false,
        slidesNavigation: false,
        //Scrolling
        css3: true,
        scrollingSpeed: 1200,
        autoScrolling: true,
        fitToSection: false,
        fitToSectionDelay: 1200,
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
        fadingEffect: true,
        normalScrollElements: '.normal_scroll',
        scrollOverflow: true,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 10,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

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
  $('#fullpage_archive').fullpage({
    //Navigation
        navigation: false,
        showActiveTooltip: false,
        slidesNavigation: false,
        //Scrolling
        css3: true,
        scrollingSpeed: 1200,
        autoScrolling: true,
        fitToSection: false,
        fitToSectionDelay: 1200,
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
        fadingEffect: true,
        normalScrollElements: '.normal_scroll',
        scrollOverflow: true,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 10,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

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
        },
        afterRender: function(){},
        afterResize: function(){},
        afterResponsive: function(isResponsive){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
        },
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
        }
  });
  $('#fullpage_story').fullpage({
		//Navigation
        navigation: false,
        showActiveTooltip: false,
        slidesNavigation: false,
        //Scrolling
        css3: true,
        scrollingSpeed: 1200,
        autoScrolling: true,
        fitToSection: false,
        fitToSectionDelay: 1200,
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
        fadingEffect: true,
        normalScrollElements: '.normal_scroll',
        scrollOverflow: true,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 10,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

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

  // control nav visibility in home page //
  // ********************************** //
  	function showOrHideSideNav(section_index){
  		if(section_index <= 2){ // starts at 1 not 0
  			$("#navigation_image").fadeOut("slow").css("display", "none");
  		} else if (section_index == 4){
  			// would be cool to make it white here...
  			$("#navigation_image").fadeOut("slow").css("display", "none");
  		}
  		else {
  			$("#navigation_image").fadeIn("slow").css("display", "block");
  		}
  	}
});



$('#fullpage_latest').fullpage({
    //Navigation
        navigation: false,
        showActiveTooltip: false,
        slidesNavigation: true,
        //Scrolling
        css3: true,
        scrollingSpeed: 900,
        autoScrolling: true,
        fitToSection: false,
        fitToSectionDelay: 12000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: false,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: true,
        normalScrollElements: '.normal_scroll',
        scrollOverflow: true,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 5,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
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
        },
        afterRender: function(){},
        afterResize: function(){},
        afterResponsive: function(isResponsive){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
        },
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
        }
  });
$('#fullpage_zine').fullpage({
    //Navigation
        navigation: false,
        showActiveTooltip: false,
        slidesNavigation: false,
        //Scrolling
        css3: true,
        scrollingSpeed: 900,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 12000,
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
        fadingEffect: true,
        normalScrollElements: '.normal_scroll',
        scrollOverflow: true,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 5,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
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
        },
        afterRender: function(){},
        afterResize: function(){},
        afterResponsive: function(isResponsive){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
        },
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
        }
  });
