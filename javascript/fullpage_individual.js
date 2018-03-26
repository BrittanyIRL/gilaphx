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
