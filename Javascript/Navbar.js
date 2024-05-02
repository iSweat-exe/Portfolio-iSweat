console.log("Hello Navbar");


// Get references to the toggle buttons and the overlay element
const toggleButtonOn = document.getElementById('toggleButtonOn');
const toggleButtonOff = document.getElementById('toggleButtonOff');
const overlay = document.querySelector('.Overlay-Navbar-Open');

// Initially position the overlay above the viewport
overlay.style.top = '-100%';

// Add click event listener to the toggle button for showing the overlay
toggleButtonOn.addEventListener('click', function() {
    // Slide the overlay into view
    overlay.style.top = '0';
    console.log('Overlay is now visible :)');
});

// Add click event listener to the toggle button for hiding the overlay
toggleButtonOff.addEventListener('click', function() {
    // Slide the overlay out of view
    overlay.style.top = '-100%';
    console.log('Overlay is now hidden :(');
});
