// Add event listener to navbar toggler button
document.querySelector('.navbar-toggler').addEventListener('click', function() {
  // Toggle the 'show' class on the navbar collapse element
  document.querySelector('.navbar-collapse').classList.toggle('show');
});

// Add event listener to document
document.addEventListener('click', function(event) {
  // If the user clicked outside of the navbar collapse element, hide it
  if (!event.target.closest('.navbar-collapse') && document.querySelector('.navbar-collapse').classList.contains('show')) {
    document.querySelector('.navbar-collapse').classList.remove('show');
  }
});
