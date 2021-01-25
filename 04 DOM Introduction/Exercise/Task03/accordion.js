function toggle() {
    let button = document.querySelector('.button');
    let divExtra = document.querySelector('#extra');

    divExtra.style.display = divExtra.style.display === 'none' ? 'block' : 'none';

    button.textContent = button.textContent === 'More' ? 'Less' : 'More';
}