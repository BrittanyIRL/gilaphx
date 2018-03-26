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
