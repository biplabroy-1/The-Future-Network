const logo = document.querySelectorAll('#logo path')
console.log(logo);
for (let i = 0; i < logo.length; i++) {
    console.log(`letter ${i} is ${logo[i].getTotalLength()}`);
}


function next() {
    const nextElement = document.querySelector("#next");
    nextElement.scrollIntoView({ behavior: "smooth" });
}

let typed = new Typed('.typed-work', {
    strings: [
        'ADVANCING HUMAN SPACEFLIGHT',
        'STARLINK MISSION',
        'TO MAKE LIFE MULTIPLANETARY',
        `STARSHIP'S THIRD FLIGHT TEST`
    ],
    startDelay: 1000,
    typeSpeed: 40,
    backSpeed: 20,
    loop: true,
});

