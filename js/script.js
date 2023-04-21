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


// Get the button element
var scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Add a scroll event listener to the window
window.addEventListener("scroll", function() {
  // If the user has scrolled down 20% of the page height, show the button
  if (window.pageYOffset > (document.documentElement.scrollHeight * 0.2)) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

// Define the scrollToTop function
function scrollToTop() {
  // Scroll to the top of the page with smooth animation
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
