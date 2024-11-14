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