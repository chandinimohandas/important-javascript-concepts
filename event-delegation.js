document.querySelector('#login').addEventListener('input', (event) => {
    if (event.target.id === 'firstname') {
        event.target.value = event.target.value.replace(' ', '');
    }
})