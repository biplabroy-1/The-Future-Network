
function test() {
    const spanElement = document.querySelector("#typing")
    spanElement.innerHTML = '<span>Hello</span>';
    setTimeout(function () {
        spanElement.innerHTML = '<span class="typed-work"></span > ';
    }, 1700);
}

test();

function next() {
    const nextElement = document.querySelector("#next");
    nextElement.scrollIntoView({ behavior: "smooth" });
}


setTimeout(function () {
    let typed = new Typed('.typed-work', {
        strings: [
            'ADVANCING HUMAN SPACEFLIGHT',
            'STARLINK MISSION',
            'TO MAKE LIFE MULTIPLANETARY',
            `STARSHIP'S THIRD FLIGHT TEST`
        ],
        startDelay: 200,
        typeSpeed: 40,
        backSpeed: 20,
        loop: true,
    });
}, 1700)






setTimeout(function () {
    var btn = document.getElementById('learn-Btn');
    btn.removeAttribute('data-aos');
    btn.removeAttribute('data-aos-duration');
}, 1500);

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