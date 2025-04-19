// your code goes here
/* script.js */

// Loader functionality
window.addEventListener('load', function() {
  const loader = document.getElementById('loader');
  loader.style.display = 'none';
});

// Toggle Dark/Light Mode
const modeToggle = document.querySelector('.mode-toggle');
modeToggle.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  modeToggle.querySelector('i').classList.toggle('fa-sun');
  modeToggle.querySelector('i').classList.toggle('fa-moon');
});

// Scroll Animation AOS
AOS.init();

// Handle map iframe height based on screen size
const mapIframe = document.querySelector('.contact iframe');
const setMapHeight = () => {
  if (window.innerWidth < 768) {
    mapIframe.style.height = '200px';
  } else {
    mapIframe.style.height = '300px';
  }
};
setMapHeight();
window.addEventListener('resize', setMapHeight);
