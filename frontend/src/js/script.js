window.onresize = () => {
    lenisFn();
}

function lenisFn() {
    const lenis = new Lenis({
        wheelMultiplier: 1,
        duration: 1,
        easing: (x) => 1 - Math.pow(1 - x, 5),
    })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
}

lenisFn();

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



// Set timeouts to remove AOS animations after 1500 milliseconds
setTimeout(function () {
    var navbar = document.getElementById('navbar');
    navbar.removeAttribute('data-aos');
    navbar.removeAttribute('data-aos-duration');
}, 1500);

function adjustNavbarOnScroll() {
    var prevScrollPos = window.scrollY;
    var navbar = document.getElementById('navbar');
    var logo = document.getElementById('logo');
    var smallnav = document.getElementById('small-nav');

    window.addEventListener('scroll', function () {
        var currentScrollPos = window.scrollY;

        if (window.scrollY < window.innerHeight) {
            navbar.classList.add('bg-transparent');
            navbar.classList.remove('navbar');
        }
        else {
            navbar.classList.remove('bg-transparent');
            navbar.classList.add('navbar');

        }

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

    // Update small nav based on navbar classes
    if (navbar.classList.contains('h-24')) {
        smallnav.classList.remove('top-16');
        smallnav.classList.add('top-24');
    } else if (navbar.classList.contains('h-16')) {
        smallnav.classList.remove('top-24');
        smallnav.classList.add('top-16');
    } else {
        // If navbar has no height class, add h-24 class to small nav
        smallnav.classList.remove('h-16');
        smallnav.classList.add('h-24');
    }
}

adjustNavbarOnScroll(); // Start monitoring scroll and updating navbar and small nav


// Call the function every 200ms
setInterval(adjustNavbarOnScroll, 200);

