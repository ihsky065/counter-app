let count = 0;

function increment() {
    count++
    const counter = document.getElementById('counter');
    counter.textContent = count;
}