const buttonSwitcher = document.querySelector('.navigation__switcher--js');
const nav = document.querySelector('.navbar__list');
buttonSwitcher.addEventListener('click',() => {
    nav.classList.toggle('navbar__list--visible');
    nav.classList.contains('navbar__list--visible') ? buttonSwitcher.innerHTML = 'X' : buttonSwitcher.innerHTML = '&#9776;';
})

const deathStar = {
    diameter: 12000,
    isAvaliable: true,
    fire: () => {return console.log('bum')},
    name: 'ds',
    crew: {
        captain: 'me',
        commandor: 'he'
    }
}