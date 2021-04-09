const links = document.querySelector('#links');
const icon = document.querySelector('.icon');

icon.addEventListener('click', () => {
    if (links.className === 'links') {
        // links.className += ' responsive';
        links.classList.add('responsive');
    } else {
        links.className = 'links';
    }
});
