
// Function to scroll to the next element smoothly
function next() {
    const nextElement = document.querySelector("#next");
    nextElement.scrollIntoView({ behavior: "smooth" });
}





const typed = new Typed('#typing', {
    strings: [
        `ADVANCING HUMAN COMMUNICTION`,
        `PROJECT B-CAP`,
        `TO TALK TO AI`,
        `U-MUX 13th TEST`,
    ],

    typeSpeed: 40,
    backSpeed: 20,
    loop: true,
    cursorChar: '|',
    cursorClassName: 'typed-cursor', // to make cursor color tranparent
});


const project = new Typed('#project-typing', {
    strings: [
        `ADVANCING HUMAN OMMUNICTION`,
        `PROJECT B-CAP`,
        `TO TALK TO AI`,
        `U-MUX 13th TEST`,
    ],

    typeSpeed: 40,
    backSpeed: 20,
    loop: true,
    cursorChar: '|',
    cursorClassName: 'typed-cursor', // to make cursor color tranparent
});



// Set timeouts to remove AOS animations after 1500 milliseconds
setTimeout(function () {
    var btn = document.getElementById('learn-Btn');
    btn.removeAttribute('data-aos');
    btn.removeAttribute('data-aos-duration');
}, 1500);
setTimeout(function () {
    var navbar = document.getElementById('navbar');
    navbar.removeAttribute('data-aos');
    navbar.removeAttribute('data-aos-duration');
}, 1500);

function adjustNavbarOnScroll() {
    var prevScrollPos = window.scrollY;
    var navbar = document.getElementById('navbar');
    var logo = document.getElementById('logo');

    window.addEventListener('scroll', function () {
        var currentScrollPos = window.scrollY;

        if (currentScrollPos > prevScrollPos) {
            // Scrolling up
            navbar.classList.remove('h-24');
            navbar.classList.add('h-16');
            logo.classList.remove('w-32');
            logo.classList.add('w-24');
        } else {
            // Scrolling down or no change
            navbar.classList.remove('h-16');
            navbar.classList.add('h-24');
            logo.classList.remove('w-24');
            logo.classList.add('w-32');
        }

        prevScrollPos = currentScrollPos;
    });
}

// Call the function initially
adjustNavbarOnScroll();

// Call the function every 500ms
setInterval(adjustNavbarOnScroll, 200);



// Toggle button functionality to switch between two icons
// const button = document.getElementById('toggleButton');
// const boxIcon1 = document.getElementById('boxIcon1');
// const boxIcon2 = document.getElementById('boxIcon2');

// button.addEventListener('click', function () {
//     if (boxIcon1.style.display !== 'none') {
//         boxIcon1.style.display = 'none';
//         boxIcon2.style.display = 'block';
//     } else {
//         boxIcon1.style.display = 'block';
//         boxIcon2.style.display = 'none';
//     }
// });
