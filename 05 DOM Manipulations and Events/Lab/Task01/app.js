function addItem() {
    // create a new <li> element
    const liElement = document.createElement('li');

    // set textt of new element to input value
    liElement.textContent = document.getElementById('newItemText').value;

    //select list from page and append new element to it
    document.getElementById('items').appendChild(liElement);
    //then we set the input to an empty string for it to be ready for the next input
    document.getElementById('newItemText').value = '';


}
