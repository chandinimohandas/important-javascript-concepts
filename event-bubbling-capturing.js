document.querySelector('#grandparent').addEventListener('click', (e) => {
    console.log('Grand parent clicked');
    // e.stopPropagation();
}, true); //capturing

document.querySelector('#parent').addEventListener('click', (e) => {
    console.log('Parent clicked');
    // e.stopPropagation();
}, false); //bubbling - default

document.querySelector('#child').addEventListener('click', (e) => {
    console.log('Child clicked');
    e.stopPropagation();
}, true); //capturing