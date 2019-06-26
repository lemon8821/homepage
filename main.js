const name = 'Daniel';
const age = 25;
const box = document.getElementById('about__credentials');
greetings(name,age);
function greetings(name, age) {
    box.innerHTML = `${name}, ${age} lat`
}