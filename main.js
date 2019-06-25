const name = 'Lemon';
var doc = document.querySelector('.about__paragraph--js');
doc.addEventListener("click", function () {
    if (document.querySelector("body > main > section.about.about--js > p:nth-child(4)") == undefined)
    doc.insertAdjacentHTML("afterend",`<p>Hello, ${name}!</p>`);
})

function calculate(x) {
    return x+3;
}

const calc = s => s+2;