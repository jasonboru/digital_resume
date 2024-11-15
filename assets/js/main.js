/*** Header toggle */
const headerToggleBtn = document.querySelector('.header-toggle');

function headerToggle() {
    document.querySelector('#header').classList.toggle('header-show');
    headerToggleBtn.classList.toggle('bi-list');
    headerToggleBtn.classList.toggle('bi-x');
}
headerToggleBtn.addEventListener('click', headerToggle);

// Select all navigation links
const navLinks = document.querySelectorAll('#navmenu .nav-link');
// Select the header, nav links, and the button (if needed)
const header = document.querySelector('.header'); // Adjust the selector to match your header element

// Function to handle click and update the active link
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        // Remove .active from any currently active link
        navLinks.forEach(link => link.classList.remove('active'));

        // Add .active to the clicked link
        this.classList.add('active');
    });
});

// Function to remove .header-show class when a nav link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        header.classList.remove('header-show');
        headerToggleBtn.classList.toggle('bi-list');
        headerToggleBtn.classList.toggle('bi-x');
    });
});


// Function to clear the contact form fields after submission
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default submission
        console.log("Form submission prevented");

        // Submit the form manually
        form.submit();

        // Clear the form fields after a slight delay
        setTimeout(() => {
            form.reset();
        }, 100);
    });
});

/**
   * Animation on scroll function and init
   */
function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

