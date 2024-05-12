// Function to initialize typing animation
function test() {
    // Select the span element with id "typing"
    const spanElement = document.querySelector("#typing");
    // Set innerHTML to display "Hello" inside the span
    spanElement.innerHTML = '<span>Hello</span>';
    // Set a timeout to change innerHTML after 1700 milliseconds
    setTimeout(function () {
        spanElement.innerHTML = '<span class="typed-work"></span >';
    }, 1700);
}
// Call the test function
test();

// Function to scroll to the next element smoothly
function next() {
    const nextElement = document.querySelector("#next");
    nextElement.scrollIntoView({ behavior: "smooth" });
}

// Set a timeout function to execute after a delay of 1700 milliseconds
setTimeout(function () {
    // Initialize a new Typed object to type strings
    let typed = new Typed('.typed-work', {
        // Array of strings to be typed
        strings: [
            'ADVANCING HUMAN COMMUNICTION',
            'PROJECT B-CAP',
            'TO TALK TO AI',
            'U-MUX 13th TEST'
        ],
        // Delay before typing starts
        startDelay: 200,
        // Speed of typing characters
        typeSpeed: 40,
        // Speed of backspacing characters
        backSpeed: 20,
        // Whether the typing sequence should loop
        loop: true,
    });
}, 1700);

// Set timeouts to remove AOS animations after 1500 milliseconds
setTimeout(function () {
    var navbar = document.getElementsByClassName('navbar');
    var btn = document.getElementById('learn-Btn');
    btn.removeAttribute('data-aos');
    btn.removeAttribute('data-aos-duration');
}, 1500);
setTimeout(function () {
    var navbar = document.getElementById('navbar');
    navbar.removeAttribute('data-aos');
    navbar.removeAttribute('data-aos-duration');
}, 1500);

// Handle scrolling event to change navbar and logo size
var prevScrollPos = window.scrollY;
window.addEventListener('scroll', function () {
    var currentScrollPos = window.scrollY;
    var navbar = document.getElementById('navbar');
    var logo = document.getElementById('logo');

    if (currentScrollPos > prevScrollPos) {
        // Scrolling up
        navbar.classList.remove('h-24');
        navbar.classList.add('h-16');
        logo.classList.remove('w-32');
        logo.classList.add('w-24');
    } else {
        // Scrolling down
        navbar.classList.remove('h-16');
        navbar.classList.add('h-24');
        logo.classList.remove('w-24');
        logo.classList.add('w-32');
    }

    prevScrollPos = currentScrollPos;
});

// Toggle button functionality to switch between two icons
const button = document.getElementById('toggleButton');
const boxIcon1 = document.getElementById('boxIcon1');
const boxIcon2 = document.getElementById('boxIcon2');

button.addEventListener('click', function () {
    if (boxIcon1.style.display !== 'none') {
        boxIcon1.style.display = 'none';
        boxIcon2.style.display = 'block';
    } else {
        boxIcon1.style.display = 'block';
        boxIcon2.style.display = 'none';
    }
});
