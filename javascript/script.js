$( document ).ready(function() {
  // Initialize collapse button
  
  $('.button-collapse').sideNav({
      menuWidth: 135, // Default is 300
      edge: 'left', // Choose the horizontal origin
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );
  $('.collapsible').collapsible();
});